import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

function generateId({ entry }: { entry: string }): string {
  const withoutExt = entry.replace(/\.md$/, "");
  const parts = withoutExt.split("/");
  if (parts[parts.length - 1] === "index") {
    return parts.slice(0, -1).join("/");
  }
  return withoutExt;
}

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog", generateId }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/work", generateId }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects", generateId }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

export const collections = { blog, work, projects };
