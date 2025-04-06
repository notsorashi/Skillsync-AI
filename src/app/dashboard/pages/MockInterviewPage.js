"use client";

import React, { useState } from 'react';

const interviewTypes = [
  {
    id: 'hr',
    name: 'HR Interview',
    icon: '👥',
    description: 'General HR questions and company culture fit'
  },
  {
    id: 'technical',
    name: 'Technical',
    icon: '💻',
    description: 'Data structures, algorithms, and system design'
  },
  {
    id: 'behavioral',
    name: 'Behavioral',
    icon: '🤝',
    description: 'Past experiences and situation handling'
  },
  {
    id: 'case',
    name: 'Case Study',
    icon: '📊',
    description: 'Problem-solving and analytical thinking'
  }
];

const difficultyLevels = [
  {
    id: 'beginner',
    name: 'Beginner',
    icon: '🌱',
    color: 'bg-green-100 dark:bg-green-900',
    textColor: 'text-green-700 dark:text-green-300',
    borderColor: 'border-green-200 dark:border-green-800'
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    icon: '🌿',
    color: 'bg-yellow-100 dark:bg-yellow-900',
    textColor: 'text-yellow-700 dark:text-yellow-300',
    borderColor: 'border-yellow-200 dark:border-yellow-800'
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: '🌳',
    color: 'bg-red-100 dark:bg-red-900',
    textColor: 'text-red-700 dark:text-red-300',
    borderColor: 'border-red-200 dark:border-red-800'
  }
];

export default function MockInterviewPage() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStartInterview = () => {
    if (!selectedType || !selectedDifficulty) return;
    setIsInterviewStarted(true);
    setCurrentQuestion('Tell me about a challenging project you worked on and how you handled it.');
  };

  const handleSubmitAnswer = async () => {
    try {
      if (!answer.trim()) {
        setError('Please provide an answer before submitting');
        return;
      }

      setLoading(true);
      setError(null);

      // Save the response to the database
      const response = await fetch('/api/interview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          interviewType: selectedType.id,
          difficulty: selectedDifficulty.id,
          question: currentQuestion,
          answer: answer,
          evaluation: null // This will be updated when we implement AI evaluation
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save interview response');
      }

      const result = await response.json();
      console.log('Interview response saved:', result);

      // Clear the answer field for the next question
      setAnswer('');
      
      // Here you would typically get the next question
      // For now, we'll just show a success message
      setCurrentQuestion('Thank you for your answer! Your response has been saved.');

    } catch (error) {
      console.error('Error submitting answer:', error);
      setError(error.message || 'Failed to submit answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isInterviewStarted) {
    return (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedType.name} Interview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {selectedDifficulty.name} Level
              </p>
            </div>
            <button
              onClick={() => setIsInterviewStarted(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              ✕ End Interview
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Current Question:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{currentQuestion}</p>
          </div>

          <div className="space-y-4">
            {/* Add error display */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl mb-4">
                <p className="text-red-800 dark:text-red-200">{error}</p>
              </div>
            )}

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-32 p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex justify-between">
              <button
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                🎤 Voice Answer
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={loading || !answer.trim()}
                className={`px-6 py-3 rounded-xl transition-colors duration-300 ${
                  loading
                    ? 'bg-blue-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </span>
                ) : (
                  'Submit Answer →'
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            AI Feedback
          </h3>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
              <h4 className="text-green-700 dark:text-green-300 font-medium mb-2">Strengths</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Clear communication and structured response</li>
                <li>Good use of specific examples</li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl">
              <h4 className="text-yellow-700 dark:text-yellow-300 font-medium mb-2">Areas to Improve</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Could provide more quantitative results</li>
                <li>Consider adding follow-up actions taken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Mock Interview</h1>
        <p className="text-blue-100">
          Practice with AI-powered interviews tailored to your needs
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Select Interview Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interviewTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedType?.id === type.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{type.icon}</span>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {type.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {type.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Select Difficulty Level
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {difficultyLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedDifficulty(level)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedDifficulty?.id === level.id
                  ? `${level.color} ${level.borderColor}`
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="text-center">
                <span className="text-3xl block mb-2">{level.icon}</span>
                <h3 className={`font-semibold ${
                  selectedDifficulty?.id === level.id
                    ? level.textColor
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {level.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleStartInterview}
        disabled={!selectedType || !selectedDifficulty}
        className={`w-full py-4 rounded-xl text-white font-medium transition-all duration-300 ${
          selectedType && selectedDifficulty
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 cursor-pointer'
            : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
        }`}
      >
        Start Interview
      </button>
    </div>
  );
} 