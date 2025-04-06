"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Interview Scores',
      data: [65, 72, 78, 81, 85, 88],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.4,
    },
  ],
};

const mockSkills = [
  { name: 'Data Structures', level: 85, trend: 'up' },
  { name: 'Algorithms', level: 78, trend: 'up' },
  { name: 'System Design', level: 65, trend: 'up' },
  { name: 'Problem Solving', level: 82, trend: 'up' },
  { name: 'Communication', level: 75, trend: 'up' },
];

const mockRecommendations = [
  'Practice more system design problems',
  'Work on time complexity analysis',
  'Improve behavioral interview responses',
  'Focus on dynamic programming patterns',
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, John!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Here's your interview performance overview
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Interviews
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Average Score
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">82/100</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Best Score
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">92/100</p>
        </div>
      </div>

      {/* Performance Graph */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Performance Trend
        </h2>
        <div className="h-64">
          <Line
            data={mockData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            }}
          />
        </div>
      </div>

      {/* Skills Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Top Skills
          </h2>
          <div className="space-y-4">
            {mockSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            AI Recommendations
          </h2>
          <div className="space-y-3">
            {mockRecommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span className="text-blue-600">•</span>
                <p className="text-gray-700 dark:text-gray-300">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-colors duration-300">
          Start New Interview
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-4 px-6 rounded-xl transition-colors duration-300">
          View Detailed Report
        </button>
      </div>
    </div>
  );
} 