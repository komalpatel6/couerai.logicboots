# Coeur.AI — AI-Powered Cardiac & Respiratory Auscultation

> **Transforming standard digital stethoscopes into clinical-grade phonocardiogram triage instruments with on-device acoustic machine learning.**

[![Next.js 15](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

---

## 🩺 Overview

**Coeur.AI** by LogicBoots is a point-of-care clinical decision support (CDS) platform designed for cardiologists, primary care physicians, and community health screening workers. It processes raw biomedical acoustic streams from standard digital stethoscopes to:
- **Isolate S1 & S2 cycles**: Accurately segment systolic and diastolic phases in real time.
- **Classify Valvular Pathologies**: Screen for Aortic Stenosis (crescendo-decrescendo murmurs), Mitral Regurgitation (holosystolic murmurs), and S3/S4 heart failure gallops.
- **100% On-Device Inference**: Sub-12ms neural processing executed directly on mobile NPUs (Apple Neural Engine / Qualcomm Hexagon) with zero raw audio transmission to the cloud.
- **Audit-Ready EHR Integration**: Generate HL7/FHIR compliant payloads and encrypted PDF dossiers for Epic, Cerner, and AthenaHealth.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **UI & Animation**: [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Framer Motion](https://www.framer.com/motion), [Lucide React](https://lucide.dev/)
- **Charts & Telemetry**: [Recharts](https://recharts.org/), Web Audio API (real-time phonocardiogram synthesis)
- **Email Delivery**: [Resend](https://resend.com/)
- **Inference Proxy**: Next.js Server Route Handlers connecting to Python ML Microservices

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: `18.18+` or `20.x`
- **npm** or **pnpm**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/logicboots/coeur-ai.git
cd coeur-ai

# Install dependencies
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PYTHON_API_URL` | Python ML Inference API Endpoint | `http://localhost:8000` |
| `RESEND_API_KEY` | Resend API Key for Demo & Contact Forms | `re_...` |
| `CONTACT_RECIPIENT_EMAIL` | Inbound notification email address | `logicboots.officeteam@gmail.com` |
| `RESEND_FROM_EMAIL` | Verified sender domain in Resend | `Coeur.AI <onboarding@resend.dev>` |

### 4. Running the Development Server
```bash
npm run dev
```
Open **[http://localhost:9002](http://localhost:9002)** in your browser.

---

## 📂 Project Architecture

```text
Coeur-AI/
├── public/                 # Static clinical icons, partners, and logo assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # Route handlers (/predict, /demo, /contact)
│   │   ├── demo/           # Dual-mode interactive AI acoustic sandbox
│   │   ├── pricing/        # Tier matrix & clinical ROI calculator
│   │   ├── contact/        # Direct Medical Affairs inquiry portal
│   │   ├── medical-disclaimer/ # Clinical Decision Support compliance
│   │   ├── layout.tsx      # Root layout, JSON-LD metadata, fonts
│   │   └── page.tsx        # Main landing page
│   ├── components/
│   │   ├── layout/         # Header (scroll progress bar) & Footer
│   │   ├── sections/       # Hero with live telemetry, Bento features, FAQ
│   │   └── ui/             # Radix primitives & custom UI components
│   ├── hooks/              # Custom React hooks (use-toast, etc.)
│   └── lib/                # Utility helpers and cn() class merge
├── Dockerfile              # Production multi-stage Docker container
└── apphosting.yaml         # Firebase App Hosting deployment configuration
```

---

## 🧪 Available Scripts

- `npm run dev` — Start the development server on port 9002 with Turbopack.
- `npm run build` — Create the optimized production build.
- `npm run start` — Run the production server.
- `npm run typecheck` — Verify TypeScript types (`tsc --noEmit`).
- `npm run lint` — Run ESLint rules.

---

## 🛡️ Medical & Regulatory Disclaimer

Coeur.AI is an assistive clinical decision support (CDS) system designed to augment the workflow of certified medical practitioners. It does not replace echocardiography, 12-lead ECG, or the independent judgment of a licensed healthcare provider.

---

## 📄 License & Maintainer

Maintained with ❤️ by **LogicBoots Medical Systems**. For clinical trial partnerships and enterprise inquiries, reach out to [contact@logicboots.com](mailto:contact@logicboots.com).
