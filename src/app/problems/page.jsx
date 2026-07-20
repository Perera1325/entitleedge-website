"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/ui/StaggerChildren';
import AnimatedBackground from '../../components/ui/AnimatedBackground';
import styles from '../page.module.css';

export const metadata = {
  title: "EOT Claims, Delay Tracking & Programme Support for Contractors",
  description: "Common project problems we help contractors solve. Most programme and claim issues become expensive because they are not tracked early enough.",
};

const problems = [
  {
    problem: "We are delayed but cannot prove why.",
    happens: "Delay events are discussed on site but not recorded or linked back to programme impact.",
    help: "Delay registers, event tracking, programme updates and critical path reviews.",
    icon: "🔴",
    number: "01",
  },
  {
    problem: "Our EOT claim needs stronger support.",
    happens: "The claim exists, but records, programme analysis and cause-effect narrative are weak.",
    help: "EOT support, delay analysis, chronology, supporting documentation and impact assessment.",
    icon: "📄",
    number: "02",
  },
  {
    problem: "Our programme is out of date.",
    happens: "The baseline programme no longer reflects delivery and recovery actions are unclear.",
    help: "Programme updates, recovery programmes, lookahead planning and critical path analysis.",
    icon: "📅",
    number: "03",
  },
  {
    problem: "We do not have a full-time planner.",
    happens: "PMs, CAs or site managers are trying to update programmes while delivering the job.",
    help: "Flexible remote planning support without permanent overhead.",
    icon: "👷",
    number: "04",
  },
  {
    problem: "We are exposed to liquidated damages.",
    happens: "Delays are not linked to excusable events, creating risk at the end of the project.",
    help: "Delay tracking, EOT support, programme evidence and contemporaneous records.",
    icon: "⚠️",
    number: "05",
  },
  {
    problem: "Our reporting is not good enough.",
    happens: "Clients and internal leadership want clearer reporting than the project team can produce.",
    help: "Progress dashboards, executive reports, S-curves, KPIs and monthly reporting.",
    icon: "📊",
    number: "06",
  },
];

export default function ProblemsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <Section background="dark" style={{ padding: '7rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="orbs" theme="dark" />
        {/* Diagonal warning stripe */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(217,154,43,0.02) 0px, rgba(217,154,43,0.02) 2px, transparent 2px, transparent 40px)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(217,154,43,0.12)', border: '1px solid var(--accent)', borderRadius: '50px', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}
          >
            Sound Familiar?
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '1rem', color: 'var(--white)', maxWidth: '700px' }}
          >
            Common project problems we help contractors solve.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ fontSize: '1.125rem', opacity: 0.85, color: 'var(--white)', maxWidth: '650px' }}
          >
            Most programme and claim issues become expensive because they are not tracked early enough. Build the evidence before it is too late.
          </motion.p>
        </div>
      </Section>

      {/* ─── Problems Grid ─── */}
      <Section background="white" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="grid" theme="light" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <StaggerContainer className={styles.grid2} style={{ alignItems: 'stretch' }}>
            {problems.map((item, index) => (
              <StaggerItem key={index}>
                <div style={{
                  background: 'var(--white)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 24px rgba(11,31,51,0.06)',
                  border: '1px solid rgba(11,31,51,0.05)',
                  display: 'flex', flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(11,31,51,0.12)';
                    e.currentTarget.style.borderColor = 'rgba(217,154,43,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(11,31,51,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(11,31,51,0.05)';
                  }}
                >
                  {/* Number watermark */}
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1.5rem',
                    fontSize: '4rem', fontWeight: 900, color: index % 2 === 0 ? 'rgba(217,154,43,0.07)' : 'rgba(11,31,51,0.05)',
                    lineHeight: 1, userSelect: 'none',
                  }}>{item.number}</div>

                  {/* Icon & Problem */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '1.8rem', flexShrink: 0,
                      animation: `floatUp ${3 + index * 0.4}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}>{item.icon}</div>
                    <h3 style={{ marginBottom: 0, fontSize: '1.1rem', lineHeight: 1.4 }}>{item.problem}</h3>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: index % 2 === 0 ? 'rgba(217,154,43,0.2)' : 'rgba(11,31,51,0.08)', marginBottom: '1.25rem' }} />

                  {/* What happens */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <div style={{ width: '12px', height: '2px', background: 'var(--accent)', borderRadius: '1px' }} />
                      <span style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>What Happens</span>
                    </div>
                    <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: 0 }}>{item.happens}</p>
                  </div>

                  {/* How we help */}
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <div style={{ width: '12px', height: '2px', background: 'var(--primary)', borderRadius: '1px' }} />
                      <span style={{ color: 'var(--primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>How We Help</span>
                    </div>
                    <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: 0 }}>{item.help}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ─── CTA Banner ─── */}
      <Section background="dark" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="beams" theme="dark" />
        <div className="container" style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '2rem',
          position: 'relative', zIndex: 1,
        }}>
          <FadeIn>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '24px', height: '2px', background: 'var(--accent)', borderRadius: '1px' }} />
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Next Step</span>
              </div>
              <h3 style={{ margin: 0, color: 'var(--white)', textAlign: 'left', maxWidth: '500px' }}>
                If one of these sounds familiar, it is worth speaking to us.
              </h3>
            </div>
          </FadeIn>
          <Button href="/contact" variant="primary">Book a Call</Button>
        </div>
      </Section>
    </>
  );
}
