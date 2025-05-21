
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Extended case studies data
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
  {
    id: 3,
    title: "Optimizing Database Performance",
    description: "A deep dive into database optimization techniques that improved query performance by 300% for a high-traffic web application.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "database-optimization",
    categories: ["Backend", "Database", "Performance"]
  },
  {
    id: 4,
    title: "Mobile-First Design Process",
    description: "How I approached designing and developing a responsive web application with a mobile-first methodology.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "mobile-first-design",
    categories: ["UI Design", "Responsive", "CSS"]
  },
  {
    id: 5,
    title: "Building an Accessible Design System",
    description: "Creating a component library that prioritizes accessibility and consistent user experiences across multiple applications.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    slug: "accessible-design-system",
    categories: ["Accessibility", "Design System", "Component Library"]
  }
];

const CaseStudyCard = ({ study, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16"
    >
      <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
        <div className="md:flex">
          <div className="md:w-2/5 h-64 md:h-auto relative">
            <img 
              src={study.image} 
              alt={study.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
          </div>
          
          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {study.categories.map(category => (
                <span key={category} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                  {category}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
            <p className="text-muted-foreground mb-6">{study.description}</p>
            
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to={`/case-study/${study.slug}`}>
                View Case Study
                <ArrowUpRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AllCaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="section-container py-16 md:py-24 mt-16">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" asChild className="mr-4">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <h1 className="text-4xl font-bold mb-6">All Case Studies</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Detailed insights into selected projects and their development process.
        </p>
        
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllCaseStudies;
