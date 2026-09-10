# 🏭 Savera Auto Comps - Industrial TV Display & Digital Signage System
### सावेरा ऑटो कॉम्प्स प्रा. लि. (युनिट - १) &bull; EHS Safety & Corporate Announcement Portal

A high-definition, 24/7 automated TV digital signage application engineered specifically for manufacturing shop floors, corporate lobbies, and plant reception areas. Built for **Savera Auto Comps Pvt. Ltd. (Unit - I)**, this system seamlessly combines employee engagement (birthday celebrations) with EHS (Environmental Health & Safety) compliance and operational guidelines.

---

## 📑 Table of Contents
1. [Executive Summary (For Non-Technical Stakeholders)](#-executive-summary-for-non-technical-stakeholders)
2. [Key Capabilities & Screen Layouts](#-key-capabilities--screen-layouts)
3. [Technical Architecture (For Developers & IT Engineers)](#-technical-architecture-for-developers--it-engineers)
4. [File & Directory Structure](#-file--directory-structure)
5. [Data Flow & Performance Engineering](#-data-flow--performance-engineering)
6. [Operational Controls & Remote Shortcuts](#-operational-controls--remote-shortcuts)
7. [Installation & Deployment Guide](#-installation--deployment-guide)
8. [Configuration & Customization](#-configuration--customization)
9. [Maintenance, Troubleshooting & FAQ](#-maintenance-troubleshooting--faq)

---

## 🎯 Executive Summary (For Non-Technical Stakeholders)

### What is this project?
The **Savera TV Display Slider** is an intelligent digital notice board running on smart TVs, large displays, or kiosk computers inside the factory. It automatically cycles through high-priority corporate content at configurable intervals (10 seconds by default) without requiring any manual intervention.

### Who is it for?
* **Shop-Floor Workers & Machine Operators:** High-contrast, bilingual (English & Marathi) safety guidelines visible from 10–15 meters away.
* **Safety Officers & EHS Managers:** Ensures regulatory compliance by displaying mandatory hazards, PPE requirements, operational Do's, and Don'ts for critical plant stations.
* **HR & Administration:** Automated birthday celebrations recognizing employees with photo portraits, department tags, and celebratory animations.
* **Management & Plant Visitors:** Professional corporate presence with real-time digital clock, company branding, and clean industrial aesthetics.

### Key Business Benefits
* **Bilingual Inclusivity:** Every instruction, hazard warning, and guideline is presented in both **English** and **Marathi (मराठी)**.
* **Zero-Downtime Reliability:** Designed to run 24 hours a day, 7 days a week with zero memory leaks, freeze-ups, or blank screen glitches.
* **Optimized for Distance Viewing:** Specially calibrated typography and high-contrast color palettes (Emerald Green, Crimson Red, Teal, Amber) ensure instant comprehension even across noisy, busy plant environments.

---

## 🖥️ Key Capabilities & Screen Layouts

### 1. Slide 1: Employee Birthday Celebrations (वाढदिवसाच्या हार्दिक शुभेच्छा)
* **Visual Identity:** Festive deep-slate backdrop with warm floating celebratory accents and automated confetti burst effects.
* **Employee Carousel:** Rotates through all celebrating employees one by one with a smooth progress bar indicator before advancing to the safety slides.
* **Employee Cards:** Displays high-resolution employee portrait, English name, Marathi name, department designation, and company unit.
* **HR Quick-Manager Modal:** Built-in modal allowing HR personnel to view, add, edit, or remove birthday entries on the fly.

### 2. Slides 2 through 10: EHS Safety Guidelines (सुरक्षा नियम व खबरदारी)
Each safety slide uses a balanced **60% (Precautions) / 40% (Illustration)** split layout:

| Slide # | Operational Station | Marathi Title | Focus Areas Covered |
|:---:|:---|:---|:---|
| **02** | **CO2 / Arc Welder** | सी.ओ.२ / आर्क वेल्डर | Eye protection, flash burn hazards, fume extraction, hot slag |
| **03** | **Machine Operator** | मशीन ऑपरेटर | Machine guard interlocks, loose clothing/hair hazards, emergency stop |
| **04** | **Forklift Operator** | फोर्कलिफ्ट ऑपरेटर | Speed limits, horn usage, mast visibility, pedestrian right-of-way |
| **05** | **Powder Coater** | पावडर कोटर / पेंटिंग | Vapor masks, anti-static footwear, grounding, spray booth safety |
| **06** | **Crane Operator** | क्रेन ऑपरेटर | Sling load capacity, tag lines, exclusion zones, no riding loads |
| **07** | **Electrical Safety** | विद्युत सुरक्षा | LOTO (Lockout/Tagout), arc flash PPE, insulated tools, water hazards |
| **08** | **Chemical Handling** | रसायने हाताळणी | Nitrile gloves, splash goggles, SDS review, eye-wash station usage |
| **09** | **Hazardous Waste** | घातक कचरा व्यवस्थापन | Color-coded drums, airtight seals, spill response, PCB labeling |
| **10** | **3R Waste Hierarchy** | ३R कचरा व्यवस्थापन | Reduce, Reuse, Recycle industrial principles & scrap segregation |

### 3. Left-Side Precautions Structure (The 4 Critical Safety Pillars)
Every safety slide features four standardized, color-coded precaution boxes:
1. ⚠️ **Hazards (धोके)** *(Rose / Red)* - Potential occupational dangers and physical injury risks.
2. 🛡️ **PPE (पीपीई)** *(Teal / Cyan)* - Mandatory Personal Protective Equipment required for that specific workstation.
3. ✅ **Do's (करावे)** *(Emerald / Green)* - Standard Operating Procedures (SOPs) that workers must execute.
4. ❌ **Don'ts (करू नये)** *(Pink / Crimson)* - Prohibited actions that could lead to accidents or machine damage.
5. 📢 **Safety First Banner (सुरक्षा प्रथम)** - Prominent bilingual footer slogan reinforcing zero-accident plant culture.

### 4. Right-Side Centered Safety Figure
* Unified bilingual badge centered at the top (e.g., `Machine Operator | मशीन ऑपरेटर`).
* High-resolution, professional vector/technical illustration centered within the frame.
* Smooth loading transition with instant local caching and error fallback.

### 5. Persistent Live TV Header & Clock
* Real-time digital clock displaying hours, minutes, seconds, and bilingual day/date.
* Central Savera Auto Comps corporate logo with unit demarcation (`Unit - I | युनिट - १`).
* Interactive remote-control bar (Play/Pause, Previous, Next, Slide selector, Fullscreen toggle).

---

## ⚙️ Technical Architecture (For Developers & IT Engineers)

The application is architected as a modern, full-stack single-page application (SPA) backed by an Express server with Vite middleware integration.

```
┌────────────────────────────────────────────────────────┐
│                   Browser Client                       │
│  React 19 + TypeScript + Tailwind CSS v4 + Motion      │
└───────────▲────────────────────────────────▲───────────┘
            │                                │
            │ HTTP Static / HMR              │ REST API (/api/birthdays)
            │                                │
┌───────────▼────────────────────────────────▼───────────┐
│              Express Backend (Node.js)                 │
│  • Port 3000 (0.0.0.0 ingress routing)                 │
│  • Vite Middleware in Development                      │
│  • Bundled via esbuild (dist/server.cjs) in Production │
└────────────────────────────────────────────────────────┘
```

### Core Technologies
* **Frontend Framework:** React 19 (`react`, `react-dom`) with TypeScript 5.8.
* **Styling Engine:** Tailwind CSS v4 (`@tailwindcss/vite` plugin) with CSS `clamp()` responsive math.
* **Animation & Transitions:** `motion` (`motion/react` v12) for smooth slide transitions, pulse alerts, and progress indicators.
* **Particle FX:** `canvas-confetti` for celebratory birthday fireworks.
* **Iconography:** `lucide-react` for enterprise UI and industrial safety symbols.
* **Server Runtime:** Node.js with Express 4 (`tsx` in dev, `esbuild` for production bundle).

---

## 📂 File & Directory Structure

```
├── index.html                  # HTML entry point with preloaded safety images and Google Fonts
├── metadata.json               # Application metadata, name, and permissions
├── package.json                # Project dependencies, build, and run scripts
├── server.ts                   # Express server entry point (API endpoints + Vite integration)
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite 6 configuration with Tailwind CSS plugin
├── public/                     # Static assets served directly to the browser
│   ├── logo.jpg                # Savera Auto Comps corporate logo
│   ├── Welding_Safety.jpg      # High-res safety graphic: Welding operations
│   ├── Machine_Safety.jpg      # High-res safety graphic: Machine operators
│   ├── Forklift_Operator.jpg   # High-res safety graphic: Forklift safety
│   ├── Coater.jpg              # High-res safety graphic: Powder coating & painting
│   ├── Crane_Operator.jpg      # High-res safety graphic: Overhead crane & lifting
│   ├── Electrical_Safety.jpg   # High-res safety graphic: Electrical safety & LOTO
│   ├── Chemical_Handling.jpg   # High-res safety graphic: Chemical handling & SDS
│   ├── Hazardous_Waste.jpg     # High-res safety graphic: Hazardous waste drums
│   └── 3RS.jpg                 # High-res safety graphic: 3R Waste Hierarchy
└── src/
    ├── main.tsx                # React DOM root bootstrapping
    ├── App.tsx                 # Main slider container, timer loop, keyboard shortcuts
    ├── index.css               # Global Tailwind CSS import & typography definitions
    ├── types.ts                # Shared TypeScript interfaces (SlideData, BirthdayPerson, etc.)
    ├── components/
    │   ├── BirthdaySlide.tsx      # Birthday slide with carousel, confetti & HR modal
    │   ├── SafetySlide.tsx        # Safety precaution slide layout (60/40 split)
    │   ├── SafetyIllustrations.tsx# Smart image loader with caching, skeleton & fallback
    │   ├── SaveraLogo.tsx         # Responsive company brand icon & logo component
    │   ├── TVClock.tsx            # Live digital clock with bilingual date formatting
    │   └── TVControlBar.tsx       # Bottom control bar for TV remote and touch displays
    ├── data/
    │   ├── birthdaysData.ts       # Initial employee birthday profiles
    │   └── slidesData.ts          # Complete bilingual dataset for all 9 safety slides
    └── utils/
        └── imagePreloader.ts      # Zero-latency image preloading and in-memory cache
```

---

## ⚡ Data Flow & Performance Engineering

### 1. Zero-Latency Asset Preloading Engine (`imagePreloader.ts`)
To prevent visual flickering, blank gray boxes, or slow network downloads on low-powered TV browsers:
* **HTML Preload Scanner:** `<link rel="preload" as="image">` tags in `index.html` start downloading all 9 safety graphics immediately when the page starts loading.
* **Background Memory Warmup:** On app startup, `imagePreloader.ts` instantiates in-memory `HTMLImageElement` objects and calls `img.decode()`. When a slide transitions, the image is already decoded in GPU memory and renders in **0 milliseconds**.
* **Graceful Degradation:** If any image fails to load over the network, an automatic retry is triggered with a timestamp cache-buster. If it persistently fails, an informative EHS fallback card is displayed rather than a broken image icon.

### 2. Auto-Adjusting Typography Engine (`getListItemStyles`)
TV screens vary between 1080p, 4K, 16:9, and ultra-wide aspect ratios:
* Precaution list containers use `justify-evenly` and `overflow-hidden` so items dynamically expand to fill the entire card height, completely eliminating dead space.
* Font sizes scale dynamically based on the **item count**:
  * **2–3 Items:** Font scales up to `1.45rem` with generous line-height for maximum visibility from a distance.
  * **4+ Items:** Font scales to `1.08rem` with proportional leading so that all text fits **strictly within the box boundaries** with zero overflow and zero scrollbars.
* CSS `clamp(min, preferred_vw, max)` ensures smooth continuous scaling between standard 14-inch laptops and 75-inch 4K TV displays.

---

## 🎮 Operational Controls & Remote Shortcuts

The slider can be operated using a wireless TV remote, presentation clicker, touch screen, or standard USB keyboard:

| Action | Keyboard Key | TV Remote / Clicker |
|:---|:---:|:---:|
| **Next Slide** | `ArrowRight` or `PageDown` | `Next` / `Right` Button |
| **Previous Slide** | `ArrowLeft` or `PageUp` | `Prev` / `Left` Button |
| **Play / Pause Auto-Rotation** | `Spacebar` or `K` | `Play/Pause` Button |
| **Toggle Fullscreen Mode** | `F` | `Enter` / Click Fullscreen Icon |
| **Select Specific Slide** | Number clicks on control bar | Number buttons |
| **Adjust Slide Duration** | 5s, 10s, 15s, 30s pills in control bar | Navigation cursor |

---

## 🚀 Installation & Deployment Guide

### Prerequisites
* **Node.js**: Version 18.x or 20.x+
* **npm**: Version 9.x+

### 1. Local Development Setup
```bash
# Clone the repository
git clone <repository-url>
cd savera-tv-slider

# Install dependencies
npm install

# Start development server (boots on port 3000)
npm run dev
```
Open your browser and navigate to: `http://localhost:3000`

### 2. Production Build
```bash
# Type-check codebase
npm run lint

# Build production bundle (Vite SPA + esbuild server bundle)
npm run build

# Start production server
npm start
```
The production server will listen on `0.0.0.0:3000`.

### 3. TV / Smart Display Setup
1. Launch the TV's built-in web browser (Chrome, Samsung Tizen Internet, LG webOS Browser, or Android TV Chrome).
2. Enter the deployment URL (e.g., `https://your-domain.com`).
3. Press `F` on the remote keyboard or click the **Fullscreen** icon in the bottom-right control bar.
4. Ensure the display's sleep timer / auto-power-off is disabled in the TV settings for continuous operation.

---

## 🛠️ Configuration & Customization

### 1. Changing Slide Display Duration
To change the default display time from 10 seconds to another duration:
* **Via UI:** Click the `5s`, `10s`, `15s`, or `30s` pills on the bottom control bar.
* **Via Code:** In `/src/App.tsx`, modify the default state:
  ```typescript
  const [intervalDuration, setIntervalDuration] = useState<number>(10);
  ```

### 2. Adding / Editing Safety Slides
All safety slide content is defined in `/src/data/slidesData.ts`. To edit or add a new station:
```typescript
{
  id: 11,
  titleEn: 'TOOL ROOM & DIE MAINTENANCE',
  titleMr: 'टूल रूम आणि डाय देखभाल',
  unit: 'Unit - I',
  roleType: 'toolroom',
  figHeading: {
    en: 'Tool & Die Specialist',
    mr: 'टूल आणि डाय तज्ज्ञ',
  },
  hazards: [
    { en: 'Sharp cutting edges & burrs', mr: 'धारदार कडा आणि धातूचे कण' },
    { en: 'Heavy die pinch points', mr: 'डाय मधील दाब बिंदूचे धोके' },
  ],
  ppeList: [
    { en: 'Cut-Resistant Gloves', mr: 'कट-प्रतिरोधक हातमोजे' },
    { en: 'Impact Safety Glasses', mr: 'सुरक्षा गॉगल' },
  ],
  dos: [
    { en: 'Use mechanical hoists for dies', mr: 'जड डाय उचलण्यासाठी क्रेन वापरा' },
  ],
  donts: [
    { en: 'Never place hands inside open presses', mr: 'चालू प्रेसमध्ये हात घालू नका' },
  ],
  safetyFirstText: {
    en: 'Protect Your Hands - Think Before You Touch',
    mr: 'हातांचे रक्षण करा - स्पर्श करण्यापूर्वी विचार करा',
  },
}
```

### 3. Updating Employee Birthday Records
Birthday entries can be managed through:
* **The In-App HR Modal:** Click "Manage Birthdays" on Slide 1 to add or modify profiles interactively.
* **The Data File:** Edit `/src/data/birthdaysData.ts` directly for persistent defaults.
* **REST API:** `GET /api/birthdays` and `POST /api/birthdays` endpoints support automated synchronization from internal HRMS or ERP systems.

---

## 🔧 Maintenance, Troubleshooting & FAQ

### Q1: The TV screen shows black bars on the sides.
**Solution:** Press the TV remote's "Picture Format" or "Aspect Ratio" button and set it to **16:9** or **Just Scan / Fit to Screen**.

### Q2: Why are images loading immediately without any delay?
**Explanation:** The application utilizes an eager background preloader (`imagePreloader.ts`) that fetches and decodes all slide images into browser cache upon initialization. Slide switches access images from local memory rather than requesting them across the network.

### Q3: An image is showing an error or reload button.
**Explanation:** If an image fails to load due to a temporary network disruption, click the **Reload Image** button or wait for the automatic retry loop (triggers within 800ms). Ensure that the corresponding image file exists in the `/public` directory.

### Q4: Can we add more languages (e.g. Hindi)?
**Yes:** The layout architecture uses flexible flexbox and grid wrappers. Adding a third language subtitle requires adding the field to `SlideData` in `/src/types.ts` and updating the text block in `/src/components/SafetySlide.tsx`.

---

## 👥 Credits & Corporate Ownership
* **Company:** Savera Auto Comps Pvt. Ltd. (सावेरा ऑटो कॉम्प्स प्रा. लि.)
* **Division:** EHS (Environmental Health & Safety) & Human Resources
* **Facility:** Unit - I (युनिट - १)
* **System Type:** Enterprise Digital Signage & TV Display Slider
* **Version:** 2.0.0 (Production Industrial Release)
* **Developed By:** MRIGANKO SARKAR (मृगांको सरकार)