
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Mock data for blog posts
const blogPosts = {
  "react-performance-optimization": {
    title: "Best Practices for React Performance Optimization",
    content: `
      <p class="lead">React is a powerful library for building user interfaces, but as applications grow in complexity, performance can become a concern. In this article, we'll explore proven techniques to optimize your React applications for better performance.</p>
      
      <h2>Understanding React's Rendering Process</h2>
      <p>Before diving into optimization techniques, it's important to understand how React's rendering process works. React uses a virtual DOM to efficiently update the actual DOM. When a component's state or props change, React creates a new virtual DOM tree, compares it with the previous one (a process called "diffing"), and then updates only the parts of the actual DOM that have changed.</p>
      
      <h2>1. Use React.memo for Component Memoization</h2>
      <p>React.memo is a higher-order component that memoizes your component. This prevents unnecessary re-renders when the props haven't changed.</p>
      
      <pre><code>const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});</code></pre>
      
      <p>This is particularly useful for components that render frequently with the same props.</p>
      
      <h2>2. Optimize useState with useCallback and useMemo</h2>
      <p>Functions created inside components get recreated on each render. This can lead to unnecessary re-renders in child components that receive these functions as props. useCallback helps by memoizing the function:</p>
      
      <pre><code>const handleClick = useCallback(() => {
  console.log('Clicked!');
}, []);</code></pre>
      
      <p>Similarly, useMemo helps memoize computed values:</p>
      
      <pre><code>const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);</code></pre>
      
      <h2>3. Virtual List for Large Data Sets</h2>
      <p>When rendering large lists, consider using a virtualized list library like react-window or react-virtualized. These libraries only render what's visible to the user, significantly improving performance.</p>
      
      <h2>Conclusion</h2>
      <p>Optimizing React applications requires a solid understanding of how React works and strategic implementation of various techniques. By following these best practices, you can create React applications that not only provide a great user experience but are also performant and efficient.</p>
    `,
    publishedDate: "May 12, 2025",
    readTime: "8 min read",
    author: "John Doe",
    category: "React",
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    tags: ["React", "Performance", "Web Development", "JavaScript"]
  },
  "typescript-for-javascript-developers": {
    title: "Introduction to TypeScript for JavaScript Developers",
    content: `
      <p class="lead">TypeScript adds optional static typing to JavaScript, providing better tooling, error catching, and documentation. This guide will help JavaScript developers get started with TypeScript.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript offers several advantages over plain JavaScript:</p>
      <ul>
        <li>Static typing and type checking</li>
        <li>Better IDE support with autocompletion</li>
        <li>Easier refactoring</li>
        <li>Improved readability and documentation</li>
        <li>Earlier error detection</li>
      </ul>
      
      <h2>Getting Started with TypeScript</h2>
      <p>First, you need to install TypeScript:</p>
      
      <pre><code>npm install -g typescript</code></pre>
      
      <p>Create a simple TypeScript file (example.ts):</p>
      
      <pre><code>function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet("TypeScript");
console.log(message);</code></pre>
      
      <p>Compile your TypeScript file:</p>
      
      <pre><code>tsc example.ts</code></pre>
      
      <p>This will generate a JavaScript file that you can run with Node.js.</p>
      
      <h2>Basic Types</h2>
      <p>TypeScript supports all JavaScript types plus additional ones:</p>
      
      <pre><code>// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Any and unknown
let notSure: any = 4;
let uncertain: unknown = 4;

// Void, null, and undefined
function warnUser(): void {
  console.log("Warning!");
}
let n: null = null;
let u: undefined = undefined;</code></pre>
      
      <h2>Interfaces and Types</h2>
      <p>TypeScript allows you to define custom types:</p>
      
      <pre><code>interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only property
}

type Point = {
  x: number;
  y: number;
};</code></pre>
      
      <h2>Conclusion</h2>
      <p>TypeScript is a powerful superset of JavaScript that can significantly improve your development experience. By adding static typing, it helps catch errors early, improves IDE support, and makes your code more maintainable. As a JavaScript developer, investing time in learning TypeScript will pay dividends in the form of more robust and maintainable code.</p>
    `,
    publishedDate: "Apr 28, 2025",
    readTime: "10 min read",
    author: "John Doe",
    category: "TypeScript",
    coverImage: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    tags: ["TypeScript", "JavaScript", "Web Development", "Programming"]
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as string];
  
  if (!post) {
    return (
      <>
        <Nav />
        <div className="section-container py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/#blog">Return to Blog</Link>
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
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/#blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </Button>
          
          {/* Cover image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Post header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.publishedDate}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </header>
          
          {/* Post content */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-p:text-muted-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          
          {/* Tags */}
          <div className="mt-10 pt-6 border-t">
            <h3 className="font-medium mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
