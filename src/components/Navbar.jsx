'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        {/* Katana SVG mark */}
        <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="22" x2="18" y2="6" />
          <path d="M18 6 L22 2 L22 4 L20 6 Z" fill="currentColor" stroke="none" />
          <line x1="6" y1="18" x2="9" y2="15" />
          <circle cx="4" cy="20" r="1.5" fill="currentColor" stroke="none" />
        </svg>
        <span className={styles.logoKanji}>忍</span>
        <span className={styles.logoText}>Kage_</span>
      </div>

      <div className={`${styles.links} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        <a href="#about" className={styles.link} onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#skills" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Skills</a>
        <a href="#projects" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Projects</a>
        <a href="#contact" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>

      <div className={styles.controls}>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
