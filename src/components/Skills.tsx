
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Vue", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "GraphQL", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "PHP", level: 65 },
      { name: "Python", level: 70 },
    ],
  },
  {
    id: 3,
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Jest", level: 75 },
      { name: "Figma", level: 65 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const Skills = () => {
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
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Here's a list of my skills and technologies that I've been working with recently
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card key={category.id} className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div 
                          className="h-2 bg-primary rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
