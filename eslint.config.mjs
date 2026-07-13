import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // This site uses plain <img> with CSS object-fit / aspect-ratio for
      // pixel-parity with the original Astro build; next/image would change
      // layout behaviour. Opt out of the warning intentionally.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Astro source kept as a reference during migration.
    "_astro-src/**",
  ]),
]);

export default eslintConfig;
