import React from "react"
import { motion } from "framer-motion"

// Component to display a single video with title, description, and an embedded player
const Video = ({ title, description, videoUrl }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-md"
        ></iframe>
      </div>
    </motion.div>
  )
}

export default Video

