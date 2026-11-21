'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import SectionHead from './SectionHead';
import styles from './Projects.module.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'iam', label: 'IAM & Cloud' },
  { id: 'kernel', label: 'Kernel & SOC' },
  { id: 'ai', label: 'AI & Forensics' },
  { id: 'rf', label: 'RF & Automotive' },
  { id: 'tools', label: 'Tooling' },
];

const projects = [
  {
    id: 'argus',
    title: 'ARGUS — Agentic SOC/XDR',
    category: 'kernel',
    badge: 'Autonomous defense',
    description:
      'Agentic SOC/SIEM/SOAR architecture that ingests 1,500+ events into Elasticsearch, auto-tags 50+ MITRE ATT&CK techniques at 90%+ accuracy, and deploys response agents that isolate hosts and remediate incidents — cutting MTTR by 70%.',
    tech: ['Python', 'Elasticsearch', 'Docker', 'MITRE ATT&CK', 'AI Agents'],
    link: 'https://github.com/i-mAshura/ARGUS',
  },
  {
    id: 'kernelguard',
    title: 'eBPF_KernelGuard — Neurosymbolic Temporal IDS',
    category: 'kernel',
    badge: 'Kernel telemetry',
    description:
      'Intrusion detection framework pairing in-kernel eBPF telemetry with neural sequence models and temporal-logic symbolic rules. Every detection traces back to the exact syscall stream and rule that fired — explainable APT detection without black boxes.',
    tech: ['eBPF', 'Neural Sequence Models', 'Temporal Logic', 'Linux Kernel', 'C'],
    link: 'https://github.com/i-mAshura/eBPF_KernelGuard',
  },
  {
    id: 'aegis',
    title: 'Aegis IAM — Zero-Trust Identity Platform',
    category: 'iam',
    badge: 'Zero trust',
    description:
      'Centralised Keycloak SSO for 4 applications (3 OIDC, 1 SAML) with WebAuthn/TOTP passwordless MFA and 10 role profiles. Authored 15 OPA/Rego ABAC policies with step-up authentication, codified realms in Terraform, and streamed 2,000+ auth events to Wazuh.',
    tech: ['Keycloak', 'OIDC / SAML', 'OPA / Rego', 'Terraform', 'WebAuthn', 'Wazuh'],
    link: 'https://github.com/i-mAshura',
  },
  {
    id: 'privscope',
    title: 'PrivScope — AWS Least-Privilege Auditor',
    category: 'iam',
    badge: 'Cloud security',
    description:
      'Boto3 scanner running 20+ IAM audits for wildcards, stale keys, missing MFA and vulnerable trust policies. Models IAM permissions as a NetworkX graph to expose 8 privilege-escalation paths, then synthesises least-privilege policies from 5,000+ CloudTrail events — ~65% excess permissions removed.',
    tech: ['Python', 'Boto3', 'CloudTrail', 'NetworkX', 'Terraform'],
    link: 'https://github.com/i-mAshura',
  },
  {
    id: 'nexussoc',
    title: 'NexusSOC — Automated SOC Platform',
    category: 'kernel',
    badge: 'SOAR automation',
    description:
      'Wazuh SIEM coupled to n8n and Catalyst for alert enrichment, IOC extraction and response playbooks across SSH brute force, anomalous logins and lateral movement. Processed 10,000+ test alerts and cut manual triage by 70%.',
    tech: ['Wazuh', 'n8n', 'Python', 'Docker', 'Catalyst'],
    link: 'https://github.com/i-mAshura/NexusSOAR',
  },
  {
    id: 'analytixhub',
    title: 'AnalytiXHub — Blockchain Forensics',
    category: 'ai',
    badge: 'Crypto forensics',
    description:
      'Cryptocurrency investigation platform built with AP CID. Graph analytics across 500+ transactions and 200+ wallets using Neo4j and NetworkX reveals wallet clusters and illicit transfer patterns, cutting manual turnaround by 50%.',
    tech: ['Python', 'Neo4j', 'NetworkX', 'React', 'TypeScript'],
    link: 'https://github.com/i-mAshura/AnalytiXHub',
  },
  {
    id: 'radac',
    title: 'RAdAC — Risk-Adaptive Access Control',
    category: 'iam',
    badge: 'Continuous auth',
    description:
      'Replaces binary allow/deny with continuous risk evaluation. Contextual signals from device, environment and behaviour dynamically modulate authorisation decisions instead of static role checks.',
    tech: ['Zero Trust', 'Risk Modelling', 'Python', 'Dynamic RBAC'],
    link: 'https://github.com/i-mAshura/RAdAC',
  },
  {
    id: 'cloudsentinel',
    title: 'CloudSentinel — Misconfiguration Scanner',
    category: 'iam',
    badge: 'AWS hardening',
    description:
      'Audits AWS environments for publicly exposed buckets, over-privileged IAM users, unencrypted resources and open security groups. Emits severity-ranked HTML reports with remediation guidance.',
    tech: ['Python', 'Boto3', 'IAM', 'S3 Hardening', 'Security Auditing'],
    link: 'https://github.com/i-mAshura/CloudSentinel',
  },
  {
    id: 'hawkeye',
    title: 'HawkEye++ — eBPF Behavioural Detection',
    category: 'kernel',
    badge: 'Runtime defense',
    description:
      'Behavioural malware detection over live kernel events instead of static signatures. Kernel-space telemetry exposes evasive rootkits and in-memory manipulation that file-based scanners miss.',
    tech: ['eBPF', 'Kernel Tracing', 'Behavioural Analysis', 'C'],
    link: 'https://github.com/i-mAshura',
  },
  {
    id: 'dermavision',
    title: 'DermaVision AI — Explainable Medical AI',
    category: 'ai',
    badge: 'Medical AI',
    description:
      'Explainable skin-lesion classification trained on ISIC 2019 and HAM10000. Benchmarked EfficientNet and Swin Transformer to ~87% test accuracy with automated reporting and visual explainability.',
    tech: ['PyTorch', 'EfficientNet', 'Swin Transformer', 'XAI', 'Computer Vision'],
    link: 'https://github.com/i-mAshura/DhermaVisionAI',
  },
  {
    id: 'pii',
    title: 'PII Masker — DSLM Redaction',
    category: 'ai',
    badge: 'Data privacy',
    description:
      'Transformer-based sensitive-data pipeline detecting and masking 10+ entity types — identifiers, emails, phone numbers, IPs — at ~90% accuracy with NVD-context enrichment.',
    tech: ['Transformers', 'Hugging Face', 'PyTorch', 'NLP'],
    link: 'https://github.com/i-mAshura/PII_MASKER_WITH_DSLM',
  },
  {
    id: 'canbus',
    title: 'Automobile Hacking — CAN Bus Offense',
    category: 'rf',
    badge: 'Automotive security',
    description:
      'Offensive research on in-vehicle networks. Designed and executed 10+ CAN-bus attacks surfacing 20+ ECU weaknesses in ICSim, covering packet spoofing, timing attacks and anomaly detection.',
    tech: ['CAN Bus', 'ICSim', 'Reverse Engineering', 'Hardware'],
    link: 'https://github.com/i-mAshura/ICANN_AUTOMOBILE_HACKING',
  },
  {
    id: 'dfs',
    title: 'Wi-Fi DFS Disruption — RF Research',
    category: 'rf',
    badge: 'Spectrum security',
    description:
      'Studied RF interference against 802.11 networks and Dynamic Frequency Selection behaviour under controlled conditions with HackRF and bladeRF — mapping spectrum resilience and channel-transition weakness.',
    tech: ['HackRF', 'bladeRF', 'SDR', 'Wi-Fi Security', 'Spectrum Analysis'],
    link: 'https://github.com/i-mAshura/DFS_WIFI_HOPPER_TRAIL',
  },
  {
    id: 'gps',
    title: 'GPS Spoofing & SDR FM Transmission',
    category: 'rf',
    badge: 'GNSS security',
    description:
      'Controlled SDR experimentation on GNSS trust assumptions — spoofing indicators, signal-power anomalies and receiver-side validation — plus a custom software-defined FM modulation and spectrum pipeline.',
    tech: ['HackRF', 'bladeRF', 'GNSS', 'Signal Processing'],
    link: 'https://github.com/i-mAshura/CUSTOM_FM_RAD',
  },
  {
    id: 'logdefender',
    title: 'LogDefender — Lightweight SIEM',
    category: 'tools',
    badge: 'Log forensics',
    description:
      'Parses Linux auth and server logs to surface brute-force attempts, scan patterns and anomalous sessions, producing structured investigative reports without a full SIEM stack.',
    tech: ['Python', 'Regex', 'Log Analysis', 'Detection Engineering'],
    link: 'https://github.com/i-mAshura/LogDefender',
  },
  {
    id: 'suricata',
    title: 'Suricata HomeLab & NetCut',
    category: 'tools',
    badge: 'Defensive operations',
    description:
      'Physical homelab IDS processing 10k+ packets against custom rules at 85–90% alert accuracy, paired with ARP-level network scanning and device control tooling.',
    tech: ['Suricata', 'Bettercap', 'Bash', 'Network Security'],
    link: 'https://github.com/i-mAshura/Suricata_HomeLab',
  },
  {
    id: 'stego',
    title: 'StegoSecure — Image Steganography',
    category: 'tools',
    badge: 'Applied crypto',
    description:
      'Carrier-image steganography with passcode-protected extraction, hiding encrypted payloads inside cover images for covert channel study.',
    tech: ['Python', 'OpenCV', 'Steganography', 'Cryptography'],
    link: 'https://github.com/i-mAshura/StegoSecure',
  },
  {
    id: 'rsa',
    title: 'RSA Encryption Tool',
    category: 'tools',
    badge: 'Cryptography',
    description:
      'Pure-Python RSA implementation with Miller-Rabin primality testing, large prime generation, asymmetric encryption and signing routines.',
    tech: ['Python', 'RSA', 'Number Theory', 'Public-Key Crypto'],
    link: 'https://github.com/i-mAshura/RSA-ENCRYPTION-TOOL',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.headRow}>
          <SectionHead
            index="03"
            label="Systems"
            title={
              <>
                Things I&apos;ve built<span className="acid">,</span> broken
                <span className="acid">,</span> and hardened<span className="acid">.</span>
              </>
            }
            sub="Production platforms, research implementations and offensive experiments. Every entry shipped, tested and documented."
          />
          <div className={styles.count}>
            <span>{String(projects.length).padStart(2, '0')}</span>
            <span className={styles.countLabel}>Systems logged</span>
          </div>
        </div>

        <div className={styles.filters} role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`${styles.filter} ${filter === f.id ? styles.filterActive : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.035, 0.25) }}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.badge}>{project.badge}</span>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.arrow}
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className={styles.lock} title="Private code">
                      <Lock size={13} />
                    </span>
                  )}
                </div>

                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <a
                  href={project.link || 'https://github.com/i-mAshura'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stretch}
                  aria-label={project.title}
                  tabIndex={-1}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className={styles.footerRow}>
          <p>25+ public repositories, experiments and security tooling.</p>
          <a href="https://github.com/i-mAshura" target="_blank" rel="noopener noreferrer">
            github.com/i-mAshura <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
