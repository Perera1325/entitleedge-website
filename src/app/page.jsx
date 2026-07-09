import React from 'react';
import Image from 'next/image';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import IconCard from '../components/ui/IconCard';
import Button from '../components/ui/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="dark" className={styles.heroSection} style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: 0 }}>
        {/* Massive Background Image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Image 
            src="/images/01_Homepage_Hero_Infrastructure_Surveying.png" 
            alt="Infrastructure Surveying" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Premium Gradient Overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, rgba(11, 31, 51, 0.85) 45%, rgba(11, 31, 51, 0.2) 100%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '8rem 2rem' }}>
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(217, 154, 43, 0.1)', border: '1px solid var(--accent)', borderRadius: '50px', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              EntitleEdge Advisory
            </div>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--white)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
              Project Controls, Planning & Claims Support <span style={{ color: 'var(--accent)' }}>for Contractors</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 600, color: 'var(--accent)', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
              Protect your programme. Protect your entitlement. Protect your profit.
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.9)', maxWidth: '700px', lineHeight: 1.6 }}>
              We help civil, infrastructure and construction contractors maintain stronger programmes, track delays, protect EOT entitlement and improve commercial outcomes - without the cost of a full-time planner or claims team.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/contact" variant="primary">Book a 20-Minute Intro Call</Button>
              <Button href="/docs/Capability_Statement.pdf" variant="light" download>Download Capability Statement</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Pain Statement */}
      <Section background="white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>When project records are weak, contractors lose leverage.</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              Delays, variations and scope changes are part of construction. The problem is not always the delay itself - it is being unable to prove cause, effect, entitlement and impact when it matters.
            </p>
          </div>
          
          <div className={styles.grid3}>
            <Card borderTopColor="accent">
              <h4>Cannot prove delay</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Outdated programmes, missed delay events and unclear critical path impact.</p>
            </Card>
            <Card borderTopColor="primary">
              <h4>EOT exposure</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Weak records can place contractors at risk of rejected EOT claims and LDs.</p>
            </Card>
            <Card borderTopColor="section">
              <h4>No full-time planner</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Flexible senior support without permanent overhead.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* How we help */}
      <Section background="light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How we help</h2>
          <div className={styles.grid4}>
            <IconCard 
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
              title="Planning & Programming"
              description="Baseline programmes, updates, recovery plans and critical path reviews."
            />
            <IconCard 
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
              title="Delay Analysis & EOT"
              description="Delay registers, cause-effect analysis and EOT support."
            />
            <IconCard 
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>}
              title="Project Controls & Reporting"
              description="Forecasting, dashboards, S-curves, earned value and KPI reporting."
            />
            <IconCard 
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
              title="Commercial & Contract Admin"
              description="Variation support, correspondence tracking and commercial registers."
            />
          </div>
        </div>
      </Section>

      {/* Why contractors engage us */}
      <Section background="white">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Built for contractors who need practical support, not more bureaucracy.</h2>
          <div className={styles.grid4}>
            <div>
              <h4 style={{ color: 'var(--primary)' }}>Protect entitlement</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Programme evidence and records for EOT and delay claims.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)' }}>Reduce LD risk</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Identify programme risk early and support recovery action.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)' }}>Improve reporting</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Dashboards and progress reporting for principals and internal teams.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)' }}>Flexible senior support</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>Access planning and claims capability without permanent hire.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Founder Credibility */}
      <Section background="light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Led by project controls, commercial and claims specialists.</h2>
          <div className={styles.grid2}>
            <Card style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div>
                  <h4>Narotum Dharamdas</h4>
                  <p className={styles.founderRole}>Project Controls & Commercial Specialist</p>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>
                    Infrastructure project controls, forecasting, cost control, governance reporting and Power BI.
                  </p>
                </div>
              </div>
            </Card>
            <Card style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div>
                  <h4>Ashan B</h4>
                  <p className={styles.founderRole}>Planning Delay Expert & QS Specialist</p>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>
                    Planning, Primavera P6, delay analysis, EOT claims, QS and contract administration.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="dark" style={{ textAlign: 'center', padding: '8rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Have a programme, delay or commercial issue?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Send a short message and we will let you know where we can assist.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary">Book an Intro Call</Button>
            <Button href="/docs/Capability_Statement.pdf" variant="light" download>Download Capability Statement</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
