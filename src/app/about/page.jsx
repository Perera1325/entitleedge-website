import React from 'react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/ui/StaggerChildren';
import AnimatedBackground from '../../components/ui/AnimatedBackground';
import { PageHero } from '../../components/ui/PageHero';
import Card from '../../components/ui/Card';
import styles from '../page.module.css';

export const metadata = {
  title: "About EntitleEdge Advisory | Project Controls & Claims Specialists",
  description: "A specialist team focused on programme, entitlement and commercial outcomes. Boutique support for contractors who need senior capability without full-time overhead.",
};



const values = [
  { icon: "🎯", title: "Practical", desc: "Outputs project teams can actually use." },
  { icon: "💼", title: "Commercial", desc: "Time, entitlement, cost and contract risk are always linked." },
  { icon: "⚡", title: "Responsive", desc: "Flexible support when contractors need capability quickly." },
  { icon: "🔍", title: "Evidence-based", desc: "Every recommendation backed by programme data and records." },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <PageHero
        badge="Who We Are"
        title="A specialist team focused on programme, entitlement and commercial outcomes."
        subtitle="Boutique support for contractors who need senior capability without full-time overhead."
        extra={
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%',
            background: 'linear-gradient(to left, rgba(217,154,43,0.04) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
        }
      />

      {/* ─── Mission Statement ─── */}
      <Section background="white" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="grid" theme="light" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{
              maxWidth: '820px',
              padding: '3rem',
              background: 'linear-gradient(135deg, var(--primary) 0%, #1a3a5c 100%)',
              borderRadius: '20px',
              borderLeft: '4px solid var(--accent)',
              boxShadow: '0 30px 60px rgba(11,31,51,0.12)',
              animation: 'pulseGlow 4s ease-in-out infinite',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(217,154,43,0.08)', animation: 'orbFloat1 10s ease-in-out infinite' }} />
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.95)', marginBottom: 0, lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
                "Our work is practical, evidence-based and commercially focused. We help project teams maintain stronger programmes, better records and clearer reporting — so they are better prepared when delays, variations and claims arise."
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>



      {/* ─── Values ─── */}
      <Section background="white" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="grid" theme="light" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: 700 }}>How We Work</span>
            </div>
            <h2 style={{ marginBottom: '3rem' }}>Our principles</h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <Card style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem', animation: `floatUp ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}>{v.icon}</div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{v.title}</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.875rem', marginBottom: 0 }}>{v.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <Section background="dark" style={{ textAlign: 'center', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="beams" theme="dark" />
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Work with specialists who understand your risk.</h2>
            <Button href="/contact" variant="primary">Book an Intro Call</Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
