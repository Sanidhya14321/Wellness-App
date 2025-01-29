import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const wellnessData = [
    { name: "Exercise", value: 65 },
    { name: "Nutrition", value: 75 },
    { name: "Sleep", value: 60 },
    { name: "Stress", value: 40 },
    { name: "Mindfulness", value: 55 },
  ];

  const blogPosts = [
    {
      title: "The Power of Daily Meditation",
      excerpt: "Learn how just 10 minutes of meditation can improve focus and reduce stress.",
      link: "/articles/meditation",
    },
    {
      title: "5 Simple Exercises for Better Sleep",
      excerpt: "Struggling with sleep? These easy exercises can help you fall asleep faster.",
      link: "/articles/sleep-tips",
    },
    {
      title: "Healthy Eating on a Budget",
      excerpt: "Discover budget-friendly ways to eat nutritious and delicious meals.",
      link: "/articles/nutrition-budget",
    },
  ];

  const events = [
    { title: "Wellness Retreat - Mind & Body", date: "Feb 15, 2025", location: "New York, USA" },
    { title: "Virtual Yoga Workshop", date: "Mar 10, 2025", location: "Online" },
    { title: "Nutrition & Wellness Expo", date: "Apr 5, 2025", location: "Los Angeles, USA" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Welcome to WellnessApp</h1>

      {/* Hero Section */}
      <div className="bg-blue-100 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Your Journey to Wellness Starts Here
            </h2>
            <p className="text-gray-700 mb-4">
              Discover a holistic approach to health and wellness. Our app provides you with the tools
              and resources you need to improve your physical and mental well-being.
            </p>
            <Link
              to="/videos"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Explore Videos
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Wellness Journey"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[
          { title: "Mental Health", desc: "Improve mental well-being with meditation and stress management.", img: "/placeholder.svg?height=150&width=250" },
          { title: "Physical Health", desc: "Workout routines, fitness tips, and lifestyle changes for a healthier you.", img: "/placeholder.svg?height=150&width=250" },
          { title: "Nutrition", desc: "Balanced diets, meal planning, and healthy recipes.", img: "/placeholder.svg?height=150&width=250" },
        ].map((feature, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
            <img src={feature.img} alt={feature.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{feature.title}</h2>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Blog Highlights */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="border-b pb-3">
              <h3 className="text-lg font-semibold">
                <Link to={post.link} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wellness Score Graph */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Wellness Score</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={wellnessData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.date} - {event.location}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Start Your Wellness Journey Today
        </h2>
        <p className="text-gray-700 mb-6">
          Join thousands of users who have already improved their lives with WellnessApp. Take the
          first step toward a healthier, happier you.
        </p>
        <Link
          to="/signup"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
        >
          Sign Up Now
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
