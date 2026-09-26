import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import type { GalleryItem } from "@/components/GalleryGrid";

// Reads content that editors manage at /keystatic. Server-only: it touches the
// filesystem, so pages read here and pass plain data down to client components.
export const reader = createReader(process.cwd(), keystaticConfig);

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const entries = await reader.collections.gallery.all();
  return entries
    .map(({ entry }) => entry)
    .sort(
      (a, b) =>
        (a.position ?? 0) - (b.position ?? 0) || a.title.localeCompare(b.title),
    )
    .flatMap(({ title, alt, media }): GalleryItem[] => {
      // Skip entries saved without their file rather than render a blank card.
      if (media.discriminant === "video") {
        const { file, poster } = media.value;
        return file
          ? [{ kind: "video", title, alt, src: file, poster: poster ?? undefined }]
          : [];
      }
      return media.value ? [{ kind: "image", title, alt, src: media.value }] : [];
    });
}
