import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import shreyasProfile from '@/assets/shreyas-profile.jpg';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/30 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-primary-glow/40 animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 pt-20">
            <div className="mb-6">
              <span className="text-white/90 text-lg font-medium">👋 Hello, I'm</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Shreyas
              <span className="block text-3xl md:text-5xl lg:text-6xl text-white/90 font-normal">
                Web Developer & <br />
                UI/UX Designer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              A passionate Web Developer and UI/UX Designer dedicated to creating visually appealing, 
              user-friendly, and responsive digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow-lg transition-all duration-300 font-semibold px-8"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-semibold px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-secondary rounded-full blur-3xl opacity-60 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={shreyasProfile} 
                  alt="Shreyas - Web Developer & UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm">Years<br/>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;