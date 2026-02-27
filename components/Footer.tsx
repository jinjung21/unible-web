import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--unible-border)] bg-[var(--unible-bg)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        
        {/* Top Row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          
          {/* Left: Copyright */}
          <div className="text-sm text-[var(--unible-muted)]">
            © {new Date().getFullYear()} UNIble. All rights reserved.
          </div>

          {/* Right: Links */}
          <div className="flex flex-col gap-4 text-sm sm:items-end">
            <div className="flex gap-4">
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
            </div>

            {/* Contact Block */}
            <div className="text-[var(--unible-muted)]">
              <div className="font-medium text-[var(--unible-navy)]">
                Have a question?
              </div>
              <a
                href="mailto:contact@unibleapp.com"
                className="hover:text-[var(--unible-navy)] hover:underline"
              >
                contact@unibleapp.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}