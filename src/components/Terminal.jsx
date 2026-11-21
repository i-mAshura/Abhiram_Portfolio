'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import styles from './Terminal.module.css';
import {
  fileSystem,
  bannerLines,
  neofetchArt,
  neofetchRows,
  commandDocs,
  promptUser,
  promptHost,
} from '@/data/terminalFs';

const HOME = [];

const line = (text = '', tone = 'out') => ({ text, tone });
const cmdDocs = commandDocs.map((c) => c.usage.split(' ')[0]);

const pathLabel = (cwd) => (cwd.length ? `~/${cwd.join('/')}` : '~');

function normalize(cwd, target) {
  const base = target.startsWith('~') || target.startsWith('/') ? [] : [...cwd];
  const raw = target.replace(/^~/, '').replace(/^\//, '');
  const parts = raw.split('/');
  const out = [...base];

  for (const part of parts) {
    if (!part || part === '.') continue;
    if (part === '..') out.pop();
    else out.push(part);
  }
  return out;
}

function nodeAt(parts) {
  let node = fileSystem;
  for (const part of parts) {
    if (node.type !== 'dir' || !node.children[part]) return null;
    node = node.children[part];
  }
  return node;
}

function listNode(node, tone = 'out') {
  return Object.entries(node.children).map(([name, child]) =>
    line(child.type === 'dir' ? `${name}/` : name, child.type === 'dir' ? 'cyan' : tone)
  );
}

function treeLines(node, prefix = '', depth = 0) {
  const entries = Object.entries(node.children);
  const out = [];

  entries.forEach(([name, child], i) => {
    const last = i === entries.length - 1;
    out.push(
      line(`${prefix}${last ? '└── ' : '├── '}${name}${child.type === 'dir' ? '/' : ''}`,
        child.type === 'dir' ? 'cyan' : 'out')
    );
    if (child.type === 'dir' && depth < 2) {
      out.push(...treeLines(child, `${prefix}${last ? '    ' : '│   '}`, depth + 1));
    }
  });

  return out;
}

export default function Terminal({ onExit }) {
  const [cwd, setCwd] = useState(HOME);
  const [entries, setEntries] = useState(() => [
    ...bannerLines.map((t) => line(t, t.startsWith('[ ok ]') ? 'dim' : 'head')),
    line("type 'help' for commands, or 'gui' to return to the interface.", 'dim'),
    line(''),
  ]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const push = useCallback((newLines) => {
    setEntries((prev) => [...prev, ...newLines]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const run = useCallback(
    (raw) => {
      const echo = `${promptUser}@${promptHost}:${pathLabel(cwd)}$ ${raw}`;
      const out = [];
      const trimmed = raw.trim();
      const tokens = trimmed.length ? trimmed.split(/\s+/) : [];
      const cmd = (tokens[0] || '').toLowerCase();
      const arg = tokens.slice(1).join(' ');

      push([line(echo, 'echo')]);

      const open = (url) => {
        if (typeof window !== 'undefined') {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      };

      const catFile = (target) => {
        const parts = normalize(cwd, target);
        const node = nodeAt(parts);
        if (!node) {
          out.push(line(`cat: ${target}: No such file or directory`, 'warn'));
          return;
        }
        if (node.type === 'dir') {
          out.push(line(`cat: ${target}: Is a directory`, 'warn'));
          return;
        }
        node.content.split('\n').forEach((t) => out.push(line(t, 'out')));
      };

      switch (cmd) {
        case '':
          break;

        case 'help':
          out.push(line('AVAILABLE COMMANDS', 'head'));
          commandDocs.forEach((c) =>
            out.push(line(`  ${c.usage.padEnd(26)}${c.desc}`, 'out'))
          );
          out.push(line(''));
          out.push(line('↑ / ↓ history · tab completes commands · gui returns to UI', 'dim'));
          break;

        case 'ls': {
          const target = arg || '.';
          const node = nodeAt(normalize(cwd, target));
          if (!node) {
            out.push(line(`ls: ${target}: No such file or directory`, 'warn'));
          } else if (node.type === 'file') {
            out.push(line(arg, 'out'));
          } else {
            out.push(...listNode(node));
          }
          break;
        }

        case 'cd': {
          if (!arg || arg === '~') {
            setCwd(HOME);
            break;
          }
          const parts = normalize(cwd, arg);
          const node = nodeAt(parts);
          if (!node) out.push(line(`cd: ${arg}: No such file or directory`, 'warn'));
          else if (node.type !== 'dir') out.push(line(`cd: ${arg}: Not a directory`, 'warn'));
          else setCwd(parts);
          break;
        }

        case 'pwd':
          out.push(line(pathLabel(cwd).replace('~', '/home/abhiram'), 'out'));
          break;

        case 'cat':
          if (!arg) out.push(line('usage: cat <file>', 'dim'));
          else catFile(arg);
          break;

        case 'tree':
          out.push(line('~', 'head'));
          out.push(...treeLines(fileSystem));
          break;

        case 'whoami':
          out.push(line('sai abhiram kolluru', 'strong'));
          out.push(line('security engineer @ Digital Fortress', 'out'));
          out.push(line('researcher @ AIR, VIT-AP University', 'out'));
          out.push(line(''));
          out.push(line('zero-trust IAM · eBPF telemetry · agentic SOC · APT detection', 'cyan'));
          out.push(line('AWS Certified Security — Specialty', 'dim'));
          break;

        case 'neofetch': {
          const width = Math.max(...neofetchArt.map((a) => a.length)) + 3;
          const rows = Math.max(neofetchArt.length, neofetchRows.length);
          for (let i = 0; i < rows; i += 1) {
            const art = (neofetchArt[i] || '').padEnd(width, ' ');
            const info = neofetchRows[i] || '';
            out.push(line(`${art}${info}`, i === 0 ? 'head' : 'out'));
          }
          break;
        }

        case 'about':
          catFile('~/about.md');
          break;

        case 'projects':
        case 'systems':
          out.push(line('/home/abhiram/systems', 'head'));
          out.push(...listNode(fileSystem.children.systems));
          out.push(line('tip: cat systems/argus.md', 'dim'));
          break;

        case 'research':
          out.push(line('/home/abhiram/research', 'head'));
          out.push(...listNode(fileSystem.children.research));
          out.push(line('tip: cat research/fido2-threat-model.md', 'dim'));
          break;

        case 'skills':
          out.push(line('/home/abhiram/skills', 'head'));
          out.push(...listNode(fileSystem.children.skills));
          break;

        case 'experience':
          out.push(line('/home/abhiram/experience', 'head'));
          out.push(...listNode(fileSystem.children.experience));
          break;

        case 'certs':
          catFile('~/creds/certifications.md');
          break;

        case 'contact':
          catFile('~/contact.md');
          break;

        case 'resume':
          open('/K_SAI_ABHIRAM.pdf');
          out.push(line('opening K_SAI_ABHIRAM.pdf …', 'head'));
          break;

        case 'github':
          open('https://github.com/i-mAshura');
          out.push(line('opening github.com/i-mAshura …', 'head'));
          break;

        case 'linkedin':
          open('https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b');
          out.push(line('opening linkedin …', 'head'));
          break;

        case 'scholar':
          open('https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao');
          out.push(line('opening google scholar …', 'head'));
          break;

        case 'email':
          open('mailto:kollurusaiabhiram2005@gmail.com');
          out.push(line('composing mail to kollurusaiabhiram2005@gmail.com …', 'head'));
          break;

        case 'date':
          out.push(line(new Date().toString(), 'out'));
          break;

        case 'history':
          if (!history.length) out.push(line('no history yet', 'dim'));
          history.forEach((h, i) => out.push(line(`${String(i + 1).padStart(3)}  ${h}`, 'out')));
          break;

        case 'clear':
          setEntries([]);
          return;

        case 'gui':
        case 'ui':
        case 'exit':
          onExit();
          return;

        case 'sudo':
          out.push(line('[sudo] password for abhiram:', 'dim'));
          out.push(line('permission denied — you are not in the sudoers file.', 'warn'));
          out.push(line('this incident has been reported. (it has not.)', 'dim'));
          break;

        case 'banner':
          bannerLines.forEach((t) => out.push(line(t, 'head')));
          break;

        case 'rm':
          out.push(line('nice try — this filesystem is read-only.', 'warn'));
          break;

        default:
          out.push(line(`command not found: ${tokens[0]}`, 'warn'));
          out.push(line("type 'help' to see what is available.", 'dim'));
      }

      if (out.length) push([...out, line('')]);
    },
    [cwd, history, onExit, push]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const raw = value;
      setValue('');
      if (raw.trim()) setHistory((h) => [...h, raw.trim()]);
      setHistIndex(-1);
      run(raw);
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const next = histIndex < 0 ? history.length - 1 : Math.max(histIndex - 1, 0);
      setHistIndex(next);
      setValue(history[next]);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex < 0) return;
      const next = histIndex + 1;
      if (next >= history.length) {
        setHistIndex(-1);
        setValue('');
      } else {
        setHistIndex(next);
        setValue(history[next]);
      }
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const current = value.trim();
      if (!current || current.includes(' ')) return;
      const match = cmdDocs.find((c) => c.startsWith(current.toLowerCase()));
      if (match) setValue(match);
      return;
    }

    if (e.key === 'Escape') {
      onExit();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.chrome}>
        <div className={styles.chromeLeft}>
          <span className={styles.mark}>
            <Logo size={20} />
          </span>
          <span className={styles.chromeTitle}>
            {promptUser}@{promptHost}: {pathLabel(cwd)}
          </span>
        </div>
        <div className={styles.chromeRight}>
          <span className={styles.kbd}>ctrl + `</span>
          <button type="button" className={styles.uiBtn} onClick={onExit}>
            Interface <ArrowUpRight size={13} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={styles.screen}
        onClick={() => inputRef.current?.focus()}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
      >
        <div className={styles.scrollback}>
          {entries.map((entry, i) => (
            <div key={i} className={`${styles.line} ${styles[entry.tone] || styles.out}`}>
              {entry.text || '\u00a0'}
            </div>
          ))}

          <div className={`${styles.line} ${styles.inputLine}`}>
            <span className={styles.prompt}>
              <span className={styles.user}>{promptUser}@{promptHost}</span>
              <span className={styles.sep}>:</span>
              <span className={styles.path}>{pathLabel(cwd)}</span>
              <span className={styles.sep}>$</span>
            </span>
            <input
              ref={inputRef}
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal command input"
            />
            <span className={styles.caret} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className={styles.hints}>
        <span className={styles.hintsLabel}>try</span>
        {['help', 'neofetch', 'projects', 'research', 'resume', 'gui'].map((c) => (
          <button
            key={c}
            type="button"
            className={styles.hint}
            onClick={() => {
              run(c);
              inputRef.current?.focus();
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
