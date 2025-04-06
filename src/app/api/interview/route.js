import { NextResponse } from 'next/server';
import { db } from '../../../utils/db';
import { SkillsyncSchema } from '../../../utils/schema';

export async function POST(request) {
  try {
    const body = await request.json();
    const { interviewType, difficulty, question, answer, evaluation } = body;

    if (!interviewType || !difficulty || !question || !answer) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const interviewData = {
      jsonMockResponse: JSON.stringify({
        interviewType,
        difficulty,
        question,
        answer,
        evaluation,
        timestamp: new Date().toISOString()
      }),
      jobPosting: 'mock-interview', // This can be updated if needed
      name: 'Mock Interview Response',
      createdBy: 'user', // This should be replaced with actual user ID
      description: `Mock interview response for ${interviewType} interview at ${difficulty} level`,
      mockid: `mock-${Date.now()}`
    };

    const result = await db.insert(SkillsyncSchema).values(interviewData);

    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving interview response:', error);
    return NextResponse.json(
      { error: 'Failed to save interview response' },
      { status: 500 }
    );
  }
} 