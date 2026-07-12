import React from 'react';
import Section from '../../components/ui/Section';
import styles from './Legal.module.css';

export const metadata = {
  title: "Privacy Policy | EntitleEdge Advisory",
  description: "How we collect, use and protect personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section background="dark" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            How we collect, use and protect personal information.
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
                  <li><a href="#who-we-are">Who we are</a></li>
                  <li><a href="#scope">Scope of this policy</a></li>
                  <li><a href="#information-we-collect">Personal information we collect</a></li>
                  <li><a href="#how-we-collect">How we collect it</a></li>
                  <li><a href="#why-we-collect">Why we collect and use it</a></li>
                  <li><a href="#cookies">Cookies and website analytics</a></li>
                  <li><a href="#disclosure">When we may disclose</a></li>
                  <li><a href="#overseas">Overseas storage and disclosure</a></li>
                  <li><a href="#security">Security</a></li>
                  <li><a href="#retention">Retention</a></li>
                  <li><a href="#access">Access and correction</a></li>
                  <li><a href="#complaints">Complaints and questions</a></li>
                  <li><a href="#changes">Changes</a></li>
                </ul>
              </div>
            </aside>
            <main className={styles.content}>
              <p style={{ color: 'var(--secondary)', marginBottom: '2.5rem', fontStyle: 'italic' }}>Last updated: July 2026</p>

              <section id="who-we-are" className={styles.legalSection}>
                <h3>1. Who we are</h3>
                <p>This Privacy Policy explains how EntitleEdge Advisory collects, uses, stores and discloses personal information through this website and related enquiries.</p>
                <p>For this policy, "we", "us" and "our" means EntitleEdge Advisory. "You" means website visitors, prospective clients, suppliers, business contacts and any person who contacts us.</p>
              </section>

              <section id="scope" className={styles.legalSection}>
                <h3>2. Scope of this policy</h3>
                <p>This policy applies to personal information collected through our website, contact forms, capability statement downloads, email, phone, LinkedIn or other business communications.</p>
                <p>This policy does not replace any privacy terms that may be included in a signed client engagement, proposal, subcontract or consultancy agreement.</p>
              </section>

              <section id="information-we-collect" className={styles.legalSection}>
                <h3>3. Personal information we may collect</h3>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li>name, email address, phone number, company, job title and business contact details;</li>
                  <li>information you submit through website forms, email or other communications;</li>
                  <li>project-related information you choose to provide, such as project type, location, services required, programme or claims support needs;</li>
                  <li>download or enquiry records, such as when you request a capability statement;</li>
                  <li>meeting notes, correspondence records and relationship management information;</li>
                  <li>website and technical information, such as IP address, browser type, device information, pages visited, referral source and approximate location; and</li>
                  <li>any other information you voluntarily provide to us.</li>
                </ul>
                <p>We do not intentionally collect sensitive personal information through the website. Please do not submit sensitive personal information unless we specifically request it and explain why it is needed.</p>
              </section>

              <section id="how-we-collect" className={styles.legalSection}>
                <h3>4. How we collect personal information</h3>
                <p>We may collect personal information when you:</p>
                <ul>
                  <li>submit a contact form or enquiry;</li>
                  <li>request or download a capability statement or other document;</li>
                  <li>email, call or message us;</li>
                  <li>connect with us on LinkedIn or another professional platform;</li>
                  <li>engage with our website, cookies or analytics tools; or</li>
                  <li>provide information during business development discussions or meetings.</li>
                </ul>
                <p>Where practical, we collect personal information directly from you. Sometimes we may collect business contact details from publicly available professional sources, referrals or introductions.</p>
              </section>

              <section id="why-we-collect" className={styles.legalSection}>
                <h3>5. Why we collect and use personal information</h3>
                <p>We may use personal information to:</p>
                <ul>
                  <li>respond to enquiries and provide requested information;</li>
                  <li>assess whether we can assist with a potential project or service request;</li>
                  <li>send a capability statement or arrange an introductory meeting;</li>
                  <li>communicate with prospective clients, contractors, partners and suppliers;</li>
                  <li>provide project controls, planning, claims support or commercial services where formally engaged;</li>
                  <li>conduct conflict checks, risk checks or internal business assessments;</li>
                  <li>improve our website, content, services and business development activities;</li>
                  <li>maintain records for administrative, legal and compliance purposes;</li>
                  <li>protect the security and integrity of our website and systems; and</li>
                  <li>send business updates or marketing communications where permitted by law or with your consent.</li>
                </ul>
                <p>You can unsubscribe from marketing communications at any time.</p>
              </section>

              <section id="cookies" className={styles.legalSection}>
                <h3>6. Cookies and website analytics</h3>
                <p>Our website may use cookies, analytics tools and similar technologies to understand website traffic, improve user experience and measure performance. These tools may collect technical information such as device type, pages visited, time on page and referral source.</p>
                <p>You can control cookies through your browser settings. Some website features may not work properly if cookies are disabled.</p>
              </section>

              <section id="disclosure" className={styles.legalSection}>
                <h3>7. When we may disclose personal information</h3>
                <p>We may disclose personal information to:</p>
                <ul>
                  <li>our founders, employees, contractors or advisers who need the information for business purposes;</li>
                  <li>website hosting, email, CRM, analytics, document storage, IT support or other service providers;</li>
                  <li>professional advisers, such as accountants, insurers, lawyers or consultants;</li>
                  <li>regulators, courts, dispute resolution bodies or law enforcement where required by law;</li>
                  <li>a prospective purchaser, successor or restructure participant if our business is sold, merged or reorganised; and</li>
                  <li>any other person where you have consented or where disclosure is permitted or required by law.</li>
                </ul>
                <p>We do not sell personal information.</p>
              </section>

              <section id="overseas" className={styles.legalSection}>
                <h3>8. Overseas storage and disclosure</h3>
                <p>Because our business may operate across New Zealand and Australia and use cloud-based service providers, personal information may be stored, processed or accessed in New Zealand, Australia or other countries where our service providers operate.</p>
                <p>Where required by applicable privacy law, we will take reasonable steps to ensure appropriate protection applies to overseas disclosure or processing of personal information.</p>
              </section>

              <section id="security" className={styles.legalSection}>
                <h3>9. Security of personal information</h3>
                <p>We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification and disclosure. These steps may include access controls, password protection, secure cloud services, limited access permissions and business record management controls.</p>
                <p>No method of internet transmission or electronic storage is completely secure. If you believe your personal information has been compromised, please contact us immediately.</p>
              </section>

              <section id="retention" className={styles.legalSection}>
                <h3>10. Retention</h3>
                <p>We keep personal information only for as long as reasonably needed for the purposes described in this policy, including business, legal, insurance, accounting, compliance, dispute management or record-keeping purposes.</p>
                <p>If information is no longer needed, we will take reasonable steps to delete, de-identify or securely archive it.</p>
              </section>

              <section id="access" className={styles.legalSection}>
                <h3>11. Access and correction</h3>
                <p>You may request access to, or correction of, personal information we hold about you. We may need to verify your identity before responding.</p>
                <p>We will respond within a reasonable time and in accordance with applicable privacy law. In some circumstances, we may refuse access or correction where permitted by law, and we will explain the reason where required.</p>
              </section>

              <section id="complaints" className={styles.legalSection}>
                <h3>12. Complaints and questions</h3>
                <p>If you have a privacy question, concern or complaint, please contact us first using the details below. We will take your concern seriously and respond within a reasonable time.</p>
                <p>Contact: entitleedgeadvisory@gmail.com</p>
                <p>If you are not satisfied with our response, you may contact the relevant privacy regulator, such as the Office of the Australian Information Commissioner in Australia or the Office of the Privacy Commissioner in New Zealand.</p>
              </section>

              <section id="changes" className={styles.legalSection}>
                <h3>13. Changes to this Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time. The updated version will be posted on this website with a new "last updated" date.</p>
              </section>
            </main>
          </div>
        </div>
      </Section>
    </>
  );
}
