"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../ui/AnimatedBackground';

export function PageHero({ badge, title, subtitle, children, variant = "orbs", extra }) {
  return (
    <div style={{ padding: '7rem 0 6rem', position: 'relative', overflow: 'hidden', background: 'var(--primary)' }}>
      <AnimatedBackground variant={variant} theme="dark" />
      {extra}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(217,154,43,0.12)', border: '1px solid var(--accent)', borderRadius: '50px', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}
          >
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '1rem', color: 'var(--white)', maxWidth: '750px', lineHeight: 1.15 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ fontSize: '1.125rem', opacity: 0.85, color: 'var(--white)', maxWidth: '640px' }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </div>
  );
}
