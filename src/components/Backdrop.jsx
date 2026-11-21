import styles from './Backdrop.module.css';

export default function Backdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      <div className={styles.scan} />
    </div>
  );
}
