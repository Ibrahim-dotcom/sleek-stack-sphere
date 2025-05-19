import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';

const timelineItems = [
  {
    year: "2023 - Present",
    title: "Full Stack Developer",
    company: "Adroit Solutions Ltd",
    description: "Spearheaded frontend efforts for mission-critical web apps, created and maintained REST APIs with Django, and designed real-time transaction features using Server-Sent Events (SSE).",
    technologies: ["React", "Django", "TailwindCSS", "PostgreSQL", "SSE"]
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Freelance Software Developer",
    description: "Launched cross-platform apps, delivered tailored business solutions for SMEs, and engineered an internal document search tool with fast indexing.",
    technologies: ["React", "Django", "C#", "API Integration"]
  },
  {
    year: "2020",
    title: "Full Stack Data Engineer",
    company: "Personal Project",
    description: "Built an asynchronous web scraping pipeline, leveraged aiohttp and asyncio for parallel data extraction, and developed genre-based classification models.",
    technologies: ["Python", "aiohttp", "scikit-learn", "Plotly", "Matplotlib"]
  },
  {
    year: "Current",
    title: "Bachelor's Degree in Computer Science",
    company: "",
    description: "Studying Computer Science with a focus on software engineering and web development technologies.",
    technologies: ["Algorithms", "Data Structures", "Software Engineering"]
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
