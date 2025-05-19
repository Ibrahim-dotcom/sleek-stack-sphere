
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
                  I'm a <strong className="text-foreground">Full Stack Developer</strong> with 5+ years of experience developing production-grade applications using React, Django, JavaScript, and Python. I specialize in building exceptional digital experiences that lead to the success of the overall product.
                </p>
                <p>
                  I've designed scalable frontends and resilient backend systems for data-heavy platforms serving over 1,000 users. Check out some of my work in the <a href="#projects" className="text-primary hover:underline">Projects</a> section.
                </p>
                <p>
                  I like sharing content related to web development to help other developers. Feel free to connect or follow me on my <a href="https://www.linkedin.com/in/ibrahim-olawale-8a8228214/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a> where I post useful content related to Web Development.
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
                  <p className="text-sm text-primary">2023 - Present</p>
                  <h4 className="font-bold">Full Stack Developer</h4>
                  <p className="text-muted-foreground">Adroit Solutions Ltd</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="text-sm text-primary">2021 - 2023</p>
                  <h4 className="font-bold">Full Stack Developer</h4>
                  <p className="text-muted-foreground">Freelance Software Developer</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="text-sm text-primary">2020</p>
                  <h4 className="font-bold">Full Stack Data Engineer</h4>
                  <p className="text-muted-foreground">Personal Project</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="text-sm text-primary">Education</p>
                  <h4 className="font-bold">Bachelor's Degree in Computer Science</h4>
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
