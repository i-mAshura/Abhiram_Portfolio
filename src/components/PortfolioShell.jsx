'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Ticker from './Ticker';
import Experience from './Experience';
import Projects from './Projects';
import Publications from './Publications';
import Skills from './Skills';
import Awards from './Awards';
import Contact from './Contact';
import Footer from './Footer';
import Terminal from './Terminal';

const STORAGE_KEY = 'view-mode';

export default function PortfolioShell() {
  const [mode, setMode] = useState('ui');
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const restore = setTimeout(() => {
      try {
        if (window.localStorage.getItem(STORAGE_KEY) === 'terminal') {
          setMode('terminal');
        }
      } catch {
        /* storage unavailable — stay in UI mode */
      }
      setRestored(true);
    }, 0);

    return () => clearTimeout(restore);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
    document.body.style.overflow = mode === 'terminal' ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mode, restored]);

  const toggle = useCallback(() => {
    setMode((m) => (m === 'ui' ? 'terminal' : 'ui'));
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      const isBackquote = e.key === '`' || e.code === 'Backquote';
      if ((e.ctrlKey || e.metaKey) && isBackquote) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggle]);

  if (mode === 'terminal') {
    return <Terminal onExit={() => setMode('ui')} />;
  }

  return (
    <>
      <Navbar onOpenTerminal={() => setMode('terminal')} />
      <main>
        <Hero />
        <Ticker />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
