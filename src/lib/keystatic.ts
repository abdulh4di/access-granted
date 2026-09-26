import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

// Reads content that editors manage at /keystatic. Server-only: it touches the
// filesystem, so pages read here and pass plain data down to client components.
export const reader = createReader(process.cwd(), keystaticConfig);

export async function getGalleryItems() {
  const entries = await reader.collections.gallery.all();
  return entries
    .map(({ slug, entry }) => ({ slug, ...entry }))
    .filter((item): item is typeof item & { image: string } =>
      Boolean(item.image),
    )
    .sort(
      (a, b) =>
        (a.position ?? 0) - (b.position ?? 0) || a.title.localeCompare(b.title),
    )
    .map(({ title, image, alt }) => ({ title, image, alt }));
}
