import React from 'react';
import { motion } from "framer-motion"; 

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-white text-center md:text-left px-6 pt-20"
    >
      {/* Left side: Text content */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-gray-800"
        >
          Hi, I'm <span className="text-blue-600">Basit Rehman</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-gray-600 max-w-2xl"
        >
          I’m a <span className="text-blue-600 font-semibold">Web Developer</span> and{" "}
          <span className="text-blue-600 font-semibold">Front-End Developer</span> passionate about creating clean, responsive, and user-friendly websites.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View My Work
        </motion.a>
      </div>

      {/* Right side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="basit.jpg" // ✅ Use imported image
          alt="Basit Rehman"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-2 border-blue-500"
        />
      </motion.div>
    </section>
  );
}

export default Home;