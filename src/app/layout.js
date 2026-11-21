import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Backdrop from "@/components/Backdrop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono-jb",
  display: "swap",
});

const siteUrl = "https://master.abhiram.tech";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sai Abhiram Kolluru — Security Engineer & AI Security Researcher",
    template: "%s — Sai Abhiram Kolluru",
  },
  description:
    "Security engineer and AI security researcher building zero-trust identity, in-kernel eBPF telemetry, and agentic SOC systems. Researcher at AIR, VIT-AP University. AWS Certified Security — Specialty.",
  keywords: [
    "Sai Abhiram Kolluru",
    "Security Engineer",
    "AI Security Researcher",
    "Zero Trust",
    "FIDO2",
    "WebAuthn",
    "eBPF",
    "Kernel Telemetry",
    "SIEM",
    "SOAR",
    "ARGUS",
    "MITRE ATT&CK",
    "AWS Security Specialty",
    "IIT Madras ASTHRA Lab",
    "VIT-AP",
  ],
  authors: [{ name: "Sai Abhiram Kolluru", url: siteUrl }],
  creator: "Sai Abhiram Kolluru",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sai Abhiram Kolluru",
    title: "Sai Abhiram Kolluru — Security Engineer & AI Security Researcher",
    description:
      "Zero-trust IAM, eBPF kernel telemetry, agentic SOC automation, and security research. Building systems that find what humans miss.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Abhiram Kolluru — Security Engineer & AI Security Researcher",
    description:
      "Zero-trust IAM, eBPF kernel telemetry, agentic SOC automation, and security research.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} grain`}
      >
        <Backdrop />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
