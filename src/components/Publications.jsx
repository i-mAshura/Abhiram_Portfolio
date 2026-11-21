'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, BookOpen } from 'lucide-react';
import SectionHead from './SectionHead';
import styles from './Publications.module.css';

const papers = [
  {
    index: '01',
    status: 'Preprint',
    venue: 'arXiv:2609.03789 [cs.CR]',
    date: 'Sep 2026',
    title: 'Beyond the Trust Boundary: A Critical Reassessment of the FIDO2 Threat Model',
    authors: 'A. Mitra, S. C. Sethuraman, Anitha S., Sai Abhiram Kolluru',
    abstract:
      'Reassesses the FIDO2/WebAuthn threat model beyond the cryptographic layer across eight attack vectors — malicious browser extensions, platform-handler malware, passive sniffing, virtual device drivers, CTAP2 malware, USB implants, malicious hubs and NFC relay attacks. Demonstrates how AAGUID and timing leaks enable user profiling, how multi-layer chains break FIDO2 guarantees, and how MDS3 attacks undermine hardware attestation.',
    tags: ['FIDO2 / WebAuthn', 'CTAP2', 'Zero Trust', 'Hardware Attestation', 'Side Channels'],
    link: 'https://arxiv.org/abs/2609.03789',
  },
  {
    index: '02',
    status: 'Research Article',
    venue: 'Submitted to Security and Privacy',
    date: 'Sep 2026',
    title:
      'Quantum-Resistant Zero Trust Audit Architecture for Normally Air-Gapped Industrial Control Systems',
    authors:
      'A. A. Kapatrala, S. C. Sethuraman, V. P. Yanambaka, S. P. Mohanty, Sai Abhiram Kolluru',
    abstract:
      'Proposes an end-to-end Zero Trust audit framework for air-gapped dual-unit ICS: session-level admission, unit-local command validation, unidirectional data-diode export and a RAFT ledger secured by FALCON post-quantum signatures. The reference implementation blocked 100% of admission-bypassing unsafe commands, detected 100% of tampered audit logs, and cut on-chain footprint ~69% versus ML-DSA-44 at ~1.44 ms overhead per event.',
    tags: ['Post-Quantum', 'FALCON-512', 'ICS / OT', 'Zero Trust', 'RAFT Blockchain'],
    link: null,
  },
];

const interests = [
  'APT detection',
  'eBPF telemetry',
  'Neurosymbolic ML',
  'Explainable security',
  'Agentic SOC',
  'Risk-adaptive access',
  'Cloud security',
  'Blockchain forensics',
];

export default function Publications() {
  return (
    <section id="publications" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.headRow}>
          <SectionHead
            index="04"
            label="Research"
            title={
              <>
                Peer-reviewed thinking<span className="acid">.</span>
              </>
            }
            sub="Work on authentication threat models, post-quantum OT audit trails and explainable detection — with the goal of security systems you can actually reason about."
          />
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.scholar}
          >
            <BookOpen size={17} />
            <span>
              <strong>Google Scholar</strong>
              <small>Citations &amp; profile</small>
            </span>
            <ArrowUpRight size={15} />
          </motion.a>
        </div>

        <div className={styles.list}>
          {papers.map((paper, i) => (
            <motion.article
              key={paper.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.paper}
            >
              <div className={styles.paperMeta}>
                <span className={styles.paperIndex}>{paper.index}</span>
                <span className={styles.status}>{paper.status}</span>
                <span className={styles.venue}>{paper.venue}</span>
                <span className={styles.date}>{paper.date}</span>
              </div>

              <div className={styles.paperBody}>
                <h3 className={styles.title}>{paper.title}</h3>
                <p className={styles.authors}>{paper.authors}</p>
                <p className={styles.abstract}>{paper.abstract}</p>

                <div className={styles.paperFoot}>
                  <div className={styles.tags}>
                    {paper.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {paper.link ? (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.read}
                    >
                      <FileText size={14} /> Read preprint
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className={styles.inReview}>Under review</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.interests}>
          <span className={styles.interestsLabel}>Research interests</span>
          <div className={styles.chips}>
            {interests.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
