"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { UseCases } from "./components/UseCases";
import { BreachGrid } from "./components/BreachGrid";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

type HeroPreview = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const heroPreviews = {
  box: {
    title: "SpeakEZ On-Prem",
    description: "Open the hardware details",
    href: "#hardware",
    imageSrc: "/intel-nuc-transparent.png",
    imageAlt: "SpeakEZ On-Prem server mini PC",
  },
  phone: {
    title: "SpeakEZ on your phone",
    description: "Open the messaging workflow",
    href: "#how-it-works",
    imageSrc: "/calling-screen.png",
    imageAlt: "SpeakEZ mobile screen",
  },
} satisfies Record<string, HeroPreview>;

const salesHeadlines = [
  "Private messaging without surrendering your data.",
  "Own the conversation. Keep it encrypted.",
  "Run your own network. Keep it local.",
  "Speak freely. Keep it private.",
];

export default function Home() {
  const [introPlaying, setIntroPlaying] = useState(true);
  const [salesHeadlineIndex, setSalesHeadlineIndex] = useState(0);
  const [activePreview, setActivePreview] = useState<HeroPreview | null>(null);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showHardware, setShowHardware] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showUseCases, setShowUseCases] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAboutApp, setShowAboutApp] = useState(false);
  const [showWhyApp, setShowWhyApp] = useState(false);
  const [showGetApp, setShowGetApp] = useState(false);
  const [openMenu, setOpenMenu] = useState<"self-host" | "app" | null>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const previewTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPreviewTimer = () => {
    if (previewTimerRef.current) {
      clearTimeout(previewTimerRef.current);
      previewTimerRef.current = null;
    }
  };

  const showPreviewAfterDelay = (preview: HeroPreview) => {
    clearPreviewTimer();
    previewTimerRef.current = setTimeout(() => setActivePreview(preview), 350);
  };

  const finishIntro = () => {
    setIntroPlaying(false);
  };

  const closeAllModals = () => {
    setShowHowItWorks(false);
    setShowHardware(false);
    setShowBenefits(false);
    setShowUseCases(false);
    setShowPrivacy(false);
    setShowAboutApp(false);
    setShowWhyApp(false);
    setShowGetApp(false);
  };

  const anyModalOpen =
    showHowItWorks || showHardware || showBenefits || showUseCases || showPrivacy || showAboutApp || showWhyApp;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSalesHeadlineIndex((index) => (index + 1) % salesHeadlines.length);
    }, 5200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen overflow-x-hidden bg-[#101518] text-[#E7ECEF]`}
      style={{
        fontFamily: "var(--font-body)",
      }}
    >
      <video
        ref={introVideoRef}
        autoPlay
        muted
        playsInline
        controls={false}
        preload="auto"
        aria-hidden="true"
        className={`fixed inset-0 z-0 h-screen w-screen object-cover ${introPlaying ? "visible" : "invisible"}`}
        onEnded={finishIntro}
        onError={() => setIntroPlaying(false)}
      >
        <source src="/speakez-intro.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-0 bg-cover bg-center ${introPlaying ? "invisible" : "visible"}`}
        style={{ backgroundImage: "url('/speakez-intro-final-frame.png')" }}
      />
      <div className="fixed inset-0 z-[1] bg-black/45" aria-hidden="true" />
      <div className="storm-glow fixed inset-0 z-[3] pointer-events-none" aria-hidden="true" />

      <div
        className={`relative z-10 ${introPlaying ? "pointer-events-none invisible" : "visible"}`}
        aria-hidden={introPlaying}
      >
      <style>{`
        @keyframes dashflow { to { stroke-dashoffset: -60; } }
        @keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes hv-cube-rotate { from { transform: rotateX(-18deg) rotateY(0deg); } to { transform: rotateX(-18deg) rotateY(360deg); } }
        @keyframes storm-glow {
          0%, 12%, 100% { opacity: 0; }
          15% { opacity: 0.2; }
          18% { opacity: 0.04; }
          20% { opacity: 0.38; }
          23% { opacity: 0.06; }
          43% { opacity: 0; }
          47% { opacity: 0.16; }
          50% { opacity: 0.03; }
          54% { opacity: 0.32; }
          57% { opacity: 0.05; }
          77% { opacity: 0; }
          81% { opacity: 0.24; }
          84% { opacity: 0; }
        }
        .flow-line { stroke-dasharray: 3 6; animation: dashflow 3.2s linear infinite; }
        .float { animation: floaty 5s ease-in-out infinite; }
        .nav-neon { text-shadow: 0 0 5px rgba(139, 92, 246, 0.85), 0 0 14px rgba(139, 92, 246, 0.65), 0 0 24px rgba(139, 92, 246, 0.4); }
        .heading-neon { text-shadow: 0 0 5px rgba(139, 92, 246, 0.85), 0 0 14px rgba(139, 92, 246, 0.65), 0 0 24px rgba(139, 92, 246, 0.4); }
        .subheading-neon { text-shadow: 0 0 3px rgba(139, 92, 246, 0.65), 0 0 9px rgba(139, 92, 246, 0.35); }
        @keyframes sales-headline-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sales-headline { animation: sales-headline-in 650ms ease-out both; }
        .dropdown-page {
          background-color: #080d12;
          background-image: linear-gradient(rgba(8, 13, 18, 0.88), rgba(8, 13, 18, 0.93)), url("https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2400&q=85");
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
        }
        .storm-glow {
          background:
            radial-gradient(ellipse 55% 78% at 4% 52%, rgba(207, 244, 255, 1), transparent 74%),
            radial-gradient(ellipse 48% 70% at 97% 40%, rgba(185, 237, 255, 1), transparent 76%),
            linear-gradient(110deg, rgba(192, 242, 255, 0.2), transparent 42%, rgba(180, 235, 255, 0.14));
          mix-blend-mode: screen;
          animation: storm-glow 10s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .flow-line, .float, .storm-glow, .sales-headline, [style*="hv-cube-rotate"] { animation: none !important; }
        }
      `}</style>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-2">
          <span style={{ fontFamily: "var(--font-display)" }} className="text-lg font-medium tracking-tight">
            SpeakEZ
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-bold text-white sm:flex">
          <a
            href="#top"
            onClick={(event) => { event.preventDefault(); closeAllModals(); setOpenMenu(null); }}
            className="nav-neon rounded-sm hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
          >
            Home
          </a>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("self-host")}
            onMouseLeave={() => setOpenMenu((menu) => (menu === "self-host" ? null : menu))}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === "self-host"}
              onClick={() => setOpenMenu((menu) => (menu === "self-host" ? null : "self-host"))}
              className="nav-neon flex items-center gap-1 rounded-sm hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
            >
              On-Prem
              <span aria-hidden="true" className="text-[0.6rem]">&#9662;</span>
            </button>
            {openMenu === "self-host" && (
              <div className="absolute left-2 top-full z-30 w-56 pt-3">
                <ol className="list-none overflow-hidden rounded-lg border border-violet-500/40 bg-[#0b0f18]/75 py-1 shadow-2xl shadow-black/60 backdrop-blur-md">
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); closeAllModals(); setShowHowItWorks(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">How it works</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); closeAllModals(); setShowUseCases(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">Use cases</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); closeAllModals(); setShowPrivacy(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">Privacy</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); closeAllModals(); setShowHardware(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">Hardware</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); closeAllModals(); setShowBenefits(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">Why On-Prem</button>
                  </li>
                </ol>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("app")}
            onMouseLeave={() => setOpenMenu((menu) => (menu === "app" ? null : menu))}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === "app"}
              onClick={() => setOpenMenu((menu) => (menu === "app" ? null : "app"))}
              className="nav-neon flex items-center gap-1 rounded-sm hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
            >
              App
              <span aria-hidden="true" className="text-[0.6rem]">&#9662;</span>
            </button>
            {openMenu === "app" && (
              <div className="absolute left-2 top-full z-30 w-60 pt-3">
                <ol className="list-none overflow-hidden rounded-lg border border-violet-500/40 bg-[#0b0f18]/75 py-1 shadow-2xl shadow-black/60 backdrop-blur-md">
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); closeAllModals(); setShowAboutApp(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">About the app</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); closeAllModals(); setShowWhyApp(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">Why this messaging app</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => { setOpenMenu(null); setShowGetApp(true); }} className="block w-full px-4 py-2.5 text-left text-white transition-colors hover:bg-violet-500/15 hover:text-violet-200">Get the app</button>
                  </li>
                </ol>
              </div>
            )}
          </div>
        </nav>
      </header>

      <section className="pointer-events-none fixed left-1/2 top-[56%] z-10 w-[min(78vw,460px)] -translate-x-1/2 -translate-y-1/2 text-center sm:w-[min(32vw,460px)]" aria-live="polite">
        <p style={{ fontFamily: "var(--font-mono)" }} className="mb-3 text-xs font-medium uppercase tracking-wider text-violet-200">
          Private communication, on your terms
        </p>
        <h1
          key={salesHeadlineIndex}
          style={{ fontFamily: "var(--font-display)" }}
          className="sales-headline heading-neon text-2xl font-bold leading-tight text-white sm:text-4xl"
        >
          {salesHeadlines[salesHeadlineIndex]}
        </h1>
      </section>

      <div
        className={`pointer-events-none fixed inset-0 z-20 ${anyModalOpen ? "invisible" : "visible"}`}
        onMouseLeave={() => { clearPreviewTimer(); setActivePreview(null); }}
      >
        <button
          type="button"
          aria-label="Preview the upper-left phone in the background"
          aria-expanded={activePreview === heroPreviews.phone}
          className="pointer-events-auto absolute left-[25%] top-[12%] h-[31%] w-[14%] rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
          onMouseEnter={() => showPreviewAfterDelay(heroPreviews.phone)}
          onFocus={() => setActivePreview(heroPreviews.phone)}
          onClick={() => { clearPreviewTimer(); setActivePreview(heroPreviews.phone); }}
        />
        <button
          type="button"
          aria-label="Preview the upper-right phone in the background"
          aria-expanded={activePreview === heroPreviews.phone}
          className="pointer-events-auto absolute left-[62%] top-[12%] h-[31%] w-[14%] rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
          onMouseEnter={() => showPreviewAfterDelay(heroPreviews.phone)}
          onFocus={() => setActivePreview(heroPreviews.phone)}
          onClick={() => { clearPreviewTimer(); setActivePreview(heroPreviews.phone); }}
        />
        <button
          type="button"
          aria-label="Preview the lower-left phone in the background"
          aria-expanded={activePreview === heroPreviews.phone}
          className="pointer-events-auto absolute left-[25%] top-[56%] h-[32%] w-[14%] rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
          onMouseEnter={() => showPreviewAfterDelay(heroPreviews.phone)}
          onFocus={() => setActivePreview(heroPreviews.phone)}
          onClick={() => { clearPreviewTimer(); setActivePreview(heroPreviews.phone); }}
        />
        <button
          type="button"
          aria-label="Preview the lower-right phone in the background"
          aria-expanded={activePreview === heroPreviews.phone}
          className="pointer-events-auto absolute left-[62%] top-[56%] h-[32%] w-[14%] rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
          onMouseEnter={() => showPreviewAfterDelay(heroPreviews.phone)}
          onFocus={() => setActivePreview(heroPreviews.phone)}
          onClick={() => { clearPreviewTimer(); setActivePreview(heroPreviews.phone); }}
        />
        <button
          type="button"
          aria-label="Preview the SpeakEZ On-Prem box in the background"
          aria-expanded={activePreview === heroPreviews.box}
          className="pointer-events-auto absolute left-[44%] top-[46%] h-[9%] w-[12%] rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
          onMouseEnter={() => showPreviewAfterDelay(heroPreviews.box)}
          onFocus={() => setActivePreview(heroPreviews.box)}
          onClick={() => { clearPreviewTimer(); setActivePreview(heroPreviews.box); }}
        />

        {activePreview && (
          <a
            href={activePreview.href}
            className="pointer-events-auto absolute left-1/2 top-1/2 z-30 w-[min(82vw,420px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-[#4FD1C5]/60 bg-[#081015]/95 shadow-2xl shadow-black/60 backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
            onClick={(event) => {
              if (activePreview.href === "#how-it-works") {
                event.preventDefault();
                setActivePreview(null);
                setShowHowItWorks(true);
              }
              if (activePreview.href === "#hardware") {
                event.preventDefault();
                setActivePreview(null);
                setShowHardware(true);
              }
            }}
          >
            <div className="relative aspect-[4/3] w-full bg-black/30">
              <Image src={activePreview.imageSrc} alt={activePreview.imageAlt} fill sizes="420px" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <div>
                <p style={{ fontFamily: "var(--font-display)" }} className="text-base font-medium text-zinc-50">
                  {activePreview.title}
                </p>
                <p className="mt-1 text-sm text-zinc-300">{activePreview.description}</p>
              </div>
              <span aria-hidden="true" className="text-xl text-[#4FD1C5]">&rarr;</span>
            </div>
          </a>
        )}
      </div>

      {showHowItWorks && (
        <section
          id="how-it-works"
          role="dialog"
          aria-modal="true"
          aria-labelledby="how-it-works-title"
          className="dropdown-page fixed inset-0 z-40 overflow-y-auto px-6 py-16 text-[#E7ECEF] sm:px-10"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">Messaging workflow</p>
                <h2 id="how-it-works-title" style={{ fontFamily: "var(--font-display)" }} className="heading-neon mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
                  Getting started with SpeakEZ
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close messaging workflow"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
                onClick={() => setShowHowItWorks(false)}
              >
                &times;
              </button>
            </div>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Once you have downloaded SpeakEZ from the App Store or Google Play,
              follow these steps to set up your private messaging space.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  title: "Set up your lock",
                  body: "Open SpeakEZ and choose a personal unlock code. The app asks for this whenever you reopen it, keeping your chats protected on your device.",
                },
                {
                  n: "02",
                  title: "Choose a pseudo name",
                  body: "Create the name people will see in your chats. There is no phone number or public profile required to get started.",
                },
                {
                  n: "03",
                  title: "Create or accept an invite",
                  body: "Tap the + button to create a secure invite image for someone else, or scan an invite image or link that they have shared with you.",
                },
                {
                  n: "04",
                  title: "Start a private chat",
                  body: "Once connected, send encrypted messages, voice notes, photos, and files. The in-app guide will introduce your chats, groups, and settings.",
                },
              ].map((step) => (
                <div key={step.n} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                  <span style={{ fontFamily: "var(--font-mono)" }} className="text-sm text-violet-300">{step.n}</span>
                  <h3 style={{ fontFamily: "var(--font-display)" }} className="subheading-neon mt-3 text-lg font-medium text-zinc-50">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showUseCases && (
        <section
          id="use-cases"
          role="dialog"
          aria-modal="true"
          aria-labelledby="use-cases-title"
          className="dropdown-page fixed inset-0 z-40 overflow-y-auto px-6 py-16 text-[#E7ECEF] sm:px-10"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">On-Prem deployments</p>
                <h2 id="use-cases-title" style={{ fontFamily: "var(--font-display)" }} className="heading-neon mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
                  Built for the conversations that can&apos;t leak
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close use cases"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
                onClick={() => setShowUseCases(false)}
              >
                &times;
              </button>
            </div>
            <p className="mt-4 max-w-2xl text-zinc-300">
              With SpeakEZ On-Prem, your organization runs its own private node instead of using our
              shared network. Different teams reach for that for the same underlying reason: the cost
              of a conversation getting out is too high to route through infrastructure they don&apos;t control.
            </p>
            <div className="mt-10">
              <UseCases />
            </div>
          </div>
        </section>
      )}

      {showPrivacy && (
        <section
          id="privacy"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
          className="dropdown-page fixed inset-0 z-40 overflow-y-auto px-6 py-16 text-[#E7ECEF] sm:px-10"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">The privacy case</p>
                <h2 id="privacy-title" style={{ fontFamily: "var(--font-display)" }} className="heading-neon mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
                  What On-Prem takes off the table
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close privacy details"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
                onClick={() => setShowPrivacy(false)}
              >
                &times;
              </button>
            </div>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Every SpeakEZ message is end-to-end encrypted, on our shared network or yours. Running
              your own private node on On-Prem additionally keeps the encrypted traffic itself off our
              shared infrastructure, so there's no shared relay, and no shared network logs, in the path
              at all.
            </p>
            <div className="mt-10">
              <BreachGrid />
            </div>
          </div>
        </section>
      )}

      {showHardware && (
      <section id="hardware" role="dialog" aria-modal="true" aria-labelledby="hardware-title" className="dropdown-page fixed inset-0 z-40 overflow-y-auto px-6 py-16 text-[#E7ECEF] sm:px-10">
        <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">Hardware</p>
        <h2 style={{ fontFamily: "var(--font-display)" }} className="heading-neon text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
          It doesn&apos;t take much hardware
        </h2>
          </div>
          <button type="button" aria-label="Close hardware" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500" onClick={() => setShowHardware(false)}>&times;</button>
        </div>
        <p className="mt-4 max-w-2xl text-zinc-400">
          SpeakEZ On-Prem runs a private IPFS/Kubo node light enough for a small mini PC tucked into
          a cupboard — no rack, no dedicated IT room required.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Image
              src="/intel-nuc.jpg"
              alt="Compact mini PC"
              width={435}
              height={495}
              className="mx-auto h-48 w-auto rounded-lg object-contain"
            />
            <p style={{ fontFamily: "var(--font-mono)" }} className="mt-4 text-xs uppercase tracking-wider text-violet-300">
              Compact form factor
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              A small, quiet mini PC is enough to serve a full office. Sits on a
              shelf, draws little power, and is easy to swap or back up.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Image
              src="/intel-nuc-transparent.png"
              alt="Mini PC with a modern processor"
              width={300}
              height={300}
              className="mx-auto h-48 w-auto rounded-lg object-contain"
            />
            <p style={{ fontFamily: "var(--font-mono)" }} className="mt-4 text-xs uppercase tracking-wider text-violet-300">
              Room to grow
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              For larger teams, a mini PC with a stronger processor keeps calls
              and file transfers smooth as more devices connect.
            </p>
          </div>
        </div>
        </div>
      </section>
      )}

      {showBenefits && (
      <section id="benefits" role="dialog" aria-modal="true" aria-labelledby="benefits-title" className="dropdown-page fixed inset-0 z-40 overflow-y-auto px-6 py-16 text-[#E7ECEF] sm:px-10">
        <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">On-Prem</p>
        <h2 style={{ fontFamily: "var(--font-display)" }} className="heading-neon text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
          Why organizations run their own node
        </h2>
          </div>
          <button type="button" aria-label="Close On-Prem details" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500" onClick={() => setShowBenefits(false)}>&times;</button>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Your traffic stays off our shared network",
              body: "With your own private Kubo/IPFS node, encrypted messages relay through infrastructure only your organization operates — not our shared cluster.",
            },
            {
              title: "No shared network logs",
              body: "Our shared network keeps brief access logs for abuse prevention. Run your own node, and those logs simply don't exist outside your own infrastructure.",
            },
            {
              title: "One box, every device",
              body: "Phones, laptops, and tablets across the organization all connect to the same node — no per-seat cloud accounts to manage.",
            },
            {
              title: "Still end-to-end encrypted",
              body: "Running your own node doesn't change the encryption. Every message is encrypted on-device before it ever reaches the network, on-prem or hosted.",
            },
          ].map((b) => (
            <div key={b.title} className="border-t border-white/10 pt-6">
              <h3 style={{ fontFamily: "var(--font-display)" }} className="subheading-neon text-lg font-medium text-zinc-50">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{b.body}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
      )}

      {showAboutApp && (
      <section id="about-app" role="dialog" aria-modal="true" aria-labelledby="about-app-title" className="dropdown-page fixed inset-0 z-40 overflow-y-auto px-6 py-16 text-[#E7ECEF] sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">The app</p>
              <h2 id="about-app-title" style={{ fontFamily: "var(--font-display)" }} className="heading-neon mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
                About the SpeakEZ app
              </h2>
            </div>
            <button type="button" aria-label="Close about the app" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500" onClick={() => setShowAboutApp(false)}>&times;</button>
          </div>
          <p className="mt-4 max-w-2xl text-zinc-400">
            The SpeakEZ app puts encrypted messaging, voice, and file sharing in your
            pocket — pairing with your own On-Prem node or our shared network
            without any complicated onboarding.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Messaging, voice & media",
                body: "Instant text, voice messages, photos, and file transfers in one encrypted space across every device.",
              },
              {
                title: "Private by default",
                body: "End-to-end encrypted on-device. Your conversations and files stay yours — not another platform's raw material.",
              },
              {
                title: "Every platform",
                body: "Native Android and iOS apps that connect straight to your node, ready to use from the first minute.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 style={{ fontFamily: "var(--font-display)" }} className="subheading-neon text-lg font-medium text-zinc-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="https://play.google.com/store/apps/details?id=com.spkezz.app&pli=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500">
              <span aria-hidden="true" className="h-5 w-5 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.simpleicons.org/googleplay/ffffff')" }} />
              Get it on Google Play
            </a>
            <a href="https://apps.apple.com/gb/app/spkez/id6763252365" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/50 px-6 py-3.5 text-sm font-semibold text-violet-200 transition-colors hover:border-violet-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500">
              <span aria-hidden="true" className="h-5 w-5 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.simpleicons.org/appstore/ffffff')" }} />
              Download on the App Store
            </a>
          </div>
        </div>
      </section>
      )}

      {showWhyApp && (
      <section id="why-app" role="dialog" aria-modal="true" aria-labelledby="why-app-title" className="dropdown-page fixed inset-0 z-40 overflow-y-auto px-6 py-16 text-[#E7ECEF] sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">Why this messaging app</p>
              <h2 id="why-app-title" style={{ fontFamily: "var(--font-display)" }} className="heading-neon mt-3 text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
                Why a dedicated messaging app
              </h2>
            </div>
            <button type="button" aria-label="Close why this messaging app" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500" onClick={() => setShowWhyApp(false)}>&times;</button>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "You are the customer, not the product",
                body: "SpeakEZ doesn't run ad targeting or behavioural profiling, and doesn't sell your conversations — on our shared network or yours.",
              },
              {
                title: "Talks to your own node, if you choose",
                body: "The app pairs directly with an On-Prem node when you run one, so messages, calls, and files relay only through infrastructure you control.",
              },
              {
                title: "Encrypted everywhere",
                body: "Every message is encrypted on the device before it leaves, the same standard whether you run On-Prem or use our shared network.",
              },
              {
                title: "Simple enough for anyone",
                body: "No technical setup for most users, no consultancy phase. Install it, pair it, and start communicating securely straight away.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3 style={{ fontFamily: "var(--font-display)" }} className="subheading-neon text-lg font-medium text-zinc-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="https://play.google.com/store/apps/details?id=com.spkezz.app&pli=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500">
              <span aria-hidden="true" className="h-5 w-5 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.simpleicons.org/googleplay/ffffff')" }} />
              Get it on Google Play
            </a>
            <a href="https://apps.apple.com/gb/app/spkez/id6763252365" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/50 px-6 py-3.5 text-sm font-semibold text-violet-200 transition-colors hover:border-violet-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500">
              <span aria-hidden="true" className="h-5 w-5 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.simpleicons.org/appstore/ffffff')" }} />
              Download on the App Store
            </a>
          </div>
        </div>
      </section>
      )}

      {showGetApp && (
      <div role="dialog" aria-modal="true" aria-labelledby="get-app-title" className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-6 backdrop-blur-sm" onClick={() => setShowGetApp(false)}>
        <div className="w-full max-w-md rounded-2xl border border-violet-500/40 bg-[#0b0f18] p-8 shadow-2xl shadow-black/60" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">Get the app</p>
              <h2 id="get-app-title" style={{ fontFamily: "var(--font-display)" }} className="heading-neon mt-2 text-2xl font-medium tracking-tight text-zinc-50">
                Download SpeakEZ
              </h2>
            </div>
            <button type="button" aria-label="Close download options" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-xl text-zinc-100 transition-colors hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500" onClick={() => setShowGetApp(false)}>&times;</button>
          </div>
          <p className="mt-3 text-sm text-zinc-400">Available on the platforms below.</p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.spkezz.app&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
            >
              <span aria-hidden="true" className="h-5 w-5 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.simpleicons.org/googleplay/ffffff')" }} />
              Get it on Google Play
            </a>
            <a
              href="https://apps.apple.com/gb/app/spkez/id6763252365"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/50 px-6 py-3.5 text-sm font-semibold text-violet-200 transition-colors hover:border-violet-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"
            >
              <span aria-hidden="true" className="h-5 w-5 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.simpleicons.org/appstore/ffffff')" }} />
              Download on the App Store
            </a>
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  );
}
