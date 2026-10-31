'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const categories = [
  { id: 'all', label: 'All Systems' },
  { id: 'iam', label: 'IAM & Cloud Security' },
  { id: 'kernel', label: 'Kernel & Threat Intel' },
  { id: 'ai', label: 'AI, Forensics & Privacy' },
  { id: 'rf', label: 'RF & Automotive' },
  { id: 'tools', label: 'Security Tools' },
];

const projects = [
  {
    title: "Aegis IAM – Zero-Trust Identity Platform",
    category: "iam",
    badge: "Zero Trust Architecture",
    description: "Deployed centralized Keycloak SSO for 4 apps (3 OIDC, 1 SAML) with WebAuthn/TOTP passwordless MFA and 10 role profiles. Authored 15 OPA/Rego attribute-based policies with step-up MFA for admin actions. Codified realms in Terraform, cutting onboarding from 45 to under 5 min, streaming 2,000+ events to Wazuh.",
    tech: ["Keycloak", "OIDC/SAML", "OPA/Rego", "Terraform", "Wazuh", "WebAuthn"],
    github: "https://github.com/i-mAshura"
  },
  {
    title: "PrivScope – AWS Least-Privilege Auditor",
    category: "iam",
    badge: "Cloud Security",
    description: "Automated Boto3 scanner conducting 20+ IAM audits covering wildcards, unused keys, missing MFA, and vulnerable trust policies. Modeled IAM permissions as a NetworkX directed graph to pinpoint 8 privilege-escalation vectors. Synthesized least-privilege policies from 5,000+ CloudTrail events, cutting excess permissions by ~65%.",
    tech: ["Python", "Boto3", "AWS CloudTrail", "NetworkX", "Terraform", "Graph Analytics"],
    github: "https://github.com/i-mAshura"
  },
  {
    title: "ARGUS – Agentic SOC & SIEM Platform",
    category: "kernel",
    badge: "Autonomous Security",
    description: "Autonomous SOC/SIEM/SOAR architecture monitoring 4 VMs & endpoints. Ingests 1,500+ security events into an Elasticsearch cluster with automated tagging across 50+ MITRE ATT&CK techniques at 90%+ accuracy. Response agents isolate compromised hosts and auto-remediate issues, cutting MTTR by 70%.",
    tech: ["Python", "Elasticsearch", "Docker", "Linux", "MITRE ATT&CK", "Autonomous Agents"],
    github: "https://github.com/i-mAshura"
  },
  {
    title: "NeuroSymbolic Temporal IDS (eBPF_KernelGuard)",
    category: "kernel",
    badge: "Kernel Telemetry",
    description: "Research intrusion detection framework combining in-kernel eBPF telemetry with neural sequence models and temporal-logic symbolic rules. Traces multi-stage APT attack campaigns back to exact kernel system-call streams while providing transparent, rule-level explainable security decisions.",
    tech: ["eBPF", "Neurosymbolic AI", "Temporal Logic", "Linux Kernel", "Sequence Modeling"],
    github: "https://github.com/i-mAshura/eBPF_KernelGuard"
  },
  {
    title: "HawkEye / HawkEye++ – eBPF Behavioral Detection",
    category: "kernel",
    badge: "Runtime Defense",
    description: "eBPF-based malware and behavioral detection system identifying suspicious runtime execution rather than relying on static signatures. HawkEye++ integrates dynamic kernel-space telemetry to catch evasive rootkits and memory manipulation techniques.",
    tech: ["eBPF", "Linux Internals", "Behavioral Analysis", "Kernel Tracing", "C/eBPF"],
    github: "https://github.com/i-mAshura"
  },
  {
    title: "AnalytiXHub / AP CID Blockchain Forensics",
    category: "ai",
    badge: "Crypto Forensics",
    description: "Cryptocurrency transaction investigation platform built in collaboration with AP CID. Employs graph analytics over 500+ transactions and 200+ wallets using Neo4j and NetworkX to reveal wallet clusters and illicit transfer patterns, cutting manual investigation turnaround by 50%.",
    tech: ["Python", "Neo4j", "NetworkX", "TypeScript", "React", "Blockchain Analytics"],
    github: "https://github.com/i-mAshura/AnalytiXHub"
  },
  {
    title: "DermaVision AI – Explainable Medical AI",
    category: "ai",
    badge: "Medical AI & XAI",
    description: "Explainable deep learning system for skin lesion classification trained on ISIC 2019 and HAM10000 datasets. Evaluated EfficientNet and Swin Transformer architectures, achieving ~87% test accuracy, paired with automated medical reporting and visual explainability components.",
    tech: ["PyTorch", "EfficientNet", "Swin Transformer", "Explainable AI", "Computer Vision"],
    github: "https://github.com/i-mAshura/DhermaVisionAI"
  },
  {
    title: "RiskFlow / RAdAC – Risk-Adaptive Access Control",
    category: "iam",
    badge: "Zero Trust",
    description: "Continuous risk-adaptive access-control platform that continuously analyzes contextual client and environment signals to dynamically modulate authorization decisions, replacing legacy binary allow/deny rules with contextual risk posture evaluation.",
    tech: ["Zero Trust", "Risk Modeling", "Python", "Contextual Auth", "Dynamic RBAC"],
    github: "https://github.com/i-mAshura/RAdAC"
  },
  {
    title: "CloudSentinel – Cloud Security Scanner",
    category: "iam",
    badge: "AWS Security",
    description: "Automated cloud security audit tool that analyzes AWS environments for misconfigurations: publicly accessible S3 buckets, over-privileged IAM users, unencrypted assets, and overly permissive security groups. Produces severity-ranked HTML forensic reports with remediation playbooks.",
    tech: ["Python", "AWS SDK (Boto3)", "Security Auditing", "IAM", "S3 Hardening"],
    github: "https://github.com/i-mAshura/CloudSentinel"
  },
  {
    title: "NexusSOAR / NexusSOC Automated Platform",
    category: "kernel",
    badge: "SOAR Automation",
    description: "Integrated SOC automation platform coupling Wazuh SIEM, n8n workflow engine, and Catalyst. Engineered alert enrichment, IOC extraction, and automated playbooks for SSH brute force and anomalous logins, processing 10k+ test alerts and reducing manual triage effort by 70%.",
    tech: ["Wazuh SIEM", "n8n", "Python", "Docker", "Catalyst", "Incident Triage"],
    github: "https://github.com/i-mAshura/NexusSOAR"
  },
  {
    title: "PII Masker with DSLM",
    category: "ai",
    badge: "Data Privacy",
    description: "DSLM-based sensitive data protection system trained on 5,000+ custom records integrated with NVD contextual data. Automates detection and redaction across 10+ sensitive entity types (IDs, emails, phone numbers, IP addresses) with ~90% accuracy.",
    tech: ["DSLM", "Hugging Face", "PyTorch", "NLP", "Data Privacy"],
    github: "https://github.com/i-mAshura/PII_MASKER_WITH_DSLM"
  },
  {
    title: "Automobile Hacking (ICANN)",
    category: "rf",
    badge: "Automotive Security",
    description: "Conducted offensive security research on in-vehicle communication systems. Designed and executed 10+ CAN-bus attacks uncovering 20+ ECU vulnerabilities in virtual ICSim environments, investigating packet spoofing, timing attacks, and anomaly detection.",
    tech: ["CAN Bus", "ICSim", "Reverse Engineering", "Automotive Security", "Hardware"],
    github: "https://github.com/i-mAshura/ICANN_AUTOMOBILE_HACKING"
  },
  {
    title: "RF Wi-Fi Disruption & DFS Security",
    category: "rf",
    badge: "RF Spectrum",
    description: "Explored RF interference against 802.11 Wi-Fi networks and the behavior of Dynamic Frequency Selection (DFS) radar-detection channel switches under laboratory conditions using HackRF and bladeRF SDR platforms to analyze spectrum resilience.",
    tech: ["HackRF", "bladeRF", "SDR", "Wi-Fi Security", "Spectrum Analysis"],
    github: "https://github.com/i-mAshura/DFS_WIFI_HOPPER_TRAIL"
  },
  {
    title: "RF GPS Spoofing & Custom FM Radio",
    category: "rf",
    badge: "GNSS Security",
    description: "Investigated GNSS vulnerabilities through controlled SDR-based RF signal generation, analyzing GPS spoofing resilience. Designed and implemented custom software-defined FM modulation, transmission, and spectrum analysis pipelines.",
    tech: ["HackRF", "bladeRF", "GNSS Security", "SDR Modulation", "Signal Processing"],
    github: "https://github.com/i-mAshura/CUSTOM_FM_RAD"
  },
  {
    title: "LogDefender – Mini SIEM & Log Analyzer",
    category: "tools",
    badge: "Log Forensics",
    description: "Lightweight SIEM log engine that parses Linux auth and server logs to flag brute-force attacks, port-scan patterns, and anomalous sessions, producing structured security reports.",
    tech: ["Python", "Regex", "Log Forensics", "Brute-Force Detection"],
    github: "https://github.com/imAshura/LogDefender"
  },
  {
    title: "StegoSecure – Image Steganography",
    category: "tools",
    badge: "Applied Cryptography",
    description: "Steganographic security tool providing carrier image modification to securely hide and extract encrypted text payloads with passcode-protected decryption.",
    tech: ["Python", "OpenCV", "Steganography", "Cryptography"],
    github: "https://github.com/imAshura/StegoSecure"
  },
  {
    title: "RSA Encryption Tool",
    category: "tools",
    badge: "Cryptography",
    description: "Pure Python implementation of the RSA public-key cryptosystem with Miller-Rabin primality testing, large prime generation, asymmetric encryption, and signing routines.",
    tech: ["Python", "RSA Algorithm", "Public Key Crypto", "Number Theory"],
    github: "https://github.com/i-mAshura/RSA-ENCRYPTION-TOOL"
  },
  {
    title: "Suricata HomeLab & NetCut",
    category: "tools",
    badge: "Defensive Operations",
    description: "Physical homelab network intrusion detection system processing 10k+ packets with custom rules (85–90% alert accuracy), paired with NetCut for network scanning and ARP-level device management.",
    tech: ["Suricata IDS/IPS", "Bettercap", "Bash", "Network Security"],
    github: "https://github.com/i-mAshura/Suricata_HomeLab"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.header}
      >
        <span className={styles.categoryTag}>Engineering Portfolio</span>
        <h2 className={styles.sectionTitle}>Projects &amp; Systems</h2>
        <p className={styles.sectionSubtitle}>
          Production platforms, security scanners, research implementations, and open-source tooling.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className={styles.filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterActive : ''}`}
          >
            {cat.label}
            {activeFilter === cat.id && (
              <span className={styles.filterCount}>({filteredProjects.length})</span>
            )}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={styles.projectCard}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardCategoryBadge}>{project.badge}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>

              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className={styles.moreRepos}>
        <p>Explore all 25+ open-source repositories, experiments, and security tooling:</p>
        <a
          href="https://github.com/i-mAshura"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.allReposBtn}
        >
          <ExternalLink size={15} /> github.com/i-mAshura
        </a>
      </div>
    </section>
  );
}
