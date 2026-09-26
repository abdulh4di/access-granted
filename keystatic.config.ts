import { collection, config, fields } from "@keystatic/core";

// Local storage while developing (edits write straight to disk). The deployed
// site edits through GitHub: every save becomes a commit, which triggers a
// Vercel rebuild. GitHub mode needs a GitHub App + four env vars — see
// .claude/rules/keystatic-reference.md → "GitHub mode — production editing".
// It switches on only once the App's slug is set: the build refuses GitHub mode
// without the App's credentials, and this NEXT_PUBLIC_ var is the one both the
// browser-side admin and the server-side API route can see.
const storage =
  process.env.NODE_ENV !== "development" &&
  process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
    ? ({
        kind: "github",
        repo: { owner: "abdulh4di", name: "access-granted" },
      } as const)
    : ({ kind: "local" } as const);

export default config({
  storage,
  ui: {
    brand: { name: "Access Granted" },
    navigation: {
      Content: ["gallery"],
    },
  },
  collections: {
    // One entry per photo/video (not a list inside one entry): Keystatic files
    // an entry's uploads under its slug — /assets/images/gallery/<slug>/media/
    // value.webp, /assets/videos/gallery/<slug>/media/value/file.mp4 — so paths
    // stay descriptive and never shuffle when items are reordered.
    gallery: collection({
      label: "Gallery",
      slugField: "title",
      path: "src/content/gallery/*",
      format: { data: "json" },
      columns: ["title", "position"],
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Caption shown on the photo, e.g. “BCM Fault Repair”.",
            validation: { length: { min: 1, max: 60 } },
          },
        }),
        position: fields.integer({
          label: "Position",
          description:
            "Lower numbers show first. The first 9 show on desktop (5 on mobile) before “Load More”. Existing photos use 10, 20, 30… so a new one can slot in between.",
          defaultValue: 0,
          validation: { isRequired: true },
        }),
        media: fields.conditional(
          fields.select({
            label: "Type",
            description: "Choose Photo or Video, then upload the file below.",
            options: [
              { label: "Photo", value: "image" },
              { label: "Video", value: "video" },
            ],
            defaultValue: "image",
          }),
          {
            image: fields.image({
              label: "Photo",
              description:
                "JPG or WebP, ideally under 500 KB. Cards crop to 3:2, favouring the top of the photo; the full image shows when clicked.",
              directory: "public/assets/images/gallery",
              publicPath: "/assets/images/gallery/",
              validation: { isRequired: true },
            }),
            video: fields.object({
              file: fields.file({
                label: "Video",
                description:
                  "MP4 only (iPhone: Settings → Camera → Formats → Most Compatible). Keep clips short, ideally under 20 MB.",
                directory: "public/assets/videos/gallery",
                publicPath: "/assets/videos/gallery/",
                validation: { isRequired: true },
              }),
              poster: fields.image({
                label: "Cover image (optional)",
                description:
                  "Shown on the card before the video plays. Leave empty to use the video's first frame.",
                directory: "public/assets/images/gallery",
                publicPath: "/assets/images/gallery/",
              }),
            }),
          },
        ),
        alt: fields.text({
          label: "Alt text",
          description:
            "Describe what the photo or video shows, for screen readers and search engines.",
          multiline: true,
          validation: { length: { min: 1, max: 200 } },
        }),
      },
    }),
  },
});
