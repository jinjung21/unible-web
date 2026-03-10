import Section from "../../components/Section";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)]">
          Features
        </h1>
        <p className="mt-2 text-[var(--unible-muted)]">
          What UNIble helps you do every day.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Section
          title="Schedule"
          subtitle="Build and manage your weekly timetable."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Add, edit, and organize courses and meetings</li>
            <li>Color-coded timetable blocks for better readability</li>
            <li>10-minute class reminders before each session</li>
            <li>Academic snapshot support for a clearer semester view</li>
          </ul>
        </Section>

        <Section
          title="Friends"
          subtitle="Stay connected and coordinate around class schedules."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Send and accept friend requests</li>
            <li>View friends’ schedules in a clean weekly grid</li>
            <li>See live friend status like In class or Free now</li>
            <li>Find shared free time across the week</li>
          </ul>
        </Section>

        <Section
          title="To-Do"
          subtitle="Track deadlines across classes in one place."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Manage assignments, exams, quizzes, and deadlines</li>
            <li>See upcoming due dates at a glance</li>
            <li>Keep course-related tasks tied to your schedule</li>
            <li>Due widget support for faster daily checking</li>
          </ul>
        </Section>

        <Section
          title="Overview"
          subtitle="A mobile-first home experience for daily planning."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Today’s schedule summary on the home screen</li>
            <li>Quick access to your next class and next due item</li>
            <li>Schedule widget support for instant timetable access</li>
            <li>Dark mode support for a cleaner everyday experience</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}