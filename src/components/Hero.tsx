
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div 
          ref={sectionRef} 
          className="animate-on-scroll flex flex-col md:flex-row items-center"
        >
          <div className="md:w-3/5 mb-10 md:mb-0 md:pr-8">
            <p className="text-primary font-medium mb-3">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Ibrahim Olawale
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground mb-6">
              I build exceptional digital experiences.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              I'm a fullstack developer specializing in building exceptional digital experiences 
              with React, Django, JavaScript, and Python. Currently, I'm focused on creating accessible, 
              human-centered products.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="group">
                View My Work 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
              <div className="w-full h-full bg-primary/10 rounded-full absolute top-0 left-0 animate-pulse"></div>
              <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full absolute top-0 left-0 transform translate-x-4 translate-y-4"></div>
              <div className="w-full h-full bg-white rounded-full absolute top-0 left-0 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Ibrahim Olawale" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
