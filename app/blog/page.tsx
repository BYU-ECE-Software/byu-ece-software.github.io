import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, notes, and ideas from BYU ECE Software.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main id="main-content">
      <section className="page-intro shell">
        <p className="eyebrow"><span className="eyebrow-line" /> 04 / THE IDEAS</p>
        <h1>Notes from <span>the process.</span></h1>
        <p>Interesting questions, useful discoveries, and things we think are worth writing down.</p>
      </section>
      <section className="shell content-section" aria-label="Articles">
        <div className="section-rule"><span>ALL ARTICLES</span><span>{String(posts.length).padStart(2, "0")} PUBLISHED</span></div>
        {posts.length > 0 ? (
          <div className="post-list">
            {posts.map((post, index) => (
              <Link className="post-row" href={`/blog/${post.slug}/`} key={post.slug}>
                <span className="post-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="post-text"><strong>{post.title}</strong><span>{post.summary}</span></span>
                <span className="post-date"><time dateTime={post.date}>{formatPostDate(post.date)}</time><span> · {post.author}</span></span>
                <span className="post-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-panel blog-empty">
            <div className="blog-empty-glyph" aria-hidden="true">“</div>
            <div><p className="eyebrow">THE JOURNAL / 001</p><h2>Articles coming soon<span>.</span></h2><p>We&apos;re collecting the thoughts and topics we want to share. The first article will land here when it&apos;s ready.</p></div>
          </div>
        )}
      </section>
    </main>
  );
}
