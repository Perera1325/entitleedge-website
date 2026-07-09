import React from 'react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import styles from '../page.module.css';

export const metadata = {
  title: "EOT Claims, Delay Tracking & Programme Support for Contractors",
  description: "Common project problems we help contractors solve. Most programme and claim issues become expensive because they are not tracked early enough.",
};

export default function ProblemsPage() {
  const problems = [
    {
      problem: "We are delayed but cannot prove why.",
      happens: "Delay events are discussed on site but not recorded or linked back to programme impact.",
      help: "Delay registers, event tracking, programme updates and critical path reviews."
    },
    {
      problem: "Our EOT claim needs stronger support.",
      happens: "The claim exists, but records, programme analysis and cause-effect narrative are weak.",
      help: "EOT support, delay analysis, chronology, supporting documentation and impact assessment."
    },
    {
      problem: "Our programme is out of date.",
      happens: "The baseline programme no longer reflects delivery and recovery actions are unclear.",
      help: "Programme updates, recovery programmes, lookahead planning and critical path analysis."
    },
    {
      problem: "We do not have a full-time planner.",
      happens: "PMs, CAs or site managers are trying to update programmes while delivering the job.",
      help: "Flexible remote planning support without permanent overhead."
    },
    {
      problem: "We are exposed to liquidated damages.",
      happens: "Delays are not linked to excusable events, creating risk at the end of the project.",
      help: "Delay tracking, EOT support, programme evidence and contemporaneous records."
    },
    {
      problem: "Our reporting is not good enough.",
      happens: "Clients and internal leadership want clearer reporting than the project team can produce.",
      help: "Progress dashboards, executive reports, S-curves, KPIs and monthly reporting."
    }
  ];

  return (
    <>
      <Section background="dark" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Common project problems we help contractors solve.</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            Most programme and claim issues become expensive because they are not tracked early enough. Build the evidence before it is too late.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="container">
          <div className={styles.grid2} style={{ alignItems: 'stretch' }}>
            {problems.map((item, index) => (
              <Card key={index} borderTopColor={index % 2 === 0 ? 'accent' : 'primary'} style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{item.problem}</h3>
                
                <h4 style={{ color: 'var(--accent)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>What happens:</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{item.happens}</p>
                
                <h4 style={{ color: 'var(--accent)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>How we help:</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>{item.help}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="dark" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <h3 style={{ margin: 0, color: 'var(--white)', textAlign: 'left' }}>If one of these sounds familiar, it is worth speaking to us.</h3>
          <Button href="/contact" variant="primary">Book a Call</Button>
        </div>
      </Section>
    </>
  );
}
