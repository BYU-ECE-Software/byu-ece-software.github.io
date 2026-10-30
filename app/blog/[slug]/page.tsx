import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  // Static export requires at least one generated path for a dynamic route.
  // The sentinel renders the normal 404 until the first real post is added.
  return posts.length > 0
    ? posts.map((post) => ({ slug: post.slug }))
    : [{ slug: "_no-posts-yet" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.summary,
    openGraph: { type: "article", title: post.title, description: post.summary, publishedTime: `${post.date}T00:00:00Z`, authors: [post.author] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <main id="main-content">
      <article className="shell article-page">
        <Link className="back-link" href="/blog/"><span aria-hidden="true">←</span> All articles</Link>
        <header className="article-header">
          <p className="eyebrow"><span className="eyebrow-line" /> THE IDEAS / ARTICLE</p>
          <h1>{post.title}</h1>
          <p className="article-summary">{post.summary}</p>
          <div className="article-byline"><span>By {post.author}</span><span className="byline-dot">·</span><time dateTime={post.date}>{formatPostDate(post.date)}</time></div>
        </header>
        <div className="article-body"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown></div>
        <div className="article-bottom"><Link className="text-link" href="/blog/">← Back to all articles</Link></div>
      </article>
    </main>
  );
}
