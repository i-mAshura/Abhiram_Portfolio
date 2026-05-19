'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldAlert, Code2, Server, Cloud, Terminal, Cpu } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Security & Monitoring",
    icon: <ShieldAlert size={24} />,
    skills: ["SIEM (Splunk, Wazuh)", "IDS/IPS (Suricata, Snort)", "Log Analysis", "Alert Triage", "Incident Response", "Threat Hunting", "SOAR Automation"]
  },
  {
    title: "AI & Automation",
    icon: <Cpu size={24} />,
    skills: ["n8n", "DSLM", "LLM Integration", "Hugging Face Transformers"]
  },
  {
    title: "Security Tools",
    icon: <Terminal size={24} />,
    skills: ["Nmap", "Nessus", "Metasploit", "Wireshark", "Burp Suite", "Bettercap"]
  },
  {
    title: "Programming",
    icon: <Code2 size={24} />,
    skills: ["Python", "Java", "Bash", "C/C++", "R", "MATLAB", "HTML", "DSA"]
  },
  {
    title: "OS & Infrastructure",
    icon: <Server size={24} />,
    skills: ["Linux", "TCP/IP", "Packet Analysis", "Infrastructure Hardening"]
  },
  {
    title: "Cloud & DevSecOps",
    icon: <Cloud size={24} />,
    skills: ["AWS (IAM, S3)", "Git/GitHub", "CI/CD Basics"]
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
