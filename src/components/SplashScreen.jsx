'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [slash, setSlash] = useState(false);
  const [split, setSplit] = useState(false);

  useEffect(() => {
    // Sequence timing
    const slashTimer = setTimeout(() => setSlash(true), 1500); // Wait 1.5s then slash
    const splitTimer = setTimeout(() => setSplit(true), 2500); // After slash, wait 1s then split
    const hideTimer = setTimeout(() => setShowSplash(false), 3500); // 1s to finish split animation

    return () => {
      clearTimeout(slashTimer);
      clearTimeout(splitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      <div className={styles.splashContainer}>
        {/* Top Half */}
        <motion.div
          className={styles.halfTop}
          animate={split ? { y: '-100vh', opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.content}>
            <span className={styles.kanji}>アビラム</span>
            <h1 className={styles.title}>ABHIRAM</h1>
          </div>
        </motion.div>

        {/* Bottom Half */}
        <motion.div
          className={styles.halfBottom}
          animate={split ? { y: '100vh', opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.contentBottom}>
            <span className={styles.kanji}>アビラム</span>
            <h1 className={styles.title}>ABHIRAM</h1>
          </div>
        </motion.div>

        {/* The Katana Slash Line */}
        {slash && (
          <motion.div
            className={styles.slashLine}
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </div>
    </AnimatePresence>
  );
}
