# BigNet

This LightNet library showcases 10,000 media items in action.

View it online on https://bignet.pages.dev

The media item json files are not under git version control, to keep the file footprint low.

Create the media items on your local machine by running:

```bash
npm run generate
```

This will execute the [generate-media.mjs](./generate-media.mjs) script.
You can modify this script if you need another number of entries - e.g. for local development (do not commit this to git).
The script makes sure to delete old entries before it creates new ones.

Running `npm run build` will first run `generate-media.mjs` and then create the static website inside `/dist`.
