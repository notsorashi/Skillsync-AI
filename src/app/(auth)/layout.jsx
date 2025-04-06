'use client';

import { motion } from 'framer-motion';

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030014]">
      {/* Animated background gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 animate-pulse" />
        <div className="absolute top-[-10%] right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-0 h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[100px]" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
} 