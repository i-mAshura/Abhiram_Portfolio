import { ArrowUp, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const columns = [
  {
    title: 'Sections',
    links: [
      { label: 'Profile', href: '#about' },
      { label: 'Trajectory', href: '#experience' },
      { label: 'Systems', href: '#projects' },
      { label: 'Research', href: '#publications' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { label: 'GitHub', href: 'https://github.com/i-mAshura', external: true },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b',
        external: true,
      },
      {
        label: 'Google Scholar',
        href: 'https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao',
        external: true,
      },
      { label: 'Resume', href: '/K_SAI_ABHIRAM.pdf', download: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <span className={styles.tag}>{'// end of transmission'}</span>
            <h2 className={styles.wordmark}>
              SAI ABHIRAM
              <span>KOLLURU</span>
            </h2>
          </div>

          <div className={styles.cols}>
            {columns.map((col) => (
              <div key={col.title} className={styles.col}>
                <span className={styles.colTitle}>{col.title}</span>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        {...(link.download ? { download: 'K_SAI_ABHIRAM.pdf' } : {})}
                      >
                        {link.label}
                        {link.external ? <ArrowUpRight size={11} /> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.col}>
              <span className={styles.colTitle}>Direct</span>
              <ul>
                <li>
                  <a href="mailto:kollurusaiabhiram2005@gmail.com">Email</a>
                </li>
                <li>
                  <a href="tel:+918885667817">+91 88856 67817</a>
                </li>
                <li>
                  <span className={styles.plain}>Vijayawada, IN</span>
                </li>
                <li>
                  <span className={styles.available}>
                    <span className={styles.dot} /> Available
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Sai Abhiram Kolluru. All rights reserved.</p>
          <p className={styles.built}>
            Security Engineer · AI Security Researcher · VIT-AP &apos;27
          </p>
          <a href="#about" className={styles.toTop} aria-label="Back to top">
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
