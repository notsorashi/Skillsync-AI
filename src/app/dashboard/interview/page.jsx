"use client";

import { useState } from "react";
import { generateInterviewQuestion, evaluateAnswer } from "../../../utils/gemini";
import { FaLightbulb, FaCheck, FaArrowRight, FaStar, FaThumbsUp, FaExclamationTriangle, FaChevronDown } from "react-icons/fa";

export default function InterviewPage() {
  const [interviewType, setInterviewType] = useState("technical");
  const [difficulty, setDifficulty] = useState("beginner");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHints, setShowHints] = useState(false);

  const handleStartInterview = async () => {
    try {
      setLoading(true);
      setError(null);
      const question = await generateInterviewQuestion(interviewType, difficulty);
      setCurrentQuestion(question);
      setUserAnswer("");
      setEvaluation(null);
      setShowHints(false);
    } catch (err) {
      setError(err.message || "Failed to generate question. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) {
      setError("Please provide an answer before submitting.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const result = await evaluateAnswer(currentQuestion.question, userAnswer);
      setEvaluation(result);
    } catch (err) {
      setError(err.message || "Failed to evaluate answer. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Mock Interview</h1>
          <p className="text-gray-400 text-lg">Practice your interview skills with AI-powered feedback</p>
        </div>

        {!currentQuestion ? (
          <div className="bg-[#0F172A] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 space-y-8 transform transition-all duration-300 hover:shadow-2xl border border-gray-800">
            <div className="space-y-8">
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
                  Interview Type
                </label>
                <div className="relative">
                  <select
                    value={interviewType}
                    onChange={(e) => setInterviewType(e.target.value)}
                    className="appearance-none w-full p-4 text-lg border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#1E293B] text-gray-200 pr-12 transition-all duration-200 hover:border-blue-500 cursor-pointer"
                  >
                    <option value="technical">Technical Interview</option>
                    <option value="behavioral">Behavioral Interview</option>
                    <option value="system-design">System Design Interview</option>
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-200 group-hover:text-blue-500" />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
                  Difficulty Level
                </label>
                <div className="relative">
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="appearance-none w-full p-4 text-lg border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#1E293B] text-gray-200 pr-12 transition-all duration-200 hover:border-blue-500 cursor-pointer"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-200 group-hover:text-blue-500" />
                </div>
              </div>
            </div>

            <button
              onClick={handleStartInterview}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-3 text-lg font-medium"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Preparing Your Interview...</span>
                </>
              ) : (
                <>
                  <FaArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Start Interview</span>
                </>
              )}
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">Select your preferences and click Start Interview to begin</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#0F172A] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">Question</h2>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-blue-900/50 text-blue-200 border border-blue-800">
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </span>
              </div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">{currentQuestion.question}</p>
              
              <button
                onClick={() => setShowHints(!showHints)}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-2 group transition-colors duration-200"
              >
                <FaLightbulb className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-200" />
                <span>{showHints ? "Hide Hints" : "Show Hints"}</span>
              </button>
              
              {showHints && (
                <div className="mt-6 bg-blue-900/20 p-6 rounded-xl border border-blue-800 transform transition-all duration-300">
                  <h3 className="font-medium text-blue-200 mb-4 flex items-center text-lg">
                    <FaLightbulb className="h-5 w-5 mr-3" />
                    Hints
                  </h3>
                  <ul className="space-y-3">
                    {currentQuestion.hints.map((hint, index) => (
                      <li key={index} className="text-blue-300 flex items-start text-base">
                        <span className="mr-3 text-blue-500">•</span>
                        {hint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-[#0F172A] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl border border-gray-800">
              <label className="block text-xl font-medium text-white mb-6">
                Your Answer
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full p-4 text-lg border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#1E293B] text-gray-200 h-48 resize-none transition-all duration-200 hover:border-blue-500"
                placeholder="Type your answer here..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSubmitAnswer}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-5 px-6 rounded-xl hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-3 text-lg font-medium"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Evaluating...</span>
                  </>
                ) : (
                  <>
                    <FaCheck className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-200" />
                    <span>Submit Answer</span>
                  </>
                )}
              </button>
              <button
                onClick={handleStartInterview}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-5 px-6 rounded-xl hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-3 text-lg font-medium"
              >
                <FaArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                <span>Next Question</span>
              </button>
            </div>

            {evaluation && (
              <div className="bg-[#0F172A] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl border border-gray-800">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Evaluation</h2>
                <div className="mb-10">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <svg className="w-40 h-40">
                        <circle
                          className="text-gray-100"
                          strokeWidth="10"
                          stroke="currentColor"
                          fill="transparent"
                          r="60"
                          cx="80"
                          cy="80"
                        />
                        <circle
                          className="text-blue-600"
                          strokeWidth="10"
                          strokeDasharray={`${evaluation.score * 3.77} 377`}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="60"
                          cx="80"
                          cy="80"
                          style={{ transform: 'rotate(-90deg)', transformOrigin: '80px 80px' }}
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-4xl font-bold text-blue-600">{evaluation.score}</span>
                        <span className="block text-sm text-gray-500 mt-1">Score</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-900/20 p-6 rounded-xl border border-green-800 transform transition-all duration-300 hover:shadow-md">
                    <h3 className="text-lg font-medium text-green-200 mb-4 flex items-center">
                      <FaThumbsUp className="h-5 w-5 mr-3" />
                      Strengths
                    </h3>
                    <ul className="space-y-3">
                      {evaluation.strengths.map((strength, index) => (
                        <li key={index} className="text-green-300 flex items-start">
                          <span className="mr-3 text-green-500">•</span>
                          <span className="text-base">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-900/20 p-6 rounded-xl border border-yellow-800 transform transition-all duration-300 hover:shadow-md">
                    <h3 className="text-lg font-medium text-yellow-200 mb-4 flex items-center">
                      <FaExclamationTriangle className="h-5 w-5 mr-3" />
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-3">
                      {evaluation.improvements.map((improvement, index) => (
                        <li key={index} className="text-yellow-300 flex items-start">
                          <span className="mr-3 text-yellow-500">•</span>
                          <span className="text-base">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-blue-900/20 p-6 rounded-xl border border-blue-800 transform transition-all duration-300 hover:shadow-md">
                  <h3 className="text-lg font-medium text-blue-200 mb-4 flex items-center">
                    <FaStar className="h-5 w-5 mr-3" />
                    Suggested Answer
                  </h3>
                  <p className="text-blue-300 text-base leading-relaxed">{evaluation.suggestedAnswer}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-xl flex items-center animate-fadeIn">
            <FaExclamationTriangle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
} 