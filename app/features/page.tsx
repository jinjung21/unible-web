import Section from "../../components/Section";

const featureCards = [
  {
    title: "Schedule",
    subtitle: "Plan your week across multiple academic years and terms.",
    badge: "Multi-term",
    items: [
      "Add, edit, and organize courses and meetings",
      "Manage multiple academic years and terms in one system",
      "Use color-coded timetable blocks for faster scanning",
      "Get 10-minute reminders before each class",
    ],
  },
  {
    title: "Friends",
    subtitle: "Coordinate around real class schedules, not endless messaging.",
    badge: "Social",
    items: [
      "Send and accept friend requests",
      "View friends’ schedules in a clean weekly grid",
      "See live status like In class or Free now",
      "Find overlapping shared free time across the week",
    ],
  },
  {
    title: "To-Do",
    subtitle: "Keep coursework and deadlines tied to your academic routine.",
    badge: "Productivity",
    items: [
      "Manage assignments, quizzes, exams, and deadlines",
      "See upcoming due dates at a glance",
      "Keep course-related tasks connected to your schedule",
      "Use widgets for faster daily checking",
    ],
  },
  {
    title: "Grades",
    subtitle: "Track performance by term, by course, and by component.",
    badge: "Academic",
    items: [
      "Track grades across multiple terms and courses",
      "Add weighted components like assignments, quizzes, and exams",
      "Separate actual results from predicted results",
      "Use custom grading schemes with editable cutoffs and GPA values",
    ],
  },
  {
    title: "Overview",
    subtitle: "A mobile-first home experience for everyday student life.",
    badge: "Daily",
    items: [
      "See today’s schedule summary on the home screen",
      "Quickly check your next class and next due item",
      "Access schedule widgets for faster daily use",
      "Keep schedules and grades consistent across devices",
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
            student-focused system so your academic life feels organized, not
            scattered.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {featureCards.map((card) => (
          <Section key={card.title} title="" subtitle="">
            <div className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-[24px] font-semibold tracking-tight text-[var(--unible-navy)]">
                    {card.title}
                  </h2>
                  <p className="mt-2 max-w-[34ch] text-[15px] leading-7 text-[var(--unible-muted)]">
                    {card.subtitle}
                  </p>
                </div>

                <span className="mt-1 shrink-0 rounded-full border border-[var(--unible-border)] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--unible-muted)]">
                  {card.badge}
                </span>
              </div>

              <div className="mt-6 h-px w-full bg-[var(--unible-border)]" />

              <ul className="mt-5 space-y-1.5 text-[14px] leading-6 text-[var(--unible-muted)]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--unible-navy)]/70" />
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