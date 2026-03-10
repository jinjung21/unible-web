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
          When you use UNIble, we may collect information necessary to operate
          the service. This may include your account information such as name,
          email address, university, academic year, and profile details.
        </p>
        <p>
          We also store schedule-related data that you create inside the app,
          including courses, meetings, and tasks. If you use friend features,
          we may store friend connections and basic activity information
          such as schedule status (for example, whether you are currently in
          class or free).
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          2. How We Use Information
        </h2>
        <p>
          We use collected information to operate and improve UNIble,
          including managing schedules, enabling friend features,
          providing notifications, and improving the overall user experience.
        </p>
        <p>
          Your schedule data is only used to provide the features of the app,
          such as viewing schedules, calculating shared free time, and
          generating reminders.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          3. Data Storage and Third-Party Services
        </h2>
        <p>
          UNIble may rely on third-party infrastructure providers to operate
          the service. These may include hosting platforms, cloud databases,
          and email routing services.
        </p>
        <p>
          For example, UNIble may use services such as Vercel (hosting),
          Cloudflare (DNS/email routing), and cloud database providers
          such as Firebase to securely store user data.
        </p>
        <p>
          These providers process data according to their own privacy policies.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          4. Data Security
        </h2>
        <p>
          We take reasonable technical and organizational measures to protect
          your information. However, no method of internet transmission or
          electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          5. Your Control Over Data
        </h2>
        <p>
          You may update or remove information from your account within the
          app. If you wish to request deletion of your account or associated
          data, you may contact us and we will make reasonable efforts to
          process the request.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          6. Children's Privacy
        </h2>
        <p>
          UNIble is intended for university students and is not designed for
          children under the age of 13. We do not knowingly collect personal
          information from children under 13.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          7. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. If we make
          significant changes, we will update the date at the top of this page.
        </p>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          8. Contact
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