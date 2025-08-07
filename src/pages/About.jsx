import React from "react"
import { motion } from "framer-motion"
// Define animation variants for the main container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
}

// About component
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      variants={containerVariants}
    >
      {/* Animated title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About WellnessApp
      </motion.h1>
      {/* Animated content block */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.p
          // Animated paragraph 1
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          WellnessApp is dedicated to helping you improve your mental and physical health. Our mission is to provide
          accessible, high-quality resources and information to support your wellness journey.
        </motion.p>
        {/* Animated paragraph 2 */}
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Founded in 2023, our team of health professionals and wellness experts work tirelessly to bring you the latest
          research, techniques, and practices in the field of holistic health.
        {/* Animated subheading */}
        </motion.p>
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Our Values
        </motion.h2>
        {/* Animated list */}
        <motion.ul
          className="list-disc list-inside text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}>
            {/* Animated list item */}
            Evidence-based approach to wellness
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}>
            {/* Animated list item */}
            Inclusivity and accessibility for all
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }}>
            {/* Animated list item */}
            Continuous learning and improvement
          </motion.li>
          <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }}>
            {/* Animated list item */}
            Empowering individuals to take control of their health
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}
export default About

