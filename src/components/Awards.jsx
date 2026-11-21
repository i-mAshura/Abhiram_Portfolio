'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, Users, BadgeCheck, ArrowUpRight } from 'lucide-react';
import SectionHead from './SectionHead';
import styles from './Awards.module.css';

const certifications = [
  {
    title: 'AWS Certified Security — Specialty',
    issuer: 'Amazon Web Services',
    date: 'Aug 2026',
    level: 'Specialty',
    note: 'IAM, data protection, logging & monitoring, infrastructure security, incident response.',
  },
  {
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    date: 'Jun 2026',
    level: 'Professional',
    note: 'SIEM tooling, network protocol analysis, Python automation and Linux threat mitigation.',
  },
  {
    title: 'Certified Network Security Practitioner',
    issuer: 'The SecOps Group',
    date: 'Nov 2025',
    level: 'CNSP',
    note: 'Firewall management, packet dissection, VPN configuration and network hardening.',
  },
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    level: 'Associate',
    note: 'Secure, resilient multi-tier architecture across distributed AWS workloads.',
  },
];

const honors = [
  {
    title: '2nd Prize — Optiv Recruitment Hackathon',
    org: 'Optiv Cyber Security',
    badge: '2nd / 60+ teams',
    note: 'Placed second among 60+ teams across all four VIT campuses in offensive and defensive problem solving.',
  },
  {
    title: 'Specialization Rank 1',
    org: 'VIT-AP University',
    badge: 'Rank 01 · 9.44',
    note: 'First in the Cyber Security / Network & Security specialization with a 9.44 / 10.0 CGPA.',
  },
  {
    title: 'Top 386 — ML Hackathon 2026',
    org: 'National ML Competition',
    badge: 'Top 386 national',
    note: 'Engineered scalable ML pipelines and benchmarked architectures under strict constraints.',
  },
];

const leadership = [
  {
    role: 'Technical Lead',
    org: 'Null Chapter, VIT-AP',
    period: 'Oct 2024 — May 2026',
    points: [
      'Ran 15+ cybersecurity workshops on web pentesting, binary exploitation and network security.',
      'Designed Jeopardy-style CTF challenges for collegiate competitions.',
      'Mentored members through the chapter’s Best Chapter Award win.',
    ],
  },
  {
    role: 'Executive Secretary',
    org: 'Microsoft Student Community',
    period: 'Mar 2024 — Feb 2026',
    points: [
      'Directed logistics, mentorship and judging for 5+ hackathons and technical bootcamps.',
      'Led hands-on workshops on cloud and open-source developer tooling.',
    ],
  },
  {
    role: 'Instructor — Forensics Programme',
    org: 'Andhra Pradesh CID (EDP)',
    period: '2026',
    points: [
      'Delivered training modules for law-enforcement personnel on cyber forensics.',
      'Taught crypto tracing, blockchain analysis, evidence preservation and OSINT.',
    ],
  },
];

export default function Awards() {
  return (
    <section id="awards" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHead
          index="06"
          label="Credentials"
          title={
            <>
              Proof<span className="acid">,</span> not promises<span className="acid">.</span>
            </>
          }
          sub="Certifications, competition results and the communities I've built security culture in."
        />

        <div className={styles.subHead}>
          <ShieldCheck size={14} />
          <h3>Industry certifications</h3>
          <span className={styles.rule} />
          <span className={styles.count}>{String(certifications.length).padStart(2, '0')}</span>
        </div>

        <div className={styles.certGrid}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={styles.cert}
            >
              <div className={styles.certTop}>
                <span className={styles.issuer}>{cert.issuer}</span>
                <span className={styles.level}>{cert.level}</span>
              </div>
              <h4>{cert.title}</h4>
              <p>{cert.note}</p>
              <div className={styles.certFoot}>
                <BadgeCheck size={13} />
                <span>Verified · {cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.split}>
          <div>
            <div className={styles.subHead}>
              <Trophy size={14} />
              <h3>Honors</h3>
              <span className={styles.rule} />
            </div>
            <div className={styles.rows}>
              {honors.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={styles.row}
                >
                  <div className={styles.rowTop}>
                    <h4>{item.title}</h4>
                    <span className={styles.rowBadge}>{item.badge}</span>
                  </div>
                  <p className={styles.org}>{item.org}</p>
                  <p className={styles.note}>{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.subHead}>
              <Users size={14} />
              <h3>Leadership</h3>
              <span className={styles.rule} />
            </div>
            <div className={styles.rows}>
              {leadership.map((item, i) => (
                <motion.div
                  key={item.org}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={styles.row}
                >
                  <div className={styles.rowTop}>
                    <h4>{item.role}</h4>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <p className={styles.org}>{item.org}</p>
                  <ul className={styles.points}>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="https://www.credly.com/users/sai-abhiram-kolluru"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.verifyLink}
        >
          Verify certifications
          <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
