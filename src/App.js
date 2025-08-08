import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/Allproject';
import Testimonials from './components/Testimonials'
import Signin from './components/Signin'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {/* Home route with all sections */}
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Services />
                <Team />
                <Testimonials />
                <About />
                <Contact />
                {/* <Signin/> */}
              </>
            } />
            
            {/* All Projects route */}
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;