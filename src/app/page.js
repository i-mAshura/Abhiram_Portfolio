import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '30px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-fira-code)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--border-color)',
        marginTop: '50px'
      }}>
        <p>&copy; {new Date().getFullYear()} Sai Abhiram Kolluru. All Rights Reserved.</p>
        <p style={{ marginTop: '10px', opacity: 0.7 }}>&gt; STATUS: ONLINE</p>
      </footer>
    </main>
  );
}
