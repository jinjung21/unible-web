import Link from "next/link";
import Section from "../components/Section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--unible-border)] bg-[var(--unible-bg)] px-3 py-1 text-sm text-[var(--unible-muted)]">
            UNIble Beta • Schedule • Friends • To-Do
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)] sm:text-4xl">
            Your Campus Bible
          </h1>

          <p className="max-w-2xl text-base text-[var(--unible-muted)]">
            UNIble is a university-focused scheduling and social timetable
            management app. Build your timetable, share schedules with friends,
            and track assignments/exams/quizzes — all connected in one place.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/about"
              className="rounded-xl bg-[var(--unible-navy)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              About UNIble
            </Link>
            <Link
              href="/features"
              className="rounded-xl border border-[var(--unible-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--unible-navy)] hover:bg-[var(--unible-bg)]"
            >
              Explore Features
            </Link>
            <Link
              href="/feedback"
              className="rounded-xl border border-[var(--unible-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--unible-navy)] hover:bg-[var(--unible-bg)]"
            >
              Send Feedback
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid gap-5 md:grid-cols-3">
        <Section title="Timetable" subtitle="Fast schedule creation + clean weekly view.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Create/edit weekly schedule easily</li>
            <li>Course blocks with color</li>
            <li>Class reminder 10 minutes before</li>
          </ul>
        </Section>

        <Section title="Friends" subtitle="Share schedules with people you know.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Search & add friends</li>
            <li>See friends’ timetables</li>
            <li>Friend request / accept notifications</li>
          </ul>
        </Section>

        <Section title="To-Do + Overview" subtitle="Deadlines and today’s plan, one glance.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Track assignments/exams/quizzes</li>
            <li>Overview shows today + upcoming due</li>
            <li>Designed for minimal friction</li>
          </ul>
        </Section>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-[var(--unible-navy)] p-7 text-white">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">Help shape UNIble</div>
            <div className="text-sm text-white/80">
              Report bugs, suggest features, and tell us what feels confusing.
            </div>
          </div>

          <Link
            href="/feedback"
            className="w-fit rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--unible-navy)] hover:opacity-95"
          >
            Open Feedback Page
          </Link>
        </div>
      </div>

      <div className="text-sm text-[var(--unible-muted)]">
        Curious what we’re building next?{" "}
        <Link className="font-semibold text-[var(--unible-navy)] hover:underline" href="/future">
          See Future Plans →
        </Link>
      </div>
    </div>
  );
}