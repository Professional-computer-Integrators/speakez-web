import Link from "next/link";
import { LogoCube } from "./Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#3f4348]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <LogoCube />
          <span style={{ fontFamily: "var(--font-display)" }} className="text-lg font-medium tracking-tight">
            SpeakEZ
          </span>
        </Link>
        <Link
          href="/"
          className="rounded-sm text-sm text-zinc-400 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
        >
          ← Back to speakez
        </Link>
      </div>
    </header>
  );
}
