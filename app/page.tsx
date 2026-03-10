import Link from "next/link";
import Section from "../components/Section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--unible-border)] bg-[var(--unible-bg)] px-3 py-1 text-sm text-[var(--unible-muted)]">
            UNIble • Schedule • Friends • To-Do
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)] sm:text-4xl">
            A better way to manage campus life.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-[var(--unible-muted)]">
            UNIble is a university-focused app for managing your weekly schedule,
            staying on top of deadlines, and coordinating with friends. Build
            your timetable, check shared free time, and keep everything in one
            clean mobile-first space.
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

      {/* Highlights */}
      <div className="grid gap-5 md:grid-cols-3">
        <Section
          title="Schedule"
          subtitle="A clean weekly timetable built for daily student use."
        >
          <ul className="list-disc pl-5 text-sm leading-6 text-[var(--unible-muted)]">
            <li>Create and edit your weekly class schedule</li>
            <li>Color-coded course blocks for faster scanning</li>
            <li>Class reminders before lectures begin</li>
          </ul>
        </Section>

        <Section
          title="Friends"
          subtitle="See what your friends are up to without the friction."
        >
          <ul className="list-disc pl-5 text-sm leading-6 text-[var(--unible-muted)]">
            <li>Add friends and view their schedules</li>
            <li>Live class status like in class or free now</li>
            <li>Find overlapping shared free time instantly</li>
          </ul>
        </Section>

        <Section
          title="Overview"
          subtitle="Everything important, ready at a glance."
        >
          <ul className="list-disc pl-5 text-sm leading-6 text-[var(--unible-muted)]">
            <li>Today’s schedule and upcoming deadlines</li>
            <li>To-do tracking for assignments, quizzes, and exams</li>
            <li>Home screen widgets for schedule and due items</li>
          </ul>
        </Section>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-[var(--unible-border)] bg-[var(--unible-navy)] p-6 text-white sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">Built for real student routines</div>
            <div className="text-sm leading-6 text-white/80">
              UNIble keeps improving through real use, real testing, and real
              campus feedback.
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