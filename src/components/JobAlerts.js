import React, { useState } from 'react';

const JobAlerts = () => {
  const [preferences, setPreferences] = useState({
    industry: '',
    role: '',
    experience: '',
    location: '',
    skills: [],
    salary: { min: '', max: '' },
    notificationEmail: '',
    notificationWhatsapp: '',
  });

  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing',
    'Retail', 'Consulting', 'Media', 'Other'
  ];

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-10 years)',
    'Lead/Manager (10+ years)'
  ];

  const handlePreferenceChange = (field, value) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillAdd = (skill) => {
    if (skill && !preferences.skills.includes(skill)) {
      setPreferences(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setPreferences(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSaveJob = (job) => {
    if (!savedJobs.find(j => j.id === job.id)) {
      setSavedJobs(prev => [...prev, job]);
    }
  };

  const handleApplyJob = (job) => {
    if (!appliedJobs.find(j => j.id === job.id)) {
      setAppliedJobs(prev => [...prev, job]);
    }
  };

  // Sample job listings (replace with API data)
  const jobListings = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      role: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      description: 'Looking for an experienced frontend developer with React expertise...',
      requirements: ['React', 'TypeScript', '5+ years experience'],
      postedDate: '2024-03-20'
    },
    {
      id: 2,
      company: 'HealthTech Solutions',
      role: 'Full Stack Developer',
      location: 'Remote',
      salary: '$100,000 - $130,000',
      description: 'Join our healthcare technology team...',
      requirements: ['Node.js', 'React', 'MongoDB'],
      postedDate: '2024-03-19'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Job Preferences Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Job Preferences</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Industry Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Industry</label>
            <select
              value={preferences.industry}
              onChange={(e) => handlePreferenceChange('industry', e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select Industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          {/* Role Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Desired Role</label>
            <input
              type="text"
              value={preferences.role}
              onChange={(e) => handlePreferenceChange('role', e.target.value)}
              placeholder="e.g., Senior Frontend Developer"
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium mb-2">Experience Level</label>
            <select
              value={preferences.experience}
              onChange={(e) => handlePreferenceChange('experience', e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select Experience Level</option>
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Preferred Location</label>
            <input
              type="text"
              value={preferences.location}
              onChange={(e) => handlePreferenceChange('location', e.target.value)}
              placeholder="e.g., San Francisco, CA"
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Salary Range */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Salary Range</label>
            <div className="flex space-x-4">
              <input
                type="number"
                value={preferences.salary.min}
                onChange={(e) => handlePreferenceChange('salary', { ...preferences.salary, min: e.target.value })}
                placeholder="Min"
                className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="number"
                value={preferences.salary.max}
                onChange={(e) => handlePreferenceChange('salary', { ...preferences.salary, max: e.target.value })}
                placeholder="Max"
                className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>

          {/* Skills Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Required Skills</label>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Add a skill"
                className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSkillAdd(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[placeholder="Add a skill"]');
                  handleSkillAdd(input.value);
                  input.value = '';
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {preferences.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center"
                >
                  {skill}
                  <button
                    onClick={() => handleSkillRemove(skill)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <label className="block text-sm font-medium mb-2">Email for Alerts</label>
            <input
              type="email"
              value={preferences.notificationEmail}
              onChange={(e) => handlePreferenceChange('notificationEmail', e.target.value)}
              placeholder="your@email.com"
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
            <input
              type="tel"
              value={preferences.notificationWhatsapp}
              onChange={(e) => handlePreferenceChange('notificationWhatsapp', e.target.value)}
              placeholder="+1234567890"
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <button
          className="mt-6 w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Save Preferences
        </button>
      </div>

      {/* Job Listings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Latest Job Listings</h2>
        
        <div className="space-y-4">
          {jobListings.map(job => (
            <div
              key={job.id}
              className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSaveJob(job)}
                    className="p-2 text-gray-600 hover:text-blue-600"
                    title="Save Job"
                  >
                    📌
                  </button>
                  <button
                    onClick={() => handleApplyJob(job)}
                    className="p-2 text-gray-600 hover:text-green-600"
                    title="Mark as Applied"
                  >
                    ✓
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  📍 {job.location}
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  💰 {job.salary}
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  📅 Posted {job.postedDate}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-2">{job.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.map((req, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {req}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <button
                  className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
                <button
                  className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📱</span>
                  <span>Send to WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Jobs Section */}
      {savedJobs.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Saved Jobs</h2>
          <div className="space-y-4">
            {savedJobs.map(job => (
              <div
                key={job.id}
                className="border dark:border-gray-700 rounded-lg p-4"
              >
                <h3 className="font-semibold">{job.role}</h3>
                <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Applied Jobs Section */}
      {appliedJobs.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Applied Jobs</h2>
          <div className="space-y-4">
            {appliedJobs.map(job => (
              <div
                key={job.id}
                className="border dark:border-gray-700 rounded-lg p-4"
              >
                <h3 className="font-semibold">{job.role}</h3>
                <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobAlerts; 