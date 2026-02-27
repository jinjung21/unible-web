import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About UNIble" },
  { href: "/features", label: "Features" },
  { href: "/future", label: "Future" },
  { href: "/feedback", label: "Feedback" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--unible-border)] bg-[var(--unible-bg)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* 로고 이미지 */}
          <div className="relative h-10 w-10 overflow-hidden rounded-xl">
            <Image
              src="/logo.png"
              alt="UNIble logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight">UNIble</div>
            <div className="text-xs text-[var(--unible-muted)]">Your Campus Bible</div>
          </div>
        </Link>

        <nav className="flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--unible-muted)] hover:text-[var(--unible-navy)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/feedback"
            className="rounded-xl bg-[var(--unible-navy)] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            Send Feedback
          </Link>
        </nav>
      </div>
    </header>
  );
}