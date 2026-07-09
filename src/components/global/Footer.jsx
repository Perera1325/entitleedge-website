import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <Link href="/" className="logo" style={{ color: 'var(--white)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 800 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              EntitleEdge <span style={{ color: 'var(--accent)' }}>Advisory</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', maxWidth: '300px' }}>
              Project Controls, Planning & Claims Support for Contractors.
            </p>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Services</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/services">Planning & Programming</Link></li>
              <li><Link href="/services">Delay Analysis & EOT</Link></li>
              <li><Link href="/services">Project Controls</Link></li>
              <li><Link href="/services">Commercial Support</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Industries</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/industries">Roads & Highways</Link></li>
              <li><Link href="/industries">Rail</Link></li>
              <li><Link href="/industries">Utilities</Link></li>
              <li><Link href="/industries">Airports</Link></li>
              <li><Link href="/industries">Buildings</Link></li>
              <li><Link href="/industries">Geotechnical</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul className={styles.footerLinks}>
              <li><a href="mailto:entitleedgeadvisory@gmail.com">entitleedgeadvisory@gmail.com</a></li>

              <li><Link href="/contact">Book a Call</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2026 EntitleEdge Advisory. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
