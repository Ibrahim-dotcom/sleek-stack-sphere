
import React, { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Here you'll find more about me, what I do, and my current skills in terms of programming and technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Get to know me!</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a <strong className="text-foreground">Fullstack Web Developer</strong> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <a href="#projects" className="text-primary hover:underline">Projects</a> section.
                </p>
                <p>
                  I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to connect or follow me on my <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Linkedin</a> where I post useful content related to Web Development and Programming.
                </p>
                <p>
                  I'm open to <strong className="text-foreground">Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="#contact" className="text-primary hover:underline">contact</a> me.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">My Background</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="text-sm text-primary">2022 - Present</p>
                  <h4 className="font-bold">Senior Fullstack Developer</h4>
                  <p className="text-muted-foreground">Tech Innovations Inc.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="text-sm text-primary">2020 - 2022</p>
                  <h4 className="font-bold">Frontend Developer</h4>
                  <p className="text-muted-foreground">Creative Digital Agency</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="text-sm text-primary">2018 - 2020</p>
                  <h4 className="font-bold">Junior Web Developer</h4>
                  <p className="text-muted-foreground">Startup Ventures</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="text-sm text-primary">2018</p>
                  <h4 className="font-bold">Computer Science, BSc</h4>
                  <p className="text-muted-foreground">University of Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
