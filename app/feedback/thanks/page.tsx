import Link from "next/link";

export default function FeedbackThanksPage() {
  return (
    <div className="rounded-2xl border border-[var(--unible-border)] bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-[var(--unible-navy)]">
        Thanks!
      </h1>
      <p className="mt-2 text-[var(--unible-muted)]">
        We received your feedback. It helps a lot — we’ll review it as soon as possible.
      </p>

      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-xl bg-[var(--unible-navy)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
        >
          Back to Home
        </Link>
        <Link
          href="/feedback"
          className="rounded-xl border border-[var(--unible-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--unible-navy)] hover:bg-[var(--unible-bg)]"
        >
          Submit another
        </Link>
      </div>
    </div>
  );
}