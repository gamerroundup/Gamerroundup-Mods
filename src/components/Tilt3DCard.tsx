import React, { useRef, useState } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
  onClick?: () => void;
  id?: string;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  intensity = 10,
  glowColor = 'rgba(168, 85, 247, 0.25)',
  onClick,
  id
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const updateTilt = (clientX: number, clientY: number) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setStyle({
      transform: `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.08s ease-out'
    });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1
    });
  };

  const resetTilt = () => {
    setStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
    });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={onClick}
      onMouseMove={(e) => updateTilt(e.clientX, e.clientY)}
      onMouseLeave={resetTilt}
      onTouchMove={(e) => {
        if (e.touches.length > 0) {
          updateTilt(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchEnd={resetTilt}
      style={style}
      className={`relative will-change-transform ${className}`}
    >
      {/* Dynamic cursor-tracking specular spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(420px circle at ${glare.x}% ${glare.y}%, ${glowColor}, transparent 70%)`
        }}
      />
      {children}
    </div>
  );
};
