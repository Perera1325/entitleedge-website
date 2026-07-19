"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Problems', path: '/problems' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoCircle}>
            <Image
              src="/logo-circle.png"
              alt="EntitleEdge Advisory Logo"
              width={44}
              height={44}
              className={styles.logoImg}
              priority
            />
          </div>
          EntitleEdge <span>Advisory</span>
        </Link>
        
        <nav className={styles.nav}>
          <button 
            className={styles.hamburger} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineActive1 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineActive2 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineActive3 : ''}`}></span>
          </button>
          
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className={pathname === link.path ? styles.active : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* We'll use a global button class here later, but standard markup for now */}
          <Link href="/contact" className={`btn btn-primary ${styles.navBtn}`}>
            Book Intro Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
