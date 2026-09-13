import { breaches } from "../content/privacy-breaches";

export function BreachGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {breaches.map((b) => (
        <div key={b.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 style={{ fontFamily: "var(--font-display)" }} className="text-base font-medium text-zinc-50">
            {b.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-500">{b.risk}</p>
          <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-violet-200">
            {b.eliminated}
          </p>
        </div>
      ))}
    </div>
  );
}
