"use client";

import { useState } from "react";

type UseCase = {
  id: string;
  persona: string;
  tagline: string;
  scenario: string;
  exposure: string;
  withSpeakEZ: string;
};

const USE_CASES: UseCase[] = [
  {
    id: "legal",
    persona: "Legal & professional services",
    tagline: "Privileged, and staying that way",
    scenario:
      "A partner needs to loop outside counsel into a sensitive negotiation the same afternoon a leak could sink the deal. Nobody wants to trust a consumer chat app whose parent company builds ad profiles from message metadata.",
    exposure:
      "Privileged conversations pass through a vendor's shared cloud, where they're relayed by infrastructure your firm doesn't operate.",
    withSpeakEZ:
      "Every message stays end-to-end encrypted, on our network or yours. Run SpeakEZ On-Prem and privileged conversations relay through a node your firm controls, not our shared cluster.",
  },
  {
    id: "healthcare",
    persona: "Healthcare & care teams",
    tagline: "Patient details that stay on your own node",
    scenario:
      "A ward needs to hand off patient updates between shifts fast, without typing details into a shared spreadsheet or a text thread routed through infrastructure they don't control.",
    exposure:
      "Consumer messaging apps rely on the vendor's own servers by default, and care teams often don't realize until an audit asks exactly whose infrastructure patient chatter passed through.",
    withSpeakEZ:
      "With On-Prem, your own private node handles the encrypted relay. It sits on your premises, on your network, instead of our shared infrastructure.",
  },
  {
    id: "executive",
    persona: "Executive leadership & boards",
    tagline: "Traffic that stays off shared infrastructure",
    scenario:
      "Ahead of an acquisition, the board needs a channel for figures and names that doesn't depend on infrastructure shared with anyone outside the deal.",
    exposure:
      "Even encrypted cloud chat tools relay traffic through the vendor's shared network, which keeps brief access logs for abuse prevention across all its users.",
    withSpeakEZ:
      "On-Prem keeps that traffic on a node only your organization operates, so there's no shared network log encompassing anyone outside your own team.",
  },
  {
    id: "field",
    persona: "Field & site operations",
    tagline: "Keeps talking on your own network",
    scenario:
      "Engineers on a remote site need to send photos, faults, and instructions back to head office, ideally without depending on a distant shared cloud cluster.",
    exposure:
      "Cloud-first messaging tools route every message through the vendor's shared infrastructure, wherever that happens to be.",
    withSpeakEZ:
      "Point the app at your own On-Prem node and devices relay through infrastructure your organization runs, on your terms, end to end encrypted the whole way.",
  },
];

export function UseCases() {
  const [activeId, setActiveId] = useState(USE_CASES[0].id);
  const active = USE_CASES.find((u) => u.id === activeId) ?? USE_CASES[0];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[220px_1fr]">
      <div
        role="tablist"
        aria-label="Use cases"
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {USE_CASES.map((uc) => {
          const isActive = uc.id === activeId;
          return (
            <button
              key={uc.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(uc.id)}
              className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 ${
                isActive
                  ? "border-violet-400/40 bg-violet-400/10 text-zinc-50"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
              }`}
            >
              <span className="block font-medium">{uc.persona}</span>
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        role="tabpanel"
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
      >
        <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">
          {active.tagline}
        </p>
        <p className="mt-3 max-w-2xl text-zinc-300">{active.scenario}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-red-400/15 bg-red-400/[0.04] p-5">
            <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-red-300/80">
              On our shared network
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{active.exposure}</p>
          </div>
          <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.05] p-5">
            <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs uppercase tracking-wider text-violet-300">
              With On-Prem
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">{active.withSpeakEZ}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
