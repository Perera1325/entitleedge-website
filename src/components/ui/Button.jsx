import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  type = 'button',
  fullWidth = false,
  className = '',
  download = false
}) {
  const btnClass = `${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

  if (href) {
    // If external link or download
    if (href.startsWith('http') || href.startsWith('mailto') || download) {
      return (
        <a href={href} className={btnClass} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} download={download ? true : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={btnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}
