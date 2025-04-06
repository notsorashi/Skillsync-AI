"use client";

import React from 'react';
import Image from 'next/image';

const companies = [
  {
    name: 'Meta',
    logo: '/images/meta-logo.svg',
    color: 'bg-[#0866FF]',
    darkMode: 'dark:bg-[#0866FF]',
    padding: 'p-2',
    description: 'Formerly Facebook, leading in social media and virtual reality',
    careers: 'https://www.metacareers.com/',
    interviewPrep: 'https://www.metacareers.com/swe-prep-onsite/'
  },
  {
    name: 'Amazon',
    isText: true,
    text: 'a',
    color: 'bg-black',
    darkMode: 'dark:bg-black',
    textColor: 'text-black dark:text-white',
    description: 'E-commerce giant and cloud computing leader',
    careers: 'https://www.amazon.jobs/',
    interviewPrep: 'https://amazon.jobs/content/en/how-we-hire/interview-loop',
    extraStyle: 'after:content-[""] after:absolute after:bottom-1 after:right-1 after:left-2 after:h-[3px] after:bg-[#FF9900] after:rounded-full'
  },
  {
    name: 'Apple',
    isText: true,
    text: '',
    icon: '🍎',
    color: 'bg-black',
    darkMode: 'dark:bg-white',
    textColor: 'text-white dark:text-black',
    description: 'Innovator in consumer electronics and software',
    careers: 'https://www.apple.com/careers/',
    interviewPrep: 'https://www.tryexponent.com/blog/apple-interview-process'
  },
  {
    name: 'Netflix',
    isText: true,
    text: 'N',
    color: 'bg-black',
    darkMode: 'dark:bg-black',
    textColor: 'text-[#E50914]',
    description: 'Streaming entertainment pioneer',
    careers: 'https://jobs.netflix.com/',
    interviewPrep: 'https://www.tryexponent.com/blog/an-inside-look-into-the-netflix-interview-process'
  },
  {
    name: 'Google',
    logo: '/images/google-logo.svg',
    color: 'bg-white',
    darkMode: 'dark:bg-white',
    padding: 'p-2',
    description: 'Search engine leader and technology innovator',
    careers: 'https://careers.google.com/',
    interviewPrep: 'https://techdevguide.withgoogle.com/paths/interview/'
  }
];

export default function FAANGPrepPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        FAANG Company Preparation
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Prepare for interviews at top tech companies with our curated official resources and guides.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div 
                className={`w-14 h-14 relative flex-shrink-0 ${company.color} ${company.darkMode} rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110 ${company.extraStyle || ''}`}
              >
                {company.isText ? (
                  <div className={`w-full h-full flex items-center justify-center text-3xl font-bold ${company.textColor}`}>
                    {company.text || company.icon}
                  </div>
                ) : (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className={`object-contain p-2`}
                    priority
                  />
                )}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {company.name}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {company.description}
            </p>
            <div className="space-y-2">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={() => window.open(company.careers, '_blank')}
              >
                View Careers
              </button>
              <button
                className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={() => window.open(company.interviewPrep, '_blank')}
              >
                Official Interview Guide
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
          Pro Tips for FAANG Interviews
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Review the company&apos;s core values and culture before your interview</li>
          <li>Practice system design questions, especially for senior roles</li>
          <li>Prepare concrete examples using the STAR method for behavioral questions</li>
          <li>Study the company&apos;s products and recent technological innovations</li>
          <li>Focus on clean code and optimal solutions in coding interviews</li>
        </ul>
      </div>
    </div>
  );
} 