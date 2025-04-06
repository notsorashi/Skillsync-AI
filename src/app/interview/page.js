export default function Interview() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">AI Interview Practice</h1>
          <p className="text-gray-300">Enhance your interview skills with our AI-powered mock interviews</p>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Start New Interview Card */}
        <div className="bg-[#f5f5dc] p-6 rounded-lg border border-[#e8e8d1] shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Start New Interview</h2>
              <p className="text-gray-600 mb-4">Begin a new AI-powered mock interview session</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-600">Real-time AI feedback</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-600">Performance analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-gray-600">Detailed response evaluation</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Start Now
            </button>
          </div>
        </div>

        {/* Interview History Card */}
        <div className="bg-[#f5f5dc] p-6 rounded-lg border border-[#e8e8d1] shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Interview History</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-700">Frontend Development</h3>
                  <p className="text-sm text-gray-600">React.js, State Management</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">85% Score</span>
              </div>
              <button className="text-sm text-purple-600 hover:text-purple-700 mt-2">View Feedback →</button>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-700">System Design</h3>
                  <p className="text-sm text-gray-600">Scalability, Architecture</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">In Progress</span>
              </div>
              <button className="text-sm text-purple-600 hover:text-purple-700 mt-2">Continue →</button>
            </div>
          </div>
        </div>

        {/* Schedule Interview Card */}
        <div className="bg-[#f5f5dc] p-6 rounded-lg border border-[#e8e8d1] shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Schedule Interview</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-colors">
                <h3 className="font-semibold text-gray-700">Morning</h3>
                <p className="text-sm text-gray-600">9:00 AM - 12:00 PM</p>
              </div>
              <div className="p-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/70 transition-colors">
                <h3 className="font-semibold text-gray-700">Afternoon</h3>
                <p className="text-sm text-gray-600">1:00 PM - 5:00 PM</p>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Schedule Session
            </button>
          </div>
        </div>

        {/* Customize Interview Card */}
        <div className="bg-[#f5f5dc] p-6 rounded-lg border border-[#e8e8d1] shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Customize Interview</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700 mb-2">Difficulty Level</h3>
              <div className="flex space-x-2">
                <button className="px-4 py-2 rounded-lg bg-white/50 text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-colors">
                  Entry
                </button>
                <button className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700">
                  Intermediate
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/50 text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-colors">
                  Advanced
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700 mb-2">Topics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">React.js</span>
                <span className="px-3 py-1 rounded-full bg-white/50 text-gray-600 text-sm">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-white/50 text-gray-600 text-sm">System Design</span>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">Data Structures</span>
                <span className="px-3 py-1 rounded-full bg-white/50 text-gray-600 text-sm">Algorithms</span>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Apply Settings
            </button>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-[#f5f5dc] p-6 rounded-lg border border-[#e8e8d1] shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Technical Skills</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-purple-600">85%</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
                <div className="w-[85%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Communication</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-purple-600">92%</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
                <div className="w-[92%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Problem Solving</h3>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-purple-600">78%</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
                <div className="w-[78%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 