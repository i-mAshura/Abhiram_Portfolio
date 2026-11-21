import styles from './Ticker.module.css';

const items = [
  'Zero-Trust IAM',
  'FIDO2 / WebAuthn',
  'eBPF Kernel Telemetry',
  'Agentic SIEM / XDR',
  'Post-Quantum Crypto',
  'Blockchain Forensics',
  'MITRE ATT&CK',
  'RF / SDR Security',
  'CAN-Bus Offense',
  'Cloud Incident Response',
];

export default function Ticker() {
  const track = [...items, ...items];

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            {item}
            <span className={styles.sep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
