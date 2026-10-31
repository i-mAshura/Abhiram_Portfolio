'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Users, Trophy, CheckCircle, ExternalLink, Flame } from 'lucide-react';
import styles from './Awards.module.css';

const certifications = [
  {
    title: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2026",
    credentialId: "Specialty Level",
    desc: "Validates deep expertise across cloud security domains: identity and access management (IAM), data protection, logging and monitoring, infrastructure security, and incident response."
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2025",
    credentialId: "Associate Level",
    desc: "Demonstrates comprehensive knowledge of architecting secure, robust, and resilient distributed applications and multi-tier systems on AWS."
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "Jun 2026",
    credentialId: "Professional Certificate",
    desc: "Hands-on mastery of SIEM tools (Chronicle, Splunk), network protocol analysis, Python automation for security, Linux bash scripting, and threat mitigation."
  },
  {
    title: "Certified Network Security Practitioner (CNSP)",
    issuer: "The SecOps Group",
    date: "Nov 2025",
    credentialId: "CNSP Certified",
    desc: "Practical network security engineering certification focusing on firewall management, packet dissection, VPN configuration, and network hardening."
  }
];

const honors = [
  {
    title: "2nd Prize – Optiv Recruitment Hackathon",
    org: "Optiv Cyber Security",
    details: "Competed and secured 2nd place among 60+ competitive cybersecurity teams across all 4 VIT campuses, demonstrating advanced offensive and defensive problem solving.",
    badge: "2nd Place / 60+ Teams"
  },
  {
    title: "Specialization Rank 1 (Department Rank 1)",
    org: "VIT-AP University",
    details: "Rank 1 in the Cyber Security / Network & Security specialization with a cumulative GPA of 9.44 / 10.0, excelling in Cryptography, Network Defense, and Systems.",
    badge: "Rank 1 | CGPA 9.44"
  },
  {
    title: "Top 386 – ML Hackathon 2026",
    org: "National ML Competition",
    details: "Engineered scalable machine learning pipelines and evaluated advanced architectures under rigorous benchmarking constraints.",
    badge: "Top 386 National"
  }
];

const leadership = [
  {
    role: "Technical Lead",
    org: "Null Chapter, VIT-AP",
    period: "Oct 2024 – May 2026",
    points: [
      "Led 15+ comprehensive cybersecurity workshops covering web pentesting, binary exploitation, and network security.",
      "Designed and deployed Jeopardy-style CTF challenges for collegiate competitions.",
      "Mentored chapter members and spearheaded initiatives leading to the coveted Best Chapter Award."
    ]
  },
  {
    role: "Executive Secretary",
    org: "Microsoft Student Community (MSC)",
    period: "Mar 2024 – Feb 2026",
    points: [
      "Directed end-to-end logistics, mentorship, and judge coordination for 5+ major hackathons and technical bootcamps.",
      "Drove campus-wide technical culture, leading hands-on developer workshops on cloud and open source tooling."
    ]
  },
  {
    role: "Instructor & Forensics Management",
    org: "Andhra Pradesh CID (AP CID) EDP",
    period: "2026",
    points: [
      "Conducted specialized training modules for law enforcement personnel under the Employee Development Programme.",
      "Educated officers on cryptocurrency tracing, blockchain analysis, digital evidence preservation, and OSINT techniques."
    ]
  }
];

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <span className={styles.tagline}>// CREDENTIALS_&amp;_HONORS</span>
        <h2 className={styles.sectionTitle}>&lt;Certifications &amp; Leadership /&gt;</h2>
        <div className={styles.divider}></div>
      </motion.div>

      {/* Certifications Grid */}
      <div className={styles.subHeader}>
        <ShieldAlert size={22} className={styles.sectionIcon} />
        <h3>Industry Certifications</h3>
      </div>
      <div className={styles.certGrid}>
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={styles.certCard}
          >
            <div className={styles.certTop}>
              <span className={styles.certIssuer}>{cert.issuer}</span>
              <span className={styles.certDate}>{cert.date}</span>
            </div>
            <h4 className={styles.certTitle}>{cert.title}</h4>
            <p className={styles.certDesc}>{cert.desc}</p>
            <div className={styles.certBadge}>
              <CheckCircle size={14} /> {cert.credentialId}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Honors and Leadership Grid */}
      <div className={styles.splitGrid}>
        {/* Honors */}
        <div>
          <div className={styles.subHeader}>
            <Trophy size={22} className={styles.sectionIconGold} />
            <h3>Honors &amp; Accolades</h3>
          </div>
          <div className={styles.columnList}>
            {honors.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={styles.honorCard}
              >
                <div className={styles.honorBadge}>
                  <Flame size={14} /> {item.badge}
                </div>
                <h4 className={styles.honorTitle}>{item.title}</h4>
                <span className={styles.honorOrg}>{item.org}</span>
                <p className={styles.honorDesc}>{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <div className={styles.subHeader}>
            <Users size={22} className={styles.sectionIcon} />
            <h3>Leadership &amp; Community</h3>
          </div>
          <div className={styles.columnList}>
            {leadership.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={styles.leadCard}
              >
                <div className={styles.leadTop}>
                  <span className={styles.leadRole}>{item.role}</span>
                  <span className={styles.leadPeriod}>{item.period}</span>
                </div>
                <h4 className={styles.leadOrg}>{item.org}</h4>
                <ul className={styles.leadPoints}>
                  {item.points.map((p, pIdx) => (
                    <li key={pIdx}>
                      <span className={styles.pointBullet}>&gt;</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
