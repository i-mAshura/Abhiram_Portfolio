import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ParticlesBackground from "@/components/ParticlesBackground";
import SplashScreen from "@/components/SplashScreen";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata = {
  title: "Sai Abhiram Kolluru | Security Engineer, Zero-Trust IAM & AI Security Researcher",
  description: "Portfolio of Sai Abhiram Kolluru — Security Engineer at Digital Fortress, Research Intern at IIT Madras ASTHRA Lab, Specialization Rank 1 (VIT-AP, 9.44 CGPA), AWS Certified Security Specialty.",
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
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        <ThemeProvider>
          <SplashScreen />
          <ParticlesBackground />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
