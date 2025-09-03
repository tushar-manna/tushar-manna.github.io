//LEARN - https://docs.astro.build/en/guides/content-collections/ read the mircomathch docs and test the tool to see how the pattern matching works in glob
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";


const posts = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/posts"}),
    schema: z.object(
        {
            date:z.date(),
            title:z.string(),
        }
    )
})

export const collections = {posts};