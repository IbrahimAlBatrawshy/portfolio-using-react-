import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Silk from './components/Silk';

function App() {
  return (
    <div className="font-sans text-gray-200 min-h-screen selection:bg-primary/30 selection:text-white pb-0 relative z-0">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -10, pointerEvents: 'none' }}>
        <Silk
          speed={5}
          scale={2}
          color="#3b00ff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
