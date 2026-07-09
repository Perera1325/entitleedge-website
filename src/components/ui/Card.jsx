"use client";
import React from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './Card.module.css';

export default function Card({ 
  children, 
  className = '', 
  borderTopColor = 'none',
  animated = true,
  style = {}
}) {
  let borderClass = '';
  if (borderTopColor === 'primary') borderClass = styles.borderTopPrimary;
  if (borderTopColor === 'accent') borderClass = styles.borderTopAccent;
  if (borderTopColor === 'section') borderClass = styles.borderTopSection;

  const cardContent = (
    <div className={`${styles.card} ${borderClass} ${className}`} style={style}>
      {children}
    </div>
  );

  if (animated) {
    return (
      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} transitionSpeed={1500} scale={1.02} style={{ height: '100%' }}>
        {cardContent}
      </Tilt>
    );
  }

  return cardContent;
}
