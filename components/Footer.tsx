import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--unible-border)] bg-[var(--unible-bg)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[var(--unible-muted)]">
          © {new Date().getFullYear()} UNIble. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm">
          <Link
            className="text-[var(--unible-muted)] hover:text-[var(--unible-navy)]"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-[var(--unible-muted)] hover:text-[var(--unible-navy)]"
            href="/terms"
          >
            Terms
          </Link>
          <a
            className="text-[var(--unible-muted)] hover:text-[var(--unible-navy)]"
            href="mailto:support@unibleapp.com"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}