import React from 'react';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import styles from '../page.module.css';

export const metadata = {
  title: "Construction Planning, EOT Claims & Project Controls Services",
  description: "Specialist support across planning, project controls, delay analysis and commercial administration.",
};

export default function ServicesPage() {
  const listItemStyle = {
    marginBottom: '0.75rem',
    paddingLeft: '1.5rem',
    position: 'relative',
    color: 'var(--secondary)'
  };
  const listIconStyle = {
    position: 'absolute',
    left: 0,
    color: 'var(--accent)',
    fontWeight: 'bold'
  };
  const placeholderStyle = {
    background: 'var(--section)',
    padding: '3rem',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: 600,
    color: 'var(--primary)'
  };

  return (
    <>
      <Section background="dark" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Services</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            Specialist support across planning, project controls, delay analysis and commercial administration.
          </p>
        </div>
      </Section>

      <Section background="white" style={{ padding: '4rem 0 0 0' }}>
        <div className="container" style={{ paddingBottom: '4rem' }}>
          {/* Service 1: Image Left, Text Right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', height: '400px' }}>
              <Image src="/images/02_Services_Construction_Planning.png" alt="Planning & Programming" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Planning & Programming</h2>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', fontSize: '1.125rem' }}>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Primavera P6 programming</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> MS Project scheduling</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Baseline programme development</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Construction sequencing</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Resource-loaded programmes</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Programme updates</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Recovery programmes</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Critical path reviews</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Lookahead planning</li>
              </ul>
            </div>
          </div>

          {/* Service 2: Text Left, Image Right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem', direction: 'rtl' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', height: '400px', direction: 'ltr' }}>
              <Image src="/images/03_Services_Construction_Programme_Control.png" alt="Delay Analysis" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ direction: 'ltr' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Delay Analysis & EOT Support</h2>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', fontSize: '1.125rem' }}>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Delay event tracking</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Delay registers</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Cause-and-effect analysis</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Critical path impact reviews</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Time impact assessments</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> EOT claim support</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Prolongation support</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Supporting documentation</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Image Left, Text Right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', height: '400px' }}>
              <Image src="/images/04_Services_Project_Controls_Dashboard.png" alt="Project Controls Dashboard" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Project Controls & Reporting</h2>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', fontSize: '1.125rem' }}>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Forecasting</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Cost tracking</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Budget monitoring</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> S-curves</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Progress measurement</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Earned value reporting</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> KPI dashboards</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Executive reporting</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Power BI reporting</li>
              </ul>
            </div>
          </div>

          {/* Service 4: Text Left, Image Right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', height: '400px', direction: 'ltr' }}>
              <Image src="/images/08_Insights_Team_Collaboration.png" alt="Commercial Administration" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ direction: 'ltr' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Commercial & Contract Administration</h2>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: '2rem', fontSize: '1.125rem' }}>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Variations tracking</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Correspondence tracking</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Contract notice support</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Site record management</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Commercial registers</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Monthly reporting</li>
                <li style={listItemStyle}><span style={listIconStyle}>-</span> Claim support documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="dark" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Need project controls support?</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Button href="/contact" variant="primary">Book an Intro Call</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
