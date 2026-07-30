import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Coeur.AI — AI-Powered Cardiac & Respiratory Diagnostics',
  description: 'Coeur.AI transforms your smartphone into a powerful diagnostic tool. Advanced AI analysis of heart and lung sounds for clinicians and health-conscious individuals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inter — the same clean grotesque PMcardio uses */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
