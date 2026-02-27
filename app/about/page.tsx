import Section from "../../components/Section";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)]">
          About UNIble
        </h1>
        <p className="mt-2 text-[var(--unible-muted)]">
          UNIble is a university-focused scheduling and social timetable management app.
          It connects your timetable, friends, and deadlines into one clean workflow.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Section title="The problem" subtitle="University life is fragmented.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Timetable apps don’t help you coordinate with friends</li>
            <li>To-do apps don’t understand your classes</li>
            <li>Deadlines and schedules end up scattered across tools</li>
          </ul>
        </Section>

        <Section title="The UNIble idea" subtitle="Everything is connected.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Create your weekly schedule quickly and clearly</li>
            <li>Add friends and share timetables for easy coordination</li>
            <li>Track assignments/exams/quizzes tied to your courses</li>
            <li>Overview helps you check today + upcoming due at a glance</li>
          </ul>
        </Section>

        <Section title="Designed for real usage" subtitle="User-friendly by default.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Low-friction UI (fast entry, clean layout, minimal clutter)</li>
            <li>Notifications for friend requests/accepts</li>
            <li>Optional local reminder: 10 minutes before class</li>
          </ul>
        </Section>

        <Section title="Beta focus" subtitle="Stability and feedback matter most right now.">
          <p className="text-sm text-[var(--unible-muted)]">
            This beta is for functional and stability testing. If anything feels slow,
            confusing, or inconsistent, that’s exactly what we want to hear.
          </p>
          <div className="mt-4">
            <Link
              href="/feedback"
              className="inline-flex rounded-xl bg-[var(--unible-navy)] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
            >
              Send Feedback
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
}