import type { Metadata } from "next";
import { Syne, Space_Mono, Inter, Sedgwick_Ave_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const graffiti = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-graffiti",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joenvyme — Creative Developer",
  description:
    "Joenvyme, creative developer & digital creator. Visuals, software and digital art at the crossroads of design, code and AI — built to leave a mark.",
  metadataBase: new URL("https://joenvyme.com"),
  openGraph: {
    title: "Joenvyme — Creative Developer",
    description:
      "Visuals, software & digital art. Design, code and AI, built to leave a mark.",
    type: "website",
  },
  icons: {
    icon: "/3D Head_no-background.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceMono.variable} ${inter.variable} ${graffiti.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
