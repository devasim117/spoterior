import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description:
    "The page you are looking for could not be found. Return to the Spoterior home page to explore our interior design services and portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="status-page">
      <div className="container status-page-inner">
        <span className="eyebrow eyebrow--dark">
          <span className="eyebrow-dot" />
          Error 404
        </span>
        <h1 className="status-page-title">This page could not be found</h1>
        <p className="status-page-text">
          The page you are looking for may have been moved or is no longer
          available. Head back to the studio home page to keep exploring.
        </p>
        <div className="status-page-actions">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/#portfolio" className="btn btn-ghost">
            View our portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
