export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold text-[var(--unible-navy)]">
        Terms of Service
      </h1>

      <p className="text-sm text-[var(--unible-muted)]">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      {/* 1 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          1. Use of Service
        </h2>
        <p>
          UNIble provides tools for managing schedules and coordinating with
          others. By using the service, you agree to comply with applicable
          laws and use the service responsibly.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          2. Accounts
        </h2>
        <p>
          You are responsible for maintaining the security of your account
          and ensuring that your information is accurate.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          3. User Content
        </h2>
        <p>
          You retain ownership of content you create, but grant UNIble a
          license to store and process that content for operating the service.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          4. Acceptable Use
        </h2>
        <p>
          You agree not to misuse the service, including harassment, abuse,
          unlawful activity, or attempts to disrupt the platform.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          5. Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate your account if you
          violate these Terms or misuse the service.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          6. Service Availability
        </h2>
        <p>
          The service may be modified, suspended, or discontinued at any time.
          We do not guarantee uninterrupted or error-free operation.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          7. Limitation of Liability
        </h2>
        <p>
          The service is provided "as is". You use it at your own risk. UNIble
          is not responsible for any indirect damages, data loss, or service
          interruptions.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          8. Governing Law
        </h2>
        <p>
          These Terms shall be governed by the laws of your jurisdiction,
          without regard to conflict of law principles.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          9. Changes to Terms
        </h2>
        <p>
          Continued use of the service after updates constitutes acceptance
          of the revised Terms.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          10. Contact
        </h2>
        <p>
          Contact{" "}
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