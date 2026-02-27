export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold text-[var(--unible-navy)]">
        Terms of Service
      </h1>

      <p className="text-sm text-[var(--unible-muted)]">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          1. Use of Service
        </h2>
        <p>
          UNIble provides university-focused scheduling and social coordination tools.
          By using this service, you agree to use it responsibly and lawfully.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          2. No Warranty
        </h2>
        <p>
          The service is provided "as is" without warranties of any kind.
          We do not guarantee uninterrupted or error-free operation.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          3. Limitation of Liability
        </h2>
        <p>
          UNIble shall not be liable for any indirect, incidental,
          or consequential damages arising from the use of the service.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          4. Changes to Terms
        </h2>
        <p>
          We may update these Terms at any time. Continued use of the service
          after changes constitutes acceptance of the updated terms.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          5. Contact
        </h2>
        <p>
          Questions about these Terms? Contact{" "}
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