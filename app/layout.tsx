import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "./_/header";
import "./globals.css";

// FONTS ***********************************************************************************************************************************
const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
});

const base = Quicksand({
  variable: "--font-base",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// META ************************************************************************************************************************************
export const metadata: Metadata = {
  title: "Theodôsis",
  description: "Inscris-toi gratuitement à La Voix de Theodôsis",
};

// ROOT ************************************************************************************************************************************
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={`${heading.variable} ${base.variable} flex min-h-screen flex-col overflow-x-hidden overflow-y-scroll antialiased`}>
        <Header className="sticky top-0 z-20" />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

// TYPES ***********************************************************************************************************************************
export type RootLayoutProps = Readonly<{ children: React.ReactNode }>;
