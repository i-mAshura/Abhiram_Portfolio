'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, TerminalSquare, Mail, Phone, MapPin, Download, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <span style={{
          fontFamily: 'var(--font-fira-code)',
          fontSize: '0.85rem',
          color: 'var(--accent-primary)',
          letterSpacing: '2px',
          display: 'block',
          marginBottom: '10px'
        }}>// DIRECT_TRANSMISSION</span>
        <h2 className={styles.sectionTitle}>&lt;Establish_Connection /&gt;</h2>
        <div className={styles.divider}></div>
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.info}
        >
          <h3>Let's Collaborate &amp; Build</h3>
          <p>
            Whether you are looking to collaborate on security research, explore Zero-Trust IAM architectures, discuss offensive security engagements, or review my technical dossier, my channels are open.
          </p>

          <div className={styles.channelsList}>
            <a href="mailto:kollurusaiabhiram513@gmail.com" className={styles.channelItem}>
              <Mail size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Primary Signal</span>
                <span className={styles.channelVal}>kollurusaiabhiram513@gmail.com</span>
              </div>
            </a>

            <a href="mailto:kollurusaiabhiram2005@gmail.com" className={styles.channelItem}>
              <Mail size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Alternate Signal</span>
                <span className={styles.channelVal}>kollurusaiabhiram2005@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918885667817" className={styles.channelItem}>
              <Phone size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Direct Line</span>
                <span className={styles.channelVal}>+91 8885667817</span>
              </div>
            </a>

            <div className={styles.channelItem}>
              <MapPin size={18} className={styles.channelIcon} />
              <div>
                <span className={styles.channelLabel}>Deployment Base</span>
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
              <Download size={18} /> Download Latest Resume (PDF)
            </a>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.form} 
          onSubmit={handleSubmit}
        >
          <div className={styles.terminalPrompt}>
            <TerminalSquare size={18} className={styles.icon} />
            <span>sys.connect(&quot;kollurusaiabhiram513@gmail.com&quot;)</span>
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name / Organization" 
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
              placeholder="Your Return Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea 
              name="message" 
              placeholder="Transmission Payload / Inquiry Details" 
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
            {status === 'loading' ? 'Transmitting Secure Packet...' : <><Send size={18} /> Transmit Message</>}
          </button>

          {status === 'success' && (
            <div className={styles.successMsg}>
              <CheckCircle size={16} /> [SUCCESS] Payload transmitted securely.
            </div>
          )}
          {status === 'error' && (
            <div className={styles.errorMsg}>
              [NOTICE] Direct submission unavailable. Please dispatch directly to kollurusaiabhiram513@gmail.com.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
