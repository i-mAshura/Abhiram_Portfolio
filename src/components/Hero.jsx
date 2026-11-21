'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail, ShieldCheck, MapPin } from 'lucide-react';
import styles from './Hero.module.css';

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const phrases = [
  'whoami --role "security / research"',
  'eBPF telemetry → symbolic detection',
  'automating the SOC with agents',
  'breaking auth to rebuild it stronger',
];

const metrics = [
  { value: '70%', label: 'MTTR reduced', meta: 'ARGUS / agentic SOC' },
  { value: '9.44', label: 'CGPA · Rank 1', meta: 'VIT-AP cyber security' },
  { value: '1.5K+', label: 'Events ingested', meta: 'Elasticsearch pipeline' },
  { value: '500+', label: 'Transactions traced', meta: 'AP CID forensics' },
];

function useTypewriter(lines, speed = 46, hold = 2100) {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      const settle = setTimeout(() => setText(lines[0]), 0);
      return () => clearTimeout(settle);
    }

    const current = lines[lineIndex % lines.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
      }, 240);
    } else {
      timeout = setTimeout(
        () => {
          setText(current.slice(0, text.length + (deleting ? -1 : 1)));
        },
        deleting ? speed / 2.2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, lineIndex, lines, speed, hold]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(phrases);

  return (
    <section id="about" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={styles.status}
          >
            <span className={styles.ping} />
            <span>Available for security engineering &amp; research</span>
            <span className={styles.statusMeta}>2026</span>
          </motion.div>

          <div className={styles.terminalLine} aria-hidden="true">
            <span className={styles.prompt}>abhiram@void:~$</span>
            <span className={styles.typed}>{typed}</span>
            <span className={styles.caret} />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={styles.name}
          >
            <span className={styles.first}>Sai Abhiram</span>
            <span className={styles.last}>Kolluru</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={styles.roleStrip}
          >
            <span>Security Engineer</span>
            <i />
            <span>AI Security Researcher</span>
            <i />
            <span className={styles.roleMuted}>Zero-Trust · eBPF · Agentic SOC</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className={styles.lede}
          >
            I build security infrastructure that <em>finds what humans miss</em> — passwordless
            identity at scale, kernel-level telemetry with eBPF, and agentic SOC pipelines that
            contain threats before an analyst finishes reading the alert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={styles.actions}
          >
            <a href="#projects" className={styles.primary}>
              Browse systems
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </a>
            <a
              href="/K_SAI_ABHIRAM.pdf"
              download="K_SAI_ABHIRAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghost}
            >
              <Download size={15} />
              Resume
            </a>
            <a href="mailto:kollurusaiabhiram2005@gmail.com" className={styles.ghost}>
              <Mail size={15} />
              Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className={styles.socials}
          >
            <a href="https://github.com/i-mAshura" target="_blank" rel="noopener noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={13} /> Scholar
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className={styles.idCard}
        >
          <span className={`${styles.corner} ${styles.tl}`} />
          <span className={`${styles.corner} ${styles.tr}`} />
          <span className={`${styles.corner} ${styles.bl}`} />
          <span className={`${styles.corner} ${styles.br}`} />

          <div className={styles.cardTop}>
            <span>ID // 0xA513</span>
            <span className={styles.live}>
              <span className={styles.ping} /> online
            </span>
          </div>

          <div className={styles.portrait}>
            <Image
              src="/photo.png"
              alt="Sai Abhiram Kolluru"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 420px"
              className={styles.photo}
            />
            <span className={styles.scanline} aria-hidden="true" />
            <span className={styles.frameMeta}>
              <MapPin size={11} /> Vijayawada, IN
            </span>
          </div>

          <dl className={styles.metaGrid}>
            <div>
              <dt>Role</dt>
              <dd>Security Engineer</dd>
            </div>
            <div>
              <dt>Lab</dt>
              <dd>IIT Madras — ASTHRA</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Zero-Trust &amp; eBPF</dd>
            </div>
            <div>
              <dt>Standing</dt>
              <dd>Rank 01 · 9.44</dd>
            </div>
          </dl>

          <div className={styles.credential}>
            <ShieldCheck size={15} />
            <span>AWS Certified Security — Specialty</span>
          </div>
        </motion.aside>
      </div>

      <div className={`container ${styles.metricsBar}`}>
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.07 }}
            className={styles.metric}
          >
            <span className={styles.metricValue}>{m.value}</span>
            <span className={styles.metricLabel}>{m.label}</span>
            <span className={styles.metricMeta}>{m.meta}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
