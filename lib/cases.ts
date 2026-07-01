import fs from "fs";
import path from "path";
import matter from "gray-matter";

const casesDir = path.join(process.cwd(), "content/cases");

export interface CaseMeta {
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  quantity: number;
  duration: string;
  cover: string;
  publishedAt: string;
  summary: string;
}

export interface CaseFull extends CaseMeta {
  content: string;
}

export function getAllCaseSlugs(): string[] {
  if (!fs.existsSync(casesDir)) return [];
  return fs
    .readdirSync(casesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllCases(): CaseMeta[] {
  return getAllCaseSlugs()
    .map((slug) => getCaseMeta(slug))
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b!.publishedAt).getTime() - new Date(a!.publishedAt).getTime()
    ) as CaseMeta[];
}

export function getCaseMeta(slug: string): CaseMeta | null {
  const fullPath = path.join(casesDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  return { slug, ...data } as CaseMeta;
}

export function getCaseFull(slug: string): CaseFull | null {
  const fullPath = path.join(casesDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { slug, ...data, content } as CaseFull;
}
