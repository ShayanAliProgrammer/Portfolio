import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center px-5 py-20 md:px-8">
      <div className="border-line bg-surface w-full rounded-[2rem] border p-8 md:p-12">
        <p className="text-muted text-xs font-extrabold tracking-[0.2em] uppercase">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">
          This page is not here.
        </h1>
        <p className="text-muted mt-4 max-w-xl leading-7">
          The link may be outdated, or the page may have moved. Return to the homepage to
          explore Shayan&apos;s capabilities and selected work.
        </p>
        <Link
          href="/#home"
          className="bg-accent text-accent-foreground hover:bg-accent-strong mt-8 inline-flex rounded-full px-5 py-3 text-sm font-extrabold transition"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
