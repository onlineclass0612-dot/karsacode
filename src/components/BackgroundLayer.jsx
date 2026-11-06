import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#07090e]">
      {/* 1. Cyber Grid Overlay with Vertical Fade */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* 2. Left Cyan-Blue Ambient Glow (Floating with Framer Motion) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: '30px',
          left: '-70px',
          width: '540px',
          height: '540px',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.48) 0%, rgba(37, 99, 235, 0.22) 40%, transparent 70%)',
          filter: 'blur(55px)',
        }}
        animate={{
          x: [0, 24, 0],
          y: [0, 30, 0],
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 3. Right Purple Ambient Glow (Floating with Framer Motion) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: '20px',
          right: '-80px',
          width: '580px',
          height: '580px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.48) 0%, rgba(168, 85, 247, 0.22) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -26, 0],
          y: [0, -22, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 4. Center Horizon Glow */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          top: '280px',
          width: '780px',
          height: '190px',
          background: 'radial-gradient(ellipse, rgba(2, 132, 199, 0.2) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />

      {/* 5. SVG Vector Graphics (Constellation, Purple Block, Celestial Orbit Arcs) */}
      <svg 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1360px] h-[680px] pointer-events-none"
        viewBox="0 0 1360 680" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Constellation (Nodes & Connecting Line) */}
        <circle cx="280" cy="180" r="4.5" fill="#38bdf8" />
        <circle cx="360" cy="140" r="4.5" fill="#38bdf8" />
        <line x1="280" y1="180" x2="360" y2="140" stroke="#38bdf8" strokeWidth="1.5" opacity="0.45" />

        {/* Left Purple Rounded Block & Cyan Sphere */}
        <rect x="180" y="240" width="70" height="95" rx="12" fill="#8b5cf6" opacity="0.22" />
        <circle cx="255" cy="300" r="6" fill="#38bdf8" filter="drop-shadow(0 0 10px #38bdf8)" />

        {/* Right Celestial Orbit Arcs & Sphere */}
        <ellipse cx="1160" cy="260" rx="160" ry="160" stroke="#a855f7" strokeWidth="1.3" opacity="0.3" />
        <ellipse cx="1160" cy="260" rx="230" ry="230" stroke="#8b5cf6" strokeWidth="1" opacity="0.18" strokeDasharray="6 6" />
        <circle cx="1045" cy="245" r="6" fill="#38bdf8" filter="drop-shadow(0 0 10px #38bdf8)" />
      </svg>
    </div>
  );
}
