import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
  schema: "utils/schema.js",
  out: "./drizzle",
});
