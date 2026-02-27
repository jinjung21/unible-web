import Section from "../../components/Section";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)]">
          Features
        </h1>
        <p className="mt-2 text-[var(--unible-muted)]">
          What UNIble can do today (beta).
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Section title="Schedule" subtitle="Build and manage your weekly timetable.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Add/edit courses and meetings</li>
            <li>Color-coded blocks</li>
            <li>10-minute class reminders</li>
          </ul>
        </Section>

        <Section title="Friends" subtitle="Connect and share timetables.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Send/accept friend requests</li>
            <li>View friends’ schedules</li>
            <li>Notifications for requests/accepts</li>
          </ul>
        </Section>

        <Section title="To-Do" subtitle="Track deadlines across your courses.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Assignments, exams, quizzes</li>
            <li>Upcoming due dates list</li>
            <li>Simple, fast entry</li>
          </ul>
        </Section>

        <Section title="Overview" subtitle="Today + upcoming due at a glance.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Today’s schedule summary</li>
            <li>Next class / next due</li>
            <li>Designed for quick checking</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}