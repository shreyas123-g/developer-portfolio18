import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Sparkles, Code, Palette, Globe, Star, Zap, Play, Coffee, Lightbulb, Heart, Rocket, Target, Users, Award, TrendingUp } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import shreyasProfile from '@/assets/shreyas-profile-new.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [typedText, setTypedText] = useState('');
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, size: number}>>([]);
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, rotation: number, scale: number}>>([]);
  const [scrollY, setScrollY] = useState(0);

  const typewriterText = "Creating digital magic, one pixel at a time ✨";
  const rotatingTexts = ["Innovative", "Creative", "Modern", "Responsive"];
  const [currentRotatingIndex, setCurrentRotatingIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate enhanced particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1
    }));
    setParticles(newParticles);

    // Generate floating elements
    const newFloatingElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5
    }));
    setFloatingElements(newFloatingElements);

    // Update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Rotating text effect
    const rotatingInterval = setInterval(() => {
      setCurrentRotatingIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    // Typewriter effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= typewriterText.length) {
        setTypedText(typewriterText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
      clearInterval(typeInterval);
      clearInterval(rotatingInterval);
    };
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

  const techStack = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'Figma'];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Advanced Gradient Background with Multiple Layers */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/5 to-secondary/10"></div>
      
      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/40 animate-pulse blur-[0.5px]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translate(${mousePosition.x * particle.size * 0.1}px, ${mousePosition.y * particle.size * 0.1}px)`,
            }}
          />
        ))}
        
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-8 h-8 opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) rotate(${element.rotation + scrollY * 0.1}deg) scale(${element.scale})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 rounded-lg backdrop-blur-sm animate-pulse"></div>
          </div>
        ))}
      </div>
      
      {/* Enhanced Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes with Enhanced Animation */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl rotate-12 animate-pulse blur-sm hover:blur-none transition-all duration-500"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(${12 + mousePosition.x * 0.1}deg)` 
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-primary-glow/40 to-primary/30 rounded-full animate-bounce shadow-lg shadow-primary/20"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            animationDelay: '0.5s'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-2xl rotate-45 animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.4}px, ${-mousePosition.y * 0.4}px) rotate(${45 + mousePosition.y * 0.1}deg)`,
            animationDelay: '1s'
          }}
        ></div>
        
        {/* New Floating Elements */}
        <div 
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.2}px, ${-mousePosition.y * 0.6}px)`,
            animationDelay: '1.5s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-1/3 w-12 h-12 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-lg rotate-12 animate-bounce"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.7}px, ${mousePosition.y * 0.2}px) rotate(${12 - mousePosition.x * 0.05}deg)`,
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Enhanced Grid Pattern with Animation */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full animate-pulse" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animationDuration: '4s'
          }}></div>
        </div>

        {/* Floating Code Snippets Effect */}
        <div className="absolute top-1/4 right-1/4 opacity-20 text-white/50 font-mono text-xs animate-pulse">
          &lt;code/&gt;
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-20 text-white/50 font-mono text-xs animate-pulse" style={{ animationDelay: '1s' }}>
          {`{ design: 'modern' }`}
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
          {/* Left side - Enhanced Text content with More Features */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 pt-20">
            
            {/* Time & Location Badge */}
            <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 px-3 py-1.5 text-xs font-medium">
                  <Coffee className="w-3 h-3 mr-1.5" />
                  Ujire, India • {currentTime}
                </Badge>
                <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 px-3 py-1.5 text-xs font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </Badge>
              </div>
            </div>

            {/* Main Heading with Enhanced Typography */}
            <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <span className="text-white/90 text-lg md:text-xl font-medium flex items-center justify-center lg:justify-start gap-2">
                  <span className="animate-bounce">👋</span>
                  Hello, I'm
                </span>
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-[0.9] tracking-tight">
                <span className="relative inline-block">
                  Shreyas
                  <div className="absolute -inset-1 bg-white/10 blur-2xl rounded-full opacity-30 animate-pulse"></div>
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl text-white/90 font-light mt-2">
                  <span className="relative inline-block">
                    <span className="opacity-0 absolute">{rotatingTexts[0]}</span>
                    <span 
                      className="transition-all duration-500 ease-in-out"
                      key={currentRotatingIndex}
                      style={{
                        animation: 'fade-in 0.5s ease-in-out'
                      }}
                    >
                      {rotatingTexts[currentRotatingIndex]}
                    </span>
                  </span>
                  {' '}Web Developer &
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-light">
                  UI/UX Designer
                </span>
              </h1>
            </div>
            
            {/* Typewriter Effect Description */}
            <div className={`mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl md:text-2xl text-white/80 mb-2 max-w-2xl leading-relaxed font-light">
                Crafting <span className="text-white font-medium">pixel-perfect</span> digital experiences 
                that blend stunning visuals with seamless functionality.
              </p>
              
              {/* Typewriter Effect */}
              <div className="h-8 mb-6">
                <p className="text-lg text-white/70 font-light italic">
                  {typedText}
                  <span className="inline-block w-0.5 h-5 bg-white/70 ml-1 animate-pulse"></span>
                </p>
              </div>
              
              {/* Enhanced Skill Tags with Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.label}
                      className={`group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className={`p-1 rounded-full bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="h-3 w-3 text-white" />
                      </div>
                      {skill.label}
                    </div>
                  ))}
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium hover:bg-white/10 hover:text-white/80 transition-all duration-300 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${800 + index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Advanced CTA Buttons with More Features */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                onClick={scrollToPortfolio}
                size="lg"
                className="group relative bg-white text-primary hover:bg-white/95 hover:shadow-2xl hover:shadow-white/25 transition-all duration-500 font-semibold px-8 py-4 rounded-2xl overflow-hidden btn-modern"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:shadow-xl hover:shadow-white/10 transition-all duration-500 font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm btn-modern"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download CV
                <Sparkles className="ml-2 h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
              </Button>
              
              {/* New Contact Button */}
              <Button 
                variant="ghost"
                size="lg"
                className="group text-white hover:bg-white/5 hover:shadow-lg transition-all duration-300 font-medium px-6 py-4 rounded-2xl border border-white/10 hover:border-white/30"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Lightbulb className="mr-2 h-5 w-5 group-hover:text-yellow-300 transition-colors duration-300" />
                Let's Talk
              </Button>
            </div>

            {/* Enhanced Stats Cards with More Animation */}
            <div className={`grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {achievements.map((stat, index) => (
                <div key={stat.label} className="group relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 text-center hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default relative overflow-hidden">
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="h-4 w-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                      <div className="text-xs text-white/70 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Social Proof Section */}
            <div className={`mt-8 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-white/60 text-sm">
                <span>Trusted by clients worldwide</span>
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-6 h-6 bg-white/20 rounded-full border-2 border-white/30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
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
                <div className="group absolute -top-4 -right-8 bg-white/20 backdrop-blur-xl rounded-3xl p-5 border border-white/40 shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.3)] hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-default overflow-hidden">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-blue-500/30 to-purple-600/30 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                  
                  {/* Animated particles */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  
                  <div className="relative text-center text-white">
                    <div className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">2+</div>
                    <div className="text-xs font-semibold tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300">Years<br/>Experience</div>
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