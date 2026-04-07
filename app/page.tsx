import Link from "next/link";
import Section from "../components/Section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--unible-border)] bg-[var(--unible-bg)] px-3 py-1 text-sm text-[var(--unible-muted)]">
            UNIble • Schedule • Grades • Friends • To-Do
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)] sm:text-4xl">
            A better way to manage university life.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-[var(--unible-muted)]">
            UNIble is a university-focused app that brings schedules, grades,
            deadlines, and friend coordination into one clean mobile-first
            system. Manage multiple terms, track course performance, stay on top
            of upcoming work, and keep your academic routine organized in one
            place.
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <Link
              href="/features"
              className="w-full rounded-xl bg-[var(--unible-navy)] px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-95"
            >
              Explore Features
            </Link>

            <Link
              href="/about"
              className="w-full rounded-xl border border-[var(--unible-border)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--unible-navy)] hover:bg-[var(--unible-bg)]"
            >
              About UNIble
            </Link>

            <Link
              href="/feedback"
              className="w-full rounded-xl border border-[var(--unible-border)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--unible-navy)] hover:bg-[var(--unible-bg)]"
            >
              Send Feedback
            </Link>
          </div>
        </div>
      </div>

      {/* Download */}
      <div className="overflow-hidden rounded-2xl border border-[var(--unible-border)] shadow-sm">
        <div className="bg-[var(--unible-navy)] px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/25">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                  App Review in Progress
                </span>
              </div>
              <div className="text-lg font-semibold text-white">Download UNIble</div>
              <div className="text-sm leading-relaxed text-white/70">
                Coming to iOS and Android. Download links go live once approved.
              </div>
            </div>
            <Link
              href="/download"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--unible-navy)] transition-opacity hover:opacity-95 sm:w-fit sm:flex-none"
            >
              See Download Page
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 border-t border-[var(--unible-border)] bg-[var(--unible-bg)] px-6 py-3 sm:px-8">
          {["iOS", "Android"].map((p) => (
            <div key={p} className="flex items-center gap-1.5 text-xs text-[var(--unible-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--unible-navy)]/40" />
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="grid gap-5 md:grid-cols-2">
        <Section
          title="Schedule"
          subtitle="A structured timetable system built for real academic planning."
        >
          <ul className="list-disc pl-5 text-sm leading-6 text-[var(--unible-muted)]">
            <li>Create and edit your weekly class schedule</li>
            <li>Manage multiple academic years and terms in one place</li>
            <li>Use color-coded course blocks for faster scanning</li>
            <li>Get reminders before classes begin</li>
          </ul>
        </Section>

        <Section
          title="Grades"
          subtitle="Track course performance with flexible grading support."
        >
          <ul className="list-disc pl-5 text-sm leading-6 text-[var(--unible-muted)]">
            <li>Manage grades by term and by course</li>
            <li>Add weighted components like assignments, quizzes, and exams</li>
            <li>Separate actual scores from predicted results</li>
            <li>Use custom grading schemes that match your school</li>
          </ul>
        </Section>

        <Section
          title="Friends"
          subtitle="Stay connected and coordinate around real class schedules."
        >
          <ul className="list-disc pl-5 text-sm leading-6 text-[var(--unible-muted)]">
            <li>Add friends and view their schedules</li>
            <li>See live status like in class or free now</li>
            <li>Find overlapping shared free time more easily</li>
            <li>Make planning around campus routines simpler</li>
          </ul>
        </Section>

        <Section
          title="Overview"
          subtitle="Everything important, ready at a glance."
        >
          <ul className="list-disc pl-5 text-sm leading-6 text-[var(--unible-muted)]">
            <li>Check today’s schedule and upcoming deadlines</li>
            <li>Track assignments, quizzes, exams, and due items</li>
            <li>Access your schedule faster with widget support</li>
            <li>Designed for a clean everyday mobile experience</li>
          </ul>
        </Section>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-[var(--unible-navy)] p-6 text-white sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">
              Built around real student routines
            </div>
            <div className="text-sm leading-6 text-white/80">
              UNIble is being shaped through real testing, real iteration, and
              real student use across schedules, grades, deadlines, and campus
              coordination.
            </div>
          </div>

          <Link
            href="/feedback"
            className="w-full rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--unible-navy)] hover:opacity-95 sm:w-fit"
          >
            Open Feedback Page
          </Link>
        </div>
      </div>

      <div className="text-sm text-[var(--unible-muted)]">
        Curious what’s coming next?{" "}
        <Link
          className="font-semibold text-[var(--unible-navy)] hover:underline"
          href="/future"
        >
          See Future Plans →
        </Link>
      </div>
    </div>
  );
}