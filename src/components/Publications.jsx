'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, GraduationCap, ShieldCheck, FileText, Cpu, Network, Lock } from 'lucide-react';
import styles from './Publications.module.css';

const publications = [
  {
    title: "Beyond the Trust Boundary: A Critical Reassessment of the FIDO2 Threat Model",
    status: "Preprint | arXiv:2609.03789 [cs.CR]",
    date: "Submitted Sep 2026",
    authors: "A. Mitra, S. C. Sethuraman, Anitha S., Sai Abhiram Kolluru",
    abstract: "Reassesses the FIDO2/WebAuthn threat model beyond the cryptographic layer, analyzing eight distinct attack vectors across the stack: malicious browser extensions, platform-handler malware, passive sniffing, virtual device drivers, CTAP2-specific malware, USB/hardware implants, malicious USB hubs/docks/extenders, and NFC relay attacks. Demonstrates how AAGUID and timing leaks enable user profiling and targeted exploitation, how multi-layer attack chains compromise FIDO2 guarantees, and how vulnerabilities in the FIDO Metadata Service (MDS3) undermine hardware attestation.",
    tags: ["FIDO2 / WebAuthn", "Zero Trust IAM", "CTAP2 Protocol", "Side Channels", "Hardware Attestation", "MDS3"],
    link: "https://arxiv.org/abs/2609.03789",
    icon: <Lock size={20} />,
    featured: true
  },
  {
    title: "NEUROSYMBOLIC-APT: Explainable, Adversarially Robust, Federated APT Detection",
    status: "Manuscript (IEEE Conference Format)",
    date: "2026",
    authors: "Sai Abhiram Kolluru, et al.",
    abstract: "A research-oriented neurosymbolic framework coupling learned models with symbolic reasoning for transparent, explainable Advanced Persistent Threat (APT) detection over system-call telemetry. Integrates temporal-logic-guided reasoning with neural sequence modeling to trace every security detection back to low-level kernel triggers while delivering adversarial robustness and federated model aggregation across enterprise nodes.",
    tags: ["Neurosymbolic AI", "eBPF Kernel Telemetry", "Temporal Logic", "APT Detection", "Federated Learning"],
    link: null,
    icon: <Cpu size={20} />,
    featured: true
  },
  {
    title: "Breaking the Abstraction Boundary: Abstraction-Collision Scope Laundering in Federated Agent World Models",
    status: "Manuscript | Research Working Paper",
    date: "2026",
    authors: "Sai Abhiram Kolluru, et al.",
    abstract: "Formulates Abstraction-Collision Scope Laundering (ACSLA), a novel participant-level attack against scope-aware federated agent world models (FEDWORLD) where truthful yet manipulated state transitions are laundered into broad shared model scopes. Designs and proves Context-Aware Scope Sealing (CASS), combining context-integrity cryptographic commitments, conservative alignment, and randomized scope challenges with formal bounds on residual laundering probability.",
    tags: ["Federated World Models", "Agentic Security", "Scope Laundering (ACSLA)", "Context-Aware Sealing (CASS)"],
    link: null,
    icon: <Network size={20} />,
    featured: false
  },
  {
    title: "Quantum-Resistant Zero Trust Audit Architecture for Normally Air-Gapped Industrial Control Systems",
    status: "Research Collaboration (VIT-AP, UNT, TWU)",
    date: "2026",
    authors: "A. A. Kapatrala, S. C. Sethuraman, V. P. Yanambaka, S. P. Mohanty, Sai Abhiram Kolluru",
    abstract: "Proposes an end-to-end Zero Trust audit framework for air-gapped dual-unit industrial control systems (ICS). Unites session-level admission, unit-local command validation, unidirectional data-diode audit export, and a private RAFT-based blockchain ledger secured by FN-DSA/FALCON post-quantum signatures. Reference implementation blocked 100% of admission-bypassing unsafe commands, detected 100% of tampered audit logs, and reduced on-chain audit footprint by ~69% compared to ML-DSA-44.",
    tags: ["Post-Quantum Cryptography", "FALCON-512", "Zero Trust Architecture", "Industrial Control Systems (ICS)", "RAFT Blockchain"],
    link: null,
    icon: <ShieldCheck size={20} />,
    featured: false
  }
];

export default function Publications() {
  return (
    <section id="publications" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.header}
      >
        <span className={styles.categoryTag}>Scientific Contributions</span>
        <h2 className={styles.sectionTitle}>Publications &amp; Research</h2>
        <p className={styles.sectionSubtitle}>
          Peer-reviewed preprints, conference manuscripts, and cryptographic architectures spanning Zero-Trust IAM, eBPF telemetry, and post-quantum security.
        </p>
      </motion.div>

      <div className={styles.scholarBanner}>
        <div className={styles.scholarInfo}>
          <GraduationCap size={26} className={styles.scholarIcon} />
          <div>
            <h4>Google Scholar Citations &amp; Scientific Index</h4>
            <p>Access full citations, preprints, and research profiles across computer security, AI, and cryptographic systems.</p>
          </div>
        </div>
        <a
          href="https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.scholarBtn}
        >
          <BookOpen size={16} /> View Google Scholar <ExternalLink size={13} />
        </a>
      </div>

      <div className={styles.list}>
        {publications.map((paper, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className={`${styles.paperCard} ${paper.featured ? styles.paperFeatured : ''}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                {paper.icon}
              </div>
              <div className={styles.headerContent}>
                <div className={styles.badgeRow}>
                  <span className={styles.statusBadge}>{paper.status}</span>
                  <span className={styles.dateBadge}>{paper.date}</span>
                </div>
                <h3 className={styles.paperTitle}>{paper.title}</h3>
                <p className={styles.authors}>{paper.authors}</p>
              </div>
            </div>

            <p className={styles.abstract}>{paper.abstract}</p>

            <div className={styles.footerRow}>
              <div className={styles.tags}>
                {paper.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.tag}>{tag}</span>
                ))}
              </div>

              {paper.link && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readBtn}
                >
                  <FileText size={15} /> Read Preprint <ExternalLink size={13} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
