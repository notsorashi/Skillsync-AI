"use client";

import React from 'react';

export default function SkillAnalysisPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Skill Analysis
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Track your technical skills and identify areas for improvement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                <span className="text-gray-600 dark:text-gray-400">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">React</span>
                <span className="text-gray-600 dark:text-gray-400">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                <span className="text-gray-600 dark:text-gray-400">65%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Areas for Improvement
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="text-red-500">•</span>
              <span className="text-gray-700 dark:text-gray-300">System Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500">•</span>
              <span className="text-gray-700 dark:text-gray-300">Data Structures</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-red-500">•</span>
              <span className="text-gray-700 dark:text-gray-300">Algorithms</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 