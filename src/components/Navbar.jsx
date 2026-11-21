'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import Logo from './Logo';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Profile', href: '#about', index: '01' },
  { label: 'Trajectory', href: '#experience', index: '02' },
  { label: 'Systems', href: '#projects', index: '03' },
  { label: 'Research', href: '#publications', index: '04' },
  { label: 'Arsenal', href: '#skills', index: '05' },
  { label: 'Credentials', href: '#awards', index: '06' },
];

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(window.scrollY / height, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['about', 'experience', 'projects', 'publications', 'skills', 'awards', 'contact'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className={styles.progressTrack} aria-hidden="true">
        <div className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.bar}`}>
          <a href="#about" className={styles.brand} aria-label="Sai Abhiram Kolluru — home">
            <span className={styles.mark}>
              <Logo size={24} />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>SAI ABHIRAM</span>
              <span className={styles.brandRole}>SECURITY ENGINEER</span>
            </span>
          </a>

          <nav className={styles.links} aria-label="Sections">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.link} ${active === item.href ? styles.linkActive : ''}`}
              >
                <span className={styles.linkIndex}>{item.index}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.right}>
            <button
              type="button"
              className={styles.termBtn}
              onClick={onOpenTerminal}
              title="Terminal mode (Ctrl + `)"
              aria-label="Switch to terminal mode"
            >
              <Terminal size={14} />
              <span className={styles.termLabel}>Terminal</span>
            </button>

            <a href="#contact" className={styles.hire}>
              Open channel <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
            <button
              className={styles.burger}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <div className={styles.drawerTop}>
          <span className={styles.drawerLabel}>{'// NAVIGATION'}</span>
          <button className={styles.drawerClose} onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className={styles.drawerLinks}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.drawerLink}
              onClick={() => setOpen(false)}
            >
              <span>{item.index}</span>
              {item.label}
            </a>
          ))}
          <a href="#contact" className={styles.drawerLink} onClick={() => setOpen(false)}>
            <span>07</span>
            Contact
          </a>
        </nav>
        <div className={styles.drawerFoot}>
          <button
            type="button"
            className={styles.drawerGhost}
            onClick={() => {
              setOpen(false);
              onOpenTerminal?.();
            }}
          >
            <Terminal size={14} /> Terminal mode
          </button>
          <a href="/K_SAI_ABHIRAM.pdf" download="K_SAI_ABHIRAM.pdf" className={styles.drawerCta}>
            Download Resume — PDF
          </a>
          <p>kollurusaiabhiram2005@gmail.com</p>
        </div>
      </div>
    </>
  );
}
