import React, { useState } from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";

interface CredentialItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  techStack: string;
  status: string;
  color: string;
  icon: string;
}

interface CredentialsGridProps {
  credentials?: CredentialItem[];
}

export default function CredentialsGrid({ credentials }: CredentialsGridProps) {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const defaultCreds: CredentialItem[] = [
    {
      id: "bethesda",
      title: "Bethesda Verified Creator",
      badge: "BVC-STARFIELD",
      description: "Verified Creator for Bethesda with access to the Bethesda Creations publishing system, specializing in building and maintaining immersive additions.",
      techStack: "Starfield Creation Kit, Papyrus Scripting, Custom Starfield Systems",
      status: "VERIFIED CREATOR",
      color: "border-zinc-700 bg-neutral-900 text-zinc-100 shadow-zinc-950",
      icon: "Award"
    },
    {
      id: "microsoft",
      title: "Microsoft Partner",
      badge: "MS-PARTNER-ID",
      description: "Microsoft Partner because of VC status with Bethesda, working within the broader Xbox and Microsoft developer ecosystem.",
      techStack: "Microsoft Dev Center, Xbox Live Integration Guides",
      status: "ACTIVE PARTNER",
      color: "border-blue-900 bg-blue-950/20 text-blue-100 shadow-blue-950/20",
      icon: "Cpu"
    },
    {
      id: "google",
      title: "Google Developer",
      badge: "GDEV-CONSOLES",
      description: "Self-taught weekend warrior developer with access to Google developer functions and publishing tools, learning and expanding capabilities for when ready to deploy.",
      techStack: "Google Play Console, React & Web Tools, Firebase & AI Tools",
      status: "ACCESS GRANTED",
      color: "border-emerald-900 bg-emerald-950/10 text-emerald-100 shadow-emerald-950/10",
      icon: "Code2"
    }
  ];

  const creds = credentials || defaultCreds;

  return (
    <div className="space-y-6">
      <div className="text-center md:text-left space-y-1">
        <h3 className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2 justify-center md:justify-start">
          <Icons.ShieldCheck className="h-5 w-5 text-zinc-400" /> Professional Credentials & Partner Registries
        </h3>
        <p className="text-xs text-zinc-400 font-mono">Cross-platform validation from verified technology and publishing systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {creds.map((cred) => (
          <motion.div
            key={cred.id}
            onClick={() => setActiveCert(activeCert === cred.id ? null : cred.id)}
            className={`cursor-pointer rounded-lg border p-5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${cred.color}`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Blinking registry dot */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] tracking-wider opacity-80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{cred.status}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-white shadow-inner">
                  {cred.icon === "Award" && <Icons.Award className="h-5 w-5" />}
                  {cred.icon === "Cpu" && <Icons.Cpu className="h-5 w-5" />}
                  {cred.icon === "Code2" && <Icons.Code2 className="h-5 w-5" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans">{cred.title}</h4>
                  <span className="text-[10px] font-mono text-zinc-500">{cred.badge}</span>
                </div>
              </div>

              <p className="text-xs opacity-80 leading-relaxed">{cred.description}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 font-mono text-[9px] text-zinc-400 flex items-center justify-between">
              <span>VIEW REQUISITE FRAMEWORKS</span>
              <Icons.ChevronRight className={`h-3 w-3 transition-transform ${activeCert === cred.id ? "rotate-90" : ""}`} />
            </div>

            {activeCert === cred.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-3 pt-3 border-t border-white/10 font-mono text-[10px] text-zinc-300 space-y-1.5"
              >
                <div className="uppercase tracking-widest text-zinc-500 text-[8px]">Primary Integration:</div>
                <div className="bg-black/40 p-2 rounded border border-white/5 text-[10px] break-words">
                  {cred.techStack}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
