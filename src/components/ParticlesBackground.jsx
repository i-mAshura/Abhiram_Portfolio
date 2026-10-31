'use client';

import React from 'react';

export default function ParticlesBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Aurora Glow Lights (React Bits style) */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.05) 45%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 65%)',
          filter: 'blur(90px)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 65%)',
          filter: 'blur(90px)',
          borderRadius: '50%',
        }}
      />

      {/* Subtle Dot Pattern Grid with radial fade mask */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.45,
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, transparent 80%)',
        }}
      >
        <defs>
          <pattern
            id="reactbits-dot-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1" fill="currentColor" style={{ color: 'var(--text-secondary)' }} opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#reactbits-dot-grid)" />
      </svg>
    </div>
  );
}
