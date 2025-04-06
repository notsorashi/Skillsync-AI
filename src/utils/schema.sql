-- Create resume_analyses table
CREATE TABLE IF NOT EXISTS resume_analyses (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  resume_text TEXT NOT NULL,
  job_description TEXT NOT NULL,
  keyword_score FLOAT NOT NULL,
  formatting_score FLOAT NOT NULL,
  overall_score FLOAT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 