type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

/**
 * Renders schema.org structured data. `<` is escaped so a stray "</script>"
 * inside a string value can't close the tag early.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
