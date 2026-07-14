import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { ORIGINS, TRAITS, DEFINING_CHOICES, FACTIONS } from "../data";
import { BackstoryResult, CYOAPayload } from "../types";
import { 
  STARFIELD_FIRST_NAMES, 
  STARFIELD_LAST_NAMES, 
  STARFIELD_NICKNAMES, 
  generateProceduralBackstory 
} from "../utils/proceduralStory";

// Client-side procedural Web Audio synthesizer for tactical retro feedback
const playBeep = (freq = 800, type: OscillatorType = "sine", duration = 0.08, sweep = false) => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    
    if (sweep) {
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);
    } else {
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
    }
    
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Autoplay browser blocker catch
  }
};

interface StoryboardPanel {
  id: number;
  title: string;
  subtitle: string;
  caption: string;
  graphicType: "stars" | "matrix" | "target" | "biometric";
}

const STORYBOARD_PANELS: StoryboardPanel[] = [
  {
    id: 1,
    title: "CRAFT YOUR OWN STORY",
    subtitle: "A CHRONICLE OF THE OUTLANDS",
    caption: "Unleash your imagination in a custom-tailored narrative. Every detail of your background, traits, and past actions will dynamically shape your unique saga in the Settled Systems.",
    graphicType: "stars"
  },
  {
    id: 2,
    title: "CHOOSE YOUR DESTINY",
    subtitle: "ASTRONAUTICAL DECISIONS",
    caption: "Your path is not pre-written. Sift through dozens of origins, neurological traits, and alignment files to forge an authentic identity that stands out among the stars.",
    graphicType: "matrix"
  },
  {
    id: 3,
    title: "PICK YOUR BACKGROUND",
    subtitle: "SECTOR HISTORY ALIGNMENT",
    caption: "Choose from 15 newly-expanded, lore-friendly character archetypes and legendary faction allegiances to anchor your past in the rich, sprawling universe.",
    graphicType: "target"
  },
  {
    id: 4,
    title: "PICK YOUR PIVOTAL CHARACTER",
    subtitle: "BIOMETRIC SPLICING RECONSTRUCTION",
    caption: "Lock in your defining choices, name, and psychological profile to instantly synthesize your custom dossier and launch into the sector questionnaire.",
    graphicType: "biometric"
  }
];

const StoryboardGraphic = ({ type }: { type: "stars" | "matrix" | "target" | "biometric" }) => {
  if (type === "stars") {
    return (
      <div className="relative w-full h-28 bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center rounded-none">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F27D26]/30 via-transparent to-transparent" />
        <div className="absolute w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px] opacity-20" />
        
        {/* Radar Sweeper */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center"
        >
          <div className="absolute top-0 w-1.5 h-1.5 bg-[#F27D26] rounded-full shadow-[0_0_8px_#F27D26]" />
        </motion.div>
        
        {/* Faction beacons */}
        <div className="absolute top-2 left-4 flex flex-col items-center">
          <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
          <span className="text-[6px] text-zinc-500 font-mono mt-0.5">UC_SEC_4</span>
        </div>
        <div className="absolute bottom-2 right-4 flex flex-col items-center">
          <span className="w-1 h-1 bg-[#F27D26] rounded-full animate-pulse" />
          <span className="text-[6px] text-zinc-500 font-mono mt-0.5">CO_WRECK</span>
        </div>
        
        <div className="absolute w-full h-[1px] bg-white/5 top-1/2" />
        <div className="absolute h-full w-[1px] bg-white/5 left-1/2" />
        <div className="absolute text-[7px] font-mono text-white/40 top-2 left-2 tracking-widest">RADAR_SYS</div>
      </div>
    );
  }
  if (type === "matrix") {
    return (
      <div className="relative w-full h-28 bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center text-zinc-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F27D26]/5 to-transparent" />
        
        {/* Cascading matrix codes */}
        <div className="grid grid-cols-6 gap-2 w-full px-4 text-center">
          {[0, 1, 2, 3, 4, 5].map((col) => (
            <motion.div 
              key={col}
              animate={{ y: [-30, 20] }}
              transition={{ duration: 2.5 + col * 0.4, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-0.5 text-[#F27D26]/60 font-mono text-[8px]"
            >
              <span>{Math.random().toString(16).substring(2, 4).toUpperCase()}</span>
              <span className="text-white font-black">{Math.random().toString(16).substring(2, 4).toUpperCase()}</span>
              <span>{Math.random().toString(16).substring(2, 4).toUpperCase()}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Downward scanning bar */}
        <motion.div 
          animate={{ y: [0, 110] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 w-full h-[2px] bg-[#F27D26]/60 shadow-[0_0_10px_#F27D26]"
        />
        <div className="absolute text-[7px] font-mono text-white/40 bottom-2 right-2 tracking-widest">DECRYPT</div>
      </div>
    );
  }
  if (type === "target") {
    return (
      <div className="relative w-full h-28 bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridIntro" width="12" height="12" patternUnits="userSpaceOnUse">
                <path d="M 12 0 L 0 0 0 12" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridIntro)" />
          </svg>
        </div>
        
        {/* Lock on target card */}
        <motion.div 
          animate={{ scale: [0.97, 1.03, 0.97] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-28 h-14 border border-red-500/50 bg-red-950/20 flex flex-col items-center justify-center p-1.5"
        >
          {/* Target Corner widgets */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500" />
          
          <Icons.ShieldAlert className="h-4 w-4 text-red-500 animate-pulse mb-0.5" />
          <span className="text-[6px] text-red-400 font-mono tracking-widest uppercase">CARGO_LOCKED</span>
        </motion.div>
        
        <div className="absolute top-2 right-2 text-[6px] text-zinc-500 font-mono text-right leading-none">
          <div>HD_CORE: 99.1%</div>
          <div>EST_VAL: 55K</div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-28 bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-transparent to-transparent" />
      
      {/* Biometric sensor scanner */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-18 h-18 border border-zinc-800 rounded-full flex items-center justify-center"
      >
        <div className="w-12 h-12 border border-dashed border-[#F27D26]/20 rounded-full flex items-center justify-center" />
      </motion.div>
      
      <Icons.Fingerprint className="h-7 w-7 text-[#F27D26] animate-pulse relative z-10" />
      
      <motion.div 
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute w-20 h-20 border border-[#F27D26]/20 rounded-full"
      />
      <div className="absolute text-[7px] font-mono text-[#F27D26] bottom-2 left-2 uppercase tracking-widest">SPLICING</div>
    </div>
  );
};

export default function CYOATerminal() {
  const [step, setStep] = useState<"welcome" | "intro" | "origin" | "trait" | "choice" | "faction" | "generating" | "result">("welcome");
  const [name, setName] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedTrait, setSelectedTrait] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [selectedFaction, setSelectedFaction] = useState("");
  const [customError, setCustomError] = useState("");

  // Narrative loading stats
  const [generationLogs, setGenerationLogs] = useState<string[]>([]);
  const [result, setResult] = useState<BackstoryResult | null>(null);

  // Typewriter effect state
  const [typedBackstory, setTypedBackstory] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Storyboard state
  const [currentIntroPanel, setCurrentIntroPanel] = useState(0);
  const [autoPlayIntro, setAutoPlayIntro] = useState(true);

  // Origin step pagination and live search
  const [originPage, setOriginPage] = useState(0);
  const [originSearch, setOriginSearch] = useState("");

  // Random name generator
  const handleGenerateName = () => {
    playBeep(950, "sine", 0.05);
    const first = STARFIELD_FIRST_NAMES[Math.floor(Math.random() * STARFIELD_FIRST_NAMES.length)];
    const last = STARFIELD_LAST_NAMES[Math.floor(Math.random() * STARFIELD_LAST_NAMES.length)];
    const callsign = STARFIELD_NICKNAMES[Math.floor(Math.random() * STARFIELD_NICKNAMES.length)];
    
    // 50% chance of including a callsign
    if (Math.random() > 0.5) {
      setName(`${first} "${callsign}" ${last}`);
    } else {
      setName(`${first} ${last}`);
    }
  };

  // Autoplay intro panel countdown
  useEffect(() => {
    if (step === "intro" && autoPlayIntro) {
      const timer = setTimeout(() => {
        if (currentIntroPanel < STORYBOARD_PANELS.length - 1) {
          playBeep(450 + currentIntroPanel * 100, "triangle", 0.12);
          setCurrentIntroPanel(prev => prev + 1);
        } else {
          setAutoPlayIntro(false);
        }
      }, 5500); // 5.5 seconds per panel to allow comfortable reading
      return () => clearTimeout(timer);
    }
  }, [step, currentIntroPanel, autoPlayIntro]);

  // Immersive loading logs
  useEffect(() => {
    if (step === "generating") {
      setGenerationLogs([]);
      const logs = [
        "SPLICING QUANTUM NARRATIVE CHANNELS...",
        "DECRYPTING MERCHANT INTELLIGENCE DOSSIER...",
        "RESOLVING SECTOR-SPECIFIC LORE COEFFICIENTS...",
        "SYNTHESIZING PERSONNEL SYSTEM LOG ARCHIVES...",
        "FINALIZING SECURITY CLASSIFICATION MARKERS..."
      ];
      
      let currentIdx = 0;
      const interval = setInterval(() => {
        if (currentIdx < logs.length) {
          playBeep(700 + currentIdx * 80, "sawtooth", 0.06);
          setGenerationLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${logs[currentIdx]}`]);
          currentIdx++;
        } else {
          clearInterval(interval);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [step]);

  // Filter origins based on search input
  const filteredOrigins = ORIGINS.filter(orig => {
    const query = originSearch.toLowerCase();
    return orig.title.toLowerCase().includes(query) || orig.description.toLowerCase().includes(query);
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredOrigins.length / itemsPerPage);

  // Keep origin page in-bounds if filter changes list size
  useEffect(() => {
    setOriginPage(0);
  }, [originSearch]);

  // Handle Narrative synthesis call
  const handleSynthesize = () => {
    playBeep(1200, "sine", 0.2, true);
    setStep("generating");
    setCustomError("");
    
    // Simulate high-tech terminal calculations to play out logs
    setTimeout(() => {
      try {
        const data = generateProceduralBackstory(
          name || "Classified Subject",
          selectedOrigin,
          selectedTrait,
          selectedChoice,
          selectedFaction
        );
        setResult(data);
        setTypedBackstory("");
        setTypingIndex(0);
        setStep("result");
      } catch (err: any) {
        console.error(err);
        setCustomError(err.message || "Narrative synthesis processing error.");
        setStep("welcome"); // fallback
      }
    }, 2800); // 2.8 seconds of immersive high-tech loading logs
  };

  // Simple typewriter animation for the generated backstory text
  useEffect(() => {
    if (step === "result" && result?.fullBackstory) {
      if (typingIndex < result.fullBackstory.length) {
        const timer = setTimeout(() => {
          // Play micro sound every few letters for high-tech tactility
          if (typingIndex % 15 === 0) {
            playBeep(1400, "sine", 0.02);
          }
          setTypedBackstory(prev => prev + result.fullBackstory[typingIndex]);
          setTypingIndex(prev => prev + 1);
        }, 4); // Very fast typing
        return () => clearTimeout(timer);
      }
    }
  }, [step, result, typingIndex]);

  // Download log file client-side
  const downloadLogFile = () => {
    playBeep(1000, "sine", 0.1);
    if (!result) return;
    const content = `
=========================================
${result.logHeader}
=========================================
ARCHIVE DATE: ${new Date().toLocaleDateString()}
SUBJECT NAME: ${name}
SUMMARY: ${result.characterSummary}

ORIGIN: ${selectedOrigin}
TRAIT: ${selectedTrait}
DECIDING EVENT: ${selectedChoice}
FACTION ALIGNMENT: ${selectedFaction}

--- PERSONAL CHRONICLE DATA LOG ---
${result.fullBackstory}

-----------------------------------------
REDDIT READY RECORD:
${result.redditReadyText}
=========================================
    `;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `MID_LOG_${name.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [copiedBackstory, setCopiedBackstory] = useState(false);
  const [copiedReddit, setCopiedReddit] = useState(false);

  const handleCopy = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    playBeep(1100, "sine", 0.08);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset narrative states
  const handleRestart = () => {
    playBeep(400, "triangle", 0.15);
    setStep("welcome");
    setName("");
    setSelectedOrigin("");
    setSelectedTrait("");
    setSelectedChoice("");
    setSelectedFaction("");
    setResult(null);
    setCurrentIntroPanel(0);
    setAutoPlayIntro(true);
    setOriginPage(0);
    setOriginSearch("");
  };

  return (
    <div id="cyoa-narrative-game" className="w-full rounded-none border border-white/10 bg-[#111111] shadow-[0_0_25px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Sleek CRT/Terminal Header strip */}
      <div className="bg-white/10 p-3 flex justify-between items-center border-b border-white/20">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-white">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          MID Lore Architect // Data Entry Portal
        </span>
        <span className="text-[10px] text-white/40 font-mono">ST_VER: 2.35.0</span>
      </div>

      <div className="p-6 min-h-[520px] flex flex-col justify-between">
        {/* Step Navigation Details */}
        {step !== "welcome" && step !== "generating" && step !== "result" && (
          <div className="mb-4 flex justify-between items-center text-[10px] font-mono border-b border-white/10 pb-3">
            <div className="text-white/40">
              MODULE NODE: <span className="text-[#F27D26] font-bold">{step.toUpperCase()}</span>
            </div>
            <button 
              onClick={handleRestart}
              className="text-white/40 hover:text-[#F27D26] transition-all flex items-center gap-1 uppercase tracking-wider font-bold"
            >
              <Icons.RotateCcw className="h-3 w-3" /> RESET NODE
            </button>
          </div>
        )}

        {customError && (
          <div className="mb-4 p-3 border border-red-900/50 bg-red-950/20 rounded-none text-red-400 font-mono text-[11px] flex items-center gap-2">
            <Icons.AlertTriangle className="h-4 w-4 shrink-0" />
            <span>{customError}</span>
          </div>
        )}

        {/* Step Views */}
        <AnimatePresence mode="wait">
          {step === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 flex flex-col justify-center h-full"
            >
              <div className="space-y-2">
                <div className="text-[10px] text-[#F27D26] uppercase font-bold tracking-widest">
                  Step 01: Character Background Synthesis
                </div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-tight text-white">
                  Begin Sector Narrative Alignment
                </h3>
                <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                  Synthesize a gritty, lore-adherent data log tailored perfectly to your tactical and corporate choices. Experience the high-stakes black-and-white espionage aesthetic of the Merchant Intelligence Division, complete with immersive sound modules and multi-page origin nodes.
                </p>
              </div>

              {/* Name custom input */}
              <div className="space-y-3 font-mono">
                <label className="block text-[10px] uppercase tracking-wider text-white/40 font-bold">
                  Subject Identifier (Character Name):
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (e.target.value.length % 3 === 0) playBeep(850, "sine", 0.01);
                    }}
                    placeholder="Enter your name or callsign..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-none px-4 py-3 text-xs text-white focus:outline-none focus:border-[#F27D26] transition-all font-mono"
                  />
                  <button
                    onClick={handleGenerateName}
                    className="px-4 bg-white/5 hover:bg-white/10 text-white rounded-none border border-white/10 flex items-center gap-2 text-[10px] uppercase font-bold transition-all"
                  >
                    <Icons.Shuffle className="h-3.5 w-3.5 text-[#F27D26]" /> GENERATE LORE NAME
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    playBeep(600, "triangle", 0.15);
                    setStep("intro");
                  }}
                  disabled={!name.trim()}
                  className="w-full sm:w-auto px-6 py-3 rounded-none font-mono text-[10px] font-black tracking-widest text-black bg-[#F27D26] hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-40 uppercase"
                >
                  INITIALIZE LOG SPLICING
                  <Icons.ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Operational Background Header */}
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <div>
                  <div className="text-[10px] text-[#F27D26] uppercase font-bold tracking-widest leading-none">
                    CHRONICLE CREATION PROCESS
                  </div>
                  <h4 className="text-md font-bold text-white uppercase tracking-tight mt-1">
                    SYSTEM CAPABILITIES
                  </h4>
                </div>
                <div className="text-[10px] font-mono text-white/40">
                  FEATURE {currentIntroPanel + 1} / {STORYBOARD_PANELS.length}
                </div>
              </div>

              {/* Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                {/* Left Side: Compact Telemetry Visual */}
                <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIntroPanel}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="p-1 border border-white/10 bg-black/40 relative"
                    >
                      {/* Operational Log Badge */}
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-zinc-800 text-[#F27D26] border border-white/5 text-[7px] font-mono font-bold uppercase z-20">
                        LOG_0{STORYBOARD_PANELS[currentIntroPanel].id}
                      </div>
                      
                      {/* Interactive graphic widget */}
                      <StoryboardGraphic type={STORYBOARD_PANELS[currentIntroPanel].graphicType} />
                      
                      {/* Scanline overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Side: Operational Prose */}
                <div className="col-span-12 md:col-span-8 flex flex-col justify-between py-1">
                  <div className="space-y-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIntroPanel}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        <span className="text-xs font-mono font-extrabold text-[#F27D26] tracking-wider block">
                          // {STORYBOARD_PANELS[currentIntroPanel].subtitle}
                        </span>
                        <h5 className="text-sm font-black text-white font-sans uppercase tracking-tight">
                          {STORYBOARD_PANELS[currentIntroPanel].title}
                        </h5>
                        
                        {/* Text Caption in speech box style */}
                        <div className="bg-white/5 border border-white/10 p-4 relative font-mono text-[11px] text-white/80 leading-relaxed italic border-l-2 border-l-[#F27D26]">
                          "{STORYBOARD_PANELS[currentIntroPanel].caption}"
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Playback Controls & Autoplay Progress Bar */}
                  <div className="space-y-4 pt-4">
                    {/* Autoplay status progress bar */}
                    {autoPlayIntro && (
                      <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                        <motion.div 
                          key={currentIntroPanel}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5.5, ease: "linear" }}
                          className="h-full bg-[#F27D26]"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            playBeep(500, "triangle", 0.08);
                            setAutoPlayIntro(false);
                            if (currentIntroPanel > 0) {
                              setCurrentIntroPanel(prev => prev - 1);
                            }
                          }}
                          disabled={currentIntroPanel === 0}
                          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-30 rounded-none transition-all"
                          title="Previous Panel"
                        >
                          <Icons.ArrowLeft className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            playBeep(650, "triangle", 0.08);
                            setAutoPlayIntro(false);
                            if (currentIntroPanel < STORYBOARD_PANELS.length - 1) {
                              setCurrentIntroPanel(prev => prev + 1);
                            }
                          }}
                          disabled={currentIntroPanel === STORYBOARD_PANELS.length - 1}
                          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-30 rounded-none transition-all"
                          title="Next Panel"
                        >
                          <Icons.ArrowRight className="h-3.5 w-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            playBeep(800, "sine", 0.06);
                            setAutoPlayIntro(!autoPlayIntro);
                          }}
                          className={`px-3 py-1.5 text-[8px] font-mono tracking-widest uppercase border ${
                            autoPlayIntro 
                              ? "bg-[#F27D26]/20 border-[#F27D26] text-[#F27D26]" 
                              : "bg-white/5 border-white/10 text-white/60"
                          } transition-all`}
                        >
                          {autoPlayIntro ? "AUTOPLAY [ON]" : "AUTOPLAY [OFF]"}
                        </button>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            playBeep(400, "triangle", 0.1);
                            setStep("origin");
                          }}
                          className="px-4 py-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-mono text-[9px] uppercase tracking-wider font-bold transition-all"
                        >
                          SKIP INTRO
                        </button>
                        {currentIntroPanel === STORYBOARD_PANELS.length - 1 ? (
                          <button
                            onClick={() => {
                              playBeep(900, "sine", 0.12, true);
                              setStep("origin");
                            }}
                            className="px-5 py-2 bg-[#F27D26] hover:bg-white text-black font-mono text-[9px] uppercase tracking-wider font-black transition-all flex items-center gap-1.5"
                          >
                            PROCEED TO ORIGINS <Icons.ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === "origin" && (
            <motion.div
              key="origin"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {/* Origin Section Header with live search bar */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-3">
                <div>
                  <div className="text-[10px] text-[#F27D26] uppercase font-bold tracking-widest mb-1">
                    Step 02: Origin Coordinate Node
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                    Where does your journey originate?
                  </h4>
                </div>

                {/* Instant Search Filter */}
                <div className="relative w-full md:w-72">
                  <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40" />
                  <input
                    type="text"
                    value={originSearch}
                    onChange={(e) => {
                      setOriginSearch(e.target.value);
                      playBeep(1000, "sine", 0.01);
                    }}
                    placeholder="Search 24 backgrounds..."
                    className="w-full bg-white/5 border border-white/10 pl-9 pr-8 py-2 text-xs text-white focus:outline-none focus:border-[#F27D26] font-mono placeholder:text-white/30"
                  />
                  {originSearch && (
                    <button
                      onClick={() => {
                        setOriginSearch("");
                        playBeep(400, "triangle", 0.05);
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      <Icons.X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Grid Content showing paginated cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[290px] content-start">
                {filteredOrigins.length > 0 ? (
                  filteredOrigins
                    .slice(originPage * itemsPerPage, (originPage + 1) * itemsPerPage)
                    .map((orig) => (
                      <button
                        key={orig.id}
                        onClick={() => {
                          playBeep(850, "sine", 0.1);
                          setSelectedOrigin(orig.id);
                          setStep("trait");
                        }}
                        className={`p-3 text-left transition-all rounded-none border text-zinc-100 flex flex-col justify-between hover:scale-[1.01] ${
                          selectedOrigin === orig.id 
                            ? "border-[#F27D26] bg-[#F27D26]/10" 
                            : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs text-white font-mono flex items-center gap-2">
                              <span className={`w-1 h-3 ${selectedOrigin === orig.id ? "bg-[#F27D26]" : "bg-white/20"}`} />
                              {orig.title}
                            </span>
                            {selectedOrigin === orig.id ? (
                              <Icons.Check className="h-3.5 w-3.5 text-[#F27D26]" />
                            ) : (
                              <span className="text-[8px] font-mono text-zinc-600 group-hover:text-zinc-400">SELECT_CR</span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/50 mt-1.5 leading-relaxed">
                            {orig.description}
                          </p>
                        </div>
                      </button>
                    ))
                ) : (
                  <div className="col-span-2 py-16 text-center text-zinc-500 font-mono text-xs border border-dashed border-white/5">
                    <Icons.ShieldAlert className="h-6 w-6 text-zinc-600 mx-auto mb-2" />
                    NO COORDINATES MATCH SEARCH PATHWAY: "{originSearch.toUpperCase()}"
                  </div>
                )}
              </div>

              {/* Pagination Controls at Bottom */}
              {totalPages > 1 && (
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-white/40">
                    SHOWING {filteredOrigins.length} OPTIONS // PAGE {originPage + 1} OF {totalPages}
                  </div>
                  
                  {/* Slider indicator dots */}
                  <div className="flex gap-1.5">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          playBeep(600 + idx * 50, "sine", 0.04);
                          setOriginPage(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          originPage === idx ? "bg-[#F27D26] scale-125" : "bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (originPage > 0) {
                          playBeep(700, "triangle", 0.08);
                          setOriginPage(prev => prev - 1);
                        }
                      }}
                      disabled={originPage === 0}
                      className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-none border border-white/10 disabled:opacity-30 transition-all text-[9px] font-mono uppercase font-bold"
                    >
                      PREV
                    </button>
                    <button
                      onClick={() => {
                        if (originPage < totalPages - 1) {
                          playBeep(850, "triangle", 0.08);
                          setOriginPage(prev => prev + 1);
                        }
                      }}
                      disabled={originPage === totalPages - 1}
                      className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-none border border-white/10 disabled:opacity-30 transition-all text-[9px] font-mono uppercase font-bold"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {step === "trait" && (
            <motion.div
              key="trait"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <div className="text-[10px] text-[#F27D26] uppercase font-bold tracking-widest mb-1">Step 03: Neurological Trait</div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Choose your Defining Psychological Trait</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TRAITS.map((tr) => (
                  <button
                    key={tr.id}
                    onClick={() => {
                      playBeep(900, "sine", 0.1);
                      setSelectedTrait(tr.id);
                      setStep("choice");
                    }}
                    className={`p-3 text-left transition-all rounded-none border ${
                      selectedTrait === tr.id 
                        ? "border-[#F27D26] bg-[#F27D26]/10" 
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white font-mono">{tr.title}</span>
                      {selectedTrait === tr.id && <Icons.Check className="h-3.5 w-3.5 text-[#F27D26]" />}
                    </div>
                    <p className="text-[11px] text-white/50 mt-1 leading-relaxed">{tr.description}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "choice" && (
            <motion.div
              key="choice"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <div className="text-[10px] text-[#F27D26] uppercase font-bold tracking-widest mb-1">Step 04: The Catalyst Event</div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">The Pivotal Turning Point</h4>
              </div>

              <div className="space-y-3">
                {DEFINING_CHOICES.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => {
                      playBeep(950, "sine", 0.1);
                      setSelectedChoice(ch.id);
                      setStep("faction");
                    }}
                    className={`w-full p-4 text-left transition-all rounded-none border ${
                      selectedChoice === ch.id 
                        ? "border-[#F27D26] bg-[#F27D26]/10" 
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white font-mono">{ch.title}</span>
                      {selectedChoice === ch.id && <Icons.Check className="h-3.5 w-3.5 text-[#F27D26]" />}
                    </div>
                    <p className="text-[11px] text-white/50 mt-1 leading-relaxed">{ch.description}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "faction" && (
            <motion.div
              key="faction"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div>
                <div className="text-[10px] text-[#F27D26] uppercase font-bold tracking-widest mb-1">Step 05: Faction Contract</div>
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">Faction Alignment Selection</h4>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {FACTIONS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      playBeep(1000, "sine", 0.1);
                      setSelectedFaction(f.id);
                    }}
                    className={`p-3 text-left transition-all rounded-none border ${
                      selectedFaction === f.id 
                        ? "border-[#F27D26] bg-[#F27D26]/10" 
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white font-mono">{f.title}</span>
                      {selectedFaction === f.id && <Icons.Check className="h-3.5 w-3.5 text-[#F27D26]" />}
                    </div>
                    <p className="text-[11px] text-white/50 mt-1 leading-relaxed">{f.description}</p>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <button
                  onClick={() => {
                    playBeep(400, "triangle", 0.1);
                    setStep("choice");
                  }}
                  className="px-4 py-2 text-white/40 hover:text-white font-mono text-[10px] tracking-wider uppercase font-bold transition-all"
                >
                  PREVIOUS NODE
                </button>
                <button
                  onClick={handleSynthesize}
                  disabled={!selectedFaction}
                  className="px-6 py-3 rounded-none font-mono text-[10px] font-black tracking-widest text-black bg-[#F27D26] hover:bg-white transition-all flex items-center gap-2 disabled:opacity-40 uppercase"
                >
                  SYNTHESIZE PERSONNEL DOSSIER
                  <Icons.Orbit className="h-4 w-4 animate-spin" style={{ animationDuration: '6s' }} />
                </button>
              </div>
            </motion.div>
          )}

          {step === "generating" && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-6 py-12"
            >
              {/* Spinning visual scanner */}
              <div className="relative">
                <div className="h-20 w-20 rounded-none border-2 border-white/10 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-none border-t-2 border-r-2 border-[#F27D26] animate-spin" />
                </div>
                <Icons.Cpu className="absolute inset-0 m-auto h-6 w-6 text-white animate-pulse" />
              </div>

              <div className="text-center space-y-1">
                <h4 className="text-sm font-bold font-mono uppercase tracking-widest text-white">SPLICING LORE TIMELINES</h4>
                <p className="text-[11px] text-white/40">Aligning quantum parameters with the {selectedFaction || "Merchant Intelligence Division"}.</p>
              </div>

              {/* Streaming Logs */}
              <div className="w-full max-w-md p-4 rounded-none bg-black border border-white/5 font-mono text-[10px] text-white/40 space-y-1 text-left">
                {generationLogs.map((log, idx) => (
                  <div key={idx} className="truncate">
                    <span className="text-[#F27D26]">❯</span> {log}
                  </div>
                ))}
                {generationLogs.length < 5 && (
                  <div className="animate-pulse">
                    <span className="text-white">❯</span> ESTABLISHING DATA TERMINAL ENCRYPTORS...
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {step === "result" && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              {/* Holographic Header dossier */}
              <div className="p-4 border border-white/15 bg-white/5 space-y-2 rounded-none">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="text-[11px] font-mono font-bold text-[#F27D26] uppercase tracking-widest flex items-center gap-1.5">
                    <Icons.Lock className="h-3.5 w-3.5 text-[#F27D26] shrink-0" />
                    {result.logHeader}
                  </div>
                  <span className="text-[9px] font-mono text-white/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded-none">
                    STATUS: ENCRYPTED // RESTRIC_{selectedFaction ? selectedFaction.replace(/[^A-Za-z]/g, "").slice(0, 4).toUpperCase() : "SEC"}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 text-[11px] text-white/60 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
                  <div>
                    <span className="text-[9px] text-white/40 block uppercase font-mono">OPERATIVE:</span>
                    <span className="text-white font-bold">{name}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/40 block uppercase font-mono">ORIGIN:</span>
                    <span className="text-white">{selectedOrigin}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/40 block uppercase font-mono">TRAIT:</span>
                    <span className="text-white">{selectedTrait}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/40 block uppercase font-mono">ALIGNMENT:</span>
                    <span className="text-white">{selectedFaction}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic One-liner Tagline */}
              <div className="p-3 bg-[#F27D26]/10 border-l-2 border-[#F27D26] rounded-none font-sans text-xs italic text-white/90">
                "{result.characterSummary}"
              </div>

              {/* Backstory text with typing or static display */}
              <div className="prose prose-invert max-w-none font-mono text-[11px] text-white/80 leading-relaxed bg-black p-4 md:p-6 border border-white/5 h-64 overflow-y-auto whitespace-pre-wrap">
                <div className="text-[10px] text-[#F27D26] mb-2 font-bold uppercase tracking-wider">[ GENERATING BACKSTORY LOG COMPLETE... ]</div>
                {typedBackstory}
                {typingIndex < result.fullBackstory.length && (
                  <span className="inline-block w-2 h-4 ml-0.5 bg-[#F27D26] animate-pulse" />
                )}
              </div>

              {/* Actions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-[10px] uppercase font-bold tracking-wider">
                <button
                  onClick={downloadLogFile}
                  className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 text-white rounded-none border border-white/15 transition-all"
                >
                  <Icons.FileText className="h-4 w-4 text-[#F27D26]" /> DOWNLOAD LOG
                </button>

                <button
                  onClick={() => handleCopy(result.fullBackstory, setCopiedBackstory)}
                  className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 text-white rounded-none border border-white/15 transition-all"
                >
                  <Icons.Clipboard className="h-4 w-4 text-white/80" />
                  {copiedBackstory ? "COPIED OK!" : "COPY LOG"}
                </button>

                <button
                  onClick={() => handleCopy(result.redditReadyText, setCopiedReddit)}
                  className="flex items-center justify-center gap-2 p-3 bg-[#F27D26] hover:bg-white text-black rounded-none transition-all font-black"
                >
                  <Icons.Share2 className="h-4 w-4 shrink-0" />
                  {copiedReddit ? "COPIED REDDIT!" : "SHARE TO REDDIT"}
                </button>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-none text-[10px] tracking-wider uppercase font-bold flex items-center gap-2 transition-all"
                >
                  <Icons.RotateCcw className="h-3.5 w-3.5" /> RESET NODE
                </button>
                <span className="text-[9px] text-white/30 font-mono uppercase">DATA ARCHIVE v2 // VERIFIED CREATOR PROT</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
