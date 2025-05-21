
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Mock data for case studies
const caseStudies = {
  "redesigning-ecommerce-experience": {
    title: "Redesigning the E-Commerce Experience",
    overview: "A comprehensive case study on improving the user experience and conversion rates for an online retail platform.",
    client: "FashionRetail Inc.",
    duration: "3 months",
    role: "Lead Frontend Developer & UX Consultant",
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    projectImages: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    problem: "FashionRetail was experiencing high cart abandonment rates (75%) and low mobile conversion rates. The site was slow, had a confusing checkout process, and lacked modern UX patterns that customers expected.",
    approach: "I began with comprehensive user research, including interviews, analytics analysis, and usability testing. I identified key pain points and opportunities for improvement. Working closely with stakeholders, I created a new design system and component library focused on performance and usability.",
    solution: "Implementing a React-based frontend with server-side rendering for performance, I redesigned the product browsing, cart, and checkout experiences. Key features included a streamlined one-page checkout, persistent shopping cart, improved product filtering, and mobile-optimized navigation.",
    results: [
      "40% reduction in cart abandonment rate",
      "65% increase in mobile conversions",
      "25% increase in average order value",
      "50% improvement in page load times",
      "Greatly improved user satisfaction scores"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Redux", "GraphQL", "Storybook", "Jest"],
    liveUrl: "https://fashionretail-example.com",
    testimonial: {
      quote: "Working with Ibrahim transformed our e-commerce platform. The new design is beautiful, intuitive, and has dramatically improved our conversion rates. Our customers love the new experience.",
      author: "Sarah Johnson",
      role: "Head of Digital, FashionRetail Inc."
    }
  },
  "building-realtime-chat-app": {
    title: "Building a Real-time Chat Application",
    overview: "How I developed a scalable real-time chat platform using WebSockets, React, and Node.js.",
    client: "ConnectApp Inc.",
    duration: "4 months",
    role: "Fullstack Developer",
    year: "2023",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    projectImages: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611746869696-b2761ccb9fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565688710571-7f95a5488a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    problem: "ConnectApp needed a real-time chat solution that could scale to support thousands of concurrent users while maintaining low latency. They also required features like message history, group chats, and end-to-end encryption.",
    approach: "I implemented a WebSocket-based architecture with horizontal scaling capabilities. The approach included separating the concerns between connection management, message routing, and persistence layers to ensure optimal performance.",
    solution: "The solution consisted of a React frontend with a clean, intuitive UI and a Node.js backend using Socket.io for real-time communication. I implemented a microservice architecture with Redis for pub/sub messaging between server instances, MongoDB for message persistence, and Docker for containerization.",
    results: [
      "Successfully scaled to 10,000+ concurrent users",
      "Average message delivery time under 100ms",
      "99.99% uptime since deployment",
      "Seamless mobile and desktop experience",
      "Comprehensive analytics and monitoring"
    ],
    technologies: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "Docker", "TypeScript", "Jest"],
    liveUrl: "https://connectapp-example.com",
    testimonial: {
      quote: "Ibrahim delivered a rock-solid chat platform that exceeded our expectations. The architecture he designed has allowed us to scale effortlessly as our user base grows.",
      author: "Michael Chen",
      role: "CTO, ConnectApp Inc."
    }
  }
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies[slug as string];
  
  if (!study) {
    return (
      <>
        <Nav />
        <div className="section-container py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
          <p className="mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/#case-studies">Return to Case Studies</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/#case-studies" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all case studies
            </Link>
          </Button>
          
          {/* Hero section */}
          <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
            <img 
              src={study.coverImage} 
              alt={study.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 md:p-12 w-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{study.title}</h1>
                <p className="text-white/90 text-lg max-w-2xl">{study.overview}</p>
              </div>
            </div>
          </div>
          
          {/* Project details */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h2 className="font-medium text-muted-foreground mb-2">Client</h2>
              <p className="font-bold">{study.client}</p>
            </div>
            <div>
              <h2 className="font-medium text-muted-foreground mb-2">Timeline</h2>
              <p className="font-bold">{study.duration} ({study.year})</p>
            </div>
            <div>
              <h2 className="font-medium text-muted-foreground mb-2">My Role</h2>
              <p className="font-bold">{study.role}</p>
            </div>
            <div>
              <h2 className="font-medium text-muted-foreground mb-2">Live Project</h2>
              <a 
                href={study.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-primary flex items-center hover:underline"
              >
                View Website
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Content tabs */}
          <Tabs defaultValue="overview" className="mb-16">
            <TabsList className="grid w-full sm:w-auto sm:inline-grid grid-cols-4 sm:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="prose prose-lg max-w-none dark:prose-invert">
              <h2>Project Overview</h2>
              <p>{study.overview}</p>
              <h3>The Challenge</h3>
              <p>{study.problem}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose my-8">
                {study.projectImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={image} 
                      alt={`${study.title} screenshot ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Process</h2>
              <p>{study.approach}</p>
              <h3>Technologies Used</h3>
              <div className="flex flex-wrap gap-2 not-prose mb-8">
                {study.technologies.map(tech => (
                  <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="solution" className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Solution</h2>
              <p>{study.solution}</p>
              <div className="bg-secondary/50 p-6 rounded-xl my-8 not-prose">
                <div className="flex items-start">
                  <div className="text-4xl font-bold text-primary mr-4">"</div>
                  <div>
                    <p className="text-lg font-medium italic">{study.testimonial.quote}</p>
                    <div className="mt-4">
                      <p className="font-bold">{study.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="results" className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Results</h2>
              <ul>
                {study.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit Live Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudy;
