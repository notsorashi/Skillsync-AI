"use client";

import React from 'react';

export default function JobAlertsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Job Alerts
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Stay updated with the latest job opportunities matching your profile.
      </p>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Active Alerts
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
            Create New Alert
          </button>
        </div>
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Software Engineer - Full Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Companies: Google, Amazon, Microsoft
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: 2 hours ago
            </p>
          </div>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Frontend Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Companies: Meta, Netflix, Apple
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: 5 hours ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 