import React, { useEffect, useState } from "react";

export default function TechGridBackground() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate star coordinates
    const generatedStars = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 8,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-neutral-950 text-white">
      {/* Absolute Dark Space Background */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(20,24,33,0.3)_0%,rgba(10,10,12,1)_100%]" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Diagonal scan line animation */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 4px, 6px 100%"
        }}
      />

      {/* Floating Space Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-80 animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing atmospheric circles */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-zinc-800/15 blur-[150px] pointer-events-none" />
    </div>
  );
}
