"use client";

import { UserButton, useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Welcome Back!
          </h1>
          <p className="text-gray-400 mt-1">
            Here's an overview of your interview preparation progress
          </p>
        </div>
        <UserButton 
          appearance={{
            elements: {
              userButtonBox: "hover:opacity-80 transition-opacity",
              userButtonOuterIdentifier: "text-sm text-white",
              userButtonPopoverCard: "bg-gray-900 border border-white/10",
              userButtonPopoverText: "text-white",
              userButtonPopoverActionButton: "hover:bg-white/5",
              userButtonPopoverActionButtonText: "text-white",
              userButtonPopoverFooter: "hidden"
            }
          }}
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Mock Interviews', value: '12', change: '+2 this week' },
          { title: 'Average Score', value: '85%', change: '+5% improvement' },
          { title: 'Skills Mastered', value: '8', change: '2 in progress' },
          { title: 'Practice Hours', value: '24h', change: '3h this week' },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
            <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
            <p className="text-sm text-indigo-400 mt-1">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { title: 'Completed System Design Interview', time: '2 hours ago', type: 'interview' },
            { title: 'Updated Resume', time: 'Yesterday', type: 'resume' },
            { title: 'Mastered Data Structures', time: '2 days ago', type: 'skill' },
          ].map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div>
                <h3 className="font-medium">{activity.title}</h3>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </div>
              <div className="text-indigo-400">→</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/dashboard/interview" className="block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl text-left group cursor-pointer"
          >
            <h3 className="text-xl font-semibold">Start Mock Interview</h3>
            <p className="text-white/80 mt-1">Practice with AI-powered interviews</p>
            <div className="mt-4 text-white/60 group-hover:text-white transition-colors">
              Get Started →
            </div>
          </motion.div>
        </Link>

        <Link href="/dashboard/skills" className="block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left group hover:bg-white/10 transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-semibold">Review Skills</h3>
            <p className="text-white/80 mt-1">Track your progress and identify gaps</p>
            <div className="mt-4 text-white/60 group-hover:text-white transition-colors">
              View Skills →
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
} 