import React from 'react';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import styles from '../page.module.css';

export const metadata = {
  title: "About EntitleEdge Advisory | Project Controls & Claims Specialists",
  description: "A specialist team focused on programme, entitlement and commercial outcomes. Boutique support for contractors who need senior capability without full-time overhead.",
};

export default function AboutPage() {
  return (
    <>
      <Section background="dark" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1.5rem', color: 'var(--white)' }}>A specialist team focused on programme, entitlement and commercial outcomes.</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            Boutique support for contractors who need senior capability without full-time overhead.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="container">
          <p style={{ fontSize: '1.125rem', maxWidth: '800px', marginBottom: '4rem', color: 'var(--secondary)' }}>
            Our work is practical, evidence-based and commercially focused. We help project teams maintain stronger programmes, better records and clearer reporting so they are better prepared when delays, variations and claims arise.
          </p>

          <div className={styles.grid2} style={{ alignItems: 'stretch' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div className={styles.founderAvatar}></div>
                <div>
                  <h3 style={{ margin: 0 }}>Taarish Punwani</h3>
                  <p className={styles.founderRole}>Project Controls & Commercial Specialist</p>
                </div>
              </div>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, color: 'var(--secondary)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>- Infrastructure project controls</li>
                <li style={{ marginBottom: '0.5rem' }}>- Forecasting and cost control</li>
                <li style={{ marginBottom: '0.5rem' }}>- Governance and executive reporting</li>
                <li style={{ marginBottom: '0.5rem' }}>- JV reporting and invoicing</li>
                <li style={{ marginBottom: '0.5rem' }}>- Power BI dashboards</li>
                <li style={{ marginBottom: '0.5rem' }}>- Commercial management</li>
              </ul>
            </Card>

            <Card style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div className={styles.founderAvatar}></div>
                <div>
                  <h3 style={{ margin: 0 }}>Ashan B</h3>
                  <p className={styles.founderRole}>Project Controls, Commercial & QS Specialist</p>
                </div>
              </div>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, color: 'var(--secondary)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>- 10+ years international experience</li>
                <li style={{ marginBottom: '0.5rem' }}>- Primavera P6 and planning</li>
                <li style={{ marginBottom: '0.5rem' }}>- Critical path analysis</li>
                <li style={{ marginBottom: '0.5rem' }}>- Delay analysis and EOT claims</li>
                <li style={{ marginBottom: '0.5rem' }}>- Quantity surveying</li>
                <li style={{ marginBottom: '0.5rem' }}>- Contract administration</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>How we work</h2>
          <div className={styles.grid3} style={{ alignItems: 'stretch' }}>
            <Card>
              <h4 style={{ color: 'var(--primary)' }}>Practical</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Outputs project teams can actually use.</p>
            </Card>
            <Card>
              <h4 style={{ color: 'var(--primary)' }}>Commercial</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Time, entitlement, cost and contract risk are always linked.</p>
            </Card>
            <Card>
              <h4 style={{ color: 'var(--primary)' }}>Responsive</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: 0 }}>Flexible support when contractors need capability quickly.</p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
