import { sql } from '@vercel/postgres';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const SkillsyncSchema = pgTable('resume_analyses', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  resumeText: text('resume_text').notNull(),
  jobDescription: text('job_description').notNull(),
  keywordScore: integer('keyword_score').notNull(),
  formattingScore: integer('formatting_score').notNull(),
  overallScore: integer('overall_score').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
}); 