import React from 'react';
import Section from '../../components/ui/Section';
import IconCard from '../../components/ui/IconCard';
import Button from '../../components/ui/Button';
import styles from '../page.module.css';

export const metadata = {
  title: "Infrastructure, Rail, Utilities & Building Contractor Support",
  description: "Civil infrastructure project controls and claims support for contractors managing large-scale, complex programs.",
};

export default function IndustriesPage() {
  const PlaceholderIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg>
  );

  return (
    <>
      <Section background="dark" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Industries</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            Supporting contractors across infrastructure and construction sectors.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="container">
          <div className={styles.grid3} style={{ alignItems: 'stretch' }}>
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Roads & Highways"
              description="Programme, reporting, delay tracking, recovery programmes and EOT support for road and highway projects."
            />
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Rail"
              description="Programme controls, possession planning support, delay analysis and claims support for rail networks."
            />
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Utilities"
              description="Water, power, gas, comms and utility interface works where delays and access constraints are common."
            />
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Airports"
              description="Staged works, access constraints, operational interfaces and stakeholder reporting."
            />
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Marine"
              description="Ports, waterfront works and marine infrastructure planning and commercial support."
            />
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Buildings"
              description="Sequencing, contract admin and commercial support for building contractors and subcontractors."
            />
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Water Infrastructure"
              description="Project controls and delay tracking for treatment, pipelines and pump stations."
            />
            <IconCard 
              icon={<PlaceholderIcon />}
              title="Recovery Works"
              description="Fast-moving controls and reporting for emergency and resilience programmes."
            />
          </div>
        </div>
      </Section>

      <Section background="dark" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ margin: 0, color: 'var(--white)' }}>Not sure if your project fits?</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>Send us the project type and we will confirm where we can help.</p>
          </div>
          <Button href="/contact" variant="primary">Send Enquiry</Button>
        </div>
      </Section>
    </>
  );
}
