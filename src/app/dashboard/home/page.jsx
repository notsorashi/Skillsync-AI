'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Dashboard Overview
        </h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Refresh Data
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Interviews', value: '24', icon: '🎯', color: 'from-purple-500 to-indigo-500' },
          { title: 'Average Score', value: '85%', icon: '📊', color: 'from-green-500 to-emerald-500' },
          { title: 'Skills Improved', value: '12', icon: '📈', color: 'from-blue-500 to-cyan-500' },
          { title: 'Job Applications', value: '8', icon: '📝', color: 'from-orange-500 to-amber-500' },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { type: 'Interview', title: 'Technical Interview Practice', date: '2 hours ago', icon: '🎯' },
            { type: 'Skill', title: 'React.js Skill Assessment', date: '5 hours ago', icon: '📊' },
            { type: 'Job', title: 'Applied to Senior Frontend Position', date: '1 day ago', icon: '📝' },
            { type: 'Resume', title: 'Resume Analysis Completed', date: '2 days ago', icon: '📄' },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
            >
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <span className="text-xl">{activity.icon}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
              </div>
              <button className="text-purple-600 dark:text-purple-400 hover:underline">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 