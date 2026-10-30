import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  body: string;
};

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getPost(slug: string): Post | undefined {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return undefined;

  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const date = data.date instanceof Date
    ? data.date.toISOString().slice(0, 10)
    : data.date;

  if (
    typeof data.title !== "string" || !data.title.trim() ||
    typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    Number.isNaN(Date.parse(`${date}T00:00:00Z`)) ||
    new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date ||
    typeof data.author !== "string" || !data.author.trim() ||
    typeof data.summary !== "string" || !data.summary.trim()
  ) {
    throw new Error(`Invalid frontmatter in content/posts/${slug}.md`);
  }

  return {
    slug,
    title: data.title,
    date,
    author: data.author,
    summary: data.summary,
    body: content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs.readdirSync(postsDirectory)
    .filter((fileName) => /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(fileName))
    .map((fileName) => getPost(fileName.slice(0, -3)))
    .filter((post): post is Post => Boolean(post))
    .sort((a, b) => b.date.localeCompare(a.date));
}
