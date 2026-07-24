"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import IconCard from '../components/ui/IconCard';
import Button from '../components/ui/Button';
import FadeIn from '../components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/ui/StaggerChildren';
import styles from './page.module.css';

export default function Home() {
  const heroRef = useRef(null);

  // Subtle parallax: hero bg zooms gently as user scrolls past
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgScale = useTransform(heroScroll, [0, 1], [1, 1.1]);
  const heroBgY = useTransform(heroScroll, [0, 1], ['0%', '8%']);

  return (
    <>
      {/* ─── Hero Section ─── */}
      <Section
        background="dark"
        className={styles.heroSection}
        style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: 0 }}
      >
        <div ref={heroRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          {/* Parallax video background */}
          <motion.div
            style={{ scale: heroBgScale, y: heroBgY, position: 'absolute', inset: 0 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
          {/* Premium Gradient Overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, rgba(11, 31, 51, 0.85) 45%, rgba(11, 31, 51, 0.2) 100%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '8rem 2rem' }}>
          <div style={{ maxWidth: '850px' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(217, 154, 43, 0.1)', border: '1px solid var(--accent)', borderRadius: '50px', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase' }}
            >
              EntitleEdge Advisory
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ marginBottom: '1.5rem', color: 'var(--white)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
            >
              Project Controls, Planning &amp; Claims Support <span style={{ color: 'var(--accent)' }}>for Contractors</span>
            </motion.h1>

            {/* Accent subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 600, color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '0.5px' }}
            >
              Protect your programme. Protect your entitlement. Protect your profit.
            </motion.p>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontSize: '1.125rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.9)', maxWidth: '700px', lineHeight: 1.6 }}
            >
              We help civil, infrastructure and construction contractors maintain stronger programmes, track delays, protect EOT entitlement and improve commercial outcomes - without the cost of a full-time planner or claims team.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Button href="/contact" variant="primary">Book a 20-Minute Intro Call</Button>
              <Button href="/docs/Capability_Statement.pdf" variant="light" download>Download Capability Statement</Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ─── Pain Statement ─── */}
      <Section background="white">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>When project records are weak, contractors lose leverage.</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
                Delays, variations and scope changes are part of construction. The problem is not always the delay itself - it is being unable to prove cause, effect, entitlement and impact when it matters.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className={styles.grid3}>
            <StaggerItem>
              <Card borderTopColor="accent">
                <h4>Cannot prove delay</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Outdated programmes, missed delay events and unclear critical path impact.</p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card borderTopColor="primary">
                <h4>EOT exposure</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Weak records can place contractors at risk of rejected EOT claims and LDs.</p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card borderTopColor="section">
                <h4>No full-time planner</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Flexible senior support without permanent overhead.</p>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* ─── How We Help ─── */}
      <Section background="light">
        <div className="container">
          <FadeIn>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How we help</h2>
          </FadeIn>
          <StaggerContainer className={styles.grid4}>
            <StaggerItem>
              <IconCard
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
                title="Planning &amp; Programming"
                description="Baseline programmes, updates, recovery plans and critical path reviews."
              />
            </StaggerItem>
            <StaggerItem>
              <IconCard
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                title="Delay Analysis &amp; EOT"
                description="Delay registers, cause-effect analysis and EOT support."
              />
            </StaggerItem>
            <StaggerItem>
              <IconCard
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>}
                title="Project Controls &amp; Reporting"
                description="Forecasting, dashboards, S-curves, earned value and KPI reporting."
              />
            </StaggerItem>
            <StaggerItem>
              <IconCard
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
                title="Commercial &amp; Contract Admin"
                description="Variation support, correspondence tracking and commercial registers."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* ─── Why Contractors Engage Us ─── */}
      <Section background="white">
        <div className="container">
          <FadeIn>
            <h2 style={{ marginBottom: '3rem' }}>Built for contractors who need practical support, not more bureaucracy.</h2>
          </FadeIn>
          <StaggerContainer className={styles.grid4}>
            <StaggerItem>
              <div>
                <h4 style={{ color: 'var(--primary)' }}>Protect entitlement</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Programme evidence and records for EOT and delay claims.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <h4 style={{ color: 'var(--primary)' }}>Reduce LD risk</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Identify programme risk early and support recovery action.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <h4 style={{ color: 'var(--primary)' }}>Improve reporting</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Dashboards and progress reporting for principals and internal teams.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <h4 style={{ color: 'var(--primary)' }}>Flexible senior support</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Access planning and claims capability without permanent hire.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>



      {/* ─── Final CTA ─── */}
      <Section background="dark" style={{ textAlign: 'center', padding: '8rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn>
            <h2>Have a programme, delay or commercial issue?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              Send a short message and we will let you know where we can assist.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact" variant="primary">Book an Intro Call</Button>
              <Button href="/docs/Capability_Statement.pdf" variant="light" download>Download Capability Statement</Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
