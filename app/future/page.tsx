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

        <Section title="Feedback loop" subtitle="Make reporting issues effortless.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Website feedback form (structured)</li>
            <li>In-app Settings → Feedback → redirect to website</li>
            <li>Optional: attach device/app version automatically</li>
          </ul>
        </Section>

        <Section title="Schedule quality-of-life" subtitle="Editing speed + fewer mistakes.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Faster add/edit flow</li>
            <li>Better conflict handling and visuals</li>
            <li>More customization (colors, display options)</li>
          </ul>
        </Section>

        <Section title="Friends & privacy" subtitle="Share, but stay in control.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Schedule visibility settings (per friend / per group)</li>
            <li>Block / report tools (basic safety)</li>
            <li>Cleaner friend request experience</li>
          </ul>
        </Section>

        <Section title="To-Do improvements" subtitle="Deadline tracking that feels natural.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>More task types / better sorting</li>
            <li>Quick add templates</li>
            <li>Better overview linking to tasks</li>
          </ul>
        </Section>

        <Section title="School support" subtitle="Scale beyond one campus smoothly.">
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>More universities</li>
            <li>Better school selection flow</li>
            <li>Eventually: automated school email verification improvements</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}