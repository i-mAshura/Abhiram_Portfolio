import styles from './SectionHead.module.css';

export default function SectionHead({ index, label, title, sub, align = 'left' }) {
  return (
    <header className={`${styles.head} ${align === 'center' ? styles.center : ''}`}>
      <div className={styles.eyebrow}>
        <span className={styles.index}>{index}</span>
        <span className={styles.rule} />
        <span className={styles.label}>{label}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      {sub ? <p className={styles.sub}>{sub}</p> : null}
    </header>
  );
}
