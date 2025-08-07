import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext"; // Import the theme context

const ArticlePreview = ({ title, excerpt, date, link, image }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white p-6 rounded-lg shadow-md mb-6"
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    </a>
    <h2 className="text-2xl font-semibold mb-2">
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {title}
      </a>
    </h2>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <p className="text-sm text-gray-500">Published on {date}</p>
  </motion.div>
);

const Articles = () => {
  const { theme } = useTheme(); // Use the theme context

  const articles = [
    {
      title: "Welcome to the New Era of Wellness Travel",
      excerpt:
        "Wellness travel has evolved beyond detox programs to offer comprehensive, personalized experiences focused on holistic health, integrating science, luxury, and traditional hospitality.",
      date: "January 29, 2025",
      link: "https://www.popsugar.com/travel/wellness-travel-trends-2025-49424749",
      image: "https://source.unsplash.com/800x600/?travel,wellness",
    },
    {
      title: "5 Easy Wellness Habits To Try In 2025",
      excerpt:
        "As we enter 2025, it's a great time to focus on simple and effective wellness habits to improve physical and mental health.",
      date: "January 1, 2025",
      link: "https://www.vogue.com/article/5-easy-wellness-habits-2025",
      image: "https://source.unsplash.com/800x600/?meditation,health",
    },
    {
      title: "Preventative Wellness Could Be the Key to Beating Burnout This Year",
      excerpt:
        "Preventative wellness involves proactive measures to maintain health and prevent disease rather than reacting to symptoms after they arise.",
      date: "December 15, 2024",
      link: "https://www.dailytelegraph.com.au/lifestyle/preventative-wellness-burnout/news-story/19dbc0702939c5755db9431456a5a0a9",
      image: "https://source.unsplash.com/800x600/?relaxation,mindfulness",
    },
    {
      title: "I'm a Wellness Writer - Here Are the 2025 Trends to Skip and What to Try Instead",
      excerpt:
        "In 2025, the wellness industry is buzzing with various trends, making it challenging to distinguish effective methods from gimmicks.",
      date: "January 7, 2025",
      link: "https://nypost.com/2025/01/07/lifestyle/2025-wellness-trends-to-skip-and-what-to-try-instead-per-experts/",
      image: "https://source.unsplash.com/800x600/?fitness,healthy",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} // Apply text color based on theme
    >
      <h1 className="text-4xl font-bold text-center mb-8">Wellness Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Consider adding Framer Motion stagger to this container */}
        {articles.map((article, index) => (
          <ArticlePreview key={index} {...article} />
        ))}
      </div>
    </motion.div>
  );
};

export default Articles;
