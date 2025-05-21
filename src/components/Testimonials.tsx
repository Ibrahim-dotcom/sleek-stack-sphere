
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Ibrahim is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are impressive. He communicated effectively throughout the process and was always open to feedback.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupX",
    content: "Working with Ibrahim was a pleasure. He quickly understood our requirements and translated them into a beautiful, functional website. His technical expertise and creative approach helped us achieve exactly what we were looking for.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director at CreativeStudio",
    content: "Ibrahim's ability to translate our design concepts into fully functional interfaces is remarkable. He has a keen eye for detail and always found ways to improve the user experience without compromising the design integrity.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder at TechStart",
    content: "We hired Ibrahim to rebuild our outdated website, and the results exceeded our expectations. He not only delivered a modern, responsive design but also improved our site's performance significantly. His work has directly contributed to an increase in user engagement.",
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = React.useState({ current: null });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
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
    <motion.div
      ref={(el) => (ref.current = el)}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="testimonial-card h-full flex flex-col">
        <Quote className="h-8 w-8 text-primary/40 mb-4" />
        <p className="text-foreground/90 mb-6 flex-grow">{testimonial.content}</p>
        <div className="flex items-center mt-4">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-lg">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Testimonials = () => {
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
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            Here's what people are saying about working with me
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
