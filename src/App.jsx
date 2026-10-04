import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Global listener: clicking any Contact button or link directly opens email mailto
    const handleContactClick = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        const text = (target.textContent || '').trim().toLowerCase();
        const href = (target.getAttribute('href') || '').toLowerCase();
        if (text === 'contact' || href === '#contact') {
          e.preventDefault();
          window.location.href = 'mailto:nancyyy1405@gmail.com';
        }
      }
    };

    document.addEventListener('click', handleContactClick);
    return () => document.removeEventListener('click', handleContactClick);
  }, []);

  return (
    <div className="portfolio-app">
      <Preloader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Footer />
    </div>
  );
}
