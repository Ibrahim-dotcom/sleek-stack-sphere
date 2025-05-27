
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser'; 


const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Prepare the email parameters
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
    };

    emailjs.send(
      'service_0if2hwq',
      'template_pw2s0ch',
      templateParams,
      'BCsXF6x2L1ijiAX1P'
    )
      .then((result) => {  console.log(result.text);
            toast({
              title: "Message sent!",
              description: "Thanks for reaching out. I'll get back to you soon.",
            });            
            setFormState({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
      
            setIsSubmitting(false);
          }, (error) => {
            console.log(error.text);
            toast({
              title: "Failed To send message!",
              description: "please try again or contact us through other means on this contact page",
            });  

          });
    
  };
  
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-muted-foreground">ibrahimolawale580@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Send me an email anytime!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-muted-foreground">+234 909 108 2232</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri from 9am to 5pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-muted-foreground">Lagos, Nigeria</p>
                  <p className="text-sm text-muted-foreground">Working remotely worldwide</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
