import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ParticlesBackground from "@/components/ParticlesBackground";
import SplashScreen from "@/components/SplashScreen";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata = {
  title: "Sai Abhiram Kolluru | Cyber Security & AI",
  description: "Portfolio of Sai Abhiram Kolluru, Ethical Hacker and Software Developer.",
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
      </body>
    </html>
  );
}
