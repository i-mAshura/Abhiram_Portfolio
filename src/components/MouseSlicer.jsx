'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MouseSlicer.module.css';

const Shuriken = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="#ff003c" />
    <circle cx="50" cy="50" r="10" fill="#111" stroke="#ff003c" strokeWidth="3" />
  </svg>
);

export default function MouseSlicer() {
  const [strikes, setStrikes] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newStrike = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        angle: Math.random() * 180 - 90,
      };
      
      setStrikes(prev => [...prev, newStrike]);

      // Remove after animation completes
      setTimeout(() => {
        setStrikes(prev => prev.filter(s => s.id !== newStrike.id));
      }, 800);
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className={styles.slicerContainer}>
      <AnimatePresence>
        {strikes.map(strike => (
          <React.Fragment key={strike.id}>
            {/* Katana Slash */}
            <motion.div
              className={styles.katanaSlash}
              style={{
                left: strike.x,
                top: strike.y,
                x: "-50%",
                y: "-50%",
                rotate: strike.angle,
              }}
              initial={{ scaleX: 0, opacity: 1, filter: 'brightness(2)' }}
              animate={{ scaleX: 1, opacity: 0, filter: 'brightness(1)' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            {/* Shuriken */}
            <motion.div
              className={styles.shuriken}
              style={{
                left: strike.x,
                top: strike.y,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ scale: 0, rotate: 0, opacity: 1 }}
              animate={{ scale: [1.5, 1, 0], rotate: 720, opacity: [1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Shuriken />
            </motion.div>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
}
