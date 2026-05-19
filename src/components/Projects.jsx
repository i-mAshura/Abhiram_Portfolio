'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    title: "PII Masker with DSLM",
    description: "Developed a DSLM-based PII masking system trained on 5,000+ custom records integrated with NVD contextual data for intelligent sensitive data detection. Automated masking for 10+ entities including IDs, emails, phone numbers, and IP data with ~90% accuracy.",
    tech: ["DSLM", "Hugging Face", "Python", "Data Privacy"],
    github: "https://github.com/i-mAshura/PII_MASKER_WITH_DSLM"
  },
  {
    title: "NexusSOAR",
    description: "Automated SOAR platform integrating Wazuh SIEM, n8n workflow engine, and Catalyst. Engineered alert enrichment and response playbooks, reducing manual triage by 70%.",
    tech: ["Wazuh SIEM", "n8n", "Python", "Automation"],
    github: "https://github.com/i-mAshura/NexusSOAR"
  },
  {
    title: "CloudSentinel",
    description: "Cloud security misconfiguration scanner. Audits configurations for exposed resources and security risks, generating detailed HTML reports.",
    tech: ["Python", "AWS SDK (Boto3)", "Security Auditing"],
    github: "https://github.com/i-mAshura/CloudSentinel---Cloud-Security-Misconfiguration-Scanner"
  },
  {
    title: "LogDefender",
    description: "Lightweight SIEM tool that analyzes server logs to detect brute-force attacks, anomalies, and suspicious activity, producing actionable security reports.",
    tech: ["Python", "Regex", "Log Analysis"],
    github: "https://github.com/i-mAshura/LogDefender---Mini-SIEM-Log-Analysis-Tool"
  },
  {
    title: "Suricata HomeLab",
    description: "Deployed Suricata on a home-lab network, processing 10k+ packets. Authored custom detection rules achieving 85–90% alert accuracy.",
    tech: ["Suricata", "Networking", "Traffic Analysis"],
    github: "https://github.com/i-mAshura/Suricata_HomeLab"
  },
  {
    title: "Automobile Hacking (ICANN)",
    description: "Automobile CAN bus security concepts. Designed and executed 10+ CAN bus attacks uncovering 20+ ECU vulnerabilities in ICSim.",
    tech: ["CAN bus", "ICSim", "Reverse Engineering"],
    github: "https://github.com/i-mAshura/ICANN_AUTOMOBILE_HACKING"
  },
  {
    title: "NetCut",
    description: "Bash-based tool to scan your network and block internet access for selected devices using Bettercap.",
    tech: ["Bash", "Bettercap", "Network Security"],
    github: "https://github.com/i-mAshura/NetCut"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.sectionTitle}>&lt;Classified_Operations /&gt;</h2>
        <div className={styles.divider}></div>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.projectCard}
          >
            <div className={styles.cardTop}>
              <FolderGit2 size={32} className={styles.folderIcon} />
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                <ExternalLink size={20} />
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
      </div>
    </section>
  );
}
