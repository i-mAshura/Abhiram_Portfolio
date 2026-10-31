'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Download, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      // Trigger user's mail client with prefilled details
      window.location.href = `mailto:kollurusaiabhiram513@gmail.com?subject=${subject}&body=${body}`;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.header}
      >
        <span className={styles.categoryTag}>Get in Touch</span>
        <h2 className={styles.sectionTitle}>Contact &amp; Connect</h2>
        <p className={styles.sectionSubtitle}>
          Open to research collaborations, security engineering roles, consulting engagements, or technical inquiries.
        </p>
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.info}
        >
          <h3>Let&apos;s Connect</h3>
          <p>
            Whether you are looking to collaborate on security research, explore Zero-Trust IAM architectures, discuss offensive security engagements, or review my technical credentials, feel free to reach out directly.
          </p>

          <div className={styles.channelsList}>
            <a href="mailto:kollurusaiabhiram513@gmail.com" className={styles.channelItem}>
              <Mail size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Primary Email</span>
                <span className={styles.channelVal}>kollurusaiabhiram513@gmail.com</span>
              </div>
            </a>

            <a href="mailto:kollurusaiabhiram2005@gmail.com" className={styles.channelItem}>
              <Mail size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Secondary Email</span>
                <span className={styles.channelVal}>kollurusaiabhiram2005@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918885667817" className={styles.channelItem}>
              <Phone size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Direct Phone</span>
                <span className={styles.channelVal}>+91 8885667817</span>
              </div>
            </a>

            <div className={styles.channelItem}>
              <MapPin size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Location</span>
                <span className={styles.channelVal}>Vijayawada / Amaravati, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className={styles.quickResumeBox}>
            <a
              href="/K_SAI_ABHIRAM.pdf"
              download="K_SAI_ABHIRAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactResumeBtn}
            >
              <Download size={16} /> Download Latest Resume (PDF)
            </a>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.form} 
          onSubmit={handleSubmit}
        >
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name or Organization" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea 
              name="message" 
              placeholder="Your Message, Inquiry, or Project Scope" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className={styles.textarea}
              rows={5}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Preparing Transmission...' : <><Send size={16} /> Send Message</>}
          </button>

          {status === 'success' && (
            <div className={styles.successMsg}>
              <CheckCircle size={16} /> Email client opened with your pre-filled inquiry.
            </div>
          )}
          {status === 'error' && (
            <div className={styles.errorMsg}>
              Could not open email client automatically. Please email me at kollurusaiabhiram513@gmail.com.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
