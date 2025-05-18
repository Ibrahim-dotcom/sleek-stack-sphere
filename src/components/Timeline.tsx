
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';

const timelineItems = [
  {
    year: "2022 - Present",
    title: "Senior Fullstack Developer",
    company: "Tech Innovations Inc.",
    description: "Lead development of enterprise web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    company: "Creative Digital Agency",
    description: "Developed responsive web applications with modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect UIs.",
    technologies: ["Vue.js", "Nuxt.js", "CSS/SCSS", "JavaScript"]
  },
  {
    year: "2018 - 2020",
    title: "Junior Web Developer",
    company: "Startup Ventures",
    description: "Built and maintained websites for various clients. Implemented responsive designs and integrated CMS solutions.",
    technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP"]
  },
  {
    year: "2018",
    title: "Computer Science, BSc",
    company: "University of Technology",
    description: "Graduated with honors. Focus on software engineering and web development technologies.",
    technologies: ["Java", "Python", "Algorithms", "Data Structures"]
  }
];

const TimelineItem = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="timeline-item"
    >
      <span className="text-sm text-primary font-medium">{item.year}</span>
      <h3 className="text-lg font-bold mt-1">{item.title}</h3>
      <p className="text-muted-foreground font-medium">{item.company}</p>
      <p className="mt-2 mb-2">{item.description}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {item.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

const Timeline = () => {
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
    <section id="timeline" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            A timeline of my professional experience and education
          </p>
          
          <div className="max-w-3xl mx-auto mt-12">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
