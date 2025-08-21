import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";

import { Nav } from "@/components/nav";
import { Header } from "@/components/header";
import { TopLeftImage } from "@/components/top-left-image";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ethan Smith Portfolio",
    template: "%s - Ethan Smith Portfolio",
  },
  description:
    "Explore Ethan Smith's professional portfolio showcasing modern web development, creative design, and innovative digital solutions. Discover projects, skills, and achievements crafted with expertise and passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${sora.variable} antialiased`}>
        <TopLeftImage />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
