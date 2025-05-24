
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import protfolio1 from '@/assets/portfolio-website-screenshot-1.png';
import protfolio2 from '@/assets/portfolio-website-screenshot-2.png';
import protfolio3 from '@/assets/portfolio-website-screenshot-4.png';

// Define project categories
const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    category: "Fullstack",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://luxe-fashion.netlify.app/",
    githubUrl: "https://github.com/ibrahim-dotcom/",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop interface, and task categorization.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555421689-491a97ff2f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://github.com/ibrahim-dotcom/",
    githubUrl: "https://github.com/ibrahim-dotcom/",
    featured: true
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media analytics with customizable widgets, data visualization, and automated reporting.",
    technologies: ["React", "Next.js", "GraphQL", "Prisma", "Chart.js"],
    category: "Fullstack",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://github.com/ibrahim-dotcom/",
    githubUrl: "https://github.com/ibrahim-dotcom/",
    featured: false
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "A cross-platform fitness application with workout tracking, nutrition planning, and progress analytics.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    category: "Mobile",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://github.com/ibrahim-dotcom/",
    githubUrl: "https://github.com/ibrahim-dotcom/",
    featured: false
  },
  {
    id: 5,
    title: "API Gateway Service",
    description: "A microservice API gateway that handles authentication, rate limiting, and request routing for a distributed system.",
    technologies: ["Node.js", "Express", "Docker", "Redis", "JWT"],
    category: "Backend",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    liveUrl: "https://github.com/ibrahim-dotcom/",
    githubUrl: "https://github.com/ibrahim-dotcom/",
    featured: true
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern design principles.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "Frontend",
    imageUrl: "https://images.unsplash.com/photo-1517180452301-3fbfa84790c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      protfolio1,
      protfolio2,
      protfolio3
    ],
    liveUrl: "https://ibrahimolawale.netlify.app/",
    githubUrl: "https://github.com/ibrahim-dotcom/",
    featured: false
  }
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);
  
  return (
    <Card className="project-card h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        {project.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`${project.title} screenshot ${index + 1}`} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        ))}
        <div className="absolute bottom-2 right-2 flex space-x-1">
          {project.images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.featured && (
            <Badge variant="secondary">Featured</Badge>
          )}
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-secondary text-xs font-medium px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
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
  
  // Filter projects by category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeCategory);
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some projects I've worked on recently. Want to see more? <a href="#contact" className="text-primary hover:underline">Contact me</a>.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects grid with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <p className="text-center py-10 text-muted-foreground">
              No projects found in this category. <Button variant="link" onClick={() => setActiveCategory('All')}>View all projects</Button>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
