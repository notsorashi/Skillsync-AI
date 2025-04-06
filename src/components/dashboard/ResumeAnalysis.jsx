'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ResumeAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [inputMethod, setInputMethod] = useState('file'); // 'file' or 'text'
  const [resumeText, setResumeText] = useState('');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsAnalyzing(true);
    try {
      // TODO: Implement actual resume analysis API call
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock analysis results
      setAnalysis({
        skills: ['JavaScript', 'React', 'Node.js', 'Python'],
        experience: '3 years',
        education: 'Bachelor\'s in Computer Science',
        recommendations: [
          'Add more details about your project contributions',
          'Include specific metrics for your achievements',
          'Highlight leadership experience'
        ]
      });
    } catch (error) {
      console.error('Error analyzing resume:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleTextAnalysis = async () => {
    if (!resumeText.trim()) return;

    setIsAnalyzing(true);
    try {
      // TODO: Implement actual resume analysis API call
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock analysis results
      setAnalysis({
        skills: ['JavaScript', 'React', 'Node.js', 'Python'],
        experience: '3 years',
        education: 'Bachelor\'s in Computer Science',
        recommendations: [
          'Add more details about your project contributions',
          'Include specific metrics for your achievements',
          'Highlight leadership experience'
        ]
      });
    } catch (error) {
      console.error('Error analyzing resume:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Resume Analysis</h2>
      
      {!analysis ? (
        <div className="space-y-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setInputMethod('file')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                inputMethod === 'file'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              Upload File
            </button>
            <button
              onClick={() => setInputMethod('text')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                inputMethod === 'text'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              Paste Text
            </button>
          </div>

          {inputMethod === 'file' ? (
            <div className="space-y-4">
              <p className="text-gray-400">
                Upload your resume to get personalized feedback and improvement suggestions.
              </p>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="resume-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">PDF, DOC, DOCX (MAX. 5MB)</p>
                  </div>
                  <input
                    id="resume-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-400">
                Paste your resume text below to get personalized feedback and improvement suggestions.
              </p>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume text here..."
                className="w-full h-48 p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleTextAnalysis}
                disabled={!resumeText.trim() || isAnalyzing}
                className={`w-full py-2 rounded-lg ${
                  !resumeText.trim() || isAnalyzing
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-indigo-500 hover:bg-indigo-600'
                } text-white transition-colors`}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400">Skills Identified</h3>
              <div className="flex flex-wrap gap-2">
                {analysis.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400">Experience</h3>
              <p className="text-white">{analysis.experience}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-400">Education</h3>
            <p className="text-white">{analysis.education}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-400">Recommendations</h3>
            <ul className="space-y-2">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-indigo-400">•</span>
                  <span className="text-white">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              setAnalysis(null);
              setResumeText('');
              setInputMethod('file');
            }}
            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Analyze Another Resume
          </button>
        </div>
      )}

      {isAnalyzing && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-white">Analyzing your resume...</p>
          </div>
        </div>
      )}
    </motion.div>
  );
} 