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
          UNIble provides tools for university students to manage schedules,
          tasks, and social coordination. By using the service, you agree to
          use it responsibly and in compliance with applicable laws.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          2. Accounts
        </h2>
        <p>
          Some features of UNIble require an account. You are responsible for
          maintaining the accuracy of your account information and for
          safeguarding access to your account.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          3. User Content
        </h2>
        <p>
          Users may create and store content within the service, such as
          schedules, tasks, and profile information. You retain ownership of
          your content, but grant UNIble permission to store and process that
          content in order to operate the service.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          4. Acceptable Use
        </h2>
        <p>
          You agree not to misuse the service. This includes activities such
          as harassment, abuse of other users, attempting to disrupt the
          platform, or using the service for unlawful purposes.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          5. Service Availability
        </h2>
        <p>
          We aim to keep UNIble reliable and available, but we do not guarantee
          uninterrupted or error-free operation. Features may change or be
          updated over time.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          6. Limitation of Liability
        </h2>
        <p>
          UNIble is provided "as is". To the fullest extent permitted by law,
          we are not liable for indirect, incidental, or consequential damages
          resulting from the use of the service.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          7. Changes to Terms
        </h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          service after changes means you accept the updated terms.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          8. Contact
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