"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { href: "/about", label: "About UNIble" },
  { href: "/features", label: "Features" },
  { href: "/future", label: "Future" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭/터치 시 닫기 (모바일 포함)
  useEffect(() => {
    function handlePointerDownOutside(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
    };
  }, []);

  // ESC로 닫기
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 메뉴 열렸을 때 스크롤 잠금 (모바일 UX)
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--unible-border)] bg-[var(--unible-bg)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 flex-none overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <Image
              src="/logo512.png"
              alt="UNIble logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>

          <div className="min-w-0 leading-tight">
            <div className="truncate text-base font-semibold tracking-tight">
              UNIble
            </div>
            <div className="truncate text-xs text-[var(--unible-muted)]">
              Your Campus Bible
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
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

        {/* Mobile Hamburger */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-2xl text-[var(--unible-navy)] hover:bg-white/60"
          >
            ☰
          </button>

          {isOpen && (
            <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]" />
          )}

          {isOpen && (
            <div className="absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-2xl border border-[var(--unible-border)] bg-white shadow-lg">
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-[var(--unible-muted)] hover:bg-[var(--unible-bg)] hover:text-[var(--unible-navy)]"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-2 h-px bg-[var(--unible-border)]" />

                <Link
                  href="/feedback"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-[var(--unible-navy)] px-3 py-3 text-center text-sm font-semibold text-white hover:opacity-95"
                >
                  Send Feedback
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}