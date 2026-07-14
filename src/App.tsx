import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import TechGridBackground from "./components/TechGridBackground";
import ProjectCard from "./components/ProjectCard";
import CYOATerminal from "./components/CYOATerminal";
import CredentialsGrid from "./components/CredentialsGrid";
import { STARFIELD_MODS } from "./data";
import * as Icons from "lucide-react";

import { ModProject } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<"projects" | "lore">("projects");
  const [systemTime, setSystemTime] = useState("");

  // Dynamic mods loaded from the backend
  const [allMods, setAllMods] = useState<ModProject[]>(STARFIELD_MODS);

  // Rotating card indices
  const [releasedIndex1, setReleasedIndex1] = useState(0);
  const [releasedIndex2, setReleasedIndex2] = useState(1);
  const [upcomingIndex, setUpcomingIndex] = useState(0);

  // Admin access state
  const [showAdminPortal, setShowAdminPortal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Admin mod creation form state
  const [newModTitle, setNewModTitle] = useState("");
  const [newModSubtitle, setNewModSubtitle] = useState("");
  const [newModCategory, setNewModCategory] = useState<"Trade Wars" | "Galaxy In" | "Other Core Works">("Trade Wars");
  const [newModDescription, setNewModDescription] = useState("");
  const [newModStatus, setNewModStatus] = useState<"Available Now" | "Upcoming / Expanded" | "Beta Access">("Available Now");
  const [newModCreationsLink, setNewModCreationsLink] = useState("");
  const [newModFeatures, setNewModFeatures] = useState("");
  const [newModTheme, setNewModTheme] = useState("from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100");
  const [newModIcon, setNewModIcon] = useState("Layers");
  const [adminMessage, setAdminMessage] = useState("");
  const [adminError, setAdminError] = useState("");

  // Keep a running UTC clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch custom mods from backend on mount
  useEffect(() => {
    const fetchCustomMods = async () => {
      try {
        const res = await fetch("/api/mods");
        if (res.ok) {
          const data = await res.json();
          // Prepend any custom mods to the base mods
          setAllMods([...data, ...STARFIELD_MODS]);
        }
      } catch (err) {
        console.error("Failed to load custom mods from backend:", err);
      }
    };
    fetchCustomMods();
  }, []);

  // Auto-rotation of active mods
  const releasedMods = allMods.filter((mod) => mod.status === "Available Now");
  const upcomingMods = allMods.filter((mod) => mod.status !== "Available Now");

  useEffect(() => {
    if (releasedMods.length <= 1) return;
    const interval = setInterval(() => {
      setReleasedIndex1((prev) => (prev + 1) % releasedMods.length);
      setReleasedIndex2((prev) => (prev + 1) % releasedMods.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [releasedMods.length]);

  // Auto-rotation of upcoming mods
  useEffect(() => {
    if (upcomingMods.length <= 1) return;
    const interval = setInterval(() => {
      setUpcomingIndex((prev) => (prev + 1) % upcomingMods.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [upcomingMods.length]);

  // Safe actual render indices
  const rIdx1 = releasedMods.length > 0 ? releasedIndex1 % releasedMods.length : 0;
  const rIdx2 = releasedMods.length > 0 ? releasedIndex2 % releasedMods.length : 0;
  const uIdx = upcomingMods.length > 0 ? upcomingIndex % upcomingMods.length : 0;

  // Handle adding new custom mod
  const handleAddMod = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModTitle.trim() || !newModDescription.trim()) {
      setAdminError("Mod Title and Description are required.");
      return;
    }
    setAdminError("");
    setAdminMessage("");

    try {
      const response = await fetch("/api/mods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newModTitle,
          subtitle: newModSubtitle,
          category: newModCategory,
          description: newModDescription,
          status: newModStatus,
          creationsLink: newModCreationsLink,
          features: newModFeatures.split("\n").map(f => f.trim()).filter(Boolean),
          iconName: newModIcon,
          visualTheme: newModTheme
        })
      });

      if (response.ok) {
        const data = await response.json();
        setAllMods([...data, ...STARFIELD_MODS]);
        setAdminMessage("MOD TRANSMITTED SUCCESSFULLY // PORTFOLIO UPDATED");
        
        // Reset form
        setNewModTitle("");
        setNewModSubtitle("");
        setNewModDescription("");
        setNewModCreationsLink("");
        setNewModFeatures("");
        
        // Reset indexes to see new mod instantly
        setReleasedIndex1(0);
        if (data.length + STARFIELD_MODS.length > 1) {
          setReleasedIndex2(1);
        }
      } else {
        const errData = await response.json();
        setAdminError(errData.error || "Submission failed.");
      }
    } catch (err) {
      setAdminError("Failed to transmit data to secure server.");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-[#F27D26] selection:text-black overflow-x-hidden flex flex-col pb-12">
      {/* Background with Stars, Grid Lines, and Scan lines */}
      <TechGridBackground />

      {/* Embedded scanning scanner animation line */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-40">
        <div 
          className="absolute top-0 left-0 w-full h-[1px] bg-white" 
          style={{
            boxShadow: "0 0 15px #fff",
            animation: "scan 10s linear infinite"
          }}
        />
        <style>{`
          @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
          }
        `}</style>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex-1 flex flex-col">
        {/* Hidden/Collapsible Admin Panel */}
        {showAdminPortal && (
          <div className="mt-4 border border-[#F27D26]/30 bg-zinc-950/90 p-6 relative z-50 font-mono text-xs rounded-lg backdrop-blur-md">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Icons.Lock className="h-4 w-4 text-[#F27D26]" />
                <span className="font-bold uppercase tracking-widest text-[#F27D26]">M.I.D. SECURE ENCRYPTED PORTAL</span>
              </div>
              <button 
                onClick={() => {
                  setShowAdminPortal(false);
                  setIsAdminLoggedIn(false);
                  setAdminPassword("");
                  setAdminError("");
                  setAdminMessage("");
                }}
                className="px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white cursor-pointer uppercase text-[10px]"
              >
                [TERMINATE CONSOLE]
              </button>
            </div>

            {!isAdminLoggedIn ? (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (adminPassword === "Kalie0423!") {
                    setIsAdminLoggedIn(true);
                    setAdminError("");
                  } else {
                    setAdminError("DECRYPTION ERROR: SECURE PASSWORD INCORRECT");
                  }
                }}
                className="flex flex-col sm:flex-row items-end gap-4 max-w-md mt-4"
              >
                <div className="flex-1 w-full">
                  <label className="block text-[10px] text-white/50 uppercase mb-1">ENTER PORTKEY AUTHENTICATION CREDENTIALS:</label>
                  <input
                    type="password"
                    placeholder="SECURE PORTAL PASSWORD"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-[#F27D26]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F27D26] hover:bg-[#d66a1e] text-black font-bold uppercase transition-all cursor-pointer h-10 shrink-0"
                >
                  DECRYPT
                </button>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                {/* Admin form */}
                <form onSubmit={handleAddMod} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/40 mb-1">MOD TITLE *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Trade Wars - Logistics Expanded" 
                        value={newModTitle}
                        onChange={(e) => setNewModTitle(e.target.value)}
                        className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/40 mb-1">SUBTITLE</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Enhanced Outpost Transports" 
                        value={newModSubtitle}
                        onChange={(e) => setNewModSubtitle(e.target.value)}
                        className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/40 mb-1">CATEGORY</label>
                      <select 
                        value={newModCategory}
                        onChange={(e) => setNewModCategory(e.target.value as any)}
                        className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                      >
                        <option value="Trade Wars">Trade Wars</option>
                        <option value="Galaxy In">Galaxy In</option>
                        <option value="Other Core Works">Other Core Works</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/40 mb-1">STATUS</label>
                      <select 
                        value={newModStatus}
                        onChange={(e) => setNewModStatus(e.target.value as any)}
                        className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                      >
                        <option value="Available Now">Available Now</option>
                        <option value="Upcoming / Expanded">Upcoming / Expanded</option>
                        <option value="Beta Access">Beta Access</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/40 mb-1">ICON</label>
                      <select 
                        value={newModIcon}
                        onChange={(e) => setNewModIcon(e.target.value)}
                        className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                      >
                        <option value="Layers">Layers</option>
                        <option value="ShieldAlert">ShieldAlert</option>
                        <option value="Eye">Eye</option>
                        <option value="Package">Package</option>
                        <option value="Users">Users</option>
                        <option value="Orbit">Orbit</option>
                        <option value="Cpu">Cpu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/40 mb-1">CREATIONS LINK</label>
                    <input 
                      type="text" 
                      placeholder="https://creations.bethesda.net/..." 
                      value={newModCreationsLink}
                      onChange={(e) => setNewModCreationsLink(e.target.value)}
                      className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/40 mb-1">DESCRIPTION *</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Provide full description of the mod features..." 
                      value={newModDescription}
                      onChange={(e) => setNewModDescription(e.target.value)}
                      className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/40 mb-1">FEATURES (ONE PER LINE)</label>
                    <textarea 
                      rows={2}
                      placeholder="e.g. Adds 15 new trade missions&#10;Fully compatible with load orders" 
                      value={newModFeatures}
                      onChange={(e) => setNewModFeatures(e.target.value)}
                      className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/40 mb-1">VISUAL THEME</label>
                      <select 
                        value={newModTheme}
                        onChange={(e) => setNewModTheme(e.target.value)}
                        className="w-full bg-black border border-white/20 p-2 text-white focus:outline-none focus:border-[#F27D26] text-[10px]"
                      >
                        <option value="from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100">Trade Wars Dark</option>
                        <option value="from-blue-950 via-slate-900 to-zinc-900 border-blue-900 hover:border-blue-400 text-blue-50">Galaxy In Blue</option>
                        <option value="from-emerald-950 via-stone-900 to-zinc-900 border-emerald-900 hover:border-emerald-400 text-emerald-50">Emerald Developer Tech</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <button
                        type="submit"
                        className="w-full py-2 bg-[#F27D26] hover:bg-[#d66a1e] text-black font-extrabold uppercase transition-all cursor-pointer text-center h-[38px] flex items-center justify-center gap-1"
                      >
                        <Icons.Database className="h-3.5 w-3.5" />
                        DATA DUMP NEW MOD
                      </button>
                    </div>
                  </div>

                  {adminMessage && (
                    <div className="p-3 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                      <Icons.CheckCircle className="h-4 w-4" />
                      {adminMessage}
                    </div>
                  )}

                  {adminError && (
                    <div className="p-3 bg-red-950/50 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                      <Icons.AlertTriangle className="h-4 w-4" />
                      {adminError}
                    </div>
                  )}
                </form>

                <div className="bg-white/5 border border-white/10 p-5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#F27D26] uppercase flex items-center gap-1.5">
                      <Icons.Cpu className="h-4 w-4" />
                      ADMIN SECTOR STATUS
                    </h4>
                    <div className="text-[11px] text-white/60 leading-relaxed space-y-1">
                      <div>Access level: <span className="text-white font-bold">CREATOR-PRIMARY</span></div>
                      <div>Node Location: <span className="text-white font-bold">New Atlantis Base Node</span></div>
                      <div>Database Mode: <span className="text-emerald-400 font-bold">DURABLE CLOUD-WRITE READY</span></div>
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      By submitting a new mod record, the server will immediately append the metadata packet, serialize it, and stream the update to all connected space stations.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsAdminLoggedIn(false);
                        setAdminPassword("");
                        setAdminMessage("");
                        setAdminError("");
                      }}
                      className="px-3 py-1.5 bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-900 hover:text-white transition-all text-[10px] uppercase font-bold cursor-pointer"
                    >
                      LOG OUT & LOCK SESSION
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Header: Identity & Credentials */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-white/20 pb-5 pt-8 mb-8 relative z-10 gap-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter uppercase font-sans flex items-center gap-2 text-white">
                Gamerroundup
                <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-black rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)] scale-90">
                  <Icons.Check className="h-3.5 w-3.5 stroke-[4]" />
                </span>
                <span className="text-white/40 font-normal">/</span>
                <span className="text-[#F27D26]">Portfolio</span>
              </h1>
            </div>
            <p className="text-[10px] md:text-xs text-white/50 mt-1 uppercase tracking-widest font-mono">
              Bethesda Verified Creator
            </p>
          </div>

          {/* Navigation links styled with orange highlights */}
          <nav className="flex gap-6 text-[11px] font-bold tracking-widest uppercase font-mono items-center">
            <a 
              href="#active-creations-section" 
              className="text-[#F27D26] border-b border-[#F27D26] hover:text-white transition-all pb-1"
            >
              Projects
            </a>
            <a 
              href="#cyoa-narrative-game" 
              className="text-white/60 hover:text-[#F27D26] transition-all pb-1"
            >
              Lore Tool
            </a>
            <a 
              href="#credentials-section" 
              className="text-white/60 hover:text-[#F27D26] transition-all pb-1"
            >
              Credentials
            </a>
            <button 
              onClick={() => setShowAdminPortal(!showAdminPortal)} 
              className={`flex items-center gap-1.5 px-2 py-1 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                showAdminPortal 
                  ? "bg-[#F27D26] text-black font-extrabold border border-[#F27D26]" 
                  : "text-white/40 hover:text-[#F27D26] border border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              {isAdminLoggedIn ? <Icons.Unlock className="h-3 w-3" /> : <Icons.Lock className="h-3 w-3" />}
              <span>ADMIN PORTAL</span>
            </button>
          </nav>
        </header>

        {/* Dynamic Status / Telemetry bar */}
        <div className="bg-white/5 border border-white/10 px-4 py-2.5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/60 relative z-10">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-wider">CREATOR LINK ACTIVE</span>
            <span className="text-white/20">|</span>
            <span className="text-white/80">LATENCY: 14ms</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Icons.Clock className="h-3.5 w-3.5 text-[#F27D26]" />
              <span className="text-white/90">{systemTime}</span>
            </div>
            <span className="text-white/20">|</span>
            <span className="uppercase text-[#F27D26] tracking-widest font-bold">MID SECURE ENCRYPTION</span>
          </div>
        </div>

        {/* Main Layout Grid */}
        <main className="flex-1 grid grid-cols-12 gap-8 relative z-10 items-start">
          
          {/* Left Column: Active Creations & Badges (5 columns) */}
          <section className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            
            {/* RELEASED MODS SECTION */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-5 bg-[#F27D26]"></div>
                  <h2 id="active-creations-section" className="text-xs uppercase tracking-widest font-mono text-white font-bold">
                    Active Creations & Mods
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-[#F27D26] uppercase">ROTATOR ONLINE</span>
              </div>

              {releasedMods.length === 0 ? (
                <div className="p-8 border border-dashed border-white/10 text-center font-mono text-xs text-white/40">
                  NO ACTIVE RELEASES REGISTERED // SECURE STANDBY MODE
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Card 1 */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center px-3 py-1 bg-zinc-950 border border-white/10 text-[9px] font-mono uppercase tracking-wider text-zinc-400">
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#F27D26] animate-pulse"></span>
                        <span>CREATION DISPATCHER - TERMINAL A</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setReleasedIndex1((prev) => (prev - 1 + releasedMods.length) % releasedMods.length)}
                          className="hover:text-white px-1.5 py-0.5 bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer"
                        >
                          &lt; PREV
                        </button>
                        <span className="text-white font-bold">{rIdx1 + 1} / {releasedMods.length}</span>
                        <button 
                          onClick={() => setReleasedIndex1((prev) => (prev + 1) % releasedMods.length)}
                          className="hover:text-white px-1.5 py-0.5 bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer"
                        >
                          NEXT &gt;
                        </button>
                      </div>
                    </div>
                    <div className="min-h-[200px] relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={releasedMods[rIdx1]?.id}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="w-full"
                        >
                          <ProjectCard project={releasedMods[rIdx1]} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Card 2 */}
                  {releasedMods.length > 1 && (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center px-3 py-1 bg-zinc-950 border border-white/10 text-[9px] font-mono uppercase tracking-wider text-zinc-400">
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#F27D26] animate-pulse"></span>
                          <span>CREATION DISPATCHER - TERMINAL B</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setReleasedIndex2((prev) => (prev - 1 + releasedMods.length) % releasedMods.length)}
                            className="hover:text-white px-1.5 py-0.5 bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer"
                          >
                            &lt; PREV
                          </button>
                          <span className="text-white font-bold">{rIdx2 + 1} / {releasedMods.length}</span>
                          <button 
                            onClick={() => setReleasedIndex2((prev) => (prev + 1) % releasedMods.length)}
                            className="hover:text-white px-1.5 py-0.5 bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer"
                          >
                            NEXT &gt;
                          </button>
                        </div>
                      </div>
                      <div className="min-h-[200px] relative">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={releasedMods[rIdx2]?.id}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="w-full"
                          >
                            <ProjectCard project={releasedMods[rIdx2]} />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* UPCOMING MODS SECTION */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center justify-between mb-2 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-5 bg-[#F27D26]"></div>
                  <h2 className="text-xs uppercase tracking-widest font-mono text-white font-bold">
                    Upcoming Creations & Specs
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">SYSTEM DIAGNOSTICS</span>
              </div>

              {upcomingMods.length === 0 ? (
                <div className="p-8 border border-dashed border-white/10 text-center font-mono text-xs text-white/40">
                  NO UPCOMING PROJECTS RECORDED // STANDBY FOR OUTPOST TRANSLATIONS
                </div>
              ) : (
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center px-3 py-1 bg-zinc-950 border border-white/10 text-[9px] font-mono uppercase tracking-wider text-zinc-400">
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse"></span>
                      <span>DIAGNOSTIC MATRIX SCREEN</span>
                    </div>
                    {upcomingMods.length > 1 && (
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setUpcomingIndex((prev) => (prev - 1 + upcomingMods.length) % upcomingMods.length)}
                          className="hover:text-white px-1.5 py-0.5 bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer"
                        >
                          &lt; PREV
                        </button>
                        <span className="text-white font-bold">{uIdx + 1} / {upcomingMods.length}</span>
                        <button 
                          onClick={() => setUpcomingIndex((prev) => (prev + 1) % upcomingMods.length)}
                          className="hover:text-white px-1.5 py-0.5 bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer"
                        >
                          NEXT &gt;
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="min-h-[200px] relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={upcomingMods[uIdx]?.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="w-full"
                      >
                        <ProjectCard project={upcomingMods[uIdx]} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>

            {/* Micro Partner mini branding bar */}
            <div className="mt-4 p-4 border border-white/5 bg-white/5 flex items-center justify-around rounded-none">
              <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                <Icons.Award className="h-4 w-4 text-[#F27D26]" />
                <span className="text-[10px] font-mono tracking-widest uppercase">BETHESDA_VC</span>
              </div>
              <div className="text-white/20 font-mono text-[10px]">/</div>
              <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                <Icons.Cpu className="h-4 w-4 text-blue-400" />
                <span className="text-[10px] font-mono tracking-widest uppercase">MS_PARTNER</span>
              </div>
              <div className="text-white/20 font-mono text-[10px]">/</div>
              <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                <Icons.Code2 className="h-4 w-4 text-emerald-400" />
                <span className="text-[10px] font-mono tracking-widest uppercase">GOOGLE_DEV</span>
              </div>
            </div>
          </section>

          {/* Right Column: Lore Mini-Game Tool (7 columns) */}
          <section className="col-span-12 lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-5 bg-[#F27D26]"></div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-white font-bold">
                Choose Your Own Adventure Lore Splicer
              </h2>
            </div>

            {/* Lore Game terminal component */}
            <CYOATerminal />

            {/* Prompt design guidelines inside layout */}
            <div className="p-4 border border-dashed border-white/10 bg-white/5 space-y-2">
              <span className="text-[10px] font-mono text-[#F27D26] uppercase font-bold tracking-widest block">
                MID PROMPT PROTOCOL INFORMATION
              </span>
              <p className="text-xs text-white/60 leading-relaxed">
                The Merchant Intelligence Division (M.I.D.) personnel databank is updated dynamically via standard REST relays using state-of-the-art Generative AI models. Subject choices undergo precise chronological checks to assure congruity with United Colonies, Ryujin Industries, and Freestar Collective timelines.
              </p>
            </div>
          </section>

        </main>

        {/* Credentials & Registries Segment */}
        <section id="credentials-section" className="mt-12 pt-8 border-t border-white/10 relative z-10">
          <CredentialsGrid />
        </section>

        {/* Bottom Branding Rail */}
        <footer className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40 relative z-10 font-mono text-[10px]">
          <div className="uppercase tracking-[0.3em] text-center sm:text-left">
            Verified Creation Protocol 00-721 // Encryption Active
          </div>
          <div className="flex gap-8 items-center">
            <span className="uppercase tracking-widest">Settled Systems Data Stream</span>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-white/20"></div>
              <div className="w-4 h-1 bg-white/40"></div>
              <div className="w-1 h-1 bg-[#F27D26]"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
