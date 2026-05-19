'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Download } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="about" className={styles.heroSection}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.intro}
        >
          <span className={styles.greeting}>&gt; 起動完了 // SHADOW_PROTOCOL :: ACTIVE</span>
          <h1 className={styles.title}>
            <span className="burning-text">Sai Abhiram Kolluru</span>
          </h1>
          <h2 className={styles.subtitle}>
            <Terminal size={24} className={styles.icon} /> Ethical Hacker &amp;{' '}
            <Shield size={24} className={styles.icon} /> Cyber Security Specialist
          </h2>
          <p className={styles.description}>
            Bridging the gap between software development and offensive security.
            I build secure systems and break them to make them stronger.
            Specializing in SOC operations, SIEM monitoring, and automotive security research.
          </p>

          <div className={styles.actions}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className={styles.primaryBtn}
            >
              <Cpu size={20} /> View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={styles.secondaryBtn}
            >
              Initiate Contact
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/KOLLURU_SAI_ABHIRAM_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Download size={20} /> Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Photo Frame — replace with your image src when ready */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={styles.imageContainer}
      >
        <div className={styles.photoFrameOuter}>
          {/* Corner bracket ornaments */}
          <div className={styles.cornerTL} />
          <div className={styles.cornerTR} />
          <div className={styles.cornerBL} />
          <div className={styles.cornerBR} />

          {/* Outer decorative ring */}
          <div className={styles.outerRing} />

          {/* Main photo frame */}
          <div className={styles.photoFrame}>
            {/* Grid background */}
            <div className={styles.gridBg} />

            {/* Inner circular frame */}
            <div className={styles.photoInner}>
              <span className={styles.kanjiWatermark}>影</span>
              <Image 
                src="/photo.png" 
                alt="Sai Abhiram Kolluru" 
                fill 
                className={styles.profileImage} 
                priority
              />
            </div>

            {/* Animated scan line */}
            <div className={styles.scanLine} />
          </div>

          {/* Aura glow */}
          <div className={styles.demonAura} />
        </div>
      </motion.div>
    </section>
  );
}
