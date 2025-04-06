import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: null,
    jobPreferences: {
      industry: 'Technology',
      role: 'Full Stack Developer',
      experienceLevel: 'Mid Level',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    locationPreferences: {
      cities: ['New York', 'San Francisco', 'Remote'],
      countries: ['United States', 'Canada'],
      workType: ['Remote', 'Hybrid']
    },
    notifications: {
      email: true,
      whatsapp: true,
      jobAlerts: true,
      interviewReminders: true
    },
    integrations: {
      linkedin: false,
      github: false
    }
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Updating profile...');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Changing password...');
  };

  const handleJobPreferencesUpdate = (e) => {
    e.preventDefault();
    // Handle job preferences update logic here
    console.log('Updating job preferences...');
  };

  const handleLocationPreferencesUpdate = (e) => {
    e.preventDefault();
    // Handle location preferences update logic here
    console.log('Updating location preferences...');
  };

  const handleNotificationUpdate = (type) => {
    setUserData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handleIntegrationToggle = (platform) => {
    setUserData(prev => ({
      ...prev,
      integrations: {
        ...prev.integrations,
        [platform]: !prev.integrations[platform]
      }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-4xl">
              {userData.profilePicture ? (
                <img
                  src={userData.profilePicture}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-500">👤</span>
              )}
            </div>
            <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
              📷
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">{userData.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        {['profile', 'security', 'preferences', 'notifications', 'integrations'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg capitalize ${
              activeTab === tab
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {activeTab === 'profile' && (
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Update Profile
            </button>
          </form>
        )}

        {activeTab === 'security' && (
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Change Password
            </button>
          </form>
        )}

        {activeTab === 'preferences' && (
          <div className="space-y-8">
            {/* Job Preferences */}
            <form onSubmit={handleJobPreferencesUpdate}>
              <h2 className="text-xl font-semibold mb-4">Job Preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <select
                    value={userData.jobPreferences.industry}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        jobPreferences: {
                          ...userData.jobPreferences,
                          industry: e.target.value
                        }
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  >
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <input
                    type="text"
                    value={userData.jobPreferences.role}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        jobPreferences: {
                          ...userData.jobPreferences,
                          role: e.target.value
                        }
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Experience Level</label>
                  <select
                    value={userData.jobPreferences.experienceLevel}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        jobPreferences: {
                          ...userData.jobPreferences,
                          experienceLevel: e.target.value
                        }
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  >
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Lead</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Update Job Preferences
              </button>
            </form>

            {/* Location Preferences */}
            <form onSubmit={handleLocationPreferencesUpdate}>
              <h2 className="text-xl font-semibold mb-4">Location Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Cities</label>
                  <input
                    type="text"
                    value={userData.locationPreferences.cities.join(', ')}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        locationPreferences: {
                          ...userData.locationPreferences,
                          cities: e.target.value.split(',').map(city => city.trim())
                        }
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Enter cities separated by commas"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Work Type</label>
                  <div className="flex space-x-4">
                    {['Remote', 'Hybrid', 'On-site'].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={userData.locationPreferences.workType.includes(type)}
                          onChange={(e) => {
                            const newWorkTypes = e.target.checked
                              ? [...userData.locationPreferences.workType, type]
                              : userData.locationPreferences.workType.filter(t => t !== type);
                            setUserData({
                              ...userData,
                              locationPreferences: {
                                ...userData.locationPreferences,
                                workType: newWorkTypes
                              }
                            });
                          }}
                          className="rounded text-purple-600"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Update Location Preferences
              </button>
            </form>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              {Object.entries(userData.notifications).map(([type, enabled]) => (
                <div key={type} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium capitalize">{type.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {type === 'email' && 'Receive notifications via email'}
                      {type === 'whatsapp' && 'Receive notifications via WhatsApp'}
                      {type === 'jobAlerts' && 'Get notified about new job matches'}
                      {type === 'interviewReminders' && 'Get reminders for upcoming interviews'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNotificationUpdate(type)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      enabled ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'integrations' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Account Integrations</h2>
            <div className="space-y-4">
              {Object.entries(userData.integrations).map(([platform, connected]) => (
                <div key={platform} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">
                      {platform === 'linkedin' ? '💼' : '💻'}
                    </span>
                    <div>
                      <h3 className="font-medium capitalize">{platform}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {connected ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleIntegrationToggle(platform)}
                    className={`px-4 py-2 rounded-lg ${
                      connected
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    } transition-colors`}
                  >
                    {connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 