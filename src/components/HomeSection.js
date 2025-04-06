import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HomeSection = () => {
  // Sample data for the performance chart
  const performanceData = [
    { date: 'Mar 1', score: 75 },
    { date: 'Mar 5', score: 82 },
    { date: 'Mar 8', score: 78 },
    { date: 'Mar 12', score: 88 },
    { date: 'Mar 15', score: 92 },
  ];

  // Sample strengths and weaknesses
  const strengths = [
    { skill: 'Problem Solving', score: 95 },
    { skill: 'Communication', score: 90 },
    { skill: 'Technical Knowledge', score: 88 },
  ];

  const weaknesses = [
    { skill: 'System Design', score: 65 },
    { skill: 'Algorithms', score: 72 },
    { skill: 'Time Management', score: 75 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-white/10">
        <h1 className="text-2xl font-bold mb-2 text-white">Welcome back, John! 👋</h1>
        <p className="text-gray-300">
          Your interview performance has improved by 15% this month. Keep up the great work!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-lg font-semibold mb-2 text-white">Average Score</h2>
          <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">85%</p>
          <p className="text-sm text-gray-400 mt-2">Based on 24 interviews</p>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-lg font-semibold mb-2 text-white">Best Score</h2>
          <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">92%</p>
          <p className="text-sm text-gray-400 mt-2">Technical Interview</p>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-lg font-semibold mb-2 text-white">Total Interviews</h2>
          <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">24</p>
          <p className="text-sm text-gray-400 mt-2">Last 30 days</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-white/10">
        <h2 className="text-xl font-semibold mb-4 text-white">Performance Trend</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis domain={[0, 100]} stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="url(#colorGradient)" 
                strokeWidth={3}
                dot={{ fill: '#C084FC', strokeWidth: 2, stroke: '#8B5CF6' }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-white">Your Strengths</h2>
          <div className="space-y-4">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{strength.skill}</span>
                <div className="w-32 bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-full" 
                    style={{ width: `${strength.score}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400">{strength.score}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Areas to Improve */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-white">Areas to Improve</h2>
          <div className="space-y-4">
            {weaknesses.map((weakness, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{weakness.skill}</span>
                <div className="w-32 bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 h-2 rounded-full opacity-70" 
                    style={{ width: `${weakness.score}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400">{weakness.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 border border-purple-500/30 text-white p-6 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-3">
          <span className="text-3xl">🎯</span>
          <div className="text-left">
            <div className="font-semibold">Start New Interview</div>
            <div className="text-sm text-gray-300">Practice with AI-powered questions</div>
          </div>
        </button>
        <button className="bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 border border-purple-500/30 text-white p-6 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-3">
          <span className="text-3xl">📊</span>
          <div className="text-left">
            <div className="font-semibold">View Detailed Report</div>
            <div className="text-sm text-gray-300">Get comprehensive performance analysis</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeSection;