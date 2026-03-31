export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold text-[var(--unible-navy)]">
        Privacy Policy
      </h1>

      <p className="text-sm text-[var(--unible-muted)]">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      {/* 1 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          1. Information We Collect
        </h2>
        <p>
          We collect the following categories of information when you use UNIble:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Account Information:</strong> name, username, email address,
            university, academic year, and profile details.
          </li>
          <li>
            <strong>Profile Photo:</strong> photos you upload as your profile
            picture, stored securely in the cloud.
          </li>
          <li>
            <strong>User Content:</strong> schedules, courses, meetings, tasks,
            grades, and other data you create within the app.
          </li>
          <li>
            <strong>Social Data:</strong> friend connections and basic
            availability status (e.g., whether you are in class or free).
          </li>
          <li>
            <strong>Device Information:</strong> push notification tokens (FCM)
            used to deliver notifications to your device.
          </li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          2. How We Use Information
        </h2>
        <p>
          We use your information to operate and improve UNIble, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Managing schedules and tasks</li>
          <li>Enabling friend and social features</li>
          <li>Sending push notifications for class reminders and friend activity</li>
          <li>Providing notifications and reminders</li>
          <li>Improving user experience and performance</li>
        </ul>
        <p>
          Your schedule and grade data is used only to provide core app
          functionality. We do not use your academic data for advertising or
          share it with third parties beyond what is necessary to operate the
          service.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          3. Device Permissions
        </h2>
        <p>
          UNIble may request the following permissions on your device:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Camera &amp; Photo Library:</strong> used only when you
            choose to upload or take a profile photo. We do not access your
            camera or photos at any other time.
          </li>
          <li>
            <strong>Push Notifications:</strong> used to send class reminders
            and activity alerts. You can disable notifications at any time in
            your device settings.
          </li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          4. Data Sharing and Third-Party Services
        </h2>
        <p>
          We do not sell your personal data.
        </p>
        <p>
          We may share your data only with trusted service providers necessary
          to operate UNIble. These include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Google Firebase</strong> — database, authentication, cloud
            storage, and push notifications
          </li>
          <li>
            <strong>Apple (APNs)</strong> — delivery of push notifications on
            iOS devices
          </li>
          <li>
            <strong>Vercel</strong> — web hosting
          </li>
          <li>
            <strong>Cloudflare</strong> — DNS and email routing
          </li>
        </ul>
        <p>
          These providers process data in accordance with their own privacy
          policies.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          5. Data Retention
        </h2>
        <p>
          We retain your information only as long as necessary to provide the
          service. When you delete your account, we will delete or anonymize
          your data within a reasonable period, unless retention is required
          by law.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          6. Data Security
        </h2>
        <p>
          We take reasonable technical and organizational measures to protect
          your information. However, no method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          7. Your Rights and Choices
        </h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p>
          You may manage your information within the app or contact us to make
          a request.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          8. Children's Privacy
        </h2>
        <p>
          UNIble is intended for university students and is not designed for
          children under 13. We do not knowingly collect personal information
          from children under 13.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use
          of the service after changes constitutes acceptance of the updated
          policy.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3 text-sm leading-relaxed text-[var(--unible-muted)]">
        <h2 className="text-base font-semibold text-[var(--unible-navy)]">
          10. Contact
        </h2>
        <p>
          If you have questions, contact{" "}
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