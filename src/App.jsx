import React from 'react'
import Navbar from './Pages/Navbar'
import Skills from './Pages/Skills'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}

export default App