import { Heart, Code, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/_shreyas.__7/?utm_source=qr&igsh=OXg0MjViaTNrMGE4#",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl bg-text-gradient bg-clip-text text-transparent">
              Shreyas
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Web Developer & UI/UX Designer creating beautiful, 
              functional digital experiences that make a difference.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>by Shreyas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">
              Let's Connect
            </h4>
            <p className="text-muted-foreground text-sm">
              Follow me on social media for updates on my latest projects and insights.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-background rounded-lg hover:bg-hero-gradient hover:text-white transition-all duration-300 hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Shreyas. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;