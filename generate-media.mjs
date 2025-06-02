// @ts-check
import fs from "fs/promises"
import path from "path"
import { faker } from '@faker-js/faker';
import { humanId } from "human-id";

const mediaFolder = "./src/content/media"

// clear media folder
const entries = await fs.readdir(mediaFolder, { withFileTypes: true });
await Promise.all(entries.filter(e => e.name.endsWith(".json")).map(async (entry) => {
    const entryPath = path.join(mediaFolder, entry.name);
    await fs.unlink(entryPath);
}));

const images = Array.from({ length: 20 }, (_, i) => i + 1).map(i => `./images/${i}.jpg`)

// generate new items
for (let i = 0; i < 10000; i++) {
    const slug = humanId("-")
    const media = {
        commonId: slug,
        dateCreated: "2025-04-23",
        title: `${slug.replaceAll("-", " ")}`,
        authors: faker.helpers.multiple(() => faker.person.fullName(), { count: { min: 1, max: 3 } }),
        language: faker.helpers.arrayElement(["en", "de"]),
        content: [{ url: "https://wikipedia.org" }],
        type: faker.helpers.arrayElement(["book", "video", "audio"]),
        categories: faker.helpers.arrayElements(["biography", "christian-living", "comics", "family", "kids", "life-support", "novels", "studies", "teens", "theology"], { min: 0, max: 3 }),
        image: faker.helpers.arrayElement(images),
        description: faker.lorem.paragraphs(6)
    }
    await fs.writeFile(`./src/content/media/${slug}.json`, JSON.stringify(media, null, 2), { encoding: "utf-8" })
}


