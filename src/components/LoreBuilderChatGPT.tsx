import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Send,
  Dices,
  Shield,
  Coins,
  Cpu,
  Package,
  Copy,
  Check,
  Share2,
  RotateCcw,
  Terminal,
  Rocket,
  Eye,
  ArrowRight,
  ChevronRight,
  Sliders,
  Zap,
  Radio,
  Volume2,
  VolumeX
} from 'lucide-react';
import {
  ORIGIN_NODES,
  STARSHIP_CALLSIGNS,
  FIRST_NAMES,
  LAST_NAMES,
  CALLSIGNS,
  ACT1_ENCOUNTERS,
  ACT2_ENCOUNTERS,
  ACT3_ENCOUNTERS,
  TacticalEncounter,
  TacticalChoice,
  GeneratedDossier,
  rollDynamicRoute,
  playSynthSound,
  synthesizeCharacterDossier
} from '../data/loreBuilderData';

interface LoreBuilderChatGPTProps {
  onBackToPortfolio: () => void;
  onTriggerWarp?: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user' | 'system';
  title?: string;
  badge?: string;
  content: string;
  timestamp: string;
  encounter?: TacticalEncounter;
  resolution?: {
    choiceLabel: string;
    strategy: string;
    narrative: string;
    hullDelta: number;
    creditsDelta: number;
    intelDelta: number;
    itemReward: string;
  };
  dossier?: GeneratedDossier;
}

export const LoreBuilderChatGPT: React.FC<LoreBuilderChatGPTProps> = ({
  onBackToPortfolio,
  onTriggerWarp
}) => {
  const [stage, setStage] = useState<'setup' | 'adventure' | 'synthesis'>('setup');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [captainName, setCaptainName] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('Cargo Salvager');
  const [customOriginMode, setCustomOriginMode] = useState(false);
  const [customOriginText, setCustomOriginText] = useState('');
  const [shipName, setShipName] = useState('Vanguard Ghost-7');
  const [routePreset, setRoutePreset] = useState<'dynamic' | 'tradewars' | 'frontier'>('dynamic');
  const [route, setRoute] = useState<TacticalEncounter[]>(() => rollDynamicRoute());

  // Live Ship Telemetry
  const [telemetry, setTelemetry] = useState({
    characterName: 'Captain Vance',
    shipName: 'Vanguard Ghost-7',
    origin: 'Cargo Salvager',
    trait: 'High-Risk Tactical Veteran',
    faction: 'Settled Systems Operatives',
    act: 1,
    encounterIndex: 0,
    hull: 100,
    shields: 100,
    credits: 8500,
    intelUnits: 15,
    cargo: ['Emergency Shield Cell', 'Sub-Light Scanner Probe'],
    logbook: [] as string[]
  });

  const [pendingResolution, setPendingResolution] = useState<TacticalChoice | null>(null);
  const [, setGeneratedDossier] = useState<GeneratedDossier | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [promptInput, setPromptInput] = useState('');
  const [copiedLog, setCopiedLog] = useState(false);
  const [copiedReddit, setCopiedReddit] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const beep = (freq = 850, type: OscillatorType = 'sine', dur = 0.08) => {
    if (soundEnabled) playSynthSound(freq, type, dur);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, pendingResolution, stage]);

  const nowTime = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const handleRandomName = () => {
    beep(950, 'sine', 0.08);
    const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    if (Math.random() > 0.4) {
      const call = CALLSIGNS[Math.floor(Math.random() * CALLSIGNS.length)];
      setCaptainName(`${first} "${call}" ${last}`);
    } else {
      setCaptainName(`${first} ${last}`);
    }
  };

  const handleRandomOrigin = () => {
    beep(850, 'triangle', 0.08);
    const pick = ORIGIN_NODES[Math.floor(Math.random() * ORIGIN_NODES.length)];
    setSelectedOrigin(pick.id);
    setCustomOriginMode(false);
  };

  const handleRandomShip = () => {
    beep(900, 'sine', 0.08);
    const pick = STARSHIP_CALLSIGNS[Math.floor(Math.random() * STARSHIP_CALLSIGNS.length)];
    setShipName(pick);
  };

  const handleRerollSectors = () => {
    beep(950, 'triangle', 0.1);
    setRoute(rollDynamicRoute());
    setRoutePreset('dynamic');
    onTriggerWarp?.();
  };

  const handleSelectPreset = (mode: 'dynamic' | 'tradewars' | 'frontier') => {
    beep(850, 'sine', 0.08);
    setRoutePreset(mode);
    if (mode === 'dynamic') {
      setRoute(rollDynamicRoute());
    } else if (mode === 'tradewars') {
      setRoute([ACT1_ENCOUNTERS[0], ACT2_ENCOUNTERS[0], ACT3_ENCOUNTERS[0]]);
    } else if (mode === 'frontier') {
      setRoute([ACT1_ENCOUNTERS[6], ACT2_ENCOUNTERS[8], ACT3_ENCOUNTERS[4]]);
    }
    onTriggerWarp?.();
  };

  const handleInitializeMission = () => {
    beep(920, 'sawtooth', 0.14);
    onTriggerWarp?.();

    const finalName = captainName.trim() || 'Captain Vance';
    const finalOrigin = customOriginMode
      ? customOriginText.trim() || 'Independent Spacefarer'
      : selectedOrigin;
    const finalShip = shipName.trim() || 'Vanguard Ghost-7';
    const finalFaction =
      routePreset === 'tradewars'
        ? 'Merchant Intelligence Division (M.I.D.)'
        : routePreset === 'frontier'
        ? 'Frontier Colonists Union'
        : 'Settled Systems Operatives';

    const activeRoute = route.length === 3 ? route : rollDynamicRoute();
    const firstEncounter = activeRoute[0];

    setTelemetry({
      characterName: finalName,
      shipName: finalShip,
      origin: finalOrigin,
      trait: 'High-Risk Tactical Veteran',
      faction: finalFaction,
      act: 1,
      encounterIndex: 0,
      hull: 100,
      shields: 100,
      credits: 8500,
      intelUnits: 15,
      cargo: ['Emergency Shield Cell', 'Sub-Light Scanner Probe'],
      logbook: []
    });

    setPendingResolution(null);
    setGeneratedDossier(null);
    setStage('adventure');

    setMessages([
      {
        id: 'msg-init-user',
        sender: 'user',
        title: 'MISSION INITIALIZATION DIRECTIVE',
        content: `Initialize 3-Act Tactical Simulation for **${finalName}** (${finalOrigin}) commanding starship **${finalShip}** under **${finalFaction}** parameters.`,
        timestamp: nowTime()
      },
      {
        id: 'msg-act-1',
        sender: 'assistant',
        title: `ACT 1 // ENCOUNTER 1 OF 3 • ${firstEncounter.system.toUpperCase()}`,
        badge: `THREAT: ${firstEncounter.threatLevel}`,
        content: firstEncounter.briefing,
        timestamp: nowTime(),
        encounter: firstEncounter
      }
    ]);
  };

  const handleSelectChoice = (choice: TacticalChoice) => {
    beep(1020, 'sine', 0.1);
    const currentEncounter = route[telemetry.encounterIndex];
    const out = choice.outcomeSuccess;

    const newHull = Math.max(5, Math.min(100, telemetry.hull + out.hullDelta));
    const newCredits = telemetry.credits + out.creditsDelta;
    const newIntel = telemetry.intelUnits + out.intelDelta;
    const newCargo = out.itemReward ? [...telemetry.cargo, out.itemReward] : telemetry.cargo;
    const logEntry = `[Act ${currentEncounter.act} - ${currentEncounter.title}]: Executed ${choice.strategy} vector (${choice.label}) -> Secured ${out.itemReward}`;

    setTelemetry((prev) => ({
      ...prev,
      hull: newHull,
      credits: newCredits,
      intelUnits: newIntel,
      cargo: newCargo,
      logbook: [...prev.logbook, logEntry]
    }));

    setPendingResolution(choice);

    setMessages((prev) => [
      ...prev,
      {
        id: `user-choice-${Date.now()}`,
        sender: 'user',
        title: `TACTICAL VECTOR: ${choice.strategy}`,
        content: `**${choice.label}** — ${choice.actionText}`,
        timestamp: nowTime()
      },
      {
        id: `res-${Date.now()}`,
        sender: 'assistant',
        title: 'DECISION RESOLUTION // TELEMETRY IMPACT',
        badge: choice.strategy,
        content: out.narrative,
        timestamp: nowTime(),
        resolution: {
          choiceLabel: choice.label,
          strategy: choice.strategy,
          narrative: out.narrative,
          hullDelta: out.hullDelta,
          creditsDelta: out.creditsDelta,
          intelDelta: out.intelDelta,
          itemReward: out.itemReward
        }
      }
    ]);
  };

  const handleProceedNext = () => {
    beep(880, 'triangle', 0.1);
    onTriggerWarp?.();
    const nextIdx = telemetry.encounterIndex + 1;

    if (nextIdx < 3) {
      const nextEncounter = route[nextIdx];
      setTelemetry((prev) => ({
        ...prev,
        act: (nextIdx + 1) as 1 | 2 | 3,
        encounterIndex: nextIdx
      }));
      setPendingResolution(null);

      setMessages((prev) => [
        ...prev,
        {
          id: `msg-act-${nextIdx + 1}-${Date.now()}`,
          sender: 'assistant',
          title: `ACT ${nextIdx + 1} // ENCOUNTER ${nextIdx + 1} OF 3 • ${nextEncounter.system.toUpperCase()}`,
          badge: `THREAT: ${nextEncounter.threatLevel}`,
          content: nextEncounter.briefing,
          timestamp: nowTime(),
          encounter: nextEncounter
        }
      ]);
    } else {
      // Synthesize Dossier
      const dossier = synthesizeCharacterDossier(
        telemetry.characterName,
        telemetry.origin,
        telemetry.shipName,
        telemetry.trait,
        telemetry.logbook.join(' | ') || 'Completed 3-Act Tactical Route',
        telemetry.faction,
        telemetry.credits,
        telemetry.intelUnits,
        telemetry.cargo
      );
      setGeneratedDossier(dossier);
      setPendingResolution(null);
      setStage('synthesis');

      setMessages((prev) => [
        ...prev,
        {
          id: `msg-dossier-${Date.now()}`,
          sender: 'assistant',
          title: 'CAMPAIGN COMPLETE // TACTICAL DOSSIER ARCHIVED',
          badge: 'SECURITY CLEARANCE: TOP SECRET',
          content: dossier.fullBackstory,
          timestamp: nowTime(),
          dossier
        }
      ]);
    }
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = promptInput.trim();
    if (!text) return;
    setPromptInput('');
    beep(940, 'sine', 0.08);

    const low = text.toLowerCase();

    if (stage === 'adventure') {
      if (
        pendingResolution &&
        (low.includes('next') || low.includes('proceed') || low.includes('continue') || low.includes('synthesize'))
      ) {
        handleProceedNext();
        return;
      }
      const currentEnc = route[telemetry.encounterIndex];
      if (currentEnc && !pendingResolution) {
        if (low === '1' || low.includes('combat')) {
          handleSelectChoice(currentEnc.choices[0]);
          return;
        }
        if (low === '2' || low.includes('covert') || low.includes('stealth')) {
          handleSelectChoice(currentEnc.choices[1]);
          return;
        }
        if (low === '3' || low.includes('commerce') || low.includes('explore') || low.includes('salvage')) {
          handleSelectChoice(currentEnc.choices[2]);
          return;
        }
      }
    }

    // Procedural Lore Engine response
    const customDossier = synthesizeCharacterDossier(
      captainName || telemetry.characterName,
      customOriginMode ? customOriginText || 'Custom Operative' : selectedOrigin,
      shipName || telemetry.shipName,
      `Custom Directive: "${text}"`,
      text,
      telemetry.faction,
      telemetry.credits,
      telemetry.intelUnits + 35,
      [...telemetry.cargo, 'Encrypted Lore Datacore']
    );

    if (stage === 'setup') {
      setStage('synthesis');
    }
    setGeneratedDossier(customDossier);

    setMessages((prev) => [
      ...prev,
      {
        id: `user-custom-${Date.now()}`,
        sender: 'user',
        title: 'CUSTOM LORE DIRECTIVE',
        content: text,
        timestamp: nowTime()
      },
      {
        id: `sys-custom-${Date.now()}`,
        sender: 'assistant',
        title: 'CHRONOS-9 // PROCEDURAL STARFIELD LORE SYNTHESIS',
        badge: 'DIRECT LOG SYNTHESIS',
        content: customDossier.fullBackstory,
        timestamp: nowTime(),
        dossier: customDossier
      }
    ]);
  };

  const handleCopyLog = (dossier: GeneratedDossier) => {
    beep(1100, 'sine', 0.07);
    navigator.clipboard.writeText(`${dossier.logHeader}\n"${dossier.characterSummary}"\n\n${dossier.fullBackstory}`);
    setCopiedLog(true);
    setTimeout(() => setCopiedLog(false), 2500);
  };

  const handleShareReddit = (dossier: GeneratedDossier) => {
    beep(1200, 'sine', 0.07);
    navigator.clipboard.writeText(dossier.redditReadyText);
    setCopiedReddit(true);
    setTimeout(() => setCopiedReddit(false), 2500);
  };

  const currentOriginObj = ORIGIN_NODES.find((o) => o.id === selectedOrigin) || ORIGIN_NODES[1];
  const activeEncounter = route[telemetry.encounterIndex] || route[0];

  const getThreatBadgeStyle = (threat: string) => {
    switch (threat) {
      case 'CRITICAL':
        return 'bg-red-500/15 text-red-300 border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]';
      case 'HIGH':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]';
      case 'ELEVATED':
        return 'bg-violet-500/15 text-violet-300 border-violet-500/40';
      default:
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40';
    }
  };

  return (
    <div id="tactical-engine-container" className="w-full space-y-6">
      {/* Top Studio Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel rounded-3xl p-5 sm:p-7 border border-violet-500/25">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            <span>Choose Your Own Adventure • Starfield Tactical Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Starfield <span className="brand-gradient-text">Lore Builder</span> & Tactical Adventure
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
            Interactive 27-catalyst branching space encounters, live hull telemetry, and procedural character dossier generator.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-center">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Mute Tactical Audio' : 'Enable Tactical Audio'}
            className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-300 hover:text-amber-300 hover:border-amber-500/40 transition-all cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-violet-400" />
            <span>{sidebarOpen ? 'Hide Controls' : 'Parameters'}</span>
          </button>
          <button
            onClick={onBackToPortfolio}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono font-semibold text-zinc-200 transition-all cursor-pointer"
          >
            ← Back to Creations
          </button>
        </div>
      </div>

      {/* Main Split Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT SIDEBAR: Parameters, Character Setup & Live Ship Telemetry */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="lg:col-span-4 glass-panel-violet rounded-3xl p-5 sm:p-6 space-y-6 border border-violet-500/30"
            >
              {/* Tactical Engine Identity Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-2xl overflow-hidden border border-amber-400/50 shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-zinc-950 p-0.5">
                    <img
                      src="/gamerroundup-logo.jpg"
                      alt="GAMERROUNDUP"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-zinc-950 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-bold text-sm text-white tracking-wider">
                        CHRONOS-9 LORE ENGINE
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/30">
                        v4.2
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 block">
                      DYNAMIC 9×9×9 CATALYST ENGINE
                    </span>
                  </div>
                </div>

                {stage !== 'setup' && (
                  <button
                    onClick={() => {
                      beep(820, 'sine', 0.08);
                      setStage('setup');
                      setPendingResolution(null);
                    }}
                    className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>RECONFIGURE</span>
                  </button>
                )}
              </div>

              {/* Live Telemetry Mini-Dashboard */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>HULL INTEGRITY</span>
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-lg font-mono font-bold text-white">{telemetry.hull}%</span>
                    <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          telemetry.hull > 60
                            ? 'bg-emerald-400'
                            : telemetry.hull > 30
                            ? 'bg-amber-400'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${telemetry.hull}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>CREDITS</span>
                    <Coins className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="mt-1 text-lg font-mono font-bold text-amber-300">
                    {telemetry.credits.toLocaleString()} CR
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>INTEL UNITS</span>
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="mt-1 text-lg font-mono font-bold text-cyan-300">
                    {telemetry.intelUnits} MB
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>CARGO ITEMS</span>
                    <Package className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div className="mt-1 text-lg font-mono font-bold text-violet-300">
                    {telemetry.cargo.length} Artifacts
                  </div>
                </div>
              </div>

              {/* 1. Captain Identifier Name */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="captain-name-input"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300"
                  >
                    1. Captain Identifier Name
                  </label>
                  <button
                    type="button"
                    onClick={handleRandomName}
                    className="text-[11px] font-mono text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Dices className="w-3.5 h-3.5" />
                    <span>RANDOM NAME</span>
                  </button>
                </div>
                <input
                  id="captain-name-input"
                  type="text"
                  value={captainName}
                  onChange={(e) => setCaptainName(e.target.value)}
                  placeholder='e.g. Captain Vance or Kaelen "Zero-G" Voss...'
                  className="w-full bg-zinc-950/90 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none font-mono transition-all"
                />
                <p className="text-[10px] font-mono text-zinc-500">
                  Leave blank or randomize to auto-assign a callsign.
                </p>
              </div>

              {/* 2. Origin Coordinate Node (24 Origins + Custom Text toggle) */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="origin-select-dropdown"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300"
                  >
                    2. Origin Coordinate Node
                  </label>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleRandomOrigin}
                      className="text-[11px] font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-2 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Dices className="w-3 h-3" />
                      <span>RANDOM ORIGIN</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCustomOriginMode(!customOriginMode)}
                      className="text-[10px] font-mono text-zinc-300 hover:text-white px-2 py-1 rounded-lg border border-white/15 bg-zinc-900 cursor-pointer"
                    >
                      {customOriginMode ? 'LIST MODE' : 'CUSTOM TEXT'}
                    </button>
                  </div>
                </div>

                {customOriginMode ? (
                  <input
                    id="custom-origin-input"
                    type="text"
                    value={customOriginText}
                    onChange={(e) => setCustomOriginText(e.target.value)}
                    placeholder="Specify custom origin (e.g. Ebbside Mech Engineer)..."
                    className="w-full bg-zinc-950/90 border border-cyan-500/40 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none font-mono"
                  />
                ) : (
                  <>
                    <select
                      id="origin-select-dropdown"
                      value={selectedOrigin}
                      onChange={(e) => setSelectedOrigin(e.target.value)}
                      className="w-full bg-zinc-950/90 border border-white/15 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none font-mono"
                    >
                      {ORIGIN_NODES.map((o) => (
                        <option key={o.id} value={o.id} className="bg-zinc-900 text-zinc-100">
                          {o.title}
                        </option>
                      ))}
                    </select>
                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-white/10 text-xs text-zinc-300 leading-relaxed">
                      <span className="text-cyan-300 font-mono font-bold block mb-0.5">
                        {currentOriginObj.title} Lore File:
                      </span>
                      {currentOriginObj.description}
                    </div>
                  </>
                )}
              </div>

              {/* 3. Starship Vessel Callsign */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="ship-name-input"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-violet-300"
                  >
                    3. Starship Vessel Callsign
                  </label>
                  <button
                    type="button"
                    onClick={handleRandomShip}
                    className="text-[11px] font-mono text-violet-300 hover:text-violet-200 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Rocket className="w-3 h-3" />
                    <span>RANDOM SHIP</span>
                  </button>
                </div>
                <input
                  id="ship-name-input"
                  type="text"
                  value={shipName}
                  onChange={(e) => setShipName(e.target.value)}
                  placeholder="Vessel Callsign (e.g., Vanguard Ghost-7)..."
                  className="w-full bg-zinc-950/90 border border-white/15 focus:border-violet-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none font-mono"
                />
              </div>

              {/* 4. Active Mission Parameters (Acts 1-3) */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                    4. Active Mission Route
                  </span>
                  <button
                    type="button"
                    onClick={handleRerollSectors}
                    className="text-[11px] font-mono text-emerald-300 hover:text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>REROLL SECTORS</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('dynamic')}
                    className={`px-2.5 py-2 rounded-xl text-[11px] font-mono font-bold border transition-all cursor-pointer ${
                      routePreset === 'dynamic'
                        ? 'bg-violet-500/25 border-violet-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                        : 'bg-zinc-950/70 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Dynamic (9x9x9)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('tradewars')}
                    className={`px-2.5 py-2 rounded-xl text-[11px] font-mono font-bold border transition-all cursor-pointer ${
                      routePreset === 'tradewars'
                        ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-zinc-950/70 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Trade Wars
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectPreset('frontier')}
                    className={`px-2.5 py-2 rounded-xl text-[11px] font-mono font-bold border transition-all cursor-pointer ${
                      routePreset === 'frontier'
                        ? 'bg-cyan-500/25 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                        : 'bg-zinc-950/70 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Frontier Siege
                  </button>
                </div>

                {/* 3-Act Sector Route Preview */}
                <div className="space-y-1.5 pt-1">
                  {route.map((enc, idx) => {
                    const isCurrent = stage === 'adventure' && telemetry.encounterIndex === idx;
                    return (
                      <div
                        key={enc.id}
                        className={`p-2.5 rounded-xl border text-xs transition-all ${
                          isCurrent
                            ? 'bg-violet-950/60 border-violet-400/60 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                            : 'bg-zinc-950/70 border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-amber-400">
                            ACT {idx + 1} • {enc.system}
                          </span>
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${getThreatBadgeStyle(
                              enc.threatLevel
                            )}`}
                          >
                            {enc.threatLevel}
                          </span>
                        </div>
                        <div className="font-semibold text-zinc-100 truncate mt-0.5">{enc.title}</div>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleInitializeMission}
                  className="w-full mt-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 hover:from-amber-400 hover:to-violet-500 text-white font-display font-bold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(168,85,247,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>INITIALIZE TACTICAL MISSION (3 ACTS)</span>
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* RIGHT CONSOLE: Interactive Tactical Command Thread & Directive Bar */}
        <div
          className={`${
            sidebarOpen ? 'lg:col-span-8' : 'lg:col-span-12'
          } glass-panel rounded-3xl border border-white/15 flex flex-col overflow-hidden min-h-[720px]`}
        >
          {/* Top Console Window Bar */}
          <div className="px-6 py-4 bg-zinc-950/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-violet-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-zinc-200 tracking-wider uppercase">
                  GAMERROUNDUP TACTICAL LORE TERMINAL //{' '}
                  {stage === 'setup' ? 'STANDBY' : stage === 'adventure' ? `ACT ${telemetry.act} LIVE` : 'DOSSIER ARCHIVED'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                GRAV-LINK STABLE
              </span>
            </div>
          </div>

          {/* Interactive Tactical Mission Stream */}
          <div className="flex-1 p-5 sm:p-7 space-y-6 overflow-y-auto max-h-[680px]">
            {/* Welcome / Setup State */}
            {stage === 'setup' && messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 py-4"
              >
                {/* Centerpiece Greeting */}
                <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
                  <div className="relative w-20 h-20 rounded-3xl p-0.5 bg-gradient-to-tr from-amber-500 via-fuchsia-500 to-violet-600 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                    <img
                      src="/gamerroundup-logo.jpg"
                      alt="Gamerroundup Studios"
                      className="w-full h-full object-cover rounded-[22px]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest text-violet-300">
                      Starfield Lore Builder • Interactive Command Console
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      How shall we forge your Settled Systems legend today?
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Configure your Captain’s callsign, choose from <strong>24 Starfield origins</strong>, and launch our{' '}
                      <strong>3-Act Tactical Adventure</strong>—or enter any custom backstory directive below for instant procedural dossier synthesis.
                    </p>
                  </div>
                </div>

                {/* Quick-Start Mission Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleSelectPreset('tradewars');
                      setTimeout(handleInitializeMission, 50);
                    }}
                    className="p-4 rounded-2xl bg-zinc-900/75 hover:bg-zinc-900 border border-white/10 hover:border-amber-400/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                      <span>TRADE WARS CAMPAIGN</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="font-bold text-sm text-white">
                      Launch M.I.D. Covert Salvage & Gates of Janus Route
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Experience Derelict Hyperion-IV, the Trade Authority Blockade, and the Sovereign Prototype standoff.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleSelectPreset('frontier');
                      setTimeout(handleInitializeMission, 50);
                    }}
                    className="p-4 rounded-2xl bg-zinc-900/75 hover:bg-zinc-900 border border-white/10 hover:border-cyan-400/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                      <span>FRONTIER SIEGE & UNITY</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="font-bold text-sm text-white">
                      Defend Outpost Zeta & Confront the Starborn Emissary
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Battle Ecliptic raiders on Eridani-II, investigate the Buried Temple, and enter the Unity Gateway.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleRandomName();
                      handleRandomOrigin();
                      handleRandomShip();
                      handleRerollSectors();
                    }}
                    className="p-4 rounded-2xl bg-zinc-900/75 hover:bg-zinc-900 border border-white/10 hover:border-violet-400/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-violet-400 mb-1">
                      <span>FULL PROCEDURAL ROLL (9×9×9)</span>
                      <Dices className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                    </div>
                    <div className="font-bold text-sm text-white">
                      Randomize Captain, Origin, Starship & 3-Act Sector Route
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Roll from 282 callsigns, 24 lore origins, and 729 unique 3-act mission combinations.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={handleInitializeMission}
                    className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-violet-500/15 to-zinc-900 hover:from-amber-500/25 hover:to-violet-500/25 border border-amber-400/40 text-left transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-300 mb-1">
                      <span>READY TO LAUNCH</span>
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="font-bold text-sm text-white">
                      Start Current 3-Act Mission with Selected Loadout
                    </div>
                    <p className="text-xs text-zinc-300 mt-1">
                      {captainName || 'Captain Vance'} • {selectedOrigin} • {shipName}
                    </p>
                  </button>
                </div>

                {/* Live Preview of Loaded 3-Act Route */}
                <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-zinc-950/85 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                      SECTOR ROUTE PREVIEW (3 CATALYSTS LOADED • 9 POSSIBLE PER ACT)
                    </span>
                    <span className="text-[11px] font-mono text-violet-400">
                      {routePreset.toUpperCase()} MODE
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {route.map((enc, i) => (
                      <div
                        key={enc.id}
                        className="p-3.5 rounded-xl bg-zinc-900/70 border border-white/10 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-amber-400">
                            ACT {i + 1}
                          </span>
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${getThreatBadgeStyle(
                              enc.threatLevel
                            )}`}
                          >
                            {enc.threatLevel}
                          </span>
                        </div>
                        <div className="font-bold text-xs text-white line-clamp-1">{enc.title}</div>
                        <div className="text-[11px] font-mono text-zinc-400 line-clamp-1">
                          {enc.sector} • {enc.system}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Streamed Tactical Mission Messages */}
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender !== 'user' && (
                  <div className="w-9 h-9 rounded-xl overflow-hidden border border-violet-400/50 shrink-0 bg-zinc-950 p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <img
                      src="/gamerroundup-logo.jpg"
                      alt="CHRONOS-9"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}

                <div
                  className={`max-w-3xl w-full rounded-2xl p-5 space-y-4 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-violet-600/30 to-indigo-900/40 border border-violet-400/40 text-zinc-100 ml-auto max-w-xl'
                      : 'bg-zinc-950/85 border border-white/10 text-zinc-100 shadow-xl'
                  }`}
                >
                  {/* Message Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                        {msg.title || (msg.sender === 'user' ? 'CAPTAIN DIRECTIVE' : 'CHRONOS-9 TERMINAL')}
                      </span>
                      {msg.badge && (
                        <span
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getThreatBadgeStyle(
                            msg.badge.replace('THREAT: ', '')
                          )}`}
                        >
                          {msg.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">{msg.timestamp}</span>
                  </div>

                  {/* Message Body */}
                  {!msg.dossier && (
                    <p className="text-sm text-zinc-200 leading-relaxed whitespace-pre-line">
                      {msg.content}
                    </p>
                  )}

                  {/* If message carries an Encounter Card */}
                  {msg.encounter && (
                    <div className="space-y-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-200 leading-relaxed">
                        <span className="text-amber-400 font-bold mr-2">SITUATION:</span>
                        {msg.encounter.situation}
                      </div>
                      {msg.encounter.intelTip && (
                        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 flex items-center gap-2">
                          <Eye className="w-4 h-4 shrink-0 text-cyan-400" />
                          <span>
                            <strong>INTEL ADVISORY:</strong> {msg.encounter.intelTip}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* If message carries a Resolution Impact */}
                  {msg.resolution && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {msg.resolution.hullDelta !== 0 && (
                        <span
                          className={`text-xs font-mono px-3 py-1 rounded-full border ${
                            msg.resolution.hullDelta < 0
                              ? 'bg-red-950/60 border-red-500/40 text-red-300'
                              : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                          }`}
                        >
                          Hull: {msg.resolution.hullDelta > 0 ? '+' : ''}
                          {msg.resolution.hullDelta}%
                        </span>
                      )}
                      {msg.resolution.creditsDelta > 0 && (
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300">
                          Credits: +{msg.resolution.creditsDelta.toLocaleString()} CR
                        </span>
                      )}
                      {msg.resolution.intelDelta > 0 && (
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                          Intel: +{msg.resolution.intelDelta} Units
                        </span>
                      )}
                      {msg.resolution.itemReward && (
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300">
                          Acquired: {msg.resolution.itemReward}
                        </span>
                      )}
                    </div>
                  )}

                  {/* If message carries a Synthesized Character Dossier */}
                  {msg.dossier && (
                    <div className="space-y-5">
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-violet-500/10 to-cyan-500/10 border border-white/15 space-y-2">
                        <div className="text-xs font-mono font-bold text-amber-300">
                          {msg.dossier.logHeader}
                        </div>
                        <p className="text-sm italic text-zinc-200">"{msg.dossier.characterSummary}"</p>
                        <div className="text-[11px] font-mono text-zinc-400">
                          Captain: {telemetry.characterName} | Origin: {telemetry.origin} | Ship:{' '}
                          {telemetry.shipName} | Net Worth: {telemetry.credits.toLocaleString()} CR
                        </div>
                      </div>

                      <div className="text-sm text-zinc-200 leading-relaxed whitespace-pre-line font-sans bg-zinc-900/60 p-5 rounded-2xl border border-white/10">
                        {msg.dossier.fullBackstory}
                      </div>

                      {/* Secured Cargo Inventory */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-300 block">
                          SECURED CARGO INVENTORY:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {telemetry.cargo.map((item, i) => (
                            <span
                              key={`${item}-${i}`}
                              className="text-xs font-mono px-3 py-1 rounded-xl bg-zinc-900 border border-violet-500/30 text-zinc-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Export / Copy / Share Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
                        <button
                          type="button"
                          onClick={() => handleCopyLog(msg.dossier!)}
                          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                        >
                          {copiedLog ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedLog ? 'DOSSIER COPIED!' : 'COPY LOG'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleShareReddit(msg.dossier!)}
                          className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                        >
                          {copiedReddit ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                          <span>{copiedReddit ? 'REDDIT MARKDOWN COPIED!' : 'SHARE TO REDDIT'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            handleRerollSectors();
                            setStage('setup');
                            setMessages([]);
                          }}
                          className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-xs font-mono text-zinc-200 flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>PLAY ANOTHER ADVENTURE (REROLL SECTORS)</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Active Tactical Vector Prompt Buttons inside Stream */}
            {stage === 'adventure' && activeEncounter && !pendingResolution && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pl-0 sm:pl-12 space-y-3"
              >
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                  Select Your Tactical Vector:
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {activeEncounter.choices.map((choice) => (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => handleSelectChoice(choice)}
                      className="p-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800/95 border border-white/10 hover:border-amber-400/60 text-left transition-all group shadow-lg cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                          {choice.label}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 shrink-0">
                          {choice.strategy}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                        {choice.actionText}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Proceed to Next Act / Finalize Dossier Button */}
            {stage === 'adventure' && pendingResolution && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pl-0 sm:pl-12 flex justify-end"
              >
                <button
                  id="tactical-proceed-next-btn"
                  type="button"
                  onClick={handleProceedNext}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 hover:from-amber-400 hover:to-violet-500 text-white font-display font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <span>
                    {telemetry.encounterIndex < 2
                      ? 'PROCEED TO NEXT COORDINATES'
                      : 'FINALIZE & SYNTHESIZE DOSSIER'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Bottom Command Input Bar */}
          <form
            onSubmit={handlePromptSubmit}
            className="p-4 sm:p-5 bg-zinc-950/90 border-t border-white/10"
          >
            <div className="relative flex items-center">
              <Terminal className="w-4 h-4 text-violet-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder={
                  stage === 'adventure'
                    ? 'Type a tactical command ("combat", "covert", "commerce", "next") or custom lore directive...'
                    : 'Enter a custom Starfield character directive, M.I.D. handler note, or faction twist to synthesize a dossier...'
                }
                className="w-full bg-zinc-900/90 border border-white/15 focus:border-violet-400 rounded-2xl pl-11 pr-28 py-3.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none font-mono transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-amber-500 hover:from-violet-500 hover:to-amber-400 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>SEND</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 mt-2 px-1 text-[10px] font-mono text-zinc-500">
              <span>
                CHRONOS-9 TACTICAL ENGINE • Trade Wars, M.I.D., Supply Charter & Galaxy in Flux Lore System
              </span>
              <span>24 Origins • 27 Branching Catalysts • 100% Conflict-Free</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
