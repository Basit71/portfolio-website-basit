import React from 'react'
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub , FaFacebook } from "react-icons/fa";
function Footer() {
  return (
<>
    <footer id="contact" className="bg-white border-t border-gray-200 py-10 px-6 text-center">
      {/* Contact text */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-gray-800 mb-4"
      >
        You can contact me on
      </motion.h3>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center space-x-6 mb-6"
      >
        <a
          href="https://www.instagram.com/sheikhbasit_19/?igsh=MXRuenppM2wwaTUzMA%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-600 transition text-3xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/1FfUiGCgm4/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition text-3xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/basit-rehman-a95344346/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Basit71"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition text-3xl"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Restricted notice */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-sm text-gray-500"
      >
        Restricted © {new Date().getFullYear()} | All Rights Reserved
      </motion.p>
    </footer>


</>
  )
}

export default Footer