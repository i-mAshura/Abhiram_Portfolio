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
  { usage: 'cat <file>', desc: 'print a file' },
  { usage: 'tree', desc: 'recursive view of this filesystem' },
  { usage: 'whoami', desc: 'identity + current roles' },
  { usage: 'neofetch', desc: 'system summary, because of course' },
  { usage: 'projects', desc: 'list systems I have built' },
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
  cat about.md                 the longer version
  ls systems/                  things I have built
  ls research/                 papers and preprints
  cat creds/certifications.md  verified credentials
  resume                       download the PDF`;

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
    content: `ARGUS — Agentic SOC / XDR
──────────────────────────
stack     python · elasticsearch · docker · linux
role      architecture, detection engineering, response agents

Autonomous SOC/SIEM/SOAR that monitors endpoints, correlates
events against MITRE ATT&CK and deploys response agents that
investigate, contain and remediate.

IMPACT
  · 1,500+ events ingested into Elasticsearch
  · 50+ ATT&CK techniques auto-tagged at 90%+ accuracy
  · 4 VMs and endpoints monitored continuously
  · incident response time cut by 70%

Note: source is private; happy to walk through the design.`,
  },
  'kernelguard.md': {
    type: 'file',
    content: `eBPF_KernelGuard — Neurosymbolic Temporal IDS
──────────────────────────────────────────────
stack     eBPF · neural sequence models · temporal logic · C

Intrusion detection that pairs in-kernel eBPF telemetry with
symbolic temporal rules, so every detection traces back to the
exact syscall stream and rule that fired.

WHY IT MATTERS
  · explainable APT detection instead of a black-box score
  · correlates low-level behaviour over time
  · symbolic layer produces reviewer-readable decisions

  github.com/i-mAshura/eBPF_KernelGuard`,
  },
  'aegis-iam.md': {
    type: 'file',
    content: `Aegis IAM — Zero-Trust Identity Platform
────────────────────────────────────────
stack     keycloak · OIDC/SAML · OPA/Rego · terraform · webauthn

Centralised SSO for 4 applications with passwordless MFA and
10 role profiles. 15 Rego ABAC policies with step-up auth for
admin actions; realms codified in Terraform.

IMPACT
  · onboarding cut from 45 minutes to under 5
  · 2,000+ auth events streamed into Wazuh
  · 3 OIDC apps + 1 SAML app federated`,
  },
  'privscope.md': {
    type: 'file',
    content: `PrivScope — AWS Least-Privilege Auditor
───────────────────────────────────────
stack     python · boto3 · cloudtrail · networkx

20+ IAM audits for wildcards, stale keys, missing MFA and
vulnerable trust policies. Permissions modelled as a directed
graph to surface escalation paths.

IMPACT
  · 8 privilege-escalation vectors identified
  · least-privilege policies synthesised from 5,000+ CloudTrail events
  · ~65% excess permissions removed`,
  },
  'nexussoc.md': {
    type: 'file',
    content: `NexusSOC — Automated SOC Platform
─────────────────────────────────
stack     wazuh · n8n · catalyst · python · docker

Alert enrichment, IOC extraction and response playbooks for
SSH brute force, anomalous logins and lateral movement.

IMPACT
  · 10,000+ test alerts processed
  · manual triage reduced by 70%
  · enrichment + playbook orchestration end to end

  github.com/i-mAshura/NexusSOAR`,
  },
  'analytixhub.md': {
    type: 'file',
    content: `AnalytiXHub — Blockchain Forensics
──────────────────────────────────
stack     python · neo4j · networkx · react · typescript

Crypto investigation platform built with Andhra Pradesh CID.
Graph analytics expose wallet clusters and suspicious flows.

IMPACT
  · 500+ transactions traced across 200+ wallets
  · investigation turnaround cut by 50%
  · structured forensic reporting`,
  },
  'canbus.md': {
    type: 'file',
    content: `Automobile Hacking — CAN Bus Offense
────────────────────────────────────
stack     CAN bus · ICSim · reverse engineering · hardware

Offensive research on in-vehicle networks: packet spoofing,
timing attacks and anomaly detection in a controlled lab.

IMPACT
  · 10+ CAN-bus attacks designed and executed
  · 20+ ECU weaknesses surfaced in ICSim

  github.com/i-mAshura/ICANN_AUTOMOBILE_HACKING`,
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
