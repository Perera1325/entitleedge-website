import React from 'react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/ui/StaggerChildren';
import AnimatedBackground from '../../components/ui/AnimatedBackground';
import { PageHero } from '../../components/ui/PageHero';
import styles from '../page.module.css';

export const metadata = {
  title: "About EntitleEdge Advisory | Project Controls & Claims Specialists",
  description: "A specialist team focused on programme, entitlement and commercial outcomes. Boutique support for contractors who need senior capability without full-time overhead.",
};

const team = [
  {
    name: "Narotum Dharamdas",
    role: "Project Controls & Commercial Specialist",
    color: "#D99A2B",
    initials: "ND",
    skills: [
      "Infrastructure project controls",
      "Forecasting and cost control",
      "Governance and executive reporting",
      "JV reporting and invoicing",
      "Power BI dashboards",
      "Commercial management",
    ],
  },
  {
    name: "Ash B",
    role: "Planning, Delay & QS Specialist",
    color: "#1a3a5c",
    initials: "AB",
    skills: [
      "10+ years international experience",
      "Primavera P6 and planning",
      "Critical path analysis",
      "Delay analysis and EOT claims",
      "Quantity surveying",
      "Contract administration",
    ],
  },
];

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

      {/* ─── Team ─── */}
      <Section background="light" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground variant="dots" theme="light" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: 700 }}>The Team</span>
            </div>
            <h2 style={{ marginBottom: '3rem' }}>Meet the specialists</h2>
          </FadeIn>
          <StaggerContainer className={styles.grid2} style={{ alignItems: 'stretch' }}>
            {team.map((member, i) => (
              <StaggerItem key={i}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '20px', padding: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}88 100%)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.4rem', fontWeight: 800, color: '#fff',
                      flexShrink: 0,
                      boxShadow: `0 6px 20px ${member.color}40`,
                    }}>
                      {member.initials}
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{member.name}</h3>
                      <p style={{ margin: 0, color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>{member.role}</p>
                    </div>
                  </div>
                  <div style={{ height: '1px', background: 'linear-gradient(to right, var(--accent), transparent)', marginBottom: '1.5rem', opacity: 0.4 }} />
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, color: 'var(--secondary)', fontSize: '0.9rem', flex: 1 }}>
                    {member.skills.map((sk, j) => (
                      <li key={j} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>▸</span> {sk}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
