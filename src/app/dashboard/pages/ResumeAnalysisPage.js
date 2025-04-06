"use client";

import React from 'react';

export default function ResumeAnalysisPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Resume Analysis
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Get AI-powered feedback on your resume and improve your chances of getting noticed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Upload Resume
          </h2>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center">
            <div className="space-y-2">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400">
                Drag and drop your resume here, or click to select
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Select File
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Analysis Results
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Formatting is clean and professional</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700 dark:text-gray-300">Keywords match job requirements</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">!</span>
              <span className="text-gray-700 dark:text-gray-300">Consider adding more quantifiable achievements</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-500">×</span>
              <span className="text-gray-700 dark:text-gray-300">Update skills section with latest technologies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 