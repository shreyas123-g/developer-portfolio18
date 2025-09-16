import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Linkedin, Github, Instagram, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init("Q7HffJR7NHEG5Qnho");

      const templateParams = {
        from_first_name: formData.firstName,
        from_last_name: formData.lastName,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Shreyas",
      };

      await emailjs.send(
        "service_769btpq",
        "template_ndtr6nn",
        templateParams
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9686644200",
      href: "tel:+919686644200",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Mail,
      label: "Email",
      value: "gowdashreyas136@gmail.com",
      href: "mailto:gowdashreyas136@gmail.com",
      color: "from-secondary to-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ujire, Karnataka, India",
      href: "#",
      color: "from-accent to-primary",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shreyas-0b8129333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/shreyas123-g",
      color: "hover:text-gray-800",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/_shreyas.__7/?utm_source=qr&igsh=OXg0MjViaTNrMGE4#",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-text-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-2xl mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with passionate people. 
                Whether you have a question, want to discuss a project, or just want to say hello, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border hover:border-primary/20">
                  <CardContent className="p-6">
                    <a href={contact.href} className="flex items-center space-x-4 group-hover:text-primary transition-colors">
                      <div className={`p-3 bg-gradient-to-br ${contact.color} rounded-lg group-hover:shadow-glow transition-all duration-300`}>
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-lg mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-muted rounded-lg hover:shadow-glow transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-card-hover transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-display font-semibold text-2xl mb-6 text-foreground">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name" 
                      className="border-2 focus:border-primary transition-colors"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name" 
                      className="border-2 focus:border-primary transition-colors"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    className="border-2 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                    className="border-2 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="border-2 focus:border-primary transition-colors resize-none"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-hero-gradient hover:shadow-glow-lg transition-all duration-300 font-semibold py-3"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;