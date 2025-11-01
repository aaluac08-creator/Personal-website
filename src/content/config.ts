import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    heading: z.string(),
    roles: z.array(z.string()),
    tagline: z.string(),
    description: z.array(z.string()),
    cta: z.object({
      label: z.string(),
      href: z.string()
    }),
    image: z.string()
  })
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    highlightsTitle: z.string(),
    highlights: z.array(z.string()),
    image: z.string()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    gradientFrom: z.string().optional(),
    gradientTo: z.string().optional(),
    link: z.string().optional(),
    cta: z.string().optional(),
    order: z.number().optional()
  })
});

const contact = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    email: z.string(),
    ctaLabel: z.string(),
    socialLinks: z.array(
      z.object({
        label: z.string(),
        href: z.string()
      })
    )
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    image: z.string()
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

export const collections = { hero, about, projects, contact, blog, pages };
