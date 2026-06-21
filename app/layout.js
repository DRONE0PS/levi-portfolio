import { Space_Grotesk, Pixelify_Sans, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Levi Adolphus — Frontend Developer & UI Designer",
  description: "Portfolio of Levi Adolphus, frontend developer, UI designer, and creative problem solver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${pixelify.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
