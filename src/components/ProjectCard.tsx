import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ModProject } from "../types";
import * as Icons from "lucide-react";

interface ProjectCardProps {
  project: ModProject;
}

export function LucideIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
}

export default function ProjectCard({ project }: { project: ModProject }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      id={`project-card-${project.id}`}
      className={`relative rounded-lg border bg-gradient-to-br p-6 transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden ${
        isExpanded ? "min-h-[380px]" : "h-[380px]"
      } ${project.visualTheme}`}
      whileHover={{ scale: 1.01, translateY: -2 }}
    >
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Upper Status strip */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 shrink-0">
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${
                project.status === "Available Now" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
              }`} />
              {project.status}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
              {project.category}
            </span>
          </div>

          <div className="flex items-start gap-4 shrink-0">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white shadow-inner shrink-0">
              <LucideIcon name={project.iconName} className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold font-sans tracking-tight truncate">{project.title}</h3>
              <p className="text-xs opacity-70 font-mono mt-0.5 truncate">{project.subtitle}</p>
            </div>
          </div>

          <div className="mt-4 text-sm leading-relaxed opacity-80 overflow-y-auto flex-1 pr-1.5 custom-scrollbar font-sans select-text">
            {project.description}
          </div>
        </div>

        {/* Primary interactive detail trigger */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-5 w-full flex items-center justify-center gap-2 text-xs font-mono py-2 rounded border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white shrink-0"
        >
          <span>{isExpanded ? "HIDE PROJECT SPECIFICATIONS" : "VIEW PROJECT SPECIFICATIONS"}</span>
          <Icons.ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Expandable Specifications block */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-2"
          >
            <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Core Subsystems / Features:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs opacity-90 text-zinc-200">
                    <Icons.CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Dynamic decorative visualizers to show 'tech skills' */}
              <div className="p-3 rounded bg-black/40 border border-white/5 mt-2 font-mono text-[10px] text-zinc-400 space-y-1">
                <div className="flex justify-between items-center">
                  <span>INTEGRATION LATENCY</span>
                  <span className="text-emerald-400">0.02ms</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "95%" }} />
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span>FILESYSTEM DEPENDENCIES</span>
                  <span className="text-blue-400">100% CONGRUENT</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-6 pt-4 border-t border-white/10">
        {!project.creationsLink || project.creationsLink === "#" ? (
          <div className="w-full text-center text-[10px] font-mono py-2.5 px-4 bg-white/5 border border-white/10 text-zinc-400 rounded">
            SPECIFICATION ENCRYPTED // INTERNAL ONLY
          </div>
        ) : (
          <a
            href={project.creationsLink}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 text-xs font-mono font-semibold py-2.5 px-4 bg-white text-black hover:bg-neutral-200 rounded transition-all text-center"
          >
            <Icons.Download className="h-4 w-4" />
            BETHESDA CREATIONS
          </a>
        )}
      </div>
    </motion.div>
  );
}
