
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://project1.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop interface, and task categorization.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://project2.example.com",
    githubUrl: "https://github.com/yourusername/task-manager"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media analytics with customizable widgets, data visualization, and automated reporting.",
    technologies: ["React", "Next.js", "GraphQL", "Prisma", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://project3.example.com",
    githubUrl: "https://github.com/yourusername/social-dashboard"
  }
];

const Projects = () => {
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
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are a few projects I've worked on recently. Want to see more? <a href="#contact" className="text-primary hover:underline">Contact me</a>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden card-hover border border-border">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-secondary text-xs font-medium px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
