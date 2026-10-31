'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Building2, Calendar, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Research Intern – Security R&D",
    org: "Indian Institute of Technology Madras (IITM) – ASTHRA Lab",
    type: "Research",
    location: "Remote",
    period: "Oct 2026 – Present",
    tag: "AI for Security",
    highlights: [
      "Conducting security research & development on AI-driven cybersecurity mechanisms and intelligent threat analysis.",
      "Investigating deep learning and sequence modeling applications for real-time threat detection and automated defense pipelines.",
      "Collaborating on novel architectures for adaptive resilience against evolving adversary tactics."
    ],
    tech: ["AI for Security", "Threat Detection", "Machine Learning", "Automated Defense", "Security R&D"]
  },
  {
    role: "Security Engineer",
    org: "Digital Fortress Private Limited",
    type: "Industry",
    location: "Vijayawada, India",
    period: "May 2023 – Present",
    tag: "IAM & NetSec",
    highlights: [
      "Identity & Access Management: Implemented passwordless (FIDO2/WebAuthn) and MFA authentication across client apps using OIDC & SAML; governed access policies, session lifecycles, and RBAC/ABAC.",
      "Network Perimeter Hardening: Reviewed 200+ firewall rules eliminating ~30% redundant/overly permissive entries; implemented VLAN segmentation and enforced MFA on VPN/remote access.",
      "Cloud Security Risk Investigation (AWS): Led forensic investigation of a live compromise across 70+ EC2 instances and 40+ S3 buckets; uncovered 3+ months persistence and 1+ TB accessed data; extracted IoCs and hardened security posture.",
      "Security Automation – ARGUS: Developed an agentic SOC/SIEM platform ingesting 1,500+ security events into Elasticsearch, automated tagging across 50+ MITRE ATT&CK techniques at 90%+ accuracy, cutting incident response time by 70%."
    ],
    tech: ["Keycloak", "OIDC/SAML", "AWS IAM", "Firewalls", "IDS/IPS", "Wazuh", "Linux", "VPC Flow Logs"]
  },
  {
    role: "Undergraduate Student Researcher / Research Associate",
    org: "Center of Excellence (AIR), VIT-AP University",
    type: "Research",
    location: "Amaravati, Andhra Pradesh",
    period: "Apr 2025 – Jul 2026",
    tag: "Kernel & Agentic Security",
    highlights: [
      "Engineered ARGUS agentic SOC/SIEM platform monitoring 4 VMs & endpoints with autonomous remediation agents.",
      "Developed an eBPF-based intrusion detection framework uniting kernel telemetry with temporal-logic symbolic reasoning for explainable APT detection.",
      "Collaborated with Andhra Pradesh CID on a blockchain forensics platform using Python, NetworkX, and Neo4j tracing 500+ transactions.",
      "Built NexusSOC platform integrating Wazuh SIEM, n8n workflow engine, and Catalyst; automated alert triage reducing manual effort by 70% across 10,000+ alerts.",
      "Conducted RF and automotive security research using HackRF and bladeRF SDRs covering GPS spoofing, Wi-Fi DFS disruption, and CAN-bus attack surfaces."
    ],
    tech: ["eBPF", "Elasticsearch", "Neo4j", "NetworkX", "n8n", "Wazuh", "SDR (HackRF/bladeRF)", "CAN Bus"]
  },
  {
    role: "Cyber Forensics Collaborator & Instructor",
    org: "Andhra Pradesh Police CID (AP CID)",
    type: "Government / Forensics",
    location: "Andhra Pradesh, India",
    period: "Jan 2026 – May 2026",
    tag: "Forensics & Training",
    highlights: [
      "Delivered instructional sessions for the AP CID Employee Development Programme (EDP) covering modern cyber forensics and threat analysis.",
      "Engineered cryptocurrency transaction investigation pipelines using graph analytics (Neo4j/NetworkX) to analyze 200+ wallets and trace suspicious flows across 500+ transactions.",
      "Streamlined investigation turnaround by 50% via automated blockchain data ingestion and structured forensic report generation."
    ],
    tech: ["Blockchain Forensics", "Neo4j", "NetworkX", "Crypto Attribution", "Technical Training"]
  },
  {
    role: "Freelance Cloud Security Architect",
    org: "Confidential Clients",
    type: "Consulting",
    location: "Remote",
    period: "Jul 2026 – Aug 2026",
    tag: "CloudOps & IR",
    highlights: [
      "Investigated real-time AWS infrastructure compromise across 70+ EC2 instances and 40+ S3 buckets, isolating compromised regions by correlating billing anomalies and VPC flow data.",
      "Designed least-privilege AWS architectures with centralized CloudTrail/CloudWatch logging, strict IAM condition keys, and automated drift detection."
    ],
    tech: ["AWS Security", "Incident Response", "CloudTrail", "Boto3", "Docker", "Linux"]
  }
];

const educationList = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Specialization in Cyber Security",
    institution: "Vellore Institute of Technology, VIT-AP University",
    location: "Amaravati, Andhra Pradesh",
    period: "2023 – 2027 (Expected)",
    score: "CGPA: 9.44 / 10.0",
    badge: "Specialization Rank 1 (Department Rank 1)",
    details: [
      "Rank 1 across the Cyber Security / Network and Security specialization cohort.",
      "Relevant Coursework: Cryptography, Network Security, Network Intrusion Detection & Prevention, Cloud Computing (AWS), Design & Analysis of Algorithms, Data Structures, Operating Systems, Web Application Pentesting, Database Management."
    ]
  },
  {
    degree: "Intermediate (Class XII, MPC)",
    specialization: "Mathematics, Physics, Chemistry",
    institution: "SR Junior College",
    location: "Gollapudi, Andhra Pradesh",
    period: "2021 – 2023",
    score: "973 / 1000 (97.3%)",
    badge: "Merit Distinction",
    details: ["Strong mathematical grounding in linear algebra, calculus, and discrete mathematics."]
  },
  {
    degree: "Secondary School Certificate (Class X)",
    specialization: "General Sciences & Mathematics",
    institution: "Sri Chaitanya High School",
    location: "Ibrahimpatnam, Andhra Pradesh",
    period: "Graduated 2021",
    score: "595 / 600 (99.1%)",
    badge: "State Top Tier",
    details: ["Outstanding academic record in mathematics, physical sciences, and computer foundations."]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <span className={styles.tagline}>// CHRONOLOGICAL_LOGS</span>
        <h2 className={styles.sectionTitle}>&lt;Trajectory &amp; Education /&gt;</h2>
        <div className={styles.divider}></div>
      </motion.div>

      <div className={styles.tabContainer}>
        <button
          onClick={() => setActiveTab('experience')}
          className={`${styles.tabBtn} ${activeTab === 'experience' ? styles.tabActive : ''}`}
        >
          <Briefcase size={18} /> Experience &amp; Research ({experiences.length})
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`${styles.tabBtn} ${activeTab === 'education' ? styles.tabActive : ''}`}
        >
          <GraduationCap size={18} /> Education &amp; Academics ({educationList.length})
        </button>
      </div>

      <div className={styles.timeline}>
        {activeTab === 'experience' ? (
          experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot} />
                <div className={styles.markerLine} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <span className={styles.badge}>{item.tag}</span>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <div className={styles.orgRow}>
                      <Building2 size={16} className={styles.metaIcon} />
                      <span className={styles.orgName}>{item.org}</span>
                    </div>
                  </div>
                  <div className={styles.metaRight}>
                    <div className={styles.metaPill}>
                      <Calendar size={14} /> {item.period}
                    </div>
                    <div className={styles.metaPill}>
                      <MapPin size={14} /> {item.location}
                    </div>
                  </div>
                </div>

                <ul className={styles.highlightList}>
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className={styles.highlightItem}>
                      <ChevronRight size={16} className={styles.bulletIcon} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.techPills}>
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className={styles.techPill}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          educationList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot} />
                <div className={styles.markerLine} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <span className={styles.badgeGold}>{item.badge}</span>
                    <h3 className={styles.roleTitle}>{item.degree}</h3>
                    <div className={styles.orgRow}>
                      <Building2 size={16} className={styles.metaIcon} />
                      <span className={styles.orgName}>{item.institution}</span>
                      <span className={styles.dotSeparator}>•</span>
                      <span className={styles.specialization}>{item.specialization}</span>
                    </div>
                  </div>
                  <div className={styles.metaRight}>
                    <div className={styles.scorePill}>
                      <Award size={15} /> {item.score}
                    </div>
                    <div className={styles.metaPill}>
                      <Calendar size={14} /> {item.period}
                    </div>
                  </div>
                </div>

                <ul className={styles.highlightList}>
                  {item.details.map((point, pIdx) => (
                    <li key={pIdx} className={styles.highlightItem}>
                      <CheckCircle2 size={16} className={styles.bulletCheck} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
