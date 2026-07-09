"use client";
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import styles from './Contact.module.css';
import pageStyles from '../page.module.css';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name: e.target.name.value,
      company: e.target.company.value,
      role: e.target.role.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      location: e.target.location.value,
      supportType: e.target.supportType.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      alert("Error sending request. Please email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section background="dark" className="blueprint-bg" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Tell us what support you need.</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, color: 'var(--white)' }}>
            Whether you need programme support, delay analysis, EOT assistance, reporting or commercial administration, send a short message and we will let you know how we can help.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="container">
          <div className={pageStyles.grid2} style={{ alignItems: 'flex-start' }}>
            
            <Card style={{ padding: '3rem', height: '100%' }} className="reveal3d">
              <h3 style={{ marginBottom: '2rem' }}>Enquiry form</h3>
              
              {isSuccess ? (
                <div className={styles.successMessage}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Thank You</h3>
                  <p style={{ color: 'var(--secondary)' }}>Your enquiry has been successfully submitted. We will respond within 1-2 business days.</p>
                  <Button onClick={() => setIsSuccess(false)} variant="secondary" style={{ marginTop: '1rem' }}>Submit another enquiry</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Name *</label>
                    <input type="text" id="name" required className={styles.formControl} />
                  </div>
                  
                  <div className={pageStyles.grid2} style={{ gap: '1.5rem' }}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.formLabel}>Company</label>
                      <input type="text" id="company" className={styles.formControl} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="role" className={styles.formLabel}>Role</label>
                      <input type="text" id="role" className={styles.formControl} />
                    </div>
                  </div>

                  <div className={pageStyles.grid2} style={{ gap: '1.5rem' }}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>Email *</label>
                      <input type="email" id="email" required className={styles.formControl} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                      <input type="tel" id="phone" className={styles.formControl} />
                    </div>
                  </div>

                  <div className={pageStyles.grid2} style={{ gap: '1.5rem' }}>
                    <div className={styles.formGroup}>
                      <label htmlFor="location" className={styles.formLabel}>Project location</label>
                      <input type="text" id="location" className={styles.formControl} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="supportType" className={styles.formLabel}>What do you need help with? *</label>
                      <select id="supportType" required className={styles.formControl}>
                        <option value="">Select an option</option>
                        <option value="Programme update">Programme update</option>
                        <option value="Delay analysis">Delay analysis</option>
                        <option value="EOT claim">EOT claim</option>
                        <option value="Reporting">Reporting</option>
                        <option value="Contract administration">Contract administration</option>
                        <option value="Commercial support">Commercial support</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Message</label>
                    <textarea id="message" rows="5" className={styles.formControl}></textarea>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--secondary)', margin: '1rem 0 2rem' }}>
                    We will only use your details to respond to your enquiry.
                  </p>

                  <Button type="submit" variant="primary" fullWidth={true}>
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                </form>
              )}
              </Card>

            <div className="reveal3d" style={{ animationDelay: '0.2s' }}>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={1500} scale={1.02}>
                <div className={styles.infoCard}>
                  <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Prefer to email?</h3>
                  <p style={{ color: 'var(--white)', marginBottom: '1rem' }}>
                    entitleedgeadvisory@gmail.com
                  </p>

                  <p style={{ fontSize: '0.95rem' }}>
                    Response expectation: 1-2 business days.
                  </p>
                </div>
              </Tilt>

              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={1500} scale={1.02}>
                <div className={styles.enquiryTypes}>
                <h4 style={{ marginBottom: '1rem' }}>Best enquiry types</h4>
                <ul>
                  <li>- Programme update</li>
                  <li>- Delay analysis</li>
                  <li>- EOT claim</li>
                  <li>- Reporting</li>
                  <li>- Commercial support</li>
                  <li>- Not sure yet</li>
                </ul>
              </div>
              </Tilt>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}
