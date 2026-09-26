import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

// The GitHub App values are passed explicitly (rather than left for Keystatic
// to read from the env) so stray whitespace pasted into the Vercel dashboard
// can't break the GitHub login.
export const { POST, GET } = makeRouteHandler({
  config,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID?.trim(),
  clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET?.trim(),
  secret: process.env.KEYSTATIC_SECRET?.trim(),
});
