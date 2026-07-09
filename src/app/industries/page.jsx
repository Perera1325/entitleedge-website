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
              imageSrc="/images/industry_roads.png"
              title="Roads & Highways"
              description="Programme, reporting, delay tracking, recovery programmes and EOT support for road and highway projects."
            />
            <IconCard 
              imageSrc="/images/industry_rail.png"
              title="Rail"
              description="Programme controls, possession planning support, delay analysis and claims support for rail networks."
            />
            <IconCard 
              imageSrc="/images/industry_utilities.png"
              title="Utilities"
              description="Water, power, gas, comms and utility interface works where delays and access constraints are common."
            />
            <IconCard 
              imageSrc="/images/industry_airports.png"
              title="Airports"
              description="Staged works, access constraints, operational interfaces and stakeholder reporting."
            />
            <IconCard 
              imageSrc="/images/industry_marine.png"
              title="Marine"
              description="Ports, waterfront works and marine infrastructure planning and commercial support."
            />
            <IconCard 
              imageSrc="/images/industry_buildings.png"
              title="Buildings"
              description="Sequencing, contract admin and commercial support for building contractors and subcontractors."
            />
            <IconCard 
              imageSrc="/images/industry_water.png"
              title="Water Infrastructure"
              description="Project controls and delay tracking for treatment, pipelines and pump stations."
            />
            <IconCard 
              imageSrc="/images/industry_recovery.png"
              title="Recovery Works"
              description="Fast-moving controls and reporting for emergency and resilience programmes."
            />
            <IconCard 
              imageSrc="/images/industry_geotechnical.png"
              title="Geotechnical"
              description="Earthworks, piling, retaining structures and subsurface engineering project controls."
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
