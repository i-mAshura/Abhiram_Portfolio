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
      
      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-fira-code)',
        fontSize: '0.85rem',
        borderTop: '1px solid var(--border-color)',
        marginTop: '60px',
        background: 'rgba(2, 4, 6, 0.85)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '15px',
          flexWrap: 'wrap'
        }}>
          <a href="https://github.com/i-mAshura" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>
            GitHub // i-mAshura
          </a>
          <span style={{ opacity: 0.4 }}>•</span>
          <a href="https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>
            LinkedIn // Sai Abhiram Kolluru
          </a>
          <span style={{ opacity: 0.4 }}>•</span>
          <a href="https://scholar.google.com/citations?user=e17NSHcAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>
            Google Scholar
          </a>
          <span style={{ opacity: 0.4 }}>•</span>
          <a href="/K_SAI_ABHIRAM.pdf" download="K_SAI_ABHIRAM.pdf" style={{ color: 'var(--accent-gold-bright)' }}>
            Latest Resume (PDF)
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sai Abhiram Kolluru. All Rights Reserved.</p>
        <p style={{ marginTop: '8px', opacity: 0.6 }}>&gt; SHADOW_NODE: ONLINE // ZERO_TRUST :: ENFORCED</p>
      </footer>
    </main>
  );
}
