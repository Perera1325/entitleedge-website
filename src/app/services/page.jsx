"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/ui/StaggerChildren';
import AnimatedBackground from '../../components/ui/AnimatedBackground';
import styles from '../page.module.css';

export const metadata = {
  title: "Construction Planning, EOT Claims & Project Controls Services",
  description: "Specialist support across planning, project controls, delay analysis and commercial administration.",
};

const services = [
  {
    img: "/images/02_Services_Construction_Planning.png",
    alt: "Planning & Programming",
    title: "Planning & Programming",
    icon: "📐",
    items: ["Primavera P6 programming","MS Project scheduling","Baseline programme development","Construction sequencing","Resource-loaded programmes","Programme updates","Recovery programmes","Critical path reviews","Lookahead planning"],
    flip: false,
  },
  {
    img: "/images/03_Services_Construction_Programme_Control.png",
    alt: "Delay Analysis",
    title: "Delay Analysis & EOT Support",
    icon: "⏱",
    items: ["Delay event tracking","Delay registers","Cause-and-effect analysis","Critical path impact reviews","Time impact assessments","EOT claim support","Prolongation support","Supporting documentation"],
    flip: true,
  },
  {
    img: "/images/04_Services_Project_Controls_Dashboard.png",
    alt: "Project Controls Dashboard",
    title: "Project Controls & Reporting",
    icon: "📊",
    items: ["Forecasting","Cost tracking","Budget monitoring","S-curves","Progress measurement","Earned value reporting","KPI dashboards","Executive reporting","Power BI reporting"],
    flip: false,
  },
  {
    img: "/images/08_Insights_Team_Collaboration.png",
    alt: "Commercial Administration",
    title: "Commercial & Contract Administration",
    icon: "📋",
    items: ["Variations tracking","Correspondence tracking","Contract notice support","Site record management","Commercial registers","Monthly reporting","Claim support documentation"],
    flip: true,
  },
];

const listItemStyle = {
  marginBottom: '0.6rem',
  paddingLeft: '1.5rem',
  position: 'relative',
  color: 'var(--secondary)',
  fontSize: '0.95rem',
};
const listIconStyle = {
  position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold',
};

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <Section background="dark" style={{ padding: '7rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="orbs" theme="dark" />
        {/* Rotating ring decoration */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          border: '1px solid rgba(217,154,43,0.15)',
          animation: 'rotateSlow 30s linear infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '-30px', right: '-30px',
          width: '300px', height: '300px', borderRadius: '50%',
          border: '1px solid rgba(217,154,43,0.1)',
          animation: 'rotateSlow 20s linear infinite reverse',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(217,154,43,0.12)', border: '1px solid var(--accent)', borderRadius: '50px', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}
          >
            What We Do
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '1rem', color: 'var(--white)', maxWidth: '700px' }}
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: '1.125rem', opacity: 0.85, color: 'var(--white)', maxWidth: '600px' }}
          >
            Specialist support across planning, project controls, delay analysis and commercial administration.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}
          >
            {[
              { value: '4', label: 'Core Services' },
              { value: '10+', label: 'Years Experience' },
              { value: '100%', label: 'Contractor Focused' },
            ].map((stat, i) => (
              <div key={i} style={{ animation: `countUp 0.5s ease forwards`, animationDelay: `${0.5 + i * 0.1}s`, opacity: 0 }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ─── Services List ─── */}
      <Section background="white" style={{ padding: '5rem 0 2rem', position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="dots" theme="light" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {services.map((svc, idx) => (
            <FadeIn key={idx}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: '7rem',
                direction: svc.flip ? 'rtl' : 'ltr',
              }}>
                {/* Image */}
                <div style={{ direction: 'ltr', position: 'relative' }}>
                  <div style={{
                    borderRadius: '20px', overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(11,31,51,0.15)',
                    position: 'relative', height: '380px',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 40px 80px rgba(11,31,51,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(11,31,51,0.15)'; }}
                  >
                    <Image src={svc.img} alt={svc.alt} fill style={{ objectFit: 'cover' }} />
                    {/* accent corner */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(135deg, rgba(217,154,43,0.15) 0%, transparent 50%)',
                      pointerEvents: 'none',
                    }} />
                  </div>
                  {/* floating icon badge */}
                  <div style={{
                    position: 'absolute', top: '-18px', right: '-18px',
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem',
                    boxShadow: '0 8px 24px rgba(217,154,43,0.4)',
                    animation: 'pulseGlow 3s ease-in-out infinite',
                    zIndex: 2,
                  }}>
                    {svc.icon}
                  </div>
                </div>

                {/* Text */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: 700 }}>Service 0{idx + 1}</span>
                  </div>
                  <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{svc.title}</h2>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
                    {svc.items.map((item, i) => (
                      <li key={i} style={listItemStyle}>
                        <span style={listIconStyle}>▸</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="primary">Discuss This Service</Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section background="dark" style={{ textAlign: 'center', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="beams" theme="dark" />
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{
              display: 'inline-block', padding: '0.4rem 1rem',
              background: 'rgba(217,154,43,0.12)', border: '1px solid var(--accent)',
              borderRadius: '50px', color: 'var(--accent)', fontWeight: 600,
              marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase',
            }}>
              Ready to Start?
            </div>
            <h2 style={{ color: 'var(--white)' }}>Need project controls support?</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2.5rem' }}>
              Talk to us about your programme, delay or commercial challenge.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact" variant="primary">Book an Intro Call</Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
