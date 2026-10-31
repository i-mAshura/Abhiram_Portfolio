'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Download, GraduationCap, Mail, Award, ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="about" className={styles.heroSection}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.intro}
        >
          <div className={styles.topBadgeRow}>
            <span className={styles.greeting}>&gt; 起動完了 // SECURITY_PROTOCOL :: ACTIVE</span>
            <span className={styles.rankBadge}>
              <Award size={13} /> VIT-AP Specialization Rank 1 (9.44 CGPA)
            </span>
          </div>

          <h1 className={styles.title}>
            <span className="burning-text">Sai Abhiram Kolluru</span>
          </h1>

          <h2 className={styles.subtitle}>
            <Shield size={20} className={styles.icon} /> Security Engineer &amp;{' '}
            <Cpu size={20} className={styles.icon} /> AI Security Researcher
          </h2>

          <p className={styles.affiliationLine}>
            <span>Security Engineer @ Digital Fortress</span>
            <span className={styles.affilDot}>•</span>
            <span>Research Intern @ IIT Madras (ASTHRA Lab)</span>
          </p>

          <p className={styles.description}>
            Specializing in Zero-Trust Identity &amp; Access Management (FIDO2/WebAuthn, OIDC/SAML, OPA), eBPF-based kernel telemetry, network perimeter hardening, and autonomous SOC/SIEM automation. Researching AI for security at IIT Madras ASTHRA Lab, author of publications on FIDO2 threat modeling, and architect of intelligent threat detection systems.
          </p>

          {/* Key Metrics Counter */}
          <div className={styles.metricsContainer}>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>9.44</span>
              <span className={styles.metricLabel}>CGPA / Rank 1</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>3+ Yrs</span>
              <span className={styles.metricLabel}>IAM &amp; NetSec</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>70%</span>
              <span className={styles.metricLabel}>MTTR Reduction</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>AWS</span>
              <span className={styles.metricLabel}>Security Specialty</span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className={styles.socialBar}>
            <a
              href="https://github.com/i-mAshura"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Google Scholar"
            >
              <GraduationCap size={18} />
              <span>Google Scholar</span>
            </a>
            <a
              href="mailto:kollurusaiabhiram513@gmail.com"
              className={styles.socialBtn}
              aria-label="Send Email"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>

          <div className={styles.actions}>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className={styles.primaryBtn}
            >
              <Cpu size={18} /> Operations &amp; Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#publications"
              className={styles.secondaryBtn}
            >
              <ArrowUpRight size={18} /> Research
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/K_SAI_ABHIRAM.pdf"
              download="K_SAI_ABHIRAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              <Download size={18} /> Download Latest Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Cyber Photo Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={styles.imageContainer}
      >
        <div className={styles.photoFrameOuter}>
          <div className={styles.cornerTL} />
          <div className={styles.cornerTR} />
          <div className={styles.cornerBL} />
          <div className={styles.cornerBR} />

          <div className={styles.outerRing} />

          <div className={styles.photoFrame}>
            <div className={styles.gridBg} />

            <div className={styles.photoInner}>
              <span className={styles.kanjiWatermark}>影</span>
              <Image 
                src="/photo.png" 
                alt="Sai Abhiram Kolluru" 
                fill 
                className={styles.profileImage} 
                priority
              />
            </div>

            <div className={styles.scanLine} />
          </div>

          <div className={styles.demonAura} />
        </div>
      </motion.div>
    </section>
  );
}
