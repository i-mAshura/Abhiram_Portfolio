/**
 * Virtual filesystem + static copy for terminal mode.
 * Content mirrors the UI sections and the latest resume.
 */

export const promptUser = 'abhiram';
export const promptHost = 'void';

export const bannerLines = [
  '  SAI ABHIRAM KOLLURU',
  '  security engineer / ai security researcher',
  '  ─────────────────────────────────────────────',
  '[ ok ] mounted /dev/identity',
  '[ ok ] attached eBPF probes to kernel',
  '[ ok ] loaded agentic SOC agents',
  '[  ! ] awaiting input',
  '',
];

export const neofetchArt = [
  '      /\\',
  '     /  \\',
  '    / /\\ \\',
  '   /_/  \\_\\',
];

export const neofetchRows = [
  'abhiram@void',
  '────────────',
  'OS       VIT-AP University · B.Tech CSE (Cyber Security)',
  'Host     Vijayawada, Andhra Pradesh, India',
  'Kernel   Linux + eBPF in-kernel telemetry',
  'Uptime   3+ years in security engineering',
  'Role     Security Engineer @ Digital Fortress',
  'Lab      Researcher @ AIR, VIT-AP University',
  'Certs    AWS Security Specialty · SAA · Google · CNSP',
  'Focus    Zero-trust IAM · agentic SOC · APT detection',
  'Contact  kollurusaiabhiram2005@gmail.com',
];

export const commandDocs = [
  { usage: 'help', desc: 'list every available command' },
  { usage: 'ls [dir]', desc: 'list files in a directory' },
  { usage: 'cd <dir>', desc: 'change directory (cd .. / cd ~)' },
  { usage: 'cat <file>', desc: 'print a file (finds it anywhere)' },
  { usage: 'tree', desc: 'recursive view of this filesystem' },
  { usage: 'whoami', desc: 'identity + current roles' },
  { usage: 'neofetch', desc: 'system summary, because of course' },
  { usage: 'projects', desc: 'list the 18 systems I have built' },
  { usage: 'research', desc: 'list papers and preprints' },
  { usage: 'skills', desc: 'list the technical arsenal' },
  { usage: 'certs', desc: 'certifications and honors' },
  { usage: 'experience', desc: 'work and research history' },
  { usage: 'contact', desc: 'how to reach me' },
  { usage: 'resume', desc: 'download the PDF resume' },
  { usage: 'github | linkedin | scholar', desc: 'open profiles in a new tab' },
  { usage: 'history', desc: 'show command history' },
  { usage: 'clear', desc: 'clear the screen' },
  { usage: 'gui', desc: 'switch back to the UI' },
];

const readme = `# Sai Abhiram Kolluru
security engineer · ai security researcher
vijayawada, india · kollurusaiabhiram2005@gmail.com

I build security infrastructure that finds what humans miss —
zero-trust identity, in-kernel eBPF telemetry and agentic SOC
pipelines that contain threats before an analyst reads the alert.

CURRENT
  security engineer   Digital Fortress Pvt. Ltd.
  researcher          AIR, VIT-AP University

START HERE
  cat about.md                  the longer version
  projects                      all 18 systems
  ls systems/                   project files
  cat systems/argus.md          full project write-up
  ls research/                  papers and preprints
  cat creds/certifications.md   verified credentials
  resume                        download the PDF

Every project has its own file with stack, status, what it does
and the measured impact. cat works from any directory.`;

const about = `I work across identity, kernel telemetry and autonomous
security operations.

At Digital Fortress I ship passwordless FIDO2/WebAuthn and
MFA authentication on OIDC and SAML, govern RBAC/ABAC policy,
harden network perimeters and lead cloud incident response.

As a researcher at AIR, VIT-AP University I built ARGUS, an
agentic SOC/XDR platform, and a neurosymbolic temporal IDS
that pairs eBPF kernel events with symbolic reasoning for
explainable APT detection. I also collaborated with the
Andhra Pradesh CID on blockchain forensics.

RESEARCH INTERESTS
  intrusion + APT detection        eBPF / kernel telemetry
  neurosymbolic + explainable ML   agentic security operations
  risk-adaptive access control     cloud security
  blockchain forensics             medical AI

EDUCATION
  B.Tech CSE (Cyber Security), VIT-AP University, 2023–2027
  CGPA 9.44 / 10.0 · Specialization Rank 1

CURRENTLY READING: attacker tradecraft, not dashboards.`;

const files = {
  'README.md': { type: 'file', content: readme },
  'about.md': { type: 'file', content: about },
};

const systemFiles = {
  'argus.md': {
    type: 'file',
    content: `ARGUS — Adaptive Risk Guardian for Unified Security
───────────────────────────────────────────────────
category  agentic SIEM / XDR / SOAR
stack     python · elasticsearch · docker · linux · MITRE ATT&CK
status    public · github.com/i-mAshura/ARGUS
built     2026

An agentic SOC that does more than raise alerts: agents hunt,
correlate, reason about attack paths, isolate hosts and
remediate. Designed around autonomous triage rather than a
dashboard nobody reads at 3am.

WHAT IT DOES
  · ingests endpoint and VM telemetry into Elasticsearch
  · correlates events to ATT&CK techniques automatically
  · response agents isolate compromised hosts and apply fixes
  · exposes investigation context instead of raw alert noise

MEASURED IMPACT
  · 1,500+ security events ingested
  · 50+ MITRE ATT&CK techniques tagged at 90%+ accuracy
  · 4 VMs and endpoints monitored continuously
  · incident response time cut by 70%`,
  },
  'kernelguard.md': {
    type: 'file',
    content: `eBPF_KernelGuard — Neurosymbolic Temporal IDS
──────────────────────────────────────────────
category  kernel telemetry / intrusion detection
stack     eBPF · neural sequence models · temporal logic · C · linux
status    public · github.com/i-mAshura/eBPF_KernelGuard
built     2026

Intrusion detection that pairs in-kernel eBPF telemetry with
symbolic temporal rules, so every detection traces back to the
exact syscall stream and the rule that fired.

WHY IT MATTERS
  · explainable APT detection instead of a black-box score
  · correlates low-level behaviour across time, not single events
  · symbolic layer produces reviewer-readable decisions
  · catches multi-stage campaigns that signature rules miss

DESIGN NOTES
  eBPF probes capture kernel events with low overhead; a neural
  sequence model scores behaviour; temporal-logic rules constrain
  what counts as an attack chain, so a detection can always be
  reconstructed from its evidence.`,
  },
  'aegis-iam.md': {
    type: 'file',
    content: `Aegis IAM — Zero-Trust Identity Platform
────────────────────────────────────────
category  identity & access management
stack     keycloak · OIDC/SAML · OPA/Rego · terraform · webauthn · wazuh
status    deployed · github.com/i-mAshura
built     2026

Centralised SSO for four applications with passwordless MFA,
attribute-based policy and step-up authentication for
administrative actions.

WHAT IT DOES
  · Keycloak realms for 3 OIDC apps and 1 SAML app
  · WebAuthn and TOTP passwordless flows, 10 role profiles
  · 15 Rego ABAC policies, step-up MFA on privileged actions
  · realms codified in Terraform for repeatable provisioning
  · auth events streamed to Wazuh for monitoring

MEASURED IMPACT
  · onboarding cut from 45 minutes to under 5
  · 2,000+ authentication events shipped to the SIEM`,
  },
  'privscope.md': {
    type: 'file',
    content: `PrivScope — AWS Least-Privilege Auditor
───────────────────────────────────────
category  cloud security / IAM analysis
stack     python · boto3 · cloudtrail · networkx · terraform
status    public · github.com/i-mAshura
built     2026

An auditor that finds the permissions nobody needs and the
paths an attacker would take to get them.

WHAT IT DOES
  · 20+ IAM audits: wildcards, stale keys, missing MFA,
    vulnerable trust policies
  · models IAM permissions as a directed graph to expose
    privilege-escalation paths
  · synthesises least-privilege policies from real usage

MEASURED IMPACT
  · 8 privilege-escalation vectors identified
  · policies built from 5,000+ CloudTrail events
  · ~65% excess permissions removed`,
  },
  'nexussoc.md': {
    type: 'file',
    content: `NexusSOC — Automated SOC Platform
─────────────────────────────────
category  SOAR / SOC automation
stack     wazuh · n8n · catalyst · python · docker
status    public · github.com/i-mAshura/NexusSOAR
built     2025 — 2026

Alert enrichment, IOC extraction and response playbooks wired
into a Wazuh SIEM so analysts stop copy-pasting between tools.

WHAT IT DOES
  · enrichment and IOC extraction on every alert
  · playbooks for SSH brute force, anomalous logins and
    lateral-movement signals
  · structured alert handling instead of free-text notes

MEASURED IMPACT
  · 10,000+ test alerts processed
  · manual triage effort reduced by 70%`,
  },
  'analytixhub.md': {
    type: 'file',
    content: `AnalytiXHub — Blockchain Forensics Platform
───────────────────────────────────────────
category  cryptocurrency forensics
stack     python · neo4j · networkx · react · typescript
status    public sample · github.com/i-mAshura/AnalytiXHub
built     2026

Crypto investigation platform built in collaboration with the
Andhra Pradesh CID. Wallet relationships are modelled as a
graph so an investigator can follow money, not just hashes.

WHAT IT DOES
  · graph analytics across transactions and wallets
  · wallet clustering and suspicious-flow tracing
  · structured forensic reports from the same dataset
  · automated blockchain ingestion to cut manual work

MEASURED IMPACT
  · 500+ transactions traced across 200+ wallets
  · investigation turnaround reduced by 50%

NOTE  the CID collaboration is confidential; AnalytiXHub is the
      public sample implementation of the same approach.`,
  },
  'radac.md': {
    type: 'file',
    content: `RiskFlow / RAdAC — Risk-Adaptive Access Control
───────────────────────────────────────────────
category  zero trust / continuous authorization
stack     python · risk modelling · contextual signals
status    public · github.com/i-mAshura/RAdAC
built     2025

Replaces binary allow/deny with continuous risk evaluation:
the same user can be trusted on one device and challenged on
another, without a policy rewrite for every scenario.

WHAT IT DOES
  · scores device, environment and behavioural context
  · dynamically modulates authorization decisions
  · keeps the reasoning explainable to the user and auditor
  · degrades gracefully to step-up auth instead of hard denial`,
  },
  'cloudsentinel.md': {
    type: 'file',
    content: `CloudSentinel — AWS Misconfiguration Scanner
────────────────────────────────────────────
category  cloud security posture
stack     python · boto3 · IAM · S3 hardening
status    public · github.com/i-mAshura/CloudSentinel
built     2025

Automated audit of AWS environments for the misconfigurations
that actually cause breaches.

WHAT IT DETECTS
  · publicly exposed storage buckets
  · over-privileged IAM users and roles
  · unencrypted resources
  · overly permissive security groups

OUTPUT
  severity-ranked HTML report with remediation guidance, built
  for someone who has to fix it, not just read it.`,
  },
  'hawkeye.md': {
    type: 'file',
    content: `HawkEye / HawkEye++ — eBPF Behavioural Detection
───────────────────────────────────────────────
category  runtime defence / malware behaviour
stack     eBPF · kernel tracing · C · linux internals
status    research · github.com/i-mAshura
built     2026

Detects what a process does, not what file it came from.
Kernel-space telemetry exposes evasive rootkits and in-memory
manipulation that static scanners never see.

APPROACH
  · behavioural rules over live kernel events
  · HawkEye++ adds dynamic kernel-space telemetry for
    detection of memory manipulation and hiding techniques
  · tuned to keep false positives low on normal workloads`,
  },
  'dermavision.md': {
    type: 'file',
    content: `DermaVision AI — Explainable Medical Imaging
────────────────────────────────────────────
category  applied ML / explainable AI
stack     pytorch · efficientnet · swin transformer · computer vision
status    public · github.com/i-mAshura/DhermaVisionAI
built     2025 — 2026

Skin-lesion classification where the model has to show its
reasoning, because a radiologist will not act on a number.

WHAT IT DOES
  · trained on ISIC 2019 and HAM10000
  · EfficientNet and Swin Transformer benchmarked head to head
  · visual explainability on every prediction
  · automated medical report generation

MEASURED IMPACT
  · ~87% test accuracy`,
  },
  'pii-masker.md': {
    type: 'file',
    content: `PII Masker — DSLM Redaction
───────────────────────────
category  data privacy / NLP
stack     pytorch · transformers · hugging face · NLP
status    public · github.com/i-mAshura/PII_MASKER_WITH_DSLM
built     2025

Identifies and masks personally identifiable information in
free text so data can be shared or analysed safely.

WHAT IT DOES
  · detects 10+ entity types: identifiers, emails, phone
    numbers, IP addresses and more
  · transformer-based recognition, not regex-only matching
  · enrichment with NVD contextual data

MEASURED IMPACT
  · ~90% accuracy across evaluated entity types`,
  },
  'canbus.md': {
    type: 'file',
    content: `Automobile Hacking — CAN Bus Offense
────────────────────────────────────
category  automotive security / offensive research
stack     CAN bus · ICSim · reverse engineering · hardware
status    public · github.com/i-mAshura/ICANN_AUTOMOBILE_HACKING
built     2025

Offensive research on in-vehicle networks, run in a controlled
ICSim environment rather than on someone's car.

WHAT IT COVERS
  · packet spoofing and replay
  · timing-based attacks on safety-critical messages
  · message integrity and anomaly detection
  · defensive monitoring strategies

MEASURED IMPACT
  · 10+ CAN-bus attacks designed and executed
  · 20+ ECU weaknesses surfaced in simulation`,
  },
  'dfs-wifi.md': {
    type: 'file',
    content: `Wi-Fi DFS Disruption — RF Research
──────────────────────────────────
category  RF / wireless security
stack     hackrf · bladerf · SDR · spectrum analysis
status    public · github.com/i-mAshura/DFS_WIFI_HOPPER_TRAIL
built     2025

How 802.11 networks behave when Dynamic Frequency Selection is
abused under controlled RF interference.

WHAT IT COVERS
  · DFS channel-transition behaviour under interference
  · spectrum measurements with HackRF and bladeRF
  · practical limits of RF-based disruption
  · defensive mechanisms and detection opportunities`,
  },
  'gps-fm.md': {
    type: 'file',
    content: `GPS Spoofing & SDR FM Transmission
──────────────────────────────────
category  GNSS security / RF communications
stack     hackrf · bladerf · GNSS · signal processing
status    public · github.com/i-mAshura/CUSTOM_FM_RAD
built     2024 — 2025

Controlled experimentation on GNSS trust assumptions, plus a
software-defined FM pipeline built to understand modulation
from the inside.

WHAT IT COVERS
  · spoofing indicators: signal-power and consistency anomalies
  · receiver-side validation and detection approaches
  · custom FM modulation, transmission and spectrum analysis
  · why receivers trust counterfeit signals in the first place`,
  },
  'logdefender.md': {
    type: 'file',
    content: `LogDefender — Lightweight SIEM
──────────────────────────────
category  detection engineering / log forensics
stack     python · regex · log analysis · linux
status    public · github.com/i-mAshura/LogDefender
built     2024

A small SIEM for the cases that do not justify a full stack.

WHAT IT DOES
  · parses Linux auth and server logs
  · flags brute-force attempts, port scans and anomalous sessions
  · correlates events into a readable investigation trail
  · emits structured reports instead of raw grep output`,
  },
  'suricata-homelab.md': {
    type: 'file',
    content: `Suricata HomeLab & NetCut
─────────────────────────
category  defensive operations / network monitoring
stack     suricata · bettercap · bash · network security
status    public · github.com/i-mAshura/Suricata_HomeLab
built     2024

A physical lab network monitored by a tuned IDS, plus
ARP-level device control tooling for testing it.

WHAT IT DOES
  · processed 10k+ packets against custom rules
  · 85–90% alert accuracy on the traffic generated
  · ARP-level scanning and device management with NetCut
  · used to validate detection logic before trusting it`,
  },
  'stegosecure.md': {
    type: 'file',
    content: `StegoSecure — Image Steganography
─────────────────────────────────
category  applied cryptography / covert channels
stack     python · opencv · steganography · cryptography
status    public · github.com/i-mAshura/StegoSecure
built     2024

Hides encrypted payloads inside carrier images with
passcode-protected extraction.

WHAT IT DOES
  · embeds text payloads into cover images
  · requires the correct passcode to extract
  · studies how much data a carrier can hold before
    it becomes visibly degraded`,
  },
  'rsa-tool.md': {
    type: 'file',
    content: `RSA Encryption Tool
───────────────────
category  cryptography / from scratch
stack     python · number theory · public-key crypto
status    public · github.com/i-mAshura/RSA-ENCRYPTION-TOOL
built     2024

The RSA cryptosystem implemented from first principles —
no library shortcuts — to understand key handling properly.

WHAT IT DOES
  · Miller-Rabin primality testing and large prime generation
  · asymmetric encryption and signing routines
  · modular arithmetic and key handling exposed, not hidden
  · used as a teaching reference for how RSA actually breaks`,
  },
};

const researchFiles = {
  'fido2-threat-model.md': {
    type: 'file',
    content: `Beyond the Trust Boundary: A Critical Reassessment of the
FIDO2 Threat Model
──────────────────────────────────────────────────────────
status    preprint · arXiv:2609.03789 [cs.CR] · submitted Sep 2026
authors   A. Mitra, S. C. Sethuraman, Anitha S., Sai Abhiram Kolluru

Reassesses FIDO2/WebAuthn beyond the cryptographic layer across
eight attack vectors: malicious browser extensions, platform-handler
malware, passive sniffing, virtual device drivers, CTAP2 malware,
USB implants, malicious hubs and NFC relay attacks.

FINDINGS
  · AAGUID and timing leaks enable user profiling and targeting
  · multi-layer chains bypass FIDO2's intended guarantees
  · MDS3 attacks undermine hardware attestation
  · each vector classified by privilege, skill and resources

  arxiv.org/abs/2609.03789`,
  },
  'pq-zero-trust-ics.md': {
    type: 'file',
    content: `Quantum-Resistant Zero Trust Audit Architecture for Normally
Air-Gapped Industrial Control Systems
──────────────────────────────────────────────────────────
status    research article · submitted to Security and Privacy, Sep 2026
authors   A. A. Kapatrala, S. C. Sethuraman, V. P. Yanambaka,
          S. P. Mohanty, Sai Abhiram Kolluru

End-to-end Zero Trust audit for air-gapped dual-unit ICS:
session-level admission, unit-local command validation,
unidirectional data-diode export and a RAFT ledger signed
with FALCON post-quantum signatures.

RESULTS
  · 100% of admission-bypassing unsafe commands blocked
  · 100% of tampered audit records detected
  · ~69% lower on-chain footprint vs ML-DSA-44
  · ~1.44 ms cryptographic overhead per audit event`,
  },
};

const experienceFiles = {
  'digital-fortress.md': {
    type: 'file',
    content: `Security Engineer — Digital Fortress Pvt. Ltd.
──────────────────────────────────────────────
May 2023 — present · Vijayawada, India

  · passwordless FIDO2/WebAuthn + MFA across client apps (OIDC/SAML)
  · 200+ firewall rules reviewed, ~30% redundant rules removed
  · VLAN segmentation and MFA enforced on all remote access
  · led IR for a live AWS compromise: 70+ EC2, 40+ S3, 1+ TB data
  · built ARGUS: 1,500+ events, 50+ ATT&CK techniques, -70% MTTR`,
  },
  'iitm.md': {
    type: 'file',
    content: `Research Intern — AI for Security
─────────────────────────────────
IIT Madras · ASTHRA Lab · Oct 2026 — present · remote

Building an AI-driven SOC environment that automates monitoring,
alert triage, investigation and response.

  · AI-agent workflows for event analysis and threat correlation
  · automation pipelines for log analysis and enrichment
  · agent-assisted investigation context and recommendations`,
  },
  'vit-ap-air.md': {
    type: 'file',
    content: `Undergraduate Researcher — AIR, VIT-AP University
─────────────────────────────────────────────────
Apr 2025 — Jul 2026 · Amaravati, India

  · ARGUS agentic SOC/XDR across 4 VMs and endpoints
  · eBPF + neural + temporal-logic APT detection framework
  · AP CID blockchain forensics: 500+ tx, 200+ wallets
  · NexusSOC on Wazuh + n8n, -70% manual triage across 10k alerts
  · RF/automotive research with HackRF and bladeRF SDRs`,
  },
  'ap-cid.md': {
    type: 'file',
    content: `Cyber Forensics Collaborator & Instructor
─────────────────────────────────────────
Andhra Pradesh Police CID · Jan 2026 — May 2026

  · crypto investigation pipelines over graph analytics
  · workshop delivery for the EDP programme
  · -50% investigation turnaround via automated ingestion`,
  },
  'freelance.md': {
    type: 'file',
    content: `Freelance Cloud Security Architect
──────────────────────────────────
Jul 2026 — Aug 2026 · remote

  · isolated compromised AWS regions via billing + VPC flow data
  · least-privilege designs with centralised logging and drift detection`,
  },
};

const skillFiles = {
  'identity.md': {
    type: 'file',
    content: `IDENTITY & ACCESS
  keycloak SSO            OIDC & SAML 2.0
  FIDO2 / WebAuthn        OPA / Rego ABAC
  RBAC + least privilege  secrets governance
  X.509 / PKI lifecycle`,
  },
  'network.md': {
    type: 'file',
    content: `NETWORK DEFENSE
  firewall rule review    VLAN segmentation
  suricata & snort        wireshark deep packet analysis
  VPN + remote MFA        TCP/IP and routing
  perimeter hardening`,
  },
  'secops.md': {
    type: 'file',
    content: `SECURITY OPERATIONS
  SIEM — wazuh, splunk, elastic    ARGUS agentic SOC
  MITRE ATT&CK mapping             SOAR — n8n, catalyst
  alert triage + IOC extraction    incident containment
  log forensics`,
  },
  'cloud.md': {
    type: 'file',
    content: `CLOUD & DEVSECOPS
  AWS IAM/VPC/S3/EC2      cloudtrail forensics
  terraform IaC           boto3 auditing
  docker + linux admin    security groups + flow logs
  CI/CD security automation`,
  },
  'kernel-ai.md': {
    type: 'file',
    content: `AI / KERNEL TELEMETRY
  eBPF kernel probes          neurosymbolic threat models
  pytorch sequence models     transformers / NLP masking
  explainable AI (XAI)        neo4j + networkx graphs
  federated model defenses`,
  },
  'rf-automotive.md': {
    type: 'file',
    content: `RF & AUTOMOTIVE
  CAN-bus exploitation    ICSim ECU security
  hackRF & bladeRF        GPS spoofing resilience
  wi-fi DFS spectrum      SDR modulation
  post-quantum cryptography`,
  },
};

const certs = `CERTIFICATIONS
  AWS Certified Security — Specialty        Aug 2026
  Google Cybersecurity Professional         Jun 2026
  CNSP — The SecOps Group                   Nov 2025
  AWS Certified Solutions Architect         May 2025

HONORS
  2nd prize — Optiv Recruitment Hackathon (60+ teams)
  Top 386 — ML Hackathon 2026
  Specialization Rank 1 — Cyber Security, VIT-AP (9.44 CGPA)

LEADERSHIP
  Technical Lead — Null Chapter, VIT-AP      Oct 2024 — May 2026
  Executive Secretary — Microsoft Student Community  Mar 2024 — Feb 2026
  Instructor — AP CID Employee Development Programme  2026`;

const contact = `CONTACT
  email     kollurusaiabhiram2005@gmail.com
  phone     +91 88856 67817
  location  Vijayawada / Amaravati, Andhra Pradesh, India

  github    github.com/i-mAshura
  linkedin  linkedin.com/in/sai-abhiram-kolluru-a0b71228b
  scholar   Google Scholar — Sai Abhiram Kolluru

  resume    /K_SAI_ABHIRAM.pdf

Open to security engineering roles, research collaborations
and consulting engagements. Usually replies within a day.`;

export const fileSystem = {
  type: 'dir',
  children: {
    ...files,
    systems: { type: 'dir', children: systemFiles },
    research: { type: 'dir', children: researchFiles },
    experience: { type: 'dir', children: experienceFiles },
    skills: { type: 'dir', children: skillFiles },
    creds: {
      type: 'dir',
      children: {
        'certifications.md': { type: 'file', content: certs },
      },
    },
    'contact.md': { type: 'file', content: contact },
    'resume.pdf': { type: 'file', content: 'binary — use the `resume` command to download.' },
  },
};
