'use client';

import { SignUp } from '@clerk/nextjs'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-3xl" />
      </div>

      {/* Logo and Branding */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-shadow" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            SkillSync
          </span>
        </Link>
      </motion.div>

      {/* Sign Up Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-[30px] blur-2xl transform scale-110" />
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-black/40 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-2xl shadow-black/10",
                headerTitle: "text-white text-2xl",
                headerSubtitle: "text-gray-400",
                socialButtonsBlockButton: "bg-white/5 border border-white/10 hover:bg-white/10 transition-colors",
                socialButtonsBlockButtonText: "text-white font-medium",
                dividerLine: "bg-white/10",
                dividerText: "text-gray-500",
                formFieldLabel: "text-gray-300",
                formFieldInput: "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/30",
                formButtonPrimary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity",
                footerActionLink: "text-indigo-400 hover:text-indigo-300",
                footerActionText: "text-gray-400",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-indigo-400 hover:text-indigo-300",
                formFieldWarningText: "text-amber-500",
                alert: "bg-red-500/10 border border-red-500/20 text-red-500",
                alertText: "text-red-400",
                formResendCodeLink: "text-indigo-400 hover:text-indigo-300",
                verificationLinkStatus: "text-gray-400",
              },
              layout: {
                socialButtonsPlacement: "bottom",
                showOptionalFields: false
              }
            }}
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            afterSignUpUrl="/dashboard"
          />
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed bottom-6 text-center text-gray-400 text-sm"
      >
        <p>© 2024 SkillSync. All rights reserved.</p>
      </motion.div>
    </div>
  )
} 