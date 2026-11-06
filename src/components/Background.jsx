import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#080A12]">
      
      {/* 1. Subtle Technical Grid (CSS Linear-Gradients with Center/Bottom Mask) */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(54, 183, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(54, 183, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
          backgroundPosition: 'center top',
          maskImage: 'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
        }}
      />

      {/* 2. Top-Left Blurred Radial Blue Gradient (Slow Floating) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: '-10%',
          left: '-8%',
          width: 'clamp(400px, 45vw, 680px)',
          height: 'clamp(400px, 45vw, 680px)',
          background: 'radial-gradient(circle, rgba(21, 151, 255, 0.28) 0%, rgba(11, 16, 32, 0.15) 50%, transparent 75%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 3. Bottom-Left Subtle Blue Ambient Glow */}
      <motion.div
        className="absolute rounded-full hidden md:block"
        style={{
          bottom: '5%',
          left: '-5%',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(21, 151, 255, 0.14) 0%, rgba(11, 16, 32, 0.08) 55%, transparent 75%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 4. Top-Right Blurred Radial Violet/Purple Gradient (Slow Floating) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: '-12%',
          right: '-8%',
          width: 'clamp(420px, 48vw, 720px)',
          height: 'clamp(420px, 48vw, 720px)',
          background: 'radial-gradient(circle, rgba(112, 72, 255, 0.26) 0%, rgba(168, 85, 247, 0.16) 45%, transparent 75%)',
          filter: 'blur(95px)',
        }}
        animate={{
          x: [0, -35, 0],
          y: [0, 30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 5. Bottom-Right Subtle Purple Ambient Glow */}
      <motion.div
        className="absolute rounded-full hidden md:block"
        style={{
          bottom: '2%',
          right: '-6%',
          width: '540px',
          height: '540px',
          background: 'radial-gradient(circle, rgba(112, 72, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 75%)',
          filter: 'blur(110px)',
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 6. Center Subtle Aurora Horizon Light (Very soft, non-intrusive) */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          top: '320px',
          width: 'min(900px, 90vw)',
          height: '220px',
          background: 'radial-gradient(ellipse at center, rgba(21, 151, 255, 0.12) 0%, rgba(112, 72, 255, 0.08) 50%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />

      {/* 7. SVG Geometric Circles, Orbital Lines & Glowing Nodes */}
      <svg 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[850px] pointer-events-none select-none"
        viewBox="0 0 1440 850" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue Node Glow Filter */}
          <filter id="glowBlue" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Purple Node Glow Filter */}
          <filter id="glowPurple" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- Left Geometric Elements (Semi-transparent circle + Orbital Line + Nodes) --- */}
        <g className="opacity-70 md:opacity-100">
          {/* Large Semi-Transparent Circular Shape */}
          <circle 
            cx="240" 
            cy="280" 
            r="160" 
            stroke="rgba(54, 183, 255, 0.12)" 
            strokeWidth="1.2" 
            fill="rgba(21, 151, 255, 0.015)" 
          />

          {/* Curved Outer Orbital Line */}
          <path 
            d="M 120 180 A 190 190 0 0 1 380 380" 
            stroke="rgba(54, 183, 255, 0.22)" 
            strokeWidth="1" 
            strokeDasharray="4 6"
          />

          {/* Thin Linear Connection */}
          <line 
            x1="240" y1="120" 
            x2="350" y2="180" 
            stroke="rgba(54, 183, 255, 0.25)" 
            strokeWidth="1" 
          />

          {/* Glowing Blue Nodes */}
          <circle cx="240" cy="120" r="4" fill="#36B7FF" filter="url(#glowBlue)" />
          <circle cx="350" cy="180" r="5" fill="#1597FF" filter="url(#glowBlue)" />
          <circle cx="380" cy="380" r="3.5" fill="#36B7FF" filter="url(#glowBlue)" />
        </g>

        {/* --- Right Geometric Elements (Concentric Circles + Orbital Lines + Purple/Blue Nodes) --- */}
        <g className="opacity-70 md:opacity-100">
          {/* Large Semi-Transparent Violet Circle */}
          <circle 
            cx="1180" 
            cy="260" 
            r="170" 
            stroke="rgba(112, 72, 255, 0.16)" 
            strokeWidth="1.2" 
            fill="rgba(112, 72, 255, 0.018)" 
          />

          {/* Outer Orbital Ellipse */}
          <ellipse 
            cx="1180" 
            cy="260" 
            rx="240" 
            ry="240" 
            stroke="rgba(168, 85, 247, 0.12)" 
            strokeWidth="1" 
            strokeDasharray="6 8" 
          />

          {/* Inner Sweeping Orbital Arc */}
          <path 
            d="M 1020 220 A 170 170 0 0 1 1310 370" 
            stroke="rgba(168, 85, 247, 0.3)" 
            strokeWidth="1.2" 
          />

          {/* Glowing Purple & Blue Nodes on Orbit */}
          <circle cx="1020" cy="220" r="5.5" fill="#36B7FF" filter="url(#glowBlue)" />
          <circle cx="1270" cy="140" r="4" fill="#A855F7" filter="url(#glowPurple)" />
          <circle cx="1310" cy="370" r="4.5" fill="#7048FF" filter="url(#glowPurple)" />
        </g>
      </svg>

      {/* 8. Center Mask for High Text Contrast and Readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 35%, transparent 20%, rgba(8, 10, 18, 0.6) 80%, #080A12 100%)',
        }}
      />
    </div>
  );
}
