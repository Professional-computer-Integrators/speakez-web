import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "../components/SiteHeader";
import { Reveal } from "../components/Reveal";
import { breaches } from "../content/privacy-breaches";

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

export const metadata: Metadata = {
  title: "The privacy brief — SpeakEZ",
  description:
    "A breach-by-breach look at how self-hosted, end-to-end encrypted messaging removes the vendor in the middle — and everything that vendor puts at risk.",
};

export default function PrivacyPage() {
  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#646a70] text-[#E7ECEF]`}
      style={{
        fontFamily: "var(--font-body)",
        backgroundImage:
          "repeating-linear-gradient(105deg, rgba(255,255,255,0.055) 0, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 5px), linear-gradient(135deg, #737980 0%, #51575e 48%, #6b7178 100%)",
      }}
    >
      <style>{`
        @keyframes hv-cube-rotate { from { transform: rotateX(-18deg) rotateY(0deg); } to { transform: rotateX(-18deg) rotateY(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          [style*="hv-cube-rotate"] { animation: none !important; }
        }
      `}</style>

      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pt-16 sm:px-10 sm:pt-24">
        <Reveal>
          <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-[#4FD1C5]">
            The privacy brief
          </p>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="mt-4 text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
            Every messaging privacy breach starts the same way: a vendor in the middle
          </h1>
          <p className="mt-6 text-zinc-300">
            Every SpeakEZ message is end-to-end encrypted, on our shared network or yours — the
            company never holds a key that can read your conversations, either way. Below is a
            breach-by-breach look at what that encryption already rules out, and what running your
            own SpeakEZ On-Prem node additionally takes off our shared infrastructure entirely.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <div className="space-y-14">
          {breaches.map((b, i) => (
            <Reveal key={b.id} delay={Math.min(i, 4) * 60}>
              <article id={b.id} className="scroll-mt-24 border-t border-white/10 pt-8">
                <span style={{ fontFamily: "var(--font-mono)" }} className="text-xs text-[#4FD1C5]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-2 text-xl font-medium text-zinc-50 sm:text-2xl">
                  {b.title}
                </h2>
                <p className="mt-4 leading-7 text-zinc-400">{b.detail}</p>
                <p className="mt-4 rounded-xl border border-[#4FD1C5]/20 bg-[#4FD1C5]/[0.05] p-4 text-sm leading-6 text-[#8fe9df]">
                  Eliminated: {b.eliminated}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 sm:px-10">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-14 text-center sm:px-16">
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
              Two ways to run it, one encryption model
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-400">
              Use the SpeakEZ app on our shared network with no hardware at all, or run SpeakEZ
              On-Prem on a node you control. Either way, every message is end-to-end encrypted.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#4FD1C5] px-7 text-sm font-medium text-[#0a0c0e] transition-colors hover:bg-[#6adfd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
            >
              Explore SpeakEZ
            </Link>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} SpeakEZ. All rights reserved.</p>
          <Link href="/" className="hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]">
            ← Back home
          </Link>
        </div>
      </footer>
    </div>
  );
}
