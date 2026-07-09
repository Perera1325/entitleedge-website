import React from 'react';
import FadeIn from './FadeIn';
import styles from './Section.module.css';

export default function Section({ 
  children, 
  background = 'white', // 'white', 'light', 'dark'
  className = '',
  id,
  style = {}
}) {
  let bgClass = '';
  if (background === 'light') bgClass = styles.bgLight;
  if (background === 'dark') bgClass = styles.bgDark;

  return (
    <section id={id} className={`${styles.section} ${bgClass} ${className}`} style={style}>
      <FadeIn>
        {children}
      </FadeIn>
    </section>
  );
}
