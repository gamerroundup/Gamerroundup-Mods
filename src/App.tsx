import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  Eye,
  Package,
  Users,
  Layers,
  Orbit,
  Cpu,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Menu,
  Mic,
  Terminal,
  ArrowRight,
  Info,
  Code2,
  ArrowUpRight
} from 'lucide-react';
import {
  ModProject,
  StudioConfig,
  StudioCredential,
  DEFAULT_MODS,
  DEFAULT_STUDIO_CONFIG,
  DEFAULT_CREDENTIALS,
  STUDIO_INQUIRY_FORM_URL
} from './data/modsData';
import { MilkyWayGalaxy3D } from './components/MilkyWayGalaxy3D';
import { Tilt3DCard } from './components/Tilt3DCard';
import { LoreBuilderChatGPT } from './components/LoreBuilderChatGPT';
import { AboutStudioView } from './components/AboutStudioView';
import { AdminView } from './components/AdminView';

const STORAGE_VERSION = 'v4_galaxy_expanded';

export function App() {
  const [activeView, setActiveView] = useState<'portfolio' | 'lore' | 'studio' | 'admin'>('portfolio');

  const [mods, setMods] = useState<ModProject[]>(() => {
    try {
      if (localStorage.getItem('gamer_roundup_version') !== STORAGE_VERSION) {
        return DEFAULT_MODS;
      }
      const saved = localStorage.getItem('gamer_roundup_mods');
      if (!saved) return DEFAULT_MODS;
      const parsed: ModProject[] = JSON.parse(saved);
      return parsed.filter((m) => m.id !== 'partner-dev');
    } catch {
      return DEFAULT_MODS;
    }
  });

  const [studioConfig, setStudioConfig] = useState<StudioConfig>(() => {
    try {
      if (localStorage.getItem('gamer_roundup_version') !== STORAGE_VERSION) {
        return DEFAULT_STUDIO_CONFIG;
      }
      const saved = localStorage.getItem('gamer_roundup_config');
      return saved ? { ...DEFAULT_STUDIO_CONFIG, ...JSON.parse(saved) } : DEFAULT_STUDIO_CONFIG;
    } catch {
      return DEFAULT_STUDIO_CONFIG;
    }
  });

  const [credentials, setCredentials] = useState<StudioCredential[]>(() => {
    try {
      if (localStorage.getItem('gamer_roundup_version') !== STORAGE_VERSION) {
        return DEFAULT_CREDENTIALS;
      }
      const saved = localStorage.getItem('gamer_roundup_creds');
      if (!saved) return DEFAULT_CREDENTIALS;
      const parsed: StudioCredential[] = JSON.parse(saved);
      return parsed.filter((c) => c.id === 'bethesda');
    } catch {
      return DEFAULT_CREDENTIALS;
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [selectedModModal, setSelectedModModal] = useState<ModProject | null>(null);
  const [legalModal, setLegalModal] = useState<'privacy' | 'cookie' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [warpBoost, setWarpBoost] = useState(false);

  useEffect(() => {
    localStorage.setItem('gamer_roundup_version', STORAGE_VERSION);
    localStorage.setItem('gamer_roundup_mods', JSON.stringify(mods));
  }, [mods]);

  useEffect(() => {
    localStorage.setItem('gamer_roundup_config', JSON.stringify(studioConfig));
  }, [studioConfig]);

  useEffect(() => {
    localStorage.setItem('gamer_roundup_creds', JSON.stringify(credentials));
  }, [credentials]);

  const triggerWarpPulse = () => {
    setWarpBoost(true);
    setTimeout(() => setWarpBoost(false), 950);
  };

  const switchView = (view: 'portfolio' | 'lore' | 'studio' | 'admin') => {
    triggerWarpPulse();
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderModIcon = (iconName: string, className = 'w-7 h-7') => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Eye':
        return <Eye className={className} />;
      case 'Package':
        return <Package className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Orbit':
        return <Orbit className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  const getAccentStyles = (accent: ModProject['accentColor']) => {
    switch (accent) {
      case 'amber':
        return {
          pill: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
          glow: 'rgba(245, 158, 11, 0.28)',
          bannerBg: 'from-amber-950/70 via-zinc-950 to-neutral-950',
          iconBox: 'bg-amber-500/15 border-amber-400/40 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.3)]'
        };
      case 'cyan':
        return {
          pill: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
          glow: 'rgba(6, 182, 212, 0.28)',
          bannerBg: 'from-cyan-950/70 via-zinc-950 to-neutral-950',
          iconBox: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]'
        };
      case 'emerald':
        return {
          pill: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
          glow: 'rgba(16, 185, 129, 0.28)',
          bannerBg: 'from-emerald-950/70 via-zinc-950 to-neutral-950',
          iconBox: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.3)]'
        };
      case 'purple':
        return {
          pill: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
          glow: 'rgba(168, 85, 247, 0.28)',
          bannerBg: 'from-purple-950/70 via-zinc-950 to-neutral-950',
          iconBox: 'bg-purple-500/15 border-purple-400/40 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.3)]'
        };
      case 'blue':
        return {
          pill: 'bg-blue-500/15 text-blue-300 border-blue-500/40',
          glow: 'rgba(59, 130, 246, 0.28)',
          bannerBg: 'from-blue-950/70 via-indigo-950/50 to-zinc-950',
          iconBox: 'bg-blue-500/15 border-blue-400/40 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.3)]'
        };
      default:
        return {
          pill: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',
          glow: 'rgba(99, 102, 241, 0.28)',
          bannerBg: 'from-indigo-950/70 via-slate-950 to-zinc-950',
          iconBox: 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300 shadow-[0_0_25px_rgba(99,102,241,0.3)]'
        };
    }
  };

  const heroMod = mods[heroIndex] || mods[0];
  const filteredMods =
    selectedCategory === 'All'
      ? mods
      : mods.filter((m) => m.category.toLowerCase() === selectedCategory.toLowerCase());

  const categories = ['All', 'Trade Wars', 'Galaxy In'];

  return (
    <div className="min-h-screen flex flex-col relative text-zinc-100">
      {/* Real-time Interactive 3D Milky Way WebGL Backdrop */}
      <MilkyWayGalaxy3D warpSpeed={warpBoost} activeView={activeView} />

      {/* Sticky Designer Glass Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030308]/75 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Crest Logo + Studio Title */}
          <div
            onClick={() => switchView('portfolio')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-tr from-amber-500 via-fuchsia-500 to-violet-600 shadow-[0_0_25px_rgba(168,85,247,0.45)] group-hover:scale-105 transition-transform">
              <img
                src="/gamerroundup-logo.jpg"
                alt="GAMERROUNDUP STUDIOS"
                className="w-full h-full object-cover rounded-[14px]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-zinc-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base sm:text-lg tracking-wider text-white group-hover:text-amber-300 transition-colors">
                  GAMERROUNDUP
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/30">
                  STUDIOS
                </span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 block">
                {studioConfig.studioHeaderTagline}
              </span>
            </div>
          </div>

          {/* Primary Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/10">
            <button
              onClick={() => switchView('portfolio')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeView === 'portfolio'
                  ? 'bg-gradient-to-r from-amber-500/25 to-violet-600/30 text-white border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Orbit className="w-3.5 h-3.5 text-amber-400" />
              <span>Creations</span>
            </button>

            <button
              onClick={() => switchView('lore')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeView === 'lore'
                  ? 'bg-gradient-to-r from-violet-600 to-amber-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.45)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Lore Builder</span>
            </button>

            <button
              onClick={() => switchView('studio')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeView === 'studio'
                  ? 'bg-gradient-to-r from-amber-500/25 to-violet-600/30 text-white border border-violet-400/50 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Mic className="w-3.5 h-3.5 text-violet-400" />
              <span>About Studio</span>
            </button>

            <button
              onClick={() => switchView('admin')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeView === 'admin'
                  ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          </nav>

          {/* Right Quick CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href={STUDIO_INQUIRY_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 border border-violet-400/35 text-xs font-mono font-semibold text-violet-200 transition-all"
            >
              <Mic className="w-3.5 h-3.5 text-amber-400" />
              <span>Work With Us ↗</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-2xl px-4 py-4 space-y-3"
            >
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => switchView('portfolio')}
                  className="p-3 rounded-xl bg-zinc-900 text-xs font-mono font-bold text-left text-white flex items-center gap-2"
                >
                  <Orbit className="w-4 h-4 text-amber-400" />
                  <span>Creations</span>
                </button>
                <button
                  onClick={() => switchView('lore')}
                  className="p-3 rounded-xl bg-violet-600/30 border border-violet-400/40 text-xs font-mono font-bold text-left text-white flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Lore Builder</span>
                </button>
                <button
                  onClick={() => switchView('studio')}
                  className="p-3 rounded-xl bg-zinc-900 text-xs font-mono font-bold text-left text-white flex items-center gap-2"
                >
                  <Mic className="w-4 h-4 text-violet-400" />
                  <span>About Studio</span>
                </button>
                <button
                  onClick={() => switchView('admin')}
                  className="p-3 rounded-xl bg-zinc-900 text-xs font-mono font-bold text-left text-white flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Admin</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14">
        <AnimatePresence mode="wait">
          {activeView === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-14"
            >
              {/* 1. BESPOKE 3D STUDIO HERO & FLAGSHIP SHOWCASE */}
              <div className="glass-panel rounded-[32px] p-6 sm:p-10 lg:p-14 border border-white/15 relative overflow-hidden">
                {/* Ambient Neon Aura matching GR Logo */}
                <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-gradient-to-bl from-violet-600/20 via-fuchsia-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left Column: 3D Interactive Holographic Logo & Active Creation Crest */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
                    <Tilt3DCard
                      intensity={14}
                      glowColor="rgba(245, 158, 11, 0.35)"
                      className="w-72 sm:w-80 rounded-3xl p-1 bg-gradient-to-tr from-amber-500 via-fuchsia-500 to-violet-600 shadow-[0_0_60px_rgba(168,85,247,0.4)]"
                    >
                      <div className="bg-[#06060f] rounded-[22px] p-5 flex flex-col items-center text-center space-y-4 relative overflow-hidden">
                        {/* Top status pill inside 3D card */}
                        <div className="w-full flex items-center justify-between text-[10px] font-mono">
                          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                            {heroMod.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
                            {heroMod.status}
                          </span>
                        </div>

                        {/* Studio Logo Centerpiece */}
                        <div className="relative w-full h-40 rounded-2xl overflow-hidden border border-white/15 shadow-inner group">
                          <img
                            src="/gamerroundup-logo.jpg"
                            alt="GAMERROUNDUP STUDIOS"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-amber-300">
                            <span>BETHESDA VERIFIED</span>
                            <span>3D MILKY WAY LIVE</span>
                          </div>
                        </div>

                        {/* Active Featured Creation inside 3D Crest */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-violet-300">
                            {heroMod.bannerHeader}
                          </div>
                          <h3 className="text-lg font-black text-white leading-tight">
                            {heroMod.title}
                          </h3>
                          <p className="text-xs font-mono text-amber-300">{heroMod.subtitle}</p>
                        </div>
                      </div>
                    </Tilt3DCard>

                    {/* Carousel Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        aria-label="Previous creation"
                        onClick={() => {
                          setHeroIndex((prev) => (prev - 1 + mods.length) % mods.length);
                          triggerWarpPulse();
                        }}
                        className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-amber-300 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5">
                        {mods.map((m, idx) => (
                          <button
                            key={m.id}
                            aria-label={`Select ${m.title}`}
                            onClick={() => {
                              setHeroIndex(idx);
                              triggerWarpPulse();
                            }}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              idx === heroIndex
                                ? 'w-7 bg-gradient-to-r from-amber-400 to-violet-500'
                                : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        aria-label="Next creation"
                        onClick={() => {
                          setHeroIndex((prev) => (prev + 1) % mods.length);
                          triggerWarpPulse();
                        }}
                        className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-amber-300 transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Active Mod Details + Studio Engineering Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                        {studioConfig.heroEyebrow}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-mono">
                        100% Human Voiced • Conflict-Free
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
                        {heroMod.title}
                      </h2>
                      <p className="text-sm sm:text-base font-mono text-amber-300">
                        {heroMod.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                      {heroMod.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {heroMod.features.slice(0, 3).map((feat, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-xs text-zinc-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hero Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-2">
                      <button
                        onClick={() => setSelectedModModal(heroMod)}
                        className="px-6 py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-zinc-950 font-display font-bold text-xs tracking-wider uppercase shadow-xl transition-all cursor-pointer"
                      >
                        LEARN MORE
                      </button>

                      {heroMod.creationsLink && heroMod.creationsLink !== '#' ? (
                        <a
                          href={heroMod.creationsLink}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 hover:from-amber-400 hover:to-violet-500 text-white font-display font-bold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-2 transition-all"
                        >
                          <span>PLAY ON BETHESDA</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          onClick={() => switchView('lore')}
                          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-amber-500 text-white font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>LAUNCH LORE BUILDER</span>
                        </button>
                      )}

                      <button
                        onClick={() => switchView('lore')}
                        className="px-5 py-3.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-violet-400/40 text-xs font-mono font-bold text-violet-200 flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Starfield Lore Builder →</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. STUDIO ECOSYSTEM & TALENT INQUIRY STRIP (WITH VOICE ACTOR & DEV/ARTIST/LEVEL DESIGNER INQUIRY LINKS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Tilt3DCard intensity={8} className="glass-panel rounded-3xl p-5 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    {studioConfig.stat1Label}
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-black text-white mt-1">
                    {studioConfig.stat1Value}
                  </div>
                  <div className="text-[11px] font-mono text-amber-400 mt-1">
                    Trade Wars & Galaxy Series
                  </div>
                </Tilt3DCard>

                <Tilt3DCard intensity={8} className="glass-panel rounded-3xl p-5 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    {studioConfig.stat2Label}
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-black text-violet-300 mt-1">
                    {studioConfig.stat2Value}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1">
                    Real Actors & Recording Guides
                  </div>
                </Tilt3DCard>

                {/* Card 3 (Green Circle requested by user): Link for Voice Actors inquiring about potential work */}
                <a
                  href={STUDIO_INQUIRY_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block group"
                >
                  <Tilt3DCard
                    intensity={10}
                    glowColor="rgba(16, 185, 129, 0.32)"
                    className="glass-panel h-full rounded-3xl p-5 border border-emerald-500/35 hover:border-emerald-400 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
                      <span>VOICE ACTOR INQUIRIES</span>
                      <Mic className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-xl sm:text-2xl font-display font-black text-emerald-300 mt-1 group-hover:text-white transition-colors">
                      Voice Actors — Inquire Here
                    </div>
                    <div className="text-[11px] font-mono text-zinc-300 mt-1.5 flex items-center gap-1">
                      <span>Audition & Inquire for Voice Work</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Tilt3DCard>
                </a>

                {/* Card 4 (Purple Circle requested by user): Link for Programmers, Artists & Level Designers inquiring about potential work */}
                <a
                  href={STUDIO_INQUIRY_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block group"
                >
                  <Tilt3DCard
                    intensity={10}
                    glowColor="rgba(168, 85, 247, 0.35)"
                    className="glass-panel h-full rounded-3xl p-5 border border-violet-500/40 hover:border-amber-400 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-violet-300 uppercase tracking-wider">
                      <span>DEV, ART & LEVEL DESIGN</span>
                      <Code2 className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-lg sm:text-xl font-display font-black text-amber-300 mt-1 group-hover:text-white transition-colors leading-snug">
                      Programmers, Artists & Level Designers
                    </div>
                    <div className="text-[11px] font-mono text-zinc-300 mt-1.5 flex items-center gap-1">
                      <span>Inquire About Studio Work</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Tilt3DCard>
                </a>
              </div>

              {/* 3. COMPLETE STARFIELD MOD PORTFOLIO (6 FLAGSHIP CREATIONS WITH 3D TILT CARDS) */}
              <section id="creations-grid" className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Verified Creator Catalog • PC & Xbox Series X|S</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
                      {studioConfig.portfolioHeading}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      {studioConfig.portfolioSubheading}
                    </p>
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-gradient-to-r from-amber-500 to-violet-600 text-white border-transparent shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                            : 'bg-zinc-950/80 border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3-Column 3D Interactive Mod Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {filteredMods.map((mod) => {
                    const st = getAccentStyles(mod.accentColor);
                    const isAvailable = mod.status === 'Available Now';
                    return (
                      <Tilt3DCard
                        key={mod.id}
                        id={`project-card-${mod.id}`}
                        intensity={9}
                        glowColor={st.glow}
                        className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 flex flex-col justify-between h-[490px] group"
                      >
                        {/* Top 3D Holographic Banner */}
                        <div
                          className={`relative w-full h-44 bg-gradient-to-br ${st.bannerBg} border-b border-white/10 flex flex-col items-center justify-center p-4 overflow-hidden shrink-0`}
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] opacity-10" />

                          {/* Top Status & Category Badges */}
                          <div className="absolute top-3 left-3 z-10">
                            <span
                              className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${
                                isAvailable
                                  ? 'bg-zinc-950/85 text-emerald-400 border-emerald-500/40'
                                  : 'bg-zinc-950/85 text-amber-400 border-amber-500/40'
                              }`}
                            >
                              {mod.status}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3 z-10">
                            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-zinc-950/85 text-zinc-300 border border-white/15 backdrop-blur-md">
                              {mod.category}
                            </span>
                          </div>

                          {/* Center Icon & Telemetry Header */}
                          <div className={`p-3.5 rounded-2xl border ${st.iconBox} mb-2 group-hover:scale-110 transition-transform`}>
                            {renderModIcon(mod.iconName)}
                          </div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white text-center">
                            {mod.bannerHeader}
                          </span>
                          <span className="text-[9px] font-mono text-zinc-400 mt-0.5">
                            {mod.bannerSub}
                          </span>
                          <div className="absolute bottom-2 right-3 text-[9px] font-mono text-amber-300/80">
                            {mod.bannerTag}
                          </div>
                        </div>

                        {/* Card Body: preserved mod title, subtitle, description & features */}
                        <div className="p-6 flex-1 flex flex-col justify-between overflow-hidden">
                          <div>
                            <h3 className="text-xl font-black text-white tracking-tight group-hover:text-amber-300 transition-colors line-clamp-1">
                              {mod.title}
                            </h3>
                            <p className="text-xs font-mono text-cyan-300 mt-0.5 line-clamp-1">
                              {mod.subtitle}
                            </p>
                            <p className="text-zinc-300 mt-2.5 text-xs sm:text-sm leading-relaxed line-clamp-3">
                              {mod.description}
                            </p>
                          </div>

                          {/* Feature Pills */}
                          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                            {mod.features.slice(0, 2).map((feat, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-zinc-200 border border-white/10 truncate max-w-[185px]"
                              >
                                {feat}
                              </span>
                            ))}
                            {mod.features.length > 2 && (
                              <span className="text-[10px] font-mono text-amber-300">
                                +{mod.features.length - 2} more
                              </span>
                            )}
                          </div>

                          {/* Card Footer Actions */}
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                            <button
                              onClick={() => setSelectedModModal(mod)}
                              className="px-4 py-2 rounded-xl bg-white hover:bg-amber-300 text-zinc-950 font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow cursor-pointer"
                            >
                              <Info className="w-3.5 h-3.5" />
                              <span>Learn More</span>
                            </button>

                            {mod.creationsLink && mod.creationsLink !== '#' ? (
                              <a
                                href={mod.creationsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-mono font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
                              >
                                <span>Bethesda</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <span className="text-[11px] font-mono text-zinc-400">
                                In Development
                              </span>
                            )}
                          </div>
                        </div>
                      </Tilt3DCard>
                    );
                  })}
                </div>
              </section>

              {/* 4. STARFIELD LORE BUILDER CALLOUT BANNER (NO AI / CHATGPT TEXT) */}
              <div className="glass-panel-violet rounded-[32px] p-8 sm:p-12 border border-violet-500/40 relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>INTERACTIVE TACTICAL TERMINAL • 27 BRANCHING ENCOUNTERS</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-black text-white">
                      Experience the Interactive Starfield Lore Builder
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                      Test your tactical choices across 27 Settled Systems space encounters, track real-time hull & cargo telemetry, and synthesize custom character backstories and dossiers in under 3 minutes.
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex lg:justify-end">
                    <button
                      onClick={() => switchView('lore')}
                      className="px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 hover:from-amber-400 hover:to-violet-500 text-white font-display font-bold text-xs tracking-wider uppercase shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center gap-2.5 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Launch Lore Builder</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeView === 'lore' && (
            <motion.div
              key="lore"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <LoreBuilderChatGPT
                onBackToPortfolio={() => switchView('portfolio')}
                onTriggerWarp={triggerWarpPulse}
              />
            </motion.div>
          )}

          {activeView === 'studio' && (
            <motion.div
              key="studio"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <AboutStudioView studioConfig={studioConfig} credentials={credentials} />
            </motion.div>
          )}

          {activeView === 'admin' && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <AdminView
                studioConfig={studioConfig}
                onUpdateStudioConfig={setStudioConfig}
                allMods={mods}
                onUpdateAllMods={setMods}
                credentials={credentials}
                onUpdateCredentials={setCredentials}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mod Specification Modal */}
      <AnimatePresence>
        {selectedModModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl glass-panel-violet rounded-3xl border border-violet-400/40 overflow-hidden shadow-2xl my-8"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {selectedModModal.category} • Verified Creation Spec
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {selectedModModal.status}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                      {selectedModModal.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 mt-0.5">
                      {selectedModModal.subtitle}
                    </p>
                  </div>
                  <button
                    aria-label="Close dialog"
                    onClick={() => setSelectedModModal(null)}
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-zinc-300 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    System Overview & Architecture
                  </h4>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {selectedModModal.description}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-300">
                    Integrated Subsystems & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedModModal.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-zinc-950/80 border border-white/10 text-xs text-zinc-200 flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[10px] font-mono">
                  <div className="p-3 rounded-xl bg-zinc-950/90 border border-white/10">
                    <span className="text-zinc-500 block">CREATION KIT COMPILATION:</span>
                    <span className="text-emerald-300 font-bold">100% NATIVE PAPYRUS</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950/90 border border-white/10">
                    <span className="text-zinc-500 block">LOAD ORDER STABILITY:</span>
                    <span className="text-amber-300 font-bold">SAFE / CONFLICT-FREE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950/90 border border-white/10">
                    <span className="text-zinc-500 block">SAVE-GAME CLEANLINESS:</span>
                    <span className="text-cyan-300 font-bold">ZERO SAVE BLOAT</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                  {selectedModModal.creationsLink && selectedModModal.creationsLink !== '#' ? (
                    <a
                      href={selectedModModal.creationsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono font-bold text-xs flex items-center gap-2"
                    >
                      <span>Bethesda Creations Page</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-zinc-400">
                      Upcoming Release / Internal Testing
                    </span>
                  )}

                  <button
                    onClick={() => {
                      setSelectedModModal(null);
                      switchView('lore');
                    }}
                    className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono font-bold text-xs cursor-pointer"
                  >
                    Generate Compatible Backstory (CYOA) →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Working Privacy & Cookie Policy Modal */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-lg w-full glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-white">
                  {legalModal === 'privacy' ? 'Privacy Policy' : 'Cookie & Local Storage Policy'}
                </h3>
                <button
                  onClick={() => setLegalModal(null)}
                  className="p-2 rounded-xl bg-zinc-900 text-zinc-300 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {legalModal === 'privacy'
                  ? 'GAMERROUNDUP Studios respects player and creator privacy. Character dossiers generated in the Starfield Lore Builder are synthesized client-side in your browser. Voice actor and developer inquiries are securely managed via Google Forms solely for casting and studio collaboration.'
                  : 'This site uses browser LocalStorage exclusively to remember your custom Starfield Lore Builder configurations and Studio Admin console preferences. No third-party tracking cookies are sold or shared.'}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Designer Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#030308]/85 backdrop-blur-xl py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/gamerroundup-logo.jpg"
              alt="GAMERROUNDUP STUDIOS"
              className="w-11 h-11 rounded-xl object-cover border border-white/15"
            />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <button
                  onClick={() => setLegalModal('privacy')}
                  className="text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span className="text-zinc-700">•</span>
                <button
                  onClick={() => setLegalModal('cookie')}
                  className="text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Cookie Policy
                </button>
                <span className="text-zinc-700">•</span>
                <a
                  href={STUDIO_INQUIRY_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-300 hover:text-amber-300 transition-colors"
                >
                  Voice Actor & Developer Inquiry ↗
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={studioConfig.bethesdaAuthorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-300 hover:text-white transition-colors"
                >
                  Bethesda Creations Official Catalog ↗
                </a>
              </div>
              <p className="text-[11px] text-zinc-500">
                GAMERROUNDUP Studios (founded 2026 by Matt Pratt) is an independent Verified Creator for Bethesda Softworks&apos; Starfield. All trademarks belong to their respective owners.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <a
              href={studioConfig.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-200 transition-all"
            >
              Discord
            </a>
            <a
              href={studioConfig.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-200 transition-all"
            >
              𝕏
            </a>
            <a
              href={studioConfig.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-200 transition-all"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
