
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animation
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('is-visible');
        }
      });
    };
    
    // Run once on mount
    animateElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
    
    return () => {
      window.removeEventListener('scroll', animateElements);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
