import Section from "../../components/Section";

export default function FuturePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)]">
          Future
        </h1>
        <p className="mt-2 text-[var(--unible-muted)]">
          Planned improvements and features we’re working toward (guided by beta feedback).
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Section title="Widgets" subtitle="Faster daily checking, zero friction.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Large widget: Today’s schedule</li>
            <li>Small widget: Next class</li>
            <li>Optional: next due date widget</li>
          </ul>
        </Section>

        <Section title="Campus Community" subtitle="Creating a digital hub for every campus.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>School-only news and updates</li>
            <li>Real-time campus discussions</li>
            <li>Community spaces exclusive to verified students</li>
          </ul>
        </Section>

        <Section title="Schedule Quality-of-Life" subtitle="Editing speed + fewer mistakes.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Faster add/edit flow</li>
            <li>Better conflict handling and visuals</li>
            <li>Automatic schedule creation from a photo</li>
          </ul>
        </Section>

        <Section title="Friends & Privacy" subtitle="Share, but stay in control.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Schedule visibility settings (per friend / per group)</li>
            <li>Block / report tools (basic safety)</li>
            <li>Cleaner friend request experience</li>
          </ul>
        </Section>

        <Section title="To-Do Improvements" subtitle="Deadline tracking that feels natural.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>More task types / better sorting</li>
            <li>Quick add templates</li>
            <li>Better overview linking to tasks</li>
          </ul>
        </Section>

        <Section title="School Support" subtitle="Scale UNIble across campuses with full integration.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Direct integration with universities</li>
            <li>Full course catalog loading for each school</li>
            <li>Official school-wide email verification system</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}