import Section from "../../components/Section";

export default function FuturePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--unible-navy)]">
          Future
        </h1>
        <p className="mt-2 text-[var(--unible-muted)]">
          What we want to build next as UNIble grows across more campuses.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Section
          title="Smarter Schedule Import"
          subtitle="Less manual input, faster setup."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>Camera-based timetable import</li>
            <li>Cleaner recognition for screenshots and printed schedules</li>
            <li>Automatic conflict checking before saving</li>
          </ul>
        </Section>

        <Section
          title="University Integration"
          subtitle="A schedule system that works with real school data."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>School course catalog integration</li>
            <li>Search and add classes directly from your university</li>
            <li>Better matching between course codes, sections, and meeting times</li>
          </ul>
        </Section>

        <Section
          title="Verified Campus Access"
          subtitle="Stronger trust inside each school network."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>More reliable school email verification</li>
            <li>Stronger student-only access controls</li>
            <li>Safer rollout of campus-specific features</li>
          </ul>
        </Section>

        <Section
          title="Campus Community"
          subtitle="A shared space for students at the same school."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>School-only communities</li>
            <li>Spaces for clubs, sports, and student groups</li>
            <li>Campus discussions built around real student life</li>
          </ul>
        </Section>

        <Section
          title="School-Specific Design"
          subtitle="UNIble should feel native to every campus."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>App themes tailored to each university</li>
            <li>School colors, identity, and branding touches</li>
            <li>A more personal experience for every campus</li>
          </ul>
        </Section>

        <Section
          title="Privacy & Sharing Controls"
          subtitle="More control as schedule sharing grows."
        >
          <ul className="list-disc pl-5 text-sm text-[var(--unible-muted)]">
            <li>More detailed visibility settings for schedule sharing</li>
            <li>Friend groups and custom sharing rules</li>
            <li>Block and report tools for safer community use</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}