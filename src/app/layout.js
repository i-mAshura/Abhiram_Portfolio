import "./globals.css";

export const metadata = {
  title: "Sai Abhiram Kolluru | Security Engineer, Zero-Trust IAM & AI Security Researcher",
  description: "Official portfolio of Sai Abhiram Kolluru — Security Engineer at Digital Fortress, Research Intern at IIT Madras ASTHRA Lab, Specialization Rank 1 (VIT-AP, 9.44 CGPA), AWS Certified Security Specialty.",
  keywords: [
    "Sai Abhiram Kolluru",
    "Security Engineer",
    "IAM",
    "Zero Trust",
    "FIDO2",
    "eBPF",
    "IIT Madras ASTHRA Lab",
    "Digital Fortress",
    "AWS Certified Security Specialty",
    "Kernel Telemetry",
    "SIEM SOAR",
    "ARGUS"
  ],
  authors: [{ name: "Sai Abhiram Kolluru" }],
  openGraph: {
    title: "Sai Abhiram Kolluru | Security Engineer & AI Security Researcher",
    description: "Security Engineer & Researcher specializing in Zero-Trust IAM, eBPF kernel telemetry, network perimeter defense, and autonomous SIEM automation.",
    url: "https://github.com/i-mAshura/Abhiram_Portfolio",
    siteName: "Sai Abhiram Kolluru Portfolio",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
