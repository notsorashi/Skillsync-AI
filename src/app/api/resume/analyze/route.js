import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { resumeService } from '../../../../lib/services/resumeService';

// Remove the old config export and use the new format
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Check authentication
    const { userId } = auth();
    if (!userId) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Parse form data
    let formData;
    try {
      formData = await request.formData();
    } catch (error) {
      console.error('Error parsing form data:', error);
      return new NextResponse(
        JSON.stringify({ error: 'Invalid form data' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Get file from form data
    const file = formData.get('resume');
    if (!file) {
      return new NextResponse(
        JSON.stringify({ error: 'No resume file provided' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return new NextResponse(
        JSON.stringify({ 
          error: `Invalid file type. Supported types: PDF, DOCX. Received: ${file.type}` 
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validate file size (5MB limit)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > MAX_SIZE) {
      return new NextResponse(
        JSON.stringify({ error: 'File size exceeds 5MB limit' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Default job description if none provided
    const jobDescription = formData.get('jobDescription') || `
      We are looking for a Software Engineer with:
      - Strong experience in React.js and Next.js
      - Proficiency in JavaScript/TypeScript
      - Experience with REST APIs and database design
      - Good understanding of Git and version control
      - Excellent problem-solving skills
    `;

    try {
      // Parse resume
      const resumeText = await resumeService.parseResume(file, file.type);
      
      if (!resumeText || resumeText.trim().length === 0) {
        return new NextResponse(
          JSON.stringify({ error: 'Could not extract text from the resume' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }

      // Analyze resume
      const analysis = await resumeService.analyzeResume(resumeText, jobDescription, userId);
      
      return new NextResponse(
        JSON.stringify(analysis),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Error processing resume:', error);
      return new NextResponse(
        JSON.stringify({ error: error.message || 'Failed to process resume' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  } catch (error) {
    console.error('Error in resume analysis route:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 