import React, { useState, useEffect, useMemo } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SkillAnalysis = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skillData, setSkillData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // TODO: Replace with actual API calls
        // For now, using the sample data
        setSkillData([
          { skill: 'React.js', value: 85 },
          { skill: 'Node.js', value: 75 },
          { skill: 'System Design', value: 65 },
          { skill: 'Data Structures', value: 80 },
          { skill: 'Algorithms', value: 70 },
          { skill: 'Communication', value: 90 },
          { skill: 'Problem Solving', value: 85 },
          { skill: 'Team Leadership', value: 75 },
        ]);
        
        setTrendData([
          { month: 'Jan', React: 70, Node: 65, System: 55 },
          { month: 'Feb', React: 75, Node: 68, System: 58 },
          { month: 'Mar', React: 80, Node: 72, System: 62 },
          { month: 'Apr', React: 82, Node: 75, System: 65 },
          { month: 'May', React: 85, Node: 75, System: 65 },
        ]);

        setStrengths([
          { skill: 'React.js', score: 85, description: 'Strong understanding of React hooks and state management' },
          { skill: 'Communication', score: 90, description: 'Excellent ability to explain technical concepts clearly' },
          { skill: 'Problem Solving', score: 85, description: 'Good at breaking down complex problems' },
        ]);

        setWeaknesses([
          { skill: 'System Design', score: 65, description: 'Need more practice with distributed systems' },
          { skill: 'Algorithms', score: 70, description: 'Could improve in advanced algorithm optimization' },
        ]);

        setRecommendedCourses([
          {
            id: 1,
            title: 'Advanced System Design',
            platform: 'Udemy',
            instructor: 'John Doe',
            rating: 4.8,
            students: '12.5k',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Learn to design scalable, distributed systems',
            topics: ['Microservices', 'Load Balancing', 'Caching'],
          },
          // ... other courses
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const MemoizedRadarChart = useMemo(() => (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={skillData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis domain={[0, 100]} />
        <Radar
          name="Skills"
          dataKey="value"
          stroke="#8B5CF6"
          fill="#8B5CF6"
          fillOpacity={0.6}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  ), [skillData]);

  const MemoizedLineChart = useMemo(() => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={trendData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="React" stroke="#8B5CF6" />
        <Line type="monotone" dataKey="Node" stroke="#3B82F6" />
        <Line type="monotone" dataKey="System" stroke="#10B981" />
      </LineChart>
    </ResponsiveContainer>
  ), [trendData]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <p className="text-red-800 dark:text-red-200">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Skill Progress Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Skill Analysis</h1>
        
        {/* Radar Chart */}
        <div className="h-[400px] mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Skill Levels</h2>
          {MemoizedRadarChart}
        </div>

        {/* Trend Analysis */}
        <div className="h-[300px]">
          <h2 className="text-xl font-semibold mb-4">Skill Improvement Trend</h2>
          {MemoizedLineChart}
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Strengths</h2>
          <div className="space-y-4">
            {strengths.map((strength, index) => (
              <div key={index} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-green-800 dark:text-green-200">{strength.skill}</h3>
                  <span className="text-green-600 dark:text-green-400">{strength.score}%</span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Areas for Improvement</h2>
          <div className="space-y-4">
            {weaknesses.map((weakness, index) => (
              <div key={index} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-red-800 dark:text-red-200">{weakness.skill}</h3>
                  <span className="text-red-600 dark:text-red-400">{weakness.score}%</span>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">{weakness.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Recommended Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="border dark:border-gray-700 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 dark:text-purple-400">{course.platform}</span>
                  <span className="text-sm font-medium">{course.price}</span>
                </div>
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students} students</span>
                </div>
                <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SkillAnalysis); 