'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Download, GraduationCap, Mail, Sparkles, Building2, Cpu, CheckCircle2 } from 'lucide-react';
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
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={styles.introContent}
        >
          {/* Status Indicator Badge (React Bits Pill) */}
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span className={styles.statusText}>Security Engineer &amp; Researcher</span>
          </div>

          <h1 className={styles.title}>
            Sai Abhiram Kolluru
          </h1>

          <p className={styles.roleHeadline}>
            <span className={styles.gradientRole}>Zero-Trust IAM</span>
            <span className={styles.roleDot}>•</span>
            <span className={styles.gradientRole}>Kernel Telemetry (eBPF)</span>
            <span className={styles.roleDot}>•</span>
            <span className={styles.gradientRole}>AI for Security</span>
          </p>

          <p className={styles.summary}>
            Security Engineer at <strong>Digital Fortress</strong> and Security R&amp;D Intern at <strong>IIT Madras (ASTHRA Lab)</strong>. Specializing in passwordless/MFA authentication (FIDO2/WebAuthn, OIDC, SAML, OPA/Rego), cloud security auditing (AWS), in-kernel eBPF telemetry, and agentic SOC/SIEM automation. Author of preprints on FIDO2 threat models and explainable intrusion detection.
          </p>

          {/* Social Links Bar */}
          <div className={styles.socialBar}>
            <a
              href="https://github.com/i-mAshura"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
              aria-label="Google Scholar"
            >
              <GraduationCap size={16} /> Google Scholar
            </a>
            <a
              href="mailto:kollurusaiabhiram513@gmail.com"
              className={styles.socialPill}
              aria-label="Email"
            >
              <Mail size={16} /> Email
            </a>
          </div>

          {/* Main Action CTAs */}
          <div className={styles.actions}>
            <a
              href="/K_SAI_ABHIRAM.pdf"
              download="K_SAI_ABHIRAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <Download size={17} /> Download Resume (PDF)
            </a>
            <a href="#publications" className={styles.secondaryBtn}>
              Research &amp; Publications <ArrowRight size={16} />
            </a>
            <a href="#projects" className={styles.tertiaryBtn}>
              View Systems
            </a>
          </div>
        </motion.div>

        {/* Profile Card (React Bits Elevated Spotlight Frame) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={styles.profileCardWrapper}
        >
          <div className={styles.profileCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/photo.png"
                alt="Sai Abhiram Kolluru"
                fill
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeaderRow}>
                <div>
                  <h3 className={styles.cardName}>Sai Abhiram Kolluru</h3>
                  <p className={styles.cardTitle}>Security Engineer &amp; Researcher</p>
                </div>
                <div className={styles.verifiedBadge} title="Verified Credentials">
                  <ShieldCheck size={18} />
                </div>
              </div>

              <div className={styles.cardMetaGrid}>
                <div className={styles.cardMetaItem}>
                  <span className={styles.metaLabel}>Current Role</span>
                  <span className={styles.metaValue}>Digital Fortress // IIT Madras</span>
                </div>
                <div className={styles.cardMetaItem}>
                  <span className={styles.metaLabel}>Credentials</span>
                  <span className={styles.metaValue}>AWS Security Specialty</span>
                </div>
                <div className={styles.cardMetaItem}>
                  <span className={styles.metaLabel}>Academics</span>
                  <span className={styles.metaValue}>VIT-AP Rank 1 (9.44 CGPA)</span>
                </div>
                <div className={styles.cardMetaItem}>
                  <span className={styles.metaLabel}>Focus Area</span>
                  <span className={styles.metaValue}>Zero-Trust IAM &amp; eBPF</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bento Stats Row (React Bits style) */}
      <div className={styles.bentoRow}>
        <div className={styles.bentoCard}>
          <div className={styles.bentoNumber}>9.44</div>
          <div className={styles.bentoTitle}>CGPA // Specialization Rank 1</div>
          <p className={styles.bentoDesc}>Department Rank 1 in Cyber Security / Network &amp; Security at VIT-AP University.</p>
        </div>

        <div className={styles.bentoCard}>
          <div className={styles.bentoNumber}>3+ Yrs</div>
          <div className={styles.bentoTitle}>IAM &amp; Network Security</div>
          <p className={styles.bentoDesc}>Production passwordless MFA, OIDC/SAML, OPA policies, and AWS perimeter defense.</p>
        </div>

        <div className={styles.bentoCard}>
          <div className={styles.bentoNumber}>70%</div>
          <div className={styles.bentoTitle}>MTTR Reduction (ARGUS)</div>
          <p className={styles.bentoDesc}>Agentic SIEM/SOAR with autonomous triage and MITRE ATT&amp;CK technique tagging.</p>
        </div>

        <div className={styles.bentoCard}>
          <div className={styles.bentoNumber}>Preprints</div>
          <div className={styles.bentoTitle}>FIDO2 &amp; Zero-Trust Research</div>
          <p className={styles.bentoDesc}>FIDO2 threat model analysis (arXiv:2609.03789) and post-quantum ICS Zero-Trust architectures.</p>
        </div>
      </div>
    </section>
  );
}
