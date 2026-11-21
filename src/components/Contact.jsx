'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import SectionHead from './SectionHead';
import styles from './Contact.module.css';

const channels = [
  {
    icon: <Mail size={15} />,
    label: 'Email',
    value: 'kollurusaiabhiram2005@gmail.com',
    href: 'mailto:kollurusaiabhiram2005@gmail.com',
  },
  {
    icon: <Phone size={15} />,
    label: 'Phone',
    value: '+91 88856 67817',
    href: 'tel:+918885667817',
  },
  {
    icon: <MapPin size={15} />,
    label: 'Based in',
    value: 'Vijayawada / Amaravati, India',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const subject = encodeURIComponent(`Portfolio inquiry — ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:kollurusaiabhiram2005@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <SectionHead
              index="07"
              label="Contact"
              title={
                <>
                  Got a system worth
                  <br />
                  breaking<span className="acid">?</span>
                </>
              }
              sub="Open to security engineering roles, research collaborations and consulting engagements. I reply fast — usually within a day."
            />

            <div className={styles.channels}>
              {channels.map((c) =>
                c.href ? (
                  <a key={c.label} href={c.href} className={styles.channel}>
                    <span className={styles.channelIcon}>{c.icon}</span>
                    <span className={styles.channelText}>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </span>
                    <ArrowUpRight size={14} className={styles.channelArrow} />
                  </a>
                ) : (
                  <div key={c.label} className={styles.channel}>
                    <span className={styles.channelIcon}>{c.icon}</span>
                    <span className={styles.channelText}>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </span>
                  </div>
                )
              )}
            </div>

            <a
              href="/K_SAI_ABHIRAM.pdf"
              download="K_SAI_ABHIRAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resume}
            >
              <Download size={15} />
              Download resume — PDF
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.formTop}>
              <span className={styles.dots}>
                <i />
                <i />
                <i />
              </span>
              <span>new_message.sh</span>
              <span className={styles.formMode}>POST</span>
            </div>

            <div className={styles.field}>
              <label htmlFor="name">name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="your name or organisation"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="scope, timeline, or the problem you want solved"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submit} disabled={status === 'loading'}>
              {status === 'loading' ? (
                'Opening channel…'
              ) : (
                <>
                  Transmit message <Send size={14} />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className={styles.success}>
                <CheckCircle2 size={14} /> Email client opened with your message pre-filled.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.error}>
                Couldn&apos;t open your mail client — email kollurusaiabhiram2005@gmail.com directly.
              </p>
            )}

            <p className={styles.note}>
              Messages are sent straight to my inbox — no form service, no tracking.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
