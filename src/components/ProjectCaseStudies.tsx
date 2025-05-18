
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: "Redesigning the E-Commerce Experience",
    description: "A comprehensive case study on improving the user experience and conversion rates for an online retail platform.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "redesigning-ecommerce-experience",
    categories: ["UX Design", "Frontend", "E-Commerce"]
  },
  {
    id: 2,
    title: "Building a Real-time Chat Application",
    description: "How I developed a scalable real-time chat platform using WebSockets, React, and Node.js.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "building-realtime-chat-app",
    categories: ["WebSockets", "React", "Node.js"]
  },
];

const CaseStudyCard = ({ study, isEven }) => {
  const [ref, inView] = React.useState({ current: null });
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <Card className="overflow-hidden border-none shadow-none bg-transparent">
      <div 
        ref={(el) => (ref.current = el)}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          isEven ? 'md:flex-row-reverse' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl aspect-video"
        >
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {study.categories.map(category => (
              <span key={category} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
          <p className="text-muted-foreground mb-6">{study.description}</p>
          
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to={`/case-study/${study.slug}`}>
              View Case Study
              <ArrowUpRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Card>
  );
};

const ProjectCaseStudies = () => {
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
    <section id="case-studies" className="py-16 md:py-24">
      <div className="section-container">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Detailed insights into selected projects and their development process
          </p>
          
          <div className="space-y-24 mt-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} isEven={index % 2 !== 0} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudies;
