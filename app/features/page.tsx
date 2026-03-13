import Section from "../../components/Section";

const featureCards = [
  {
    title: "Schedule",
    subtitle: "Build, manage, and switch across academic terms with ease.",
    badge: "Multi-term",
    items: [
      "Add, edit, and organize courses and meetings",
      "Manage multiple academic years and multiple terms in one system",
      "Color-coded timetable blocks for better readability",
      "10-minute class reminders before each session",
      "Academic snapshot support for a clearer semester view",
    ],
  },
  {
    title: "Friends",
    subtitle: "Stay connected and coordinate around class schedules.",
    badge: "Social",
    items: [
      "Send and accept friend requests",
      "View friends’ schedules in a clean weekly grid",
      "See live friend status like In class or Free now",
      "Find shared free time across the week",
      "Coordinate around classes without endless back-and-forth messaging",
    ],
  },
  {
    title: "To-Do",
    subtitle: "Track deadlines across classes in one place.",
    badge: "Productivity",
    items: [
      "Manage assignments, exams, quizzes, and deadlines",
      "See upcoming due dates at a glance",
      "Keep course-related tasks tied to your schedule",
      "Due widget support for faster daily checking",
      "Stay on top of coursework without juggling multiple apps",
    ],
  },
  {
    title: "Grades",
    subtitle: "Monitor course performance with flexible grading support.",
    badge: "Academic",
    items: [
      "Track grades by term and by course",
      "Add weighted components like assignments, quizzes, and exams",
      "Separate completed scores from predicted results for cleaner tracking",
      "Mark courses as Completed or In Progress for more accurate GPA calculation",
      "Manage custom grading schemes with editable cutoffs, letters, and GPA values",
    ],
  },
  {
    title: "Overview",
    subtitle: "A mobile-first home experience for daily planning.",
    badge: "Daily",
    items: [
      "Today’s schedule summary on the home screen",
      "Quick access to your next class and next due item",
      "Schedule widget support for instant timetable access",
      "Your schedules and grades stay synced across devices",
      "Designed to help students check everything important in seconds",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="inline-flex w-fit items-center rounded-full border border-[var(--unible-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--unible-muted)] shadow-sm">
          Built for university life
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)] md:text-4xl">
            Features
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-[var(--unible-muted)]">
            UNIble brings schedules, grades, deadlines, and friends into one
            student-focused system so your academic life feels organized, not scattered.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featureCards.map((card) => (
          <Section key={card.title} title="" subtitle="">
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-[var(--unible-navy)]">
                    {card.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[var(--unible-muted)]">
                    {card.subtitle}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-[var(--unible-border)] bg-[var(--unible-surface)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--unible-muted)]">
                  {card.badge}
                </span>
              </div>

              <ul className="space-y-2 text-sm leading-6 text-[var(--unible-muted)]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--unible-green)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}