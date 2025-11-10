import React from 'react'
import { motion } from "framer-motion";
function Project() {
      const projects = [

    {
      name: "Todo List",
      image: "/project1.jpg",
      link: "https://github.com/Basit71/To-do-list.git",
    },
    {
      name: "Shoe-commerce UI",
      image: "/project2.jpg",
      link: "https://e-commarce-g7zo.vercel.app/",
    },
    
  ];
  return (
 <>
     <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-6 pt-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.name}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
 </>
  )
}

export default Project