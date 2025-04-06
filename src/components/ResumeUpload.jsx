"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Check file format
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp'
    ];
    
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Please upload only JPG, PNG, or WebP images');
      setPreview(null);
      return;
    }

    // Check file size (5MB limit)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB');
      setPreview(null);
      return;
    }

    // Create preview URL
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
    setFile(selectedFile);
    setError(null);
  };

  const fileToGenerativePart = async (file) => {
    const data = await file.arrayBuffer();
    return {
      inlineData: {
        data: Buffer.from(data).toString('base64'),
        mimeType: file.type
      }
    };
  };

  const analyzeResume = async (file) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
      
      const prompt = `You are a professional resume analyzer. Analyze this resume image and provide detailed feedback in the following format:

Overall Strength:
[Provide a brief assessment of the resume's overall quality, visual appeal, and formatting]

Key Skills Identified:
- [List key technical skills]
- [List key soft skills]
- [List relevant certifications/qualifications]

Areas for Improvement:
1. [Specific improvement suggestion]
2. [Specific improvement suggestion]
3. [Specific improvement suggestion]

ATS Optimization Tips:
1. [Specific ATS optimization tip]
2. [Specific ATS optimization tip]
3. [Specific ATS optimization tip]

Visual Presentation:
1. [Comment on layout and formatting]
2. [Comment on readability]
3. [Comment on use of space]`;

      const imagePart = await fileToGenerativePart(file);
      const result = await model.generateContent([prompt, imagePart]);
      const response = await result.response;
      return response.text();
    } catch (err) {
      console.error('Error analyzing resume:', err);
      throw new Error('Failed to analyze resume with AI');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const analysisResult = await analyzeResume(file);
      setAnalysis(analysisResult);
    } catch (err) {
      console.error('Error processing file:', err);
      setError(err.message || 'Failed to process resume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Resume Analysis
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-sm text-gray-300">
              Upload your resume as an image to get AI-powered feedback on:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Overall resume strength</li>
                <li>Key skills identification</li>
                <li>Areas for improvement</li>
                <li>ATS optimization tips</li>
                <li>Visual presentation</li>
              </ul>
            </p>
          </div>

          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
          
          {preview && !error && (
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Selected file: {file.name}
              </p>
              <div className="relative aspect-[8.5/11] w-full bg-gray-800/50 rounded-lg overflow-hidden">
                <img 
                  src={preview} 
                  alt="Resume preview" 
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          )}

          <Button 
            onClick={handleUpload} 
            disabled={!file || loading}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
          >
            {loading ? 'Analyzing Resume...' : 'Analyze Resume'}
          </Button>
        </div>
      </div>

      {analysis && (
        <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Analysis Results</h3>
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-sm text-gray-300">
              {analysis}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 