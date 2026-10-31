'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Activity, Cloud, Cpu, Radio } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Identity & Access Management (IAM)",
    icon: <ShieldCheck size={20} />,
    skills: [
      "Keycloak SSO",
      "OIDC & SAML 2.0",
      "FIDO2 / WebAuthn",
      "OPA / Rego (ABAC)",
      "Role-Based Access (RBAC)",
      "Least Privilege",
      "Secrets Governance",
      "X.509 & PKI Lifecycle"
    ]
  },
  {
    title: "Network Security & Defense",
    icon: <Network size={20} />,
    skills: [
      "Firewall Rule-Base Review",
      "VLAN Segmentation",
      "Suricata & Snort IDS/IPS",
      "Wireshark Deep Packet Analysis",
      "VPN & Remote MFA",
      "TCP/IP & Routing",
      "Perimeter Hardening",
      "Network Pentesting"
    ]
  },
  {
    title: "Security Operations & Threat Intel",
    icon: <Activity size={20} />,
    skills: [
      "SIEM (Wazuh, Splunk, Elastic)",
      "ARGUS Agentic SOC Platform",
      "MITRE ATT&CK Auto-Mapping",
      "SOAR Playbooks (n8n, Catalyst)",
      "Alert Triage & IOC Extraction",
      "Incident Containment",
      "Server Log Forensics",
      "Vulnerability Scoring"
    ]
  },
  {
    title: "Cloud & DevSecOps Infrastructure",
    icon: <Cloud size={20} />,
    skills: [
      "AWS (IAM, VPC, S3, EC2)",
      "CloudTrail Forensic Ingestion",
      "Terraform (IaC)",
      "Python SDK (Boto3) Auditing",
      "Docker & Linux Admin",
      "Security Groups & Flow Logs",
      "CI/CD Security Automation",
      "System Recovery & Hardening"
    ]
  },
  {
    title: "AI & In-Kernel Security Telemetry",
    icon: <Cpu size={20} />,
    skills: [
      "eBPF Kernel Probes",
      "Neurosymbolic Threat Models",
      "PyTorch & Sequence Modeling",
      "Transformers & NLP Masking",
      "Swin Transformer & Medical AI",
      "Explainable AI (XAI)",
      "Neo4j & NetworkX Graphs",
      "Federated Model Defenses"
    ]
  },
  {
    title: "Hardware, RF & Automotive Security",
    icon: <Radio size={20} />,
    skills: [
      "CAN-bus Vehicle Exploitation",
      "ICSim ECU Security",
      "Software-Defined Radio (SDR)",
      "HackRF & bladeRF Systems",
      "GPS Spoofing Resilience",
      "Wi-Fi DFS Spectrum Transition",
      "SDR Modulation & Signals",
      "Post-Quantum Cryptography"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.header}
      >
        <span className={styles.categoryTag}>Technical Arsenal</span>
        <h2 className={styles.sectionTitle}>Skills &amp; Competencies</h2>
        <p className={styles.sectionSubtitle}>
          Specialized technical competencies across Zero-Trust identity platforms, production cloud infrastructure, in-kernel telemetry, and security automation.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <ul className={styles.skillList}>
              {category.skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
