import { db } from '../../utils/db';
import { SkillsyncSchema } from '../../utils/schema';

export const resumeService = {
  async parseResume(file, fileType) {
    try {
      let text = '';
      
      // For testing/building, return empty string if no file
      if (!file) return '';

      // Convert File object to Buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      if (fileType === 'application/pdf') {
        // For PDF files, use simple text extraction
        text = buffer.toString('utf8');
      } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        // For DOCX files, use simple text extraction
        text = buffer.toString('utf8');
      } else {
        throw new Error(`Unsupported file type: ${fileType}`);
      }

      // Validate extracted text
      if (!text || text.trim().length === 0) {
        throw new Error('No text could be extracted from the file');
      }

      // Clean up the text
      text = text
        .replace(/\\n/g, '\n') // Replace literal \n with newlines
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim(); // Remove leading/trailing whitespace

      return text;
    } catch (error) {
      console.error('Error parsing resume:', error);
      throw new Error(`Failed to parse resume: ${error.message}`);
    }
  },

  analyzeKeywords(resumeText, jobDescription) {
    // Extract keywords from job description (simple approach)
    const keywords = jobDescription.toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .split(/\s+/) // Split into words
      .filter(word => 
        word.length > 3 && // Filter out short words
        !['and', 'the', 'for', 'with', 'from'].includes(word) // Filter out common words
      );

    // Check which keywords are present in resume
    const foundKeywords = [];
    const missingKeywords = [];
    const resumeLower = resumeText.toLowerCase();

    keywords.forEach(keyword => {
      if (resumeLower.includes(keyword)) {
        foundKeywords.push(keyword);
      } else {
        missingKeywords.push(keyword);
      }
    });

    return {
      foundKeywords: [...new Set(foundKeywords)], // Remove duplicates
      missingKeywords: [...new Set(missingKeywords)], // Remove duplicates
      score: (foundKeywords.length / (foundKeywords.length + missingKeywords.length)) * 100
    };
  },

  checkFormatting(resumeText) {
    const issues = [];
    const sections = {
      contact: /(?:e-?mail|phone|address):/i,
      education: /education|academic/i,
      experience: /experience|work history/i,
      skills: /skills|technologies|competencies/i
    };

    // Check for sections
    for (const [section, regex] of Object.entries(sections)) {
      if (!regex.test(resumeText)) {
        issues.push(`Missing ${section} section`);
      }
    }

    // Check for length (word count)
    const wordCount = resumeText.split(/\s+/).length;
    if (wordCount < 200) {
      issues.push('Resume seems too short (less than 200 words)');
    } else if (wordCount > 1000) {
      issues.push('Resume might be too long (more than 1000 words)');
    }

    // Check for bullet points
    if (!resumeText.includes('•') && !resumeText.includes('-')) {
      issues.push('Consider using bullet points to organize information');
    }

    return issues;
  },

  async analyzeResume(resumeText, jobDescription, userId) {
    const keywordAnalysis = this.analyzeKeywords(resumeText, jobDescription);
    const formattingIssues = this.checkFormatting(resumeText);
    const overallScore = (keywordAnalysis.score + (100 - (formattingIssues.length * 10))) / 2;

    // Generate a simple mockid
    const mockid = Date.now().toString(36) + Math.random().toString(36).substr(2);

    // Save analysis to database using existing schema
    try {
      await db.insert(SkillsyncSchema).values({
        jsonMockResponse: JSON.stringify({
          resumeText,
          keywordAnalysis,
          formattingIssues,
          overallScore
        }),
        name: 'Resume Analysis',
        createdBy: userId,
        description: 'Resume analysis against job description',
        jobPosting: jobDescription,
        mockid
      });
    } catch (error) {
      console.error('Error saving analysis to database:', error);
      // Continue even if saving fails
    }

    return {
      keywordMatch: {
        score: keywordAnalysis.score,
        foundKeywords: keywordAnalysis.foundKeywords,
        missingKeywords: keywordAnalysis.missingKeywords
      },
      formatting: {
        issues: formattingIssues,
        score: 100 - (formattingIssues.length * 10) // Deduct 10 points for each issue
      },
      overallScore
    };
  }
}; 