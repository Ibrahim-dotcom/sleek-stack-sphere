
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-6">
            <a 
              href="https://github.com/Ibrahim-dotcom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ibrahim-olawale-8a8228214/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a 
                  href="#home" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Ibrahim Olawale. All Rights Reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
