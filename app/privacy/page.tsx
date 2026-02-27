export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold text-[var(--unible-navy)]">
        Privacy Policy
      </h1>

      <p className="text-sm text-[var(--unible-muted)]">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          1. Information We Collect
        </h2>
        <p>
          We may collect information you voluntarily provide, such as your email
          address when submitting feedback or contacting us.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          2. How We Use Information
        </h2>
        <p>
          We use the information to respond to inquiries, improve the product,
          and enhance user experience.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          3. Third-Party Services
        </h2>
        <p>
          UNIble may use third-party services such as Vercel (hosting),
          Cloudflare (DNS/email routing), and Formspree (feedback forms).
          These providers may process data according to their own privacy policies.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          4. Data Security
        </h2>
        <p>
          We take reasonable measures to protect your information but cannot
          guarantee absolute security.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          5. Contact
        </h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a
            href="mailto:contact@unibleapp.com"
            className="text-[var(--unible-navy)] underline"
          >
            contact@unibleapp.com
          </a>
        </p>
      </section>
    </div>
  );
}