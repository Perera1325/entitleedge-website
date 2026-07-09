import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BackgroundParticles from "../components/global/BackgroundParticles";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata = {
  title: 'EntitleEdge Advisory | Civil Engineering & Construction Consulting',
  description: 'EntitleEdge Advisory provides expert consulting in Project Controls, Claims, Delay Analysis, and Commercial Support for civil engineering and construction projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        <BackgroundParticles />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
