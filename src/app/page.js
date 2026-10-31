import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Publications />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      
      {/* Modern Professional Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '50px 20px',
        color: 'var(--text-secondary)',
        fontSize: '0.88rem',
        borderTop: '1px solid var(--border-subtle)',
        marginTop: '60px',
        background: 'var(--bg-secondary)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '16px',
          flexWrap: 'wrap',
          fontWeight: 500
        }}>
          <a href="https://github.com/i-mAshura" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
            GitHub
          </a>
          <span style={{ opacity: 0.3 }}>•</span>
          <a href="https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
            LinkedIn
          </a>
          <span style={{ opacity: 0.3 }}>•</span>
          <a href="https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
            Google Scholar
          </a>
          <span style={{ opacity: 0.3 }}>•</span>
          <a href="/K_SAI_ABHIRAM.pdf" download="K_SAI_ABHIRAM.pdf" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
            Resume (PDF)
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Sai Abhiram Kolluru. All rights reserved.</p>
        <p style={{ marginTop: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Security Engineer &amp; AI Security Researcher • VIT-AP University &amp; IIT Madras (ASTHRA Lab)
        </p>
      </footer>
    </main>
  );
}
