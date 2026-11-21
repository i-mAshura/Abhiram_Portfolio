'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, ArrowUpRight } from 'lucide-react';
import SectionHead from './SectionHead';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Research Intern — AI for Security',
    org: 'Indian Institute of Technology Madras · ASTHRA Lab',
    location: 'Remote',
    period: 'Oct 2026 — Present',
    tag: 'Research',
    summary:
      'Building an AI-driven security operations environment that automates monitoring, triage, investigation and response.',
    highlights: [
      'Designing AI-agent workflows for security event analysis, alert enrichment, threat correlation and incident prioritisation.',
      'Developing automation pipelines for log analysis, threat-intelligence enrichment and response orchestration.',
      'Exploring agent-assisted investigation flows that surface detection context and recommended actions to analysts.',
    ],
    tech: ['AI Agents', 'SOC Automation', 'Threat Correlation', 'LLM Workflows'],
  },
  {
    role: 'Security Engineer',
    org: 'Digital Fortress Private Limited',
    location: 'Vijayawada, India',
    period: 'May 2023 — Present',
    tag: 'Industry',
    summary:
      'Identity, network perimeter and cloud security engineering for production client environments.',
    highlights: [
      'Shipped passwordless FIDO2/WebAuthn and MFA authentication across client applications on OIDC & SAML, governing sessions and RBAC/ABAC policy.',
      'Reviewed 200+ firewall rules and eliminated ~30% redundant or overly permissive entries; enforced VLAN segmentation and MFA on all remote access.',
      'Led forensic investigation of a live AWS compromise across 70+ EC2 instances and 40+ S3 buckets, uncovering 3+ months of persistence and 1+ TB of accessed data.',
      'Built ARGUS, an agentic SOC/SIEM platform ingesting 1,500+ events and auto-tagging 50+ MITRE ATT&CK techniques at 90%+ accuracy — cutting response time by 70%.',
    ],
    tech: ['Keycloak', 'OIDC / SAML', 'AWS IAM', 'IDS / IPS', 'Wazuh', 'VPC Flow Logs'],
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Centre of Excellence (AIR), VIT-AP University',
    location: 'Amaravati, India',
    period: 'Apr 2025 — Jul 2026',
    tag: 'Research',
    summary:
      'Agentic and neurosymbolic security research spanning kernel telemetry, SOC automation and forensics.',
    highlights: [
      'Engineered ARGUS, monitoring 4 VMs and endpoints with autonomous remediation agents and attack-path reasoning.',
      'Developed an eBPF intrusion-detection framework pairing in-kernel telemetry with neural sequence models and temporal-logic rules for explainable APT detection.',
      'Collaborated with AP CID on a blockchain forensics platform tracing 500+ transactions and 200+ wallets via NetworkX and Neo4j.',
      'Built NexusSOC (Wazuh + n8n + Catalyst), automating triage and cutting manual effort by 70% across 10,000+ alerts.',
      'Ran RF and automotive security research with HackRF/bladeRF SDRs across GPS spoofing, Wi-Fi DFS and CAN-bus attack surfaces.',
    ],
    tech: ['eBPF', 'Elasticsearch', 'Neo4j', 'n8n', 'Wazuh', 'SDR', 'CAN Bus'],
  },
  {
    role: 'Cyber Forensics Collaborator & Instructor',
    org: 'Andhra Pradesh Police CID',
    location: 'Andhra Pradesh, India',
    period: 'Jan 2026 — May 2026',
    tag: 'Government',
    summary:
      'Cryptocurrency investigation tooling and practitioner training for law-enforcement officers.',
    highlights: [
      'Delivered instructional sessions for the AP CID Employee Development Programme on cyber forensics and threat analysis.',
      'Engineered crypto transaction investigation pipelines using graph analytics to trace suspicious flows across 500+ transactions.',
      'Reduced investigation turnaround by 50% through automated blockchain ingestion and structured forensic reporting.',
    ],
    tech: ['Blockchain Forensics', 'Neo4j', 'NetworkX', 'Crypto Attribution', 'Training'],
  },
  {
    role: 'Freelance Cloud Security Architect',
    org: 'Confidential Clients',
    location: 'Remote',
    period: 'Jul 2026 — Aug 2026',
    tag: 'Consulting',
    summary:
      'Incident response and least-privilege architecture design for compromised cloud estates.',
    highlights: [
      'Isolated compromised AWS regions by correlating billing anomalies with VPC flow data across 70+ EC2 instances.',
      'Designed least-privilege architectures with centralised CloudTrail/CloudWatch logging, strict IAM condition keys and drift detection.',
    ],
    tech: ['AWS Security', 'Incident Response', 'CloudTrail', 'Boto3', 'Linux'],
  },
];

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    org: 'VIT-AP University · Specialization in Cyber Security',
    location: 'Amaravati, India',
    period: '2023 — 2027 (Expected)',
    score: 'CGPA 9.44 / 10.0',
    badge: 'Specialization Rank 1',
    details: [
      'Ranked first in the Cyber Security / Network & Security specialization cohort.',
      'Coursework: Cryptography, Network Security, Intrusion Detection & Prevention, Cloud Computing (AWS), Web Application Pentesting, DAA, Operating Systems.',
    ],
  },
  {
    degree: 'Intermediate — MPC',
    org: 'SR Junior College',
    location: 'Gollapudi, India',
    period: '2021 — 2023',
    score: '97.3%',
    badge: 'Merit Distinction',
    details: ['Strong mathematical grounding in linear algebra, calculus and discrete mathematics.'],
  },
  {
    degree: 'Secondary School Certificate',
    org: 'Sri Chaitanya High School',
    location: 'Ibrahimpatnam, India',
    period: 'Graduated 2021',
    score: '99.1%',
    badge: 'State Top Tier',
    details: ['Outstanding record across mathematics, physical sciences and computer foundations.'],
  },
];

export default function Experience() {
  const [tab, setTab] = useState('work');

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className={styles.topRow}>
          <SectionHead
            index="02"
            label="Trajectory"
            title={
              <>
                Where I&apos;ve operated<span className="acid">.</span>
              </>
            }
            sub="Industry security engineering, academic research at IIT Madras, and government forensics collaborations — the short version of how I got here."
          />

          <div className={styles.tabs} role="tablist" aria-label="Trajectory">
            <button
              role="tab"
              aria-selected={tab === 'work'}
              onClick={() => setTab('work')}
              className={`${styles.tab} ${tab === 'work' ? styles.tabActive : ''}`}
            >
              <Briefcase size={13} /> Experience <span>{experiences.length}</span>
            </button>
            <button
              role="tab"
              aria-selected={tab === 'edu'}
              onClick={() => setTab('edu')}
              className={`${styles.tab} ${tab === 'edu' ? styles.tabActive : ''}`}
            >
              <GraduationCap size={13} /> Education <span>{education.length}</span>
            </button>
          </div>
        </div>

        <div className={styles.panel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {(tab === 'work' ? experiences : education).map((item, idx) => (
                <article key={`${item.role || item.degree}-${idx}`} className={styles.row}>
                  <div className={styles.rail}>
                    <span className={styles.railIndex}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.railLine} />
                  </div>

                  <div className={styles.body}>
                    <div className={styles.rowHead}>
                      <div className={styles.rowTitleBlock}>
                        <span className={styles.tag}>
                          {item.tag || item.badge}
                        </span>
                        <h3 className={styles.role}>{item.role || item.degree}</h3>
                        <p className={styles.org}>{item.org}</p>
                      </div>

                      <div className={styles.rowMeta}>
                        <span className={styles.period}>{item.period}</span>
                        <span className={styles.place}>
                          <MapPin size={11} /> {item.location}
                        </span>
                        {item.score ? (
                          <span className={styles.score}>{item.score}</span>
                        ) : null}
                      </div>
                    </div>

                    {item.summary ? (
                      <p className={styles.summary}>{item.summary}</p>
                    ) : null}

                    <ul className={styles.bullets}>
                      {(item.highlights || item.details).map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    {item.tech ? (
                      <div className={styles.techRow}>
                        {item.tech.map((t) => (
                          <span key={t} className={styles.tech}>
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <a
          href="https://github.com/i-mAshura"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.repoLink}
        >
          Full work history &amp; repositories
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
