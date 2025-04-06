'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Mock Interview', path: '/dashboard/interview', icon: '🎯' },
  { name: 'Skills', path: '/dashboard/skills', icon: '💡' },
  { name: 'Resume', path: '/dashboard/resume', icon: '📝' },
  { name: 'FAANG Prep', path: '/dashboard/faang', icon: '🚀' },
  { name: 'Job Alerts', path: '/dashboard/alerts', icon: '🔔' },
  { name: 'Profile', path: '/dashboard/profile', icon: '👤' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen sticky top-0 p-5 space-y-8">
      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-3 px-2">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg" />
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          SkillSync
        </span>
      </Link>

      {/* Navigation */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link key={item.path} href={item.path}>
              <div
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors relative ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative">{item.icon}</span>
                <span className="relative font-medium">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Pro Upgrade Button */}
      <div className="px-3">
        <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
} 