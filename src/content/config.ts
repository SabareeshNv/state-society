import { defineCollection, z } from 'astro:content';

const post = defineCollection({
    schema: ({ image })=> z.object({
        title: z.string(),
        description: z.string(),
        summary: z.string(),
        pubDate: z.string().transform((str) => new Date(str)),
        updatedDate: z.string().optional(),
        category: z.string(),
        imageSrc: image().optional(),
        imageAlt: z.string().optional().default("No Alt Specified"),
        draft: z.boolean().optional().default(false),
        featured: z.boolean().optional().default(false)
    }),
});

export const collections = { post };
