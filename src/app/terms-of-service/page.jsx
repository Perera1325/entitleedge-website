import React from 'react';
import Section from '../../components/ui/Section';
import styles from '../privacy-policy/Legal.module.css';

export const metadata = {
  title: "Terms of Service | EntitleEdge Advisory",
  description: "Website terms for visitors, enquiries and downloadable material.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Section background="dark" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Terms of Service</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            Website terms for visitors, enquiries and downloadable material.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="container">
          <div className={styles.legalLayout}>
            <aside className={styles.sidebar}>
              <div className={styles.stickyToc}>
                <h4 style={{ marginBottom: '1rem' }}>On this page</h4>
                <ul className={styles.tocList}>
                  <li><a href="#about">About these terms</a></li>
                  <li><a href="#general-info">Website information is general only</a></li>
                  <li><a href="#no-client-rel">No client relationship</a></li>
                  <li><a href="#services">Services described on the website</a></li>
                  <li><a href="#use">Your use of the website</a></li>
                  <li><a href="#info-provided">Information you provide</a></li>
                  <li><a href="#materials">Downloads</a></li>
                  <li><a href="#ip">Intellectual property</a></li>
                  <li><a href="#third-party">Third-party links</a></li>
                  <li><a href="#no-guarantee">No guarantee of outcomes</a></li>
                  <li><a href="#laws">Consumer and business laws</a></li>
                  <li><a href="#liability">Limitation of liability</a></li>
                  <li><a href="#indemnity">Indemnity</a></li>
                  <li><a href="#privacy">Privacy</a></li>
                  <li><a href="#changes">Changes</a></li>
                  <li><a href="#governing-law">Governing law</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </aside>
            <main className={styles.content}>
              <p style={{ color: 'var(--secondary)', marginBottom: '2.5rem', fontStyle: 'italic' }}>Last updated: July 2026</p>

              <section id="about" className={styles.legalSection}>
                <h3>1. About these terms</h3>
                <p>These Terms of Service govern your use of this website operated by EntitleEdge Advisory.</p>
                <p>By accessing or using this website, you agree to these terms. If you do not agree, please do not use the website.</p>
                <p>These terms apply to website use only. They do not govern any professional services engagement unless expressly incorporated into a signed proposal, engagement letter, consultancy agreement or other written contract.</p>
              </section>

              <section id="general-info" className={styles.legalSection}>
                <h3>2. Website information is general only</h3>
                <p>The information on this website is provided for general information and business development purposes only. It is not legal advice, contractual advice, engineering certification, expert evidence, dispute advice or a substitute for advice based on your specific project, contract and circumstances.</p>
                <p>You should obtain appropriate professional advice before relying on any information for legal, contractual, commercial, claims, dispute or project decision-making purposes.</p>
              </section>

              <section id="no-client-rel" className={styles.legalSection}>
                <h3>3. No client relationship until formally engaged</h3>
                <p>Contacting us through the website, downloading a capability statement, sending project information or arranging an introductory discussion does not create a client relationship, retainer, duty of care or obligation to provide services.</p>
                <p>A client relationship only begins when we have accepted an engagement in writing and the relevant scope, fees, responsibilities and terms have been agreed.</p>
              </section>

              <section id="services" className={styles.legalSection}>
                <h3>4. Services described on the website</h3>
                <p>The website may describe services such as project controls, planning, programme support, delay analysis support, EOT support, reporting, commercial support and contract administration support.</p>
                <p>Service descriptions are indicative only. Availability, scope, deliverables, exclusions, assumptions, reliance and liability will be confirmed in a written engagement document before any work begins.</p>
                <p>Unless expressly agreed in writing, we do not provide legal advice, act as solicitors, provide adjudication or litigation representation, or provide independent expert witness evidence.</p>
              </section>

              <section id="use" className={styles.legalSection}>
                <h3>5. Your use of the website</h3>
                <p>You agree not to:</p>
                <ul>
                  <li>use the website for unlawful, misleading, fraudulent or harmful purposes;</li>
                  <li>interfere with the operation, security or availability of the website;</li>
                  <li>attempt to gain unauthorised access to any system, account or data;</li>
                  <li>upload viruses, malicious code or harmful material;</li>
                  <li>copy, scrape or reproduce website content except as permitted by law; or</li>
                  <li>submit information that you are not authorised to provide.</li>
                </ul>
              </section>

              <section id="info-provided" className={styles.legalSection}>
                <h3>6. Information you provide to us</h3>
                <p>You are responsible for ensuring that information you provide through the website is accurate, lawful and not confidential to another person or organisation unless you are authorised to disclose it.</p>
                <p>Please do not send us confidential project documents, privileged material, commercially sensitive information or personal information about others unless we have agreed a secure process for receiving it.</p>
                <p>We may choose not to respond to enquiries that are incomplete, inappropriate, outside our capability, conflicted or otherwise unsuitable.</p>
              </section>

              <section id="materials" className={styles.legalSection}>
                <h3>7. Capability statements and downloadable material</h3>
                <p>Capability statements, brochures, guides and other downloadable material are provided for general information only. They do not constitute an offer, proposal, warranty, professional advice or binding commitment to provide services.</p>
                <p>You may share our capability statement within your organisation for the purpose of considering our services. You may not modify, reproduce, publish, sell or commercially exploit our material without written permission.</p>
              </section>

              <section id="ip" className={styles.legalSection}>
                <h3>8. Intellectual property</h3>
                <p>Unless otherwise stated, all website content, including text, graphics, layouts, documents, service descriptions, images, icons, branding and downloadable materials, is owned by us or licensed to us.</p>
                <p>You may view and download website content for personal or internal business evaluation purposes. You must not copy, reproduce, adapt, distribute or use our content for commercial purposes without our written consent.</p>
              </section>

              <section id="third-party" className={styles.legalSection}>
                <h3>9. Third-party links and tools</h3>
                <p>The website may include links to third-party websites, platforms, documents, booking tools or other resources. We are not responsible for the content, security, accuracy, privacy practices or availability of third-party websites or services.</p>
                <p>Your use of third-party services may be subject to their own terms and privacy policies.</p>
              </section>

              <section id="no-guarantee" className={styles.legalSection}>
                <h3>10. No guarantee of outcomes</h3>
                <p>Project controls, planning, claims support and commercial support depend on project records, contract terms, programme quality, factual circumstances, stakeholder conduct and many other factors.</p>
                <p>We do not guarantee that use of our website or any future services will result in approval of claims, EOTs, variations, payment recovery, avoidance of liquidated damages, dispute success or any particular commercial outcome.</p>
              </section>

              <section id="laws" className={styles.legalSection}>
                <h3>11. Australian and New Zealand consumer and business laws</h3>
                <p>Nothing in these terms excludes, restricts or modifies any guarantee, right, remedy or liability that cannot lawfully be excluded under applicable Australian or New Zealand law.</p>
                <p>To the maximum extent permitted by law, and subject to any non-excludable rights, we exclude liability for loss arising from your use of, or reliance on, website information.</p>
              </section>

              <section id="liability" className={styles.legalSection}>
                <h3>12. Limitation of liability for website use</h3>
                <p>To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, consequential or special loss, loss of profit, loss of revenue, loss of opportunity, project delay, commercial loss, data loss or reputational loss arising from or connected with your use of this website or reliance on website content.</p>
                <p>This clause does not limit any liability that cannot be limited by law.</p>
              </section>

              <section id="indemnity" className={styles.legalSection}>
                <h3>13. Indemnity</h3>
                <p>You agree to indemnify us against reasonable losses, costs, claims or expenses arising from your unlawful use of the website, breach of these terms, infringement of our intellectual property, or submission of information you were not authorised to provide.</p>
              </section>

              <section id="privacy" className={styles.legalSection}>
                <h3>14. Privacy</h3>
                <p>Our collection and use of personal information is explained in our Privacy Policy. By using the website or submitting information, you acknowledge that we may handle personal information in accordance with that policy.</p>
              </section>

              <section id="changes" className={styles.legalSection}>
                <h3>15. Changes to the website and these terms</h3>
                <p>We may update, suspend or remove website content at any time without notice. We may also update these terms from time to time. The updated version will be posted on the website with a new "last updated" date.</p>
              </section>

              <section id="governing-law" className={styles.legalSection}>
                <h3>16. Governing law</h3>
                <p>These terms are governed by the laws of New Zealand / New South Wales, Australia.</p>
                <p>You and we submit to the non-exclusive jurisdiction of the courts of New Zealand / New South Wales, Australia.</p>
              </section>

              <section id="contact" className={styles.legalSection}>
                <h3>17. Contact</h3>
                <p>Questions about these terms can be sent to: entitleedgeadvisory@gmail.com</p>
              </section>
            </main>
          </div>
        </div>
      </Section>
    </>
  );
}
