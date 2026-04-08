import Link from "next/link";
import Image from "next/image";

// ─── App Store 링크 교체 시 여기만 수정하세요 ─────────────────────────────
const APP_STORE_URL = "https://apps.apple.com/us/app/unible/id6759705942";
// ─────────────────────────────────────────────────────────────────────────

function AppleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 flex-none text-[var(--unible-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const features = [
  { label: "Schedule", desc: "Multi-term timetable with color-coded course blocks" },
  { label: "Grades", desc: "Weighted grade tracking with custom schemes" },
  { label: "Friends", desc: "See friends' schedules and free time at a glance" },
  { label: "To-Do", desc: "Deadline tracking tied to your real class schedule" },
  { label: "Overview", desc: "Daily digest of classes, tasks, and upcoming events" },
];

export default function DownloadPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── Hero card ───────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-[var(--unible-border)] shadow-sm">

        {/* Navy top half */}
        <div className="bg-[var(--unible-navy)] px-6 pb-8 pt-8 sm:px-10 sm:pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            {/* Left: text + button */}
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Download UNIble
                </h1>
                <p className="mt-2.5 max-w-sm text-[15px] leading-relaxed text-white/70">
                  Your complete university companion. Manage schedules, grades,
                  deadlines, and campus coordination — all in one clean iOS app.
                </p>
              </div>

              {/* App Store button */}
              <div className="flex">
                <a
                  href={APP_STORE_URL}
                  className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 transition-opacity hover:opacity-95"
                >
                  <AppleIcon className="h-6 w-6 text-[var(--unible-navy)]" />
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] font-normal text-[var(--unible-muted)]">Download on the</span>
                    <span className="text-sm font-semibold text-[var(--unible-navy)]">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: app icon */}
            <div className="hidden sm:flex sm:flex-none sm:items-start sm:pt-1">
              <div className="relative h-28 w-28 overflow-hidden rounded-[26px] bg-white shadow-2xl ring-1 ring-black/10">
                <Image
                  src="/logo512.png"
                  alt="UNIble app icon"
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="border-t border-[var(--unible-border)] bg-[var(--unible-bg)] px-6 py-4 sm:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              "Free to download",
              "No ads",
              "Built for students",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-sm text-[var(--unible-muted)]">
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Platform card ───────────────────────────────────────────── */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[var(--unible-bg)]">
            <AppleIcon className="h-5 w-5 text-[var(--unible-navy)]" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-[var(--unible-navy)]">iOS</h2>
            <p className="text-xs text-[var(--unible-muted)]">iPhone · iPad</p>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          {[
            "Requires iOS 17.5 or later",
            "Optimised for iPhone and iPad",
            "Available on the App Store",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-[var(--unible-muted)]">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-[var(--unible-navy)]/40" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-5">
          <a
            href={APP_STORE_URL}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--unible-navy)] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-95"
          >
            <AppleIcon className="h-4 w-4" />
            Download on the App Store
          </a>
        </div>
      </div>

      {/* ── What's included ─────────────────────────────────────────── */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--unible-border)] bg-[var(--unible-bg)] px-3 py-1 text-xs text-[var(--unible-muted)]">
            Everything included
          </div>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--unible-navy)]">
            One app. Your entire university routine.
          </h2>
          <p className="mt-1 text-sm text-[var(--unible-muted)]">
            Every feature is included at no cost — no subscriptions, no tiers.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex gap-3 rounded-xl border border-[var(--unible-border)] bg-[var(--unible-bg)] p-4"
            >
              <div className="mt-0.5">
                <CheckIcon />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--unible-navy)]">{f.label}</div>
                <div className="mt-0.5 text-xs leading-5 text-[var(--unible-muted)]">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA bottom ──────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[var(--unible-border)] bg-[var(--unible-navy)] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <div className="text-base font-semibold">Have a question or found a bug?</div>
          <div className="mt-0.5 text-sm text-white/70">
            Your feedback helps make UNIble better for everyone.
          </div>
        </div>
        <Link
          href="/feedback"
          className="w-full rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--unible-navy)] transition-opacity hover:opacity-95 sm:w-fit sm:flex-none"
        >
          Send Feedback
        </Link>
      </div>

    </div>
  );
}
