// @ts-check
import { defineConfig } from "astro/config";
import lightnet from "lightnet";

/**
 * Defines the available languages for the site, covering both
 * site and content languages.
 *
 * @type {import('lightnet').Language[]}
 */
const languages = [
  {
    code: "en", // BCP47 language code for English
    label: "English", // Name displayed in the language selector
    isDefaultSiteLanguage: true, // Sets English as the default site language
  },
  {
    code: "de", // BCP47 language code for German
    label: "Deutsch", // Display name for German
  },
];

export default defineConfig({
  /**
   * Base URL of your website. This is used for tasks like identifying
   * external links and generating absolute URLs.
   */
  site: "https://bignet.pages.dev",
  image: { domains: ["https://picsum.photos"] },
  integrations: [
    /**
     * Configuration for the LightNet integration.
     * This defines core settings such as title, logo, languages, and menu.
     */
    lightnet({
      /**
       * Title of the website. It appears in the browser tab and the header bar.
       */
      title: "x.site.title",
      credits: true,

      /**
       * Language settings for UI and content.
       */
      languages: languages,

      /**
       * Favicon settings for browser tabs and bookmarks.
       * Specify multiple formats for optimal compatibility across devices.
       */
      favicon: [
        { href: "favicon.ico", sizes: "32x32" }, // Default icon for browsers
        { href: "favicon.svg" }, // Scalable vector icon
      ],
    }),
  ],
});
