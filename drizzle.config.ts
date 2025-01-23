import type { Config } from "drizzle-kit";
import { getDB } from "./lib/db";

export default {
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: getDB(),
  },
  tablesFilter: ["peeple_api_"],
  out: "./drizzle",
} satisfies Config;
