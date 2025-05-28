import { type LoaderContext } from "astro/loaders"
import { defineCollection } from "astro:content"
import { LIGHTNET_COLLECTIONS, mediaSchema } from "lightnet/content"
import { faker } from '@faker-js/faker';

const mediaItems = (() => {
    const media = new Map<string, any>()
    for (let i = 0; i < 100; i++) {
        media.set(faker.lorem.slug(5),
            {
                commonId: "bar",
                dateCreated: "2025-04-23",
                title: faker.music.songName(),
                language: "en",
                content: [{ url: "https://wikipedia.org" }],
                type: "book",
                image: { src: faker.image.urlLoremFlickr({ width: 500, height: 500 }), width: 500, height: 500, format: "jpg" }
            }
        )
    }
    return media
})()



function mediaItemsLoader() {
    return {
        name: "media-items-loader",
        load: async ({ store }: LoaderContext) => {
            mediaItems.forEach((data, id) => {
                if (!store.has(id)) {
                    store.set({ id, data })
                }
            })
        }
    }
}


export const collections = {
    ...LIGHTNET_COLLECTIONS, media: defineCollection({
        loader: mediaItemsLoader(),
        schema: mediaSchema,
    }),
}

