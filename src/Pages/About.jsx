import React from 'react'
import { motion } from "framer-motion";
function About() {
  return (
<>
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-6 pt-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
      >
        About <span className="text-blue-600">Me</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
      >
        I’m currently pursuing my{" "}
        <span className="text-blue-600 font-semibold">Bachelor’s in Software Engineering</span> 
        from <span className="font-semibold text-gray-800">Abasyn University Islamabad Campus (AUIC)</span>.{" "}
        I’m in my <span className="text-blue-600 font-semibold">third semester</span> and passionate about learning 
        new technologies, building modern web applications, and improving my front-end development skills.
      </motion.p>

      {/* Optional divider or accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 w-24 h-1 bg-blue-600 rounded-full"
      ></motion.div>
    </section>

</>
  )
}

export default About