import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "UNIble — Your Campus Bible",
  description:
    "UNIble is a university-focused scheduling and social timetable app. Build your timetable, share schedules with friends, and track deadlines in one place.",
  metadataBase: new URL("https://unibleapp.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--unible-bg)] text-[var(--unible-text)]">
        <NavBar />
        <main className="mx-auto w-full max-w-6xl px-5 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}