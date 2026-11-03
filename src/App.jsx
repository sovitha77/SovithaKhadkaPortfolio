import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;