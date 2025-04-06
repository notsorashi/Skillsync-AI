import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const SkillsyncSchema = pgTable("skillsync", {
    id: serial("id").primaryKey(),
    jsonMockResponse: text("json_mock_response").notNull(),
    jobPosting: varchar("job_posting", { length: 255 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    createdBy: varchar("created_by", { length: 255 }).notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    mockid: varchar("mockid").notNull(),
});
