'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Network,
  Activity,
  Cloud,
  Cpu,
  Radio,
} from 'lucide-react';
import SectionHead from './SectionHead';
import styles from './Skills.module.css';

const categories = [
  {
    index: '01',
    title: 'Identity & Access',
    icon: <ShieldCheck size={16} />,
    items: [
      'Keycloak SSO',
      'OIDC & SAML 2.0',
      'FIDO2 / WebAuthn',
      'OPA / Rego ABAC',
      'RBAC & least privilege',
      'Secrets governance',
      'X.509 / PKI lifecycle',
    ],
  },
  {
    index: '02',
    title: 'Network Defense',
    icon: <Network size={16} />,
    items: [
      'Firewall rule review',
      'VLAN segmentation',
      'Suricata & Snort',
      'Wireshark packet analysis',
      'VPN & remote MFA',
      'TCP/IP & routing',
      'Perimeter hardening',
    ],
  },
  {
    index: '03',
    title: 'Security Operations',
    icon: <Activity size={16} />,
    items: [
      'SIEM — Wazuh, Splunk, Elastic',
      'ARGUS agentic SOC',
      'MITRE ATT&CK mapping',
      'SOAR — n8n, Catalyst',
      'Alert triage & IOC extraction',
      'Incident containment',
      'Log forensics',
    ],
  },
  {
    index: '04',
    title: 'Cloud & DevSecOps',
    icon: <Cloud size={16} />,
    items: [
      'AWS IAM, VPC, S3, EC2',
      'CloudTrail forensics',
      'Terraform IaC',
      'Boto3 auditing',
      'Docker & Linux admin',
      'Security groups & flow logs',
      'CI/CD security automation',
    ],
  },
  {
    index: '05',
    title: 'AI / Kernel Telemetry',
    icon: <Cpu size={16} />,
    items: [
      'eBPF kernel probes',
      'Neurosymbolic threat models',
      'PyTorch & sequence models',
      'Transformers / NLP masking',
      'Explainable AI (XAI)',
      'Neo4j & NetworkX graphs',
      'Federated model defenses',
    ],
  },
  {
    index: '06',
    title: 'RF & Automotive',
    icon: <Radio size={16} />,
    items: [
      'CAN-bus exploitation',
      'ICSim ECU security',
      'HackRF & bladeRF',
      'GPS spoofing resilience',
      'Wi-Fi DFS spectrum',
      'SDR modulation',
      'Post-quantum cryptography',
    ],
  },
];

const toolbelt = [
  'Python',
  'Bash',
  'C / C++',
  'Java',
  'JavaScript',
  'SQL',
  'Linux',
  'Nmap',
  'Metasploit',
  'Burp Suite',
  'Wireshark',
  'Splunk',
  'Wazuh',
  'Suricata',
  'Snort',
  'Docker',
  'Terraform',
  'Git',
  'n8n',
  'Neo4j',
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHead
          index="05"
          label="Arsenal"
          title={
            <>
              The stack I operate in<span className="acid">.</span>
            </>
          }
          sub="Grouped by the problem being solved, not by the buzzword being marketed."
        />

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={styles.card}
            >
              <div className={styles.cardHead}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3>{cat.title}</h3>
                <span className={styles.index}>{cat.index}</span>
              </div>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>
                    <span className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className={styles.toolbelt}>
          <span className={styles.toolbeltLabel}>Toolbelt</span>
          <div className={styles.toolList}>
            {toolbelt.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
