import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="shell not-found">
      <p className="eyebrow"><span className="eyebrow-line" /> 404 / PAGE NOT FOUND</p>
      <h1>Lost in the <span>source.</span></h1>
      <p>We couldn&apos;t find that page. Head back to the home page and keep exploring.</p>
      <Link className="button button-primary" href="/">Back home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
