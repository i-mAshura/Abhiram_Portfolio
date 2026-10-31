'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Activity, Cloud, Cpu, Radio } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Identity & Access Management (IAM)",
    icon: <ShieldCheck size={24} />,
    skills: [
      "Keycloak & Centralized SSO",
      "OIDC, OAuth 2.0 & SAML 2.0",
      "FIDO2 / WebAuthn & Passwordless",
      "OPA / Rego Attribute Policies (ABAC)",
      "Role-Based Access Control (RBAC)",
      "Least Privilege & Access Reviews",
      "Joiner-Mover-Leaver & Secrets Governance",
      "X.509, TLS & PKI Certificate Lifecycle"
    ]
  },
  {
    title: "Network Security & Defense",
    icon: <Network size={24} />,
    skills: [
      "Firewall Rule-Base Review & Hardening",
      "VLAN Segmentation & Zone Isolation",
      "IDS/IPS (Suricata & Snort)",
      "Wireshark & Deep Packet Analysis",
      "VPN & Remote Access MFA Enforcement",
      "TCP/IP, Routing & Switching Fundamentals",
      "Perimeter Security & Flow Monitoring",
      "Network Penetration Testing (Nmap, Burp)"
    ]
  },
  {
    title: "Security Operations & Threat Intel",
    icon: <Activity size={24} />,
    skills: [
      "SIEM (Wazuh, Splunk, Elasticsearch)",
      "ARGUS Agentic SOC/SIEM Platform",
      "MITRE ATT&CK Auto-Mapping (50+ techniques)",
      "SOAR Automation & Playbooks (n8n, Catalyst)",
      "Alert Triage & IOC Extraction",
      "Incident Response & Host Containment",
      "Server Log Forensics & Anomaly Detection",
      "Vulnerability Management & Risk Scoring"
    ]
  },
  {
    title: "Cloud & DevSecOps Infrastructure",
    icon: <Cloud size={24} />,
    skills: [
      "AWS (IAM, CloudTrail, VPC, EC2, S3)",
      "Cloud Security Risk & Breach Forensics",
      "Infrastructure as Code (Terraform)",
      "Python SDK (Boto3) Security Auditing",
      "Docker Containerization & Linux Admin",
      "Network ACLs, Security Groups & Flow Logs",
      "Git/GitHub CI/CD Security Automation",
      "System Recovery & GRUB/Bootloader"
    ]
  },
  {
    title: "AI, Kernel & Neurosymbolic Security",
    icon: <Cpu size={24} />,
    skills: [
      "eBPF Kernel Telemetry & In-Kernel Probes",
      "Neurosymbolic Temporal Threat Detection",
      "PyTorch & Deep Neural Sequence Models",
      "Hugging Face Transformers & NLP Masking",
      "Swin Transformer & EfficientNet (Medical AI)",
      "Explainable AI (XAI) & Attribution",
      "Graph Analytics (Neo4j & NetworkX)",
      "Federated Learning & Model Defense"
    ]
  },
  {
    title: "Hardware, RF & Automotive Security",
    icon: <Radio size={24} />,
    skills: [
      "CAN-bus Vehicle Network Exploitation",
      "ICSim In-Vehicle ECU Security Analysis",
      "Software-Defined Radio (HackRF & bladeRF)",
      "GPS Spoofing & GNSS Resilience Analysis",
      "Wi-Fi DFS Interference & Channel Transitions",
      "SDR-based FM Transmission & Modulation",
      "Hardware Attack Surfaces & Reverse Eng.",
      "Post-Quantum Signatures (FALCON-512)"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <span style={{
          fontFamily: 'var(--font-fira-code)',
          fontSize: '0.85rem',
          color: 'var(--accent-primary)',
          letterSpacing: '2px',
          display: 'block',
          marginBottom: '10px'
        }}>// TECHNICAL_ARSENAL</span>
        <h2 className={styles.sectionTitle}>&lt;Skills_Matrix /&gt;</h2>
        <div className={styles.divider}></div>
      </motion.div>

      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <ul className={styles.skillList}>
              {category.skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  <span className={styles.bullet}>&gt;</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
