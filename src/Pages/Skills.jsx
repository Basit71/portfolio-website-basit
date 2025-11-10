import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaCuttlefish } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500 text-5xl" />,
    },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-5xl" /> },
    { name: "C++", icon: <FaCuttlefish className="text-blue-600 text-5xl" /> },
  ];
  return (
    <>
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6 pt-20"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
        >
          My <span className="text-blue-600">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 hover:bg-blue-50 border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;