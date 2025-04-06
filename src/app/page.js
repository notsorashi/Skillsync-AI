/* eslint-disable @next/next/no-img-element */
"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg transform group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  SkillSync
                </span>
                <span className="text-xs text-gray-400">AI Assistant</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="hidden md:block text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left side - Text Content */}
              <div className="flex-1 text-left">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Supercharge
                  </span> Your Career with AI
                </h1>
                <p className="text-xl mb-8 text-gray-300 max-w-xl">
                  AI-driven mock interviews, personalized job alerts, and intelligent skill gap analysis to help you land your dream job.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/signup" 
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="#features" 
                    className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
                  >
                    Explore
                  </Link>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="flex-1">
                <div className="relative rounded-xl overflow-hidden max-h-[500px] flex items-center justify-center group">
                  <div className="animate-floating">
                    <div className="relative w-full max-w-md mx-auto">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                      <img
                        src="https://media-hosting.imagekit.io/e2fb0b01adac4e1d/WhatsApp%20Image%202025-03-28%20at%2022.54.50_82b74a39.jpg?Expires=1837792668&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=I1zlwukiKHSJkgcy~cSDcuKn-4LHBVXSAdjnWyR6BU44T6jQG7sa6vqjXUjUipZOCHaUizNSRBmMDbdFF6kvfp23rMCIAxgLo9PaPTViU3kwmbbykmoJbLd5uLVx-qg~nlJcZ6Z1ZO6yjgBwJF8lK1HOO7ki7rJwLKdMB7BJ7HaQEYA0W8qVz~lFm0BYW74WwvjtCDGiQZXAk464vci1Hbgu-rB8dyQ4Afop2-SWjOiGZURSt2~HtAcuOEQZsunOgK3QQGd5EodXoAtjKTYR5t6OuIcoJeZnbzz-VC0OkujW9fzC4chQ2NM6Qtt732-bpKweS9gJhnE6FIqR2jSq-Q__"
                        alt="AI Interview Assistant"
                        className="w-full h-full object-contain rounded-xl shadow-2xl transition-all duration-300 group-hover:scale-105 relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
                Powerful Features
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Everything you need to accelerate your job search and land your dream position.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10 hover:border-purple-500/50 transition-all transform hover:-translate-y-2 backdrop-blur-sm group">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  🤖
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">AI Mock Interviews</h3>
                <p className="text-gray-400">Practice with our AI interviewer and get personalized feedback to improve your interview performance.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10 hover:border-purple-500/50 transition-all transform hover:-translate-y-2 backdrop-blur-sm group">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  🔔
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Smart Job Alerts</h3>
                <p className="text-gray-400">Get personalized job recommendations matching your unique skills, experience, and career goals.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10 hover:border-purple-500/50 transition-all transform hover:-translate-y-2 backdrop-blur-sm group">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  📊
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Skill Gap Analysis</h3>
                <p className="text-gray-400">Identify key skill gaps and get personalized learning paths to become the ideal candidate for your target roles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
                Experience AI Interviewing
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Try our AI interviewer and see how it can help you prepare for your next job interview.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 shadow-xl shadow-purple-500/5">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div className="bg-gray-800/70 p-4 rounded-xl rounded-tl-none">
                    <p className="text-gray-200">What&apos;s your greatest strength and how have you applied it in a professional setting?</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center mt-4">
                  <input 
                    type="text" 
                    placeholder="Type your response..."
                    className="flex-1 bg-gray-800/70 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                  <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
                Simple Pricing
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Choose the plan that works best for your career goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                    <p className="text-gray-400 mb-4">Perfect for getting started</p>
                  </div>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Free</span>
                </div>
                <div className="text-4xl font-bold text-white my-6">$0<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    5 AI Mock Interviews
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    Basic Skill Analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    Standard Job Alerts
                  </li>
                </ul>
                <Link href="/signup" className="block text-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Get Started
                </Link>
              </div>
              <div className="p-8 rounded-xl relative bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 border border-purple-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  RECOMMENDED
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-gray-400 mb-4">For serious job seekers</p>
                  </div>
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Popular</span>
                </div>
                <div className="text-4xl font-bold text-white my-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    <strong>Unlimited</strong> AI Mock Interviews
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    <strong>Advanced</strong> Skill Analysis & Roadmap
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    <strong>Priority</strong> Job Alerts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    AI Resume Builder & Optimizer
                  </li>
                </ul>
                <Link href="/signup" className="block text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  Upgrade to Pro
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
                How SkillSync Works
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Our proven process to help you land your dream job
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/3 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              <div className="text-center relative z-10 group">
                <div className="w-20 h-20 bg-gray-900 border-4 border-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform relative z-10">1</div>
                <h3 className="font-semibold mb-3 text-white text-lg">Profile Analysis</h3>
                <p className="text-gray-400">Our AI analyzes your skills and experience</p>
              </div>
              <div className="text-center relative z-10 group">
                <div className="w-20 h-20 bg-gray-900 border-4 border-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform relative z-10">2</div>
                <h3 className="font-semibold mb-3 text-white text-lg">Job Matching</h3>
                <p className="text-gray-400">Get matched with relevant opportunities</p>
              </div>
              <div className="text-center relative z-10 group">
                <div className="w-20 h-20 bg-gray-900 border-4 border-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform relative z-10">3</div>
                <h3 className="font-semibold mb-3 text-white text-lg">Interview Prep</h3>
                <p className="text-gray-400">Practice with AI interview simulations</p>
              </div>
              <div className="text-center relative z-10 group">
                <div className="w-20 h-20 bg-gray-900 border-4 border-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform relative z-10">4</div>
                <h3 className="font-semibold mb-3 text-white text-lg">Land Your Job</h3>
                <p className="text-gray-400">Succeed in interviews and grow your career</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-pink-600/30" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          </div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to Transform Your <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Career Journey</span>?
              </h2>
              <p className="text-xl mb-10 text-gray-300">
                Join thousands of professionals who are landing their dream jobs with SkillSync AI
              </p>
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 inline-block text-lg"
              >
                Get Started for Free
              </Link>
              <p className="mt-6 text-gray-400">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg" />
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  SkillSync
                </span>
              </div>
              <div className="text-gray-400 text-sm">
                © 2025 SkillSync AI. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
