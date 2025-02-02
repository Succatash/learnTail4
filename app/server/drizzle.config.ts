import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: Deno.env.get("DATABASE_URL")!,
  },
  extensionsFilters: ["postgis"],
  breakpoints: true,
  strict: true,
  verbose: true,
} satisfies Config;
