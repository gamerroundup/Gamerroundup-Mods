import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Mic,
  Sparkles,
  Award,
  Cpu,
  Code2,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Headphones,
  FileText,
  Users,
  Layers,
  Radio,
  ArrowUpRight
} from 'lucide-react';
import { StudioConfig, StudioCredential, STUDIO_INQUIRY_FORM_URL } from '../data/modsData';
import { Tilt3DCard } from './Tilt3DCard';

interface AboutStudioViewProps {
  studioConfig: StudioConfig;
  credentials: StudioCredential[];
}

export const VOICE_ACTOR_CAST_FORM_URL = STUDIO_INQUIRY_FORM_URL;

export const AboutStudioView: React.FC<AboutStudioViewProps> = ({
  studioConfig,
  credentials
}) => {
  const [expandedCred, setExpandedCred] = useState<string | null>(null);

  const renderCredIcon = (icon: string) => {
    switch (icon) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Banner for About Us */}
      <div className="glass-panel-violet rounded-3xl p-7 sm:p-12 border border-violet-500/30 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded in {studioConfig.foundedYear} by {studioConfig.founderName} • Independent Studio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              About <span className="brand-gradient-text">GAMERROUNDUP</span> Studios
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {studioConfig.missionStatement}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={STUDIO_INQUIRY_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 hover:from-amber-400 hover:to-violet-500 text-white font-display font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center gap-2 transition-all"
              >
                <Mic className="w-4 h-4" />
                <span>Voice Actor & Developer Inquiry Form</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={studioConfig.bethesdaAuthorUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-xs font-mono font-bold text-zinc-200 flex items-center gap-2 transition-all"
              >
                <span>Official Bethesda Creations Catalog</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <Tilt3DCard
              intensity={14}
              className="w-64 sm:w-72 rounded-3xl p-1 bg-gradient-to-tr from-amber-500/50 via-fuchsia-500/50 to-violet-600/50 shadow-[0_0_50px_rgba(168,85,247,0.35)]"
            >
              <div className="bg-zinc-950 rounded-[22px] p-4 flex flex-col items-center text-center space-y-3">
                <img
                  src="/gamerroundup-logo.jpg"
                  alt="GAMERROUNDUP STUDIOS Logo"
                  className="w-full h-40 object-cover rounded-xl border border-white/10"
                />
                <div>
                  <div className="font-display font-black text-sm text-white tracking-widest">
                    GAMERROUNDUP STUDIOS
                  </div>
                  <div className="text-[11px] font-mono text-amber-400 mt-0.5">
                    EST. 2026 • MATT PRATT
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>

      {/* Our Team: Who We Are & What We Do */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Tilt3DCard intensity={7} className="glass-panel rounded-3xl p-7 sm:p-9 space-y-4 border border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              01 // OUR TEAM
            </span>
            <Users className="w-5 h-5 text-amber-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">{studioConfig.whoWeAreHeading}</h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {studioConfig.whoWeArePara1}
          </p>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pt-1 border-t border-white/10">
            {studioConfig.whoWeArePara2}
          </p>
        </Tilt3DCard>

        <Tilt3DCard intensity={7} className="glass-panel rounded-3xl p-7 sm:p-9 space-y-4 border border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
              02 // CRAFT & STRATEGY
            </span>
            <Layers className="w-5 h-5 text-violet-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">{studioConfig.whatWeDoHeading}</h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {studioConfig.whatWeDoPara1}
          </p>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pt-1 border-t border-white/10">
            {studioConfig.whatWeDoPara2}
          </p>
        </Tilt3DCard>
      </div>

      {/* Our Mission Highlight Banner */}
      <div className="glass-panel-amber rounded-3xl p-7 sm:p-10 border border-amber-500/30 text-center space-y-3 relative overflow-hidden">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-amber-400 block">
          {studioConfig.missionHeading}
        </span>
        <blockquote className="text-xl sm:text-3xl font-display font-bold text-white max-w-4xl mx-auto leading-snug">
          “{studioConfig.missionStatement}”
        </blockquote>
      </div>

      {/* Our Values (3 Cards: Integrity First, Behind the Pixels, Meaning Over Noise) */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
              STUDIO PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              {studioConfig.valuesHeading}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Recording Guides • Human Voice Acting • Zero Hollow Filler
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studioConfig.values.map((val, idx) => (
            <Tilt3DCard
              key={val.id}
              intensity={10}
              className="glass-panel rounded-3xl p-7 border border-white/10 hover:border-violet-400/50 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                    {idx === 0 ? (
                      <ShieldCheck className="w-6 h-6 text-amber-400" />
                    ) : idx === 1 ? (
                      <Mic className="w-6 h-6 text-violet-400" />
                    ) : (
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-black text-white">{val.title}</h3>
                <div className="text-xs font-mono text-amber-300">{val.subtitle}</div>
                <p className="text-sm text-zinc-300 leading-relaxed">{val.description}</p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>GAMERROUNDUP CORE STANDARD</span>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>

      {/* Real Voice Actors, Programmers, Artists & Level Designers Showcase */}
      <div className="glass-panel-violet rounded-3xl p-7 sm:p-10 border border-violet-500/35 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-200 text-xs font-mono">
            <Headphones className="w-3.5 h-3.5 text-amber-400" />
            <span>100% HUMAN VOICE ACTING • COLLABORATOR & TALENT INQUIRIES</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Work With Us: Voice Actors, Programmers, Artists & Level Designers.
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Every handler, faction commander, and story companion in our creations—from the{' '}
            <strong>Merchant Intelligence Division (M.I.D.)</strong> to <strong>Iron Immortals</strong> and the{' '}
            <strong>Trade Wars</strong> saga—is built through genuine collaboration between voice actors, programmers, 3D artists, and level designers.
            Want to inquire about voice acting roles or development/design opportunities on upcoming Gamerroundup Studios projects? Submit your inquiry directly via our official talent form.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
              <div className="text-[10px] font-mono text-zinc-400">{studioConfig.toolchain1Title}</div>
              <div className="text-xs font-bold text-white mt-0.5">{studioConfig.toolchain1Value}</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
              <div className="text-[10px] font-mono text-zinc-400">{studioConfig.toolchain2Title}</div>
              <div className="text-xs font-bold text-amber-300 mt-0.5">{studioConfig.toolchain2Value}</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
              <div className="text-[10px] font-mono text-zinc-400">{studioConfig.toolchain3Title}</div>
              <div className="text-xs font-bold text-emerald-300 mt-0.5">{studioConfig.toolchain3Value}</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-white/10">
              <div className="text-[10px] font-mono text-zinc-400">{studioConfig.toolchain4Title}</div>
              <div className="text-xs font-bold text-cyan-300 mt-0.5">{studioConfig.toolchain4Value}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="p-6 rounded-3xl bg-zinc-950/90 border border-amber-400/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                TALENT & COLLABORATION
              </span>
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="text-lg font-display font-bold text-white">
              Voice Actor & Developer Inquiry Portal
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Voice actors, programmers, 3D artists, and level designers interested in collaborating on future Gamerroundup Studios releases can inquire here.
            </p>
            <a
              href={STUDIO_INQUIRY_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>INQUIRE ABOUT WORK ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Bethesda Verified Creator Registry */}
      <div className="space-y-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            PLATFORM CREDENTIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            {studioConfig.verifiedRegistriesHeading}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            {studioConfig.verifiedRegistriesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {credentials.map((cred) => {
            const isOpen = expandedCred === cred.id;
            return (
              <div
                key={cred.id}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 hover:border-amber-400/60 flex flex-col justify-between space-y-4 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {cred.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {cred.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="p-3 rounded-2xl bg-zinc-950 border border-white/10">
                      {renderCredIcon(cred.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cred.title}</h3>
                      <span className="text-[11px] font-mono text-amber-400">Official Bethesda Softworks Creations Partner</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
                    {cred.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-3">
                  <button
                    type="button"
                    onClick={() => setExpandedCred(isOpen ? null : cred.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-white/10 text-[11px] font-mono font-bold text-amber-300 flex items-center justify-between cursor-pointer"
                  >
                    <span>{isOpen ? 'HIDE TECHNICAL STACK' : 'VIEW TECHNICAL STACK'}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3.5 rounded-xl bg-zinc-950/90 border border-white/10 text-xs font-mono text-cyan-300"
                      >
                        {cred.techStack}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
