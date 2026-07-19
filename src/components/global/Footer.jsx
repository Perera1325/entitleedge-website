import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <Link href="/" className="logo" style={{ color: 'var(--white)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '1.5rem', fontWeight: 800 }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.25)', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
                <Image
                  src="/logo-circle.png"
                  alt="EntitleEdge Advisory Logo"
                  width={44}
                  height={44}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
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
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
