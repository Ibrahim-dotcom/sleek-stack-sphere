
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeViewer = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/ibrahim_olawale_resume.pdf';
    link.download = 'ibrahim_olawale_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          My professional background and qualifications
        </p>
        
        <div className="mt-8 flex flex-col items-center">
          <Card className="w-full max-w-3xl shadow-lg">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Ibrahim Olawale</h3>
                <p className="text-muted-foreground">
                  Frontend & Full Stack Developer | React, Django, Python, JavaScript
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-bold text-lg">Summary</h4>
                  <p className="text-sm text-muted-foreground">
                    Results-driven Full Stack Developer with 4+ years of professional experience building high-impact web applications using React, Django, JavaScript, and Python. Proven expertise in delivering scalable software, intuitive user interfaces, and robust backend systems.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg">Technical Skills</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    <li><span className="font-medium text-foreground">Frontend:</span> React.js, JavaScript (ES6+), TypeScript, Redux, Tailwind CSS</li>
                    <li><span className="font-medium text-foreground">Backend:</span> Python, Django REST Framework, Node.js, MySQL, PostgreSQL</li>
                    <li><span className="font-medium text-foreground">DevOps/Tools:</span> Git, GitHub, Docker, Postman, VSCode</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg">Education</h4>
                  <p className="text-sm">
                    <span className="font-medium">B.Sc. Computer Science</span> - University Of Lagos (UNILAG), Nigeria
                  </p>
                  <p className="text-xs text-muted-foreground">Expected Graduation: 2024, July</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Resume
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Click the button above to download the complete resume in PDF format.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
