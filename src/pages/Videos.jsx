import React from 'react';
import { motion } from 'framer-motion';
import Video from '../components/Video';
import { useTheme } from '../contexts/ThemeContext';

const Videos = () => {
  const videos = [
    {
      title: 'Guided Meditation for Stress Relief',
      description: 'A 10-minute guided meditation to help reduce stress and anxiety.',
      videoUrl: 'https://www.youtube.com/embed/6p_yaNFSYao',
    },
    {
      title: '15-Minute Full Body Workout',
      description: 'A quick and effective full-body workout you can do at home.',
      videoUrl: 'https://www.youtube.com/embed/oAPCPjnU1wA',
    },
    {
      title: 'Healthy Eating Tips',
      description: 'Learn about balanced nutrition and healthy eating habits.',
      videoUrl: 'https://www.youtube.com/embed/zJgHbifIx-Q',
    },
    {
      title: 'Mindfulness Techniques',
      description: 'Discover mindfulness practices to improve your mental well-being.',
      videoUrl: 'https://www.youtube.com/embed/6p_yaNFSYao',
    },
    {
      title: 'Yoga for Beginners',
      description: 'Start your yoga journey with this gentle beginner-friendly session.',
      videoUrl: 'https://www.youtube.com/embed/v7AYKMP6rOE',
    },
    {
      title: 'Sleep Hygiene Tips',
      description: 'Learn how to improve your sleep quality for better overall health.',
      videoUrl: 'https://www.youtube.com/embed/5MuIMqhT8DM',
    },
    {
      title: 'Stress Management Techniques',
      description: 'Effective strategies to manage and reduce stress in your daily life.',
      videoUrl: 'https://www.youtube.com/embed/0fL-pn80s-c',
    },
    {
      title: 'Healthy Meal Prep Ideas',
      description: 'Quick and nutritious meal prep ideas for a healthier lifestyle.',
      videoUrl: 'https://www.youtube.com/embed/mhbpL3Yw7_0',
    },
    // Add more video objects here as needed
  ];

  const { theme } = useTheme();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Health & Wellness Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.videoUrl} // Using videoUrl as a more stable key
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Video {...video} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Videos;
