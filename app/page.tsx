import Image from "next/image";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

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

function Logo({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H9l-4 3.5v-3.5H5.5C4.67 15 4 14.33 4 13.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="10.4" y="8.1" width="5.2" height="4.2" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M11.6 8.1V6.9a1.3 1.3 0 1 1 2.6 0v1.2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function LogoCube() {
  const faces = [
    "translateZ(14px)",
    "rotateY(180deg) translateZ(14px)",
    "rotateY(-90deg) translateZ(14px)",
    "rotateY(90deg) translateZ(14px)",
    "rotateX(90deg) translateZ(14px)",
    "rotateX(-90deg) translateZ(14px)",
  ];

  return (
    <div style={{ perspective: "224px" }} aria-hidden="true">
      <div
        style={{
          width: 29,
          height: 29,
          position: "relative",
          transformStyle: "preserve-3d",
          animation: "hv-cube-rotate 8s linear infinite",
          willChange: "transform",
        }}
      >
        {faces.map((transform) => (
          <div
            key={transform}
            style={{
              position: "absolute",
              width: 29,
              height: 29,
              overflow: "hidden",
              border: "1px solid rgba(0,212,255,0.5)",
              background: "#06101e",
              transform,
              backfaceVisibility: "hidden",
            }}
          >
            <Image src="/icon-512x512.png" alt="" fill sizes="29px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMock({
  w = 140,
  style,
  className = "",
  screenSrc,
}: {
  w?: number;
  style?: React.CSSProperties;
  className?: string;
  screenSrc?: string;
}) {
  const h = Math.round(w * 2.05);
  return (
    <div
      className={`rounded-[26px] border ${className}`}
      style={{
        width: w,
        height: h,
        background: "linear-gradient(180deg,#171b1f,#0d1013)",
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 20px 45px -15px rgba(0,0,0,0.65)",
        ...style,
      }}
    >
      <div className="relative h-full w-full p-[7px]">
        <div className="absolute left-1/2 top-[7px] h-[5px] w-9 -translate-x-1/2 rounded-full bg-black/50" />
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-[#0a0c0e]">
          {screenSrc ? (
            <div className="relative h-full w-full">
              <Image src={screenSrc} alt="SpeakEZ encrypted call screen" fill sizes={`${w}px`} className="object-cover" />
            </div>
          ) : (
            <>
              <div className="flex items-center gap-1.5 px-3 pt-4 pb-2">
                <Logo size={13} className="text-[#4FD1C5]" />
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-[9px] tracking-wide text-zinc-200"
                >
                  SpeakEZ
                </span>
              </div>
              <div className="flex-1 space-y-1.5 px-3 pt-1">
                <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
                <div className="ml-auto h-1.5 w-2/5 rounded-full bg-[#4FD1C5]/30" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                <div className="ml-auto h-1.5 w-1/2 rounded-full bg-[#4FD1C5]/30" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function LaptopMock({
  w = 260,
  style,
  screenSrc,
}: {
  w?: number;
  style?: React.CSSProperties;
  screenSrc?: string;
}) {
  const screenH = Math.round(w * 0.6);
  return (
    <div style={{ width: w, ...style }} className="select-none">
      <div
        className="rounded-t-[10px] border border-white/10 bg-[#12161a] p-[6px]"
        style={{ height: screenH, boxShadow: "0 20px 45px -15px rgba(0,0,0,0.65)" }}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[6px] bg-[#0a0c0e] p-3">
          {screenSrc ? (
            <Image src={screenSrc} alt="SpeakEZ desktop chat screen" fill sizes={`${w}px`} className="object-cover" />
          ) : (
            <>
              <div className="mb-2 flex items-center gap-1.5">
                <Logo size={11} className="text-[#4FD1C5]" />
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-[8px] tracking-wide text-zinc-300"
                >
                  SpeakEZ
                </span>
              </div>
              <div className="grid flex-1 grid-cols-3 gap-1.5">
                <div className="rounded bg-white/5" />
                <div className="col-span-2 flex flex-col justify-end gap-1 rounded bg-white/5 p-1.5">
                  <div className="h-1 w-3/4 rounded-full bg-white/10" />
                  <div className="ml-auto h-1 w-1/2 rounded-full bg-[#4FD1C5]/30" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-[10px] rounded-b-[8px] border-x border-b border-white/10 bg-[#1a1e22]" />
      <div className="mx-auto h-[3px] w-16 rounded-b-md bg-[#232830]" />
    </div>
  );
}

export default function Home() {
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
        @keyframes dashflow { to { stroke-dashoffset: -60; } }
        @keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes hv-cube-rotate { from { transform: rotateX(-18deg) rotateY(0deg); } to { transform: rotateX(-18deg) rotateY(360deg); } }
        .flow-line { stroke-dasharray: 3 6; animation: dashflow 3.2s linear infinite; }
        .float { animation: floaty 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .flow-line, .float, [style*="hv-cube-rotate"] { animation: none !important; }
        }
      `}</style>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-2">
          <LogoCube />
          <span style={{ fontFamily: "var(--font-display)" }} className="text-lg font-medium tracking-tight">
            SpeakEZ
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
          <a href="#how-it-works" className="rounded-sm hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]">How it works</a>
          <a href="#hardware" className="rounded-sm hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]">Hardware</a>
          <a href="#benefits" className="rounded-sm hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]">Why self-host</a>
        </nav>
        <a
          href="#get-started"
          className="rounded-full bg-[#4FD1C5] px-4 py-2 text-sm font-medium text-[#0a0c0e] transition-colors hover:bg-[#6adfd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
        >
          Get started
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 sm:px-10 sm:pt-16">
        <div className=" lg:items-center">
          

          {/* Diagram: box connecting to laptop + phones */}
          <div className="relative mx-auto aspect-[16/12] w-full max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full text-[#4FD1C5]/50"
            >
              <path d="M52,42 Q63,22 79,14" fill="none" stroke="currentColor" strokeWidth="0.5" className="flow-line" />
              <path d="M38,50 Q26,43 14,45" fill="none" stroke="currentColor" strokeWidth="0.5" className="flow-line" />
              <path d="M58,60 Q70,70 83,73" fill="none" stroke="currentColor" strokeWidth="0.5" className="flow-line" />
            </svg>

            {/* the box */}
            <div
              className="float absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm"
              style={{ boxShadow: "0 25px 60px -20px rgba(79,209,197,0.15)" }}
            >
              <Image
                src="/intel-nuc-transparent.png"
                alt="Small form-factor PC running the SpeakEZ server"
                width={435}
                height={495}
                className="w-full rounded-lg"
              />
              <p style={{ fontFamily: "var(--font-mono)" }} className="mt-2 text-center text-[10px] text-zinc-400">
                the box
              </p>
            </div>

            {/* laptop, upper right */}
            <div className="float absolute right-[2%] top-[2%] w-[35%]" style={{ animationDelay: "0.4s" }}>
              <LaptopMock w={200} screenSrc="/laptop-chat-screen.png" style={{ width: "100%" }} />
            </div>

            {/* secondary phone, mid right */}
            <div
              className="float absolute left-[4%] top-[30%] hidden w-[18%] sm:block"
              style={{ animationDelay: "0.8s" }}
            >
              <PhoneMock w={100} style={{ width: "100%", height: "auto", aspectRatio: "1 / 2.05" }} />
            </div>

            {/* foreground phone */}
            <div className="float absolute bottom-0 right-[3%] z-10 w-[28%]" style={{ animationDelay: "1.2s" }}>
              <PhoneMock
                w={170}
                screenSrc="/calling-screen.png"
                style={{ width: "100%", height: "auto", aspectRatio: "1 / 2.05" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
          Three steps, one box
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            {
              n: "01",
              title: "Install",
              body: "Deploy the SpeakEZ server package on a mini PC, appliance, or spare machine already sitting in your office or server closet.",
            },
            {
              n: "02",
              title: "Connect",
              body: "Phones, laptops, and tablets on the same network find the box and pair with it — no separate account system to stand up.",
            },
            {
              n: "03",
              title: "Message",
              body: "Everyone chats, calls, and shares files end-to-end encrypted, entirely within your network, start to finish.",
            },
          ].map((step) => (
            <div key={step.n} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <span style={{ fontFamily: "var(--font-mono)" }} className="text-sm text-[#4FD1C5]">
                {step.n}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-lg font-medium text-zinc-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware */}
      <section id="hardware" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
          It doesn't take much hardware
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          SpeakEZ's server is light enough to run on a small mini PC tucked into
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
            <p style={{ fontFamily: "var(--font-mono)" }} className="mt-4 text-xs uppercase tracking-wider text-[#4FD1C5]">
              Compact form factor
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              A small, quiet mini PC is enough to serve a full office. Sits on a
              shelf, draws little power, and is easy to swap or back up.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Image
              src="/book-pc.webp"
              alt="Mini PC with a modern processor"
              width={300}
              height={300}
              className="mx-auto h-48 w-auto rounded-lg object-contain"
            />
            <p style={{ fontFamily: "var(--font-mono)" }} className="mt-4 text-xs uppercase tracking-wider text-[#4FD1C5]">
              Room to grow
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              For larger teams, a mini PC with a stronger processor keeps calls
              and file transfers smooth as more devices connect.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
          Why organizations run it themselves
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Your data stays on your premises",
              body: "Messages, files, and calls never leave your network. There's no external server for anyone to subpoena, breach, or shut down.",
            },
            {
              title: "Works without an internet connection",
              body: "Since devices talk directly to the box on your local network, the team can keep messaging even if the building's internet goes down.",
            },
            {
              title: "One box, every device",
              body: "Phones, laptops, and tablets across the organization all connect to the same server — no per-seat cloud accounts to manage.",
            },
            {
              title: "Still end-to-end encrypted",
              body: "Running your own server doesn't relax the encryption. Every message is encrypted on-device, the same as SpeakEZ's public app.",
            },
          ].map((b) => (
            <div key={b.title} className="border-t border-white/10 pt-6">
              <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg font-medium text-zinc-50">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28 sm:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-14 text-center sm:px-16">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
            Bring messaging in-house
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            Set up SpeakEZ on a machine you control, and connect every device in
            your organization to it.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#4FD1C5] px-7 text-sm font-medium text-[#0a0c0e] transition-colors hover:bg-[#6adfd4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4FD1C5]"
          >
            Get the self-hosting guide
          </a>
        </div>
      </section>
    </div>
  );
}