
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import ProjectCaseStudies from '@/components/ProjectCaseStudies';
import Timeline from '@/components/Timeline';

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  
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
  
  // Prevent hydration mismatch
  if (!mounted) return <div className="min-h-screen bg-background"></div>;
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <ProjectCaseStudies />
      <Skills />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
