"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/ui/StaggerChildren';
import AnimatedBackground from '../../components/ui/AnimatedBackground';
import styles from '../page.module.css';

export const metadata = {
  title: "Infrastructure, Rail, Utilities & Building Contractor Support",
  description: "Civil infrastructure project controls and claims support for contractors managing large-scale, complex programs.",
};

const industries = [
  { img: "/images/industry_roads.png", title: "Roads & Highways", desc: "Programme, reporting, delay tracking, recovery programmes and EOT support for road and highway projects.", tag: "Transport" },
  { img: "/images/industry_rail.png", title: "Rail", desc: "Programme controls, possession planning support, delay analysis and claims support for rail networks.", tag: "Transport" },
  { img: "/images/industry_utilities.png", title: "Utilities", desc: "Water, power, gas, comms and utility interface works where delays and access constraints are common.", tag: "Infrastructure" },
  { img: "/images/industry_airports.png", title: "Airports", desc: "Staged works, access constraints, operational interfaces and stakeholder reporting.", tag: "Aviation" },
  { img: "/images/industry_marine.png", title: "Marine", desc: "Ports, waterfront works and marine infrastructure planning and commercial support.", tag: "Marine" },
  { img: "/images/industry_buildings.png", title: "Buildings", desc: "Sequencing, contract admin and commercial support for building contractors and subcontractors.", tag: "Construction" },
  { img: "/images/industry_water.png", title: "Water Infrastructure", desc: "Project controls and delay tracking for treatment, pipelines and pump stations.", tag: "Infrastructure" },
  { img: "/images/industry_recovery.png", title: "Recovery Works", desc: "Fast-moving controls and reporting for emergency and resilience programmes.", tag: "Emergency" },
  { img: "/images/industry_geotechnical.png", title: "Geotechnical", desc: "Earthworks, piling, retaining structures and subsurface engineering project controls.", tag: "Civil" },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <Section background="dark" style={{ padding: '7rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="orbs" theme="dark" />
        {/* Hex grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v30L30 55 5 50V20Z' fill='none' stroke='rgba(217,154,43,0.04)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(217,154,43,0.12)', border: '1px solid var(--accent)', borderRadius: '50px', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}
          >
            Sectors We Serve
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '1rem', color: 'var(--white)' }}
          >
            Industries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ fontSize: '1.125rem', opacity: 0.85, color: 'var(--white)', maxWidth: '600px' }}
          >
            Supporting contractors across infrastructure and construction sectors — wherever complex programmes, delay risk and commercial exposure exist.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
          >
            {['Roads', 'Rail', 'Utilities', 'Airports', 'Marine', 'Buildings', '+More'].map((tag, i) => (
              <span key={i} style={{
                padding: '0.35rem 0.9rem',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50px',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.8rem',
                fontWeight: 500,
                backdropFilter: 'blur(4px)',
              }}>{tag}</span>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ─── Industries Grid ─── */}
      <Section background="white" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="dots" theme="light" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: 700 }}>All Sectors</span>
            </div>
          </FadeIn>
          <StaggerContainer className={styles.grid3} style={{ alignItems: 'stretch' }}>
            {industries.map((ind, i) => (
              <StaggerItem key={i}>
                <div style={{
                  background: 'var(--white)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(11,31,51,0.07)',
                  border: '1px solid rgba(11,31,51,0.05)',
                  display: 'flex', flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(11,31,51,0.14)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(11,31,51,0.07)';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <Image
                      src={ind.img} alt={ind.title} fill
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* gradient on image */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(11,31,51,0.5), transparent)' }} />
                    {/* Tag badge */}
                    <div style={{
                      position: 'absolute', top: '0.75rem', right: '0.75rem',
                      padding: '0.25rem 0.65rem',
                      background: 'rgba(217,154,43,0.9)',
                      borderRadius: '50px',
                      fontSize: '0.7rem', fontWeight: 700, color: '#fff',
                      letterSpacing: '0.5px', textTransform: 'uppercase',
                      backdropFilter: 'blur(4px)',
                    }}>{ind.tag}</div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{ind.title}</h4>
                    <p style={{ color: 'var(--secondary)', fontSize: '0.875rem', marginBottom: 0, flex: 1, lineHeight: 1.6 }}>{ind.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ─── CTA ─── */}
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
              <h3 style={{ margin: '0 0 0.5rem', color: 'var(--white)' }}>Not sure if your project fits?</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>Send us the project type and we will confirm where we can help.</p>
            </div>
          </FadeIn>
          <Button href="/contact" variant="primary">Send Enquiry</Button>
        </div>
      </Section>
    </>
  );
}
