'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, TerminalSquare } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

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
        setTimeout(() => setStatus('idle'), 5000);
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
          <h3>Let's Collaborate</h3>
          <p>
            Whether you have a question, a project proposal, or just want to discuss the latest in cybersecurity and ethical hacking, my inbox is open. I'll get back to you as soon as possible.
          </p>
          <div className={styles.terminalPrompt}>
            <TerminalSquare size={20} className={styles.icon} />
            <span>sys.connect("kollurusaiabhiram2005@gmail.com")</span>
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
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
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
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea 
              name="message" 
              placeholder="Message Payload" 
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
            {status === 'loading' ? 'Transmitting...' : <><Send size={18} /> Execute</>}
          </button>

          {status === 'success' && (
            <div className={styles.successMsg}>
              [SUCCESS] Payload transmitted securely.
            </div>
          )}
          {status === 'error' && (
            <div className={styles.errorMsg}>
              [ERROR] Connection failed. Please try again.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
