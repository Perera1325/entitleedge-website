"use client";
import React from 'react';

/**
 * AnimatedBackground
 * variant: "orbs" | "grid" | "dots" | "beams"
 * theme: "dark" | "light"
 */
export default function AnimatedBackground({ variant = "orbs", theme = "dark", style = {} }) {
  if (variant === "orbs") {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, ...style }}>
        {/* Orb 1 — large amber */}
        <div style={{
          position: 'absolute', top: '-15%', right: '-10%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(217,154,43,0.18) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(217,154,43,0.12) 0%, transparent 70%)',
          animation: 'orbFloat1 12s ease-in-out infinite',
          filter: 'blur(2px)',
        }} />
        {/* Orb 2 — navy */}
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-8%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(26,58,92,0.6) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(11,31,51,0.08) 0%, transparent 70%)',
          animation: 'orbFloat2 15s ease-in-out infinite',
          filter: 'blur(1px)',
        }} />
        {/* Orb 3 — small accent */}
        <div style={{
          position: 'absolute', top: '40%', left: '25%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(217,154,43,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(217,154,43,0.07) 0%, transparent 70%)',
          animation: 'orbFloat3 18s ease-in-out infinite',
          filter: 'blur(2px)',
        }} />
        {/* Thin accent line */}
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          width: '1px', height: '100%',
          background: theme === 'dark'
            ? 'linear-gradient(to bottom, transparent, rgba(217,154,43,0.15), transparent)'
            : 'linear-gradient(to bottom, transparent, rgba(217,154,43,0.1), transparent)',
          animation: 'lineGlow 6s ease-in-out infinite',
        }} />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, ...style }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: theme === 'dark' ? 0.07 : 0.04 }}>
          <defs>
            <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={theme === 'dark' ? '#D99A2B' : '#0B1F33'} strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
        {/* Glowing corner accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '400px', height: '400px',
          background: 'radial-gradient(circle at top right, rgba(217,154,43,0.12) 0%, transparent 60%)',
          animation: 'orbFloat1 10s ease-in-out infinite',
        }} />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, ...style }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: theme === 'dark' ? 0.12 : 0.06 }}>
          <defs>
            <pattern id="dotsPattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill={theme === 'dark' ? '#D99A2B' : '#0B1F33'}/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsPattern)" />
        </svg>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: '500px', height: '300px',
          background: 'radial-gradient(ellipse at bottom left, rgba(217,154,43,0.1) 0%, transparent 70%)',
          animation: 'orbFloat2 14s ease-in-out infinite',
        }} />
      </div>
    );
  }

  if (variant === "beams") {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, ...style }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: 0, bottom: 0,
            left: `${10 + i * 20}%`,
            width: '1px',
            background: `linear-gradient(to bottom, transparent 0%, rgba(217,154,43,${0.04 + i * 0.015}) 40%, rgba(217,154,43,${0.04 + i * 0.015}) 60%, transparent 100%)`,
            animation: `beamFade ${5 + i * 1.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }} />
        ))}
        <div style={{
          position: 'absolute', top: '-30%', left: '-10%',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,154,43,0.1) 0%, transparent 60%)',
          animation: 'orbFloat1 16s ease-in-out infinite',
          filter: 'blur(40px)',
        }} />
      </div>
    );
  }

  return null;
}
