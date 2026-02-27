export default function Section({
    title,
    subtitle,
    children,
  }: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
  }) {
    return (
      <section className="rounded-2xl border border-[var(--unible-border)] bg-white p-6 shadow-sm">
        <div className="mb-4">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--unible-navy)]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-[var(--unible-muted)]">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </section>
    );
  }