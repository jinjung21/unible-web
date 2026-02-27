export default function FeedbackPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)]">
          Feedback
        </h1>
        <p className="mt-2 text-[var(--unible-muted)]">
          Report bugs, request features, or tell us what feels confusing. This is the fastest way to help improve UNIble.
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--unible-border)] bg-white p-6 shadow-sm">
        <form
          action="https://formspree.io/f/mnjbweza"
          method="POST"
          className="flex flex-col gap-5"
        >
          {/* Honeypot (스팸봇 방지) */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[var(--unible-navy)]">
                Your email (optional)
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-[var(--unible-border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--unible-navy)]/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[var(--unible-navy)]">
                Category
              </label>
              <select
                name="category"
                className="rounded-xl border border-[var(--unible-border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--unible-navy)]/20"
                defaultValue="Bug"
              >
                <option>Bug</option>
                <option>Feature request</option>
                <option>UI/UX</option>
                <option>Performance</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[var(--unible-navy)]">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              placeholder={`Tell us:
- What you tried to do
- What you expected
- What actually happened
- Device / browser (if possible)`}
              rows={7}
              className="rounded-xl border border-[var(--unible-border)] bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--unible-navy)]/20"
            />
          </div>

          {/* 페이지 자동 포함 (나중에 확장할 때도 유용) */}
          <input type="hidden" name="page" value="/feedback" />

          {/* 옵션: 제출 후 리다이렉트 */}
          <input type="hidden" name="_redirect" value="http://localhost:3000/feedback/thanks" />

          <div className="flex items-center justify-between gap-3">
            <div className="text-xs text-[var(--unible-muted)]">
              For direct contact:{" "}
              <a className="font-semibold text-[var(--unible-navy)] hover:underline" href="mailto:support@unibleapp.com">
                support@unibleapp.com
              </a>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-[var(--unible-navy)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}