import React from 'react';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import styles from '../page.module.css';

export const metadata = {
  title: "Insights | EntitleEdge Advisory",
  description: "Useful guidance for contractors managing programmes, delays, claims and commercial risk.",
};

export default function InsightsPage() {
  const articles = [
    {
      title: "Why Contractors Lose EOT Claims",
      summary: "Most EOT claims fail because the contractor cannot prove cause, effect and critical path impact.",
      image: "/images/05_Insights_Construction_Oversight.png",
      url: "/docs/why-contractors-lose-eot-claims.pdf"
    },
    {
      title: "The Hidden Cost of Not Updating Your Programme",
      summary: "An outdated programme weakens reporting, recovery planning and entitlement.",
      image: "/images/06_Insights_Delay_Risk_Theme.png",
      url: "/docs/hidden-cost-of-not-updating-programme.pdf"
    },
    {
      title: "When Should a Contractor Bring in Planning or Claims Support?",
      summary: "Early support is usually cheaper than trying to rebuild evidence at the end of the project.",
      image: "/images/07_Insights_Infrastructure_Progress.png",
      url: "/docs/when-should-contractor-bring-in-planning-or-claims-support.pdf"
    }
  ];

  return (
    <>
      <Section background="dark" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Insights</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            Useful guidance for contractors managing programmes, delays, claims and commercial risk.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="container">
          <div className={styles.grid3} style={{ alignItems: 'stretch' }}>
            {articles.map((article, index) => (
              <Card key={index} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div className={styles.imageContainer} style={{ height: '220px', width: '100%' }}>
                  <Image className={styles.imageZoom} src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,31,51,0.8) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h4 style={{ marginBottom: '1rem' }}>{article.title}</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', flexGrow: 1 }}>{article.summary}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>Read article -&gt;</a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="dark" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Download the capability statement</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Enter your email to receive the PDF. Do not add users to a mailing list without permission.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/docs/Capability_Statement.pdf" variant="primary" download>Download PDF</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
