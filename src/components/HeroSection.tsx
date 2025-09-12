import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Sparkles, Code, Palette, Globe, Star, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import shreyasProfile from '@/assets/shreyas-profile.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { icon: Code, label: 'Development', color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, label: 'UI/UX Design', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, label: 'Web Solutions', color: 'from-green-500 to-emerald-500' },
  ];

  const achievements = [
    { number: '2+', label: 'Years Exp.', icon: Star },
    { number: '15+', label: 'Projects', icon: Zap },
    { number: '100%', label: 'Satisfaction', icon: Sparkles },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Modern Gradient Background with Glass Effect */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5"></div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl rotate-12 animate-pulse blur-sm"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(12deg)` 
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-primary-glow/40 to-primary/30 rounded-full animate-bounce"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            animationDelay: '0.5s'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-2xl rotate-45 animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.4}px, ${-mousePosition.y * 0.4}px) rotate(45deg)`,
            animationDelay: '1s'
          }}
        ></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
          {/* Left side - Enhanced Text content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 pt-20">
            {/* Status Badge */}
            <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 px-4 py-2 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </Badge>
            </div>

            {/* Main Heading with Stagger Animation */}
            <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-4">
                <span className="text-white/90 text-lg md:text-xl font-medium flex items-center justify-center lg:justify-start gap-2">
                  <span className="animate-bounce">👋</span>
                  Hello, I'm
                </span>
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-[0.9] tracking-tight">
                Shreyas
                <span className="block text-3xl md:text-5xl lg:text-6xl text-white/90 font-light mt-2">
                  Web Developer &
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-light">
                  UI/UX Designer
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className={`mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl leading-relaxed font-light">
                Crafting <span className="text-white font-medium">pixel-perfect</span> digital experiences 
                that blend stunning visuals with seamless functionality.
              </p>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className={`p-1 rounded-full bg-gradient-to-r ${skill.color}`}>
                      <skill.icon className="h-3 w-3 text-white" />
                    </div>
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Modern CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                onClick={scrollToPortfolio}
                size="lg"
                className="group bg-white text-primary hover:bg-white/95 hover:shadow-2xl hover:shadow-white/25 transition-all duration-500 font-semibold px-8 py-4 rounded-2xl relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:shadow-xl hover:shadow-white/10 transition-all duration-500 font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </Button>
            </div>

            {/* Modern Stats Cards */}
            <div className={`grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {achievements.map((stat, index) => (
                <div key={stat.label} className="group relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 text-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-default">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-4 w-4 text-white/80 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-white/70 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Enhanced Profile Section */}
          <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-primary-glow/30 to-accent/40 rounded-full blur-3xl opacity-60 scale-110 animate-pulse"></div>
              
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Profile Image with Modern Border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <img 
                    src={shreyasProfile} 
                    alt="Shreyas - Web Developer & UI/UX Designer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"></div>
                </div>
                
                {/* Floating Status Card */}
                <div className="absolute -top-6 -left-6 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl hover:bg-white/20 transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-white font-medium text-sm">Available</div>
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -top-4 -right-8 bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-4 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-xs font-medium opacity-90">Years<br/>Experience</div>
                  </div>
                </div>
                
                {/* Skills Orbit */}
                <div className="absolute -bottom-8 -left-8 bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/30 shadow-xl hover:bg-white/20 transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-medium">Developer</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-12 bg-white/15 backdrop-blur-md rounded-2xl p-3 border border-white/30 shadow-xl hover:bg-white/20 transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-medium">Designer</span>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-1/4 -right-4 w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 -left-4 w-4 h-4 bg-gradient-to-br from-accent to-primary-glow rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="group cursor-pointer" onClick={scrollToPortfolio}>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/70 text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors duration-300">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/70 transition-all duration-300 bg-white/5 backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;