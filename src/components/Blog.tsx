
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Best Practices for React Performance Optimization",
    excerpt: "Learn how to optimize your React applications for better performance with these practical tips and techniques.",
    date: "May 12, 2025",
    readTime: "8 min read",
    category: "React",
    slug: "react-performance-optimization",
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "A comprehensive guide to help JavaScript developers get started with TypeScript and leverage its powerful type system.",
    date: "Apr 28, 2025",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "typescript-for-javascript-developers",
    coverImage: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Discover the architecture and patterns for building robust, maintainable APIs that can grow with your application.",
    date: "Mar 15, 2025",
    readTime: "12 min read",
    category: "Backend",
    slug: "scalable-apis-with-nodejs",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Mastering CSS Grid Layout",
    excerpt: "An in-depth tutorial on using CSS Grid to create complex, responsive layouts with minimal effort.",
    date: "Feb 22, 2025",
    readTime: "7 min read",
    category: "CSS",
    slug: "mastering-css-grid",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const BlogPost = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="blog-card h-full overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center mb-2">
            <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
            <span className="mx-2 text-xs text-muted-foreground">•</span>
            <time className="text-xs text-muted-foreground">{post.date}</time>
            <span className="mx-2 text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
          
          <Button variant="ghost" className="group p-0" asChild>
            <Link to={`/blog/${post.slug}`} className="flex items-center text-primary">
              Read more 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Blog = () => {
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
    <section id="blog" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Thoughts, insights, and tutorials on web development and design
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {blogPosts.map((post, index) => (
              <BlogPost key={post.id} post={post} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
