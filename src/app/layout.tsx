import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#EDE8DC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://coeur.ai"),
  title: {
    default: "Coeur.AI — AI-Powered Cardiac & Respiratory Diagnostics",
    template: "%s | Coeur.AI",
  },
  description:
    "Coeur.AI transforms your smartphone and digital stethoscope into a clinical-grade diagnostic tool. Advanced AI analysis of heart and lung auscultation for clinicians and healthcare professionals.",
  keywords: [
    "Digital Stethoscope AI",
    "Phonocardiogram AI",
    "PCG Diagnostics",
    "Cardiac Screening AI",
    "Auscultation Machine Learning",
    "Point-of-Care Cardiology",
    "Rural Health Diagnostics",
    "LogicBoots",
  ],
  authors: [{ name: "LogicBoots", url: "https://logicboots.com" }],
  creator: "LogicBoots",
  publisher: "LogicBoots",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coeur.ai",
    title: "Coeur.AI — AI-Powered Cardiac & Respiratory Diagnostics",
    description:
      "Transforming smartphones into clinical-grade diagnostic powerhouses for heart and lung auscultation.",
    siteName: "Coeur.AI",
    images: [
      {
        url: "/coeur-app-showcase.png",
        width: 1200,
        height: 630,
        alt: "Coeur.AI Diagnostic Dashboard and Application Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coeur.AI — AI-Powered Cardiac & Respiratory Diagnostics",
    description:
      "Transforming smartphones into clinical-grade diagnostic powerhouses for heart and lung auscultation.",
    images: ["/coeur-app-showcase.png"],
    creator: "@logicboots",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://coeur.ai/#organization",
        name: "Coeur.AI",
        alternateName: "Coeur.AI by LogicBoots",
        url: "https://coeur.ai",
        logo: "https://coeur.ai/co-log.png",
        description:
          "AI-powered cardiac and respiratory diagnostic platform for clinical decision support and point-of-care screening.",
        medicalSpecialty: ["Cardiology", "Pulmonology"],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://coeur.ai/#software",
        name: "Coeur.AI Application",
        operatingSystem: "Android, iOS",
        applicationCategory: "MedicalApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "Auscultation sound recording, phonocardiogram waveform extraction, and AI-assisted cardiac and pulmonary pattern analysis.",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-[#E8234A]/20 selection:text-[#E8234A]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
