import React from "react"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-8">About WellnessApp</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          WellnessApp is dedicated to helping you improve your mental and physical health. Our mission is to provide
          accessible, high-quality resources and information to support your wellness journey.
        </p>
        <p className="text-gray-600 mb-4">
          Founded in 2023, our team of health professionals and wellness experts work tirelessly to bring you the latest
          research, techniques, and practices in the field of holistic health.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Evidence-based approach to wellness</li>
          <li>Inclusivity and accessibility for all</li>
          <li>Continuous learning and improvement</li>
          <li>Empowering individuals to take control of their health</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default About

