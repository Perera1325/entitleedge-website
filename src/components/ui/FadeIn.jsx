"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const directions = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.48, delay: delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
