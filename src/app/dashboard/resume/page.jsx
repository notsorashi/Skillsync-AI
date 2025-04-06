"use client";

import ResumeUpload from '../../../components/ResumeUpload';

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Resume Analysis
        </h1>
        <p className="text-gray-400 mt-2">
          Upload your resume to get an ATS analysis and suggestions for improvement
        </p>
      </div>

      <ResumeUpload />
    </div>
  );
} 