import Image from 'next/image';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Mail,
  Network,
  Radar,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import styles from './page.module.css';

const expertise = [
  {
    icon: ShieldCheck,
    eyebrow: 'IDENTITY',
    title: 'Zero-Trust IAM',
    text: 'Designing passwordless, policy-driven access with FIDO2, WebAuthn, OIDC/SAML federation, and OPA/Rego.',
  },
  {
    icon: Radar,
    eyebrow: 'DETECTION',
    title: 'Threat Detection',
    text: 'Building signal-rich detection systems with eBPF kernel telemetry, cloud audit trails, and autonomous response.',
  },
  {
    icon: Network,
    eyebrow: 'RESILIENCE',
    title: 'Security Architecture',
    text: 'Hardening cloud and industrial environments through least privilege, segmentation, and measurable controls.',
  },
];

const projects = [
  {
    number: '01',
    title: 'ARGUS',
    type: 'Agentic SIEM & autonomous containment',
    text: 'An agentic security operations system that correlates alerts, reasons over context, and orchestrates containment playbooks.',
    metric: '70%',
    metricLabel: 'MTTR reduction',
    tags: ['SIEM', 'SOAR', 'AI SECURITY'],
  },
  {
    number: '02',
    title: 'eBPF KernelGuard',
    type: 'In-kernel temporal intrusion detection',
    text: 'Low-overhead kernel telemetry and temporal behavior analysis for detecting suspicious process and network activity.',
    metric: 'REAL-TIME',
    metricLabel: 'kernel visibility',
    tags: ['eBPF', 'LINUX', 'TELEMETRY'],
  },
  {
    number: '03',
    title: 'NexusSOC',
    type: 'Detection engineering & automation',
    text: 'A practical Wazuh and n8n security operations stack that turns noisy alerts into repeatable, auditable response.',
    metric: '24/7',
    metricLabel: 'automated triage',
    tags: ['WAZUH', 'N8N', 'AUTOMATION'],
  },
];

const skills = [
  'FIDO2 / WebAuthn',
  'AWS Security',
  'OPA / Rego',
  'CloudTrail',
  'eBPF',
  'Linux',
  'Wazuh',
  'Python',
  'Boto3',
  'Threat Modeling',
  'Network Security',
  'Zero Trust',
];

export default function Home() {
  return (
    <main>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="Sai Abhiram Kolluru home">
          <span className={styles.brandMark}>SA</span>
          <span>
            <strong>SAI ABHIRAM</strong>
            <small>SECURITY ENGINEER</small>
          </span>
        </a>
        <nav className={styles.navLinks} aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a className={styles.navCta} href="#contact">
            Let&apos;s connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroCopy}>
          <div className={styles.statusLine}>
            <span className={styles.statusDot} />
            OPEN TO HIGH-IMPACT SECURITY WORK
          </div>
          <p className={styles.kicker}>SECURITY ENGINEER · AI SECURITY RESEARCHER</p>
          <h1>
            Building systems
            <span> that stay ahead</span>
            of the threat.
          </h1>
          <p className={styles.heroText}>
            I design trustworthy identity, detection, and cloud security systems
            for environments where resilience is not optional.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#work">
              Explore selected work <ArrowUpRight size={17} />
            </a>
            <a className={styles.textButton} href="/K_SAI_ABHIRAM.pdf" download>
              Download résumé <ArrowUpRight size={16} />
            </a>
          </div>
          <div className={styles.heroMeta}>
            <span><CheckCircle2 size={15} /> AWS Certified Security – Specialty</span>
            <span><CheckCircle2 size={15} /> VIT-AP · Rank 1 · 9.44 CGPA</span>
          </div>
        </div>
        <div className={styles.heroAside}>
          <div className={styles.signalCard}>
            <div className={styles.signalHeader}>
              <span><Terminal size={14} /> /security/profile</span>
              <span className={styles.signalLive}>LIVE</span>
            </div>
            <div className={styles.signalBody}>
              <div className={styles.profileImage}>
                <Image src="/photo.png" alt="Sai Abhiram Kolluru" fill sizes="160px" priority />
              </div>
              <div>
                <p className={styles.signalName}>SAI ABHIRAM<br />KOLLURU</p>
                <p className={styles.signalRole}>Identity · Detection · Research</p>
              </div>
            </div>
            <div className={styles.signalFooter}>
              <span>STATUS</span><strong>DEFENSE_READY</strong>
            </div>
          </div>
          <div className={styles.scrollCue}><ChevronDown size={16} /> SCROLL TO EXPLORE</div>
        </div>
      </section>

      <section className={styles.trustBar} aria-label="Professional highlights">
        <div><strong>01</strong><span>Production<br />Security Systems</span></div>
        <div><strong>02</strong><span>Peer-Reviewed<br />Research</span></div>
        <div><strong>03</strong><span>Cloud-Native<br />Defense</span></div>
        <div><strong>04</strong><span>Human-Centered<br />Security</span></div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>01 / EXPERTISE</p>
          <h2>Security with<br /><em>signal, not noise.</em></h2>
        </div>
        <div className={styles.expertiseGrid}>
          {expertise.map(({ icon: Icon, eyebrow, title, text }) => (
            <article className={styles.expertiseCard} key={title}>
              <div className={styles.iconBox}><Icon size={20} strokeWidth={1.5} /></div>
              <p className={styles.cardEyebrow}>{eyebrow}</p>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className={styles.cardLine} />
            </article>
          ))}
        </div>
      </section>

      <section id="work" className={`${styles.section} ${styles.workSection}`}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>02 / SELECTED WORK</p>
            <h2>Built for the<br /><em>real world.</em></h2>
          </div>
          <p className={styles.sectionSummary}>From kernel-level visibility to autonomous response, these are systems designed to make security teams faster, clearer, and harder to surprise.</p>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.projectRow} key={project.title}>
              <span className={styles.projectNumber}>{project.number}</span>
              <div className={styles.projectMain}>
                <p className={styles.projectType}>{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className={styles.projectMetric}>
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </div>
              <ArrowUpRight className={styles.projectArrow} size={22} />
            </article>
          ))}
        </div>
      </section>

      <section id="research" className={`${styles.section} ${styles.researchSection}`}>
        <div className={styles.researchVisual}>
          <div className={styles.radarGraphic}><span /><span /><span /><span /></div>
          <p>RESEARCH / 2026</p>
        </div>
        <div className={styles.researchCopy}>
          <p className={styles.sectionLabel}>03 / RESEARCH & CREDENTIALS</p>
          <h2>Question the<br /><em>trust boundary.</em></h2>
          <p>At IIT Madras ASTHRA Lab, I work at the intersection of AI and security — examining how modern identity systems fail, and how to design them more honestly.</p>
          <div className={styles.researchItems}>
            <div><BookOpen size={18} /><span><strong>Beyond the Trust Boundary</strong><small>A critical reassessment of the FIDO2 threat model · arXiv:2609.03789</small></span></div>
            <div><Award size={18} /><span><strong>AWS Certified Security – Specialty</strong><small>Also certified in AWS Solutions Architecture, Google Cybersecurity, and CNSP.</small></span></div>
            <div><BriefcaseBusiness size={18} /><span><strong>Digital Fortress · IIT Madras</strong><small>Security Engineer · Research Intern, ASTHRA Lab</small></span></div>
          </div>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <p className={styles.sectionLabel}>04 / TOOLKIT</p>
        <div className={styles.skillsWrap}>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div>
          <p className={styles.sectionLabel}>05 / START A CONVERSATION</p>
          <h2>Let&apos;s make the<br /><em>hard things safer.</em></h2>
        </div>
        <div className={styles.contactAside}>
          <p>Have a security problem worth solving? I&apos;d like to hear about it.</p>
          <a className={styles.contactLink} href="mailto:kollurusaiabhiram513@gmail.com">kollurusaiabhiram513@gmail.com <ArrowUpRight size={19} /></a>
          <div className={styles.socials}>
            <a href="https://github.com/i-mAshura" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
            <a href="https://linkedin.com/in/sai-abhiram-kolluru-a0b71228b" target="_blank" rel="noreferrer"><ExternalLink size={17} /> LinkedIn</a>
            <a href="mailto:kollurusaiabhiram513@gmail.com"><Mail size={17} /> Email</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} SAI ABHIRAM KOLLURU</span>
        <span>SECURITY ENGINEER · AI SECURITY RESEARCHER</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
