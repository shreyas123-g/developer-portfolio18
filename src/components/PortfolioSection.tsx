import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import secureWallet from '@/assets/secure-wallet.jpg';
import carPricePrediction from '@/assets/car-price-prediction.jpg';
import jobTracker from '@/assets/job-tracker.jpg';
import placementPrediction from '@/assets/placement-prediction.jpg';
import aiResumeBuilder from '@/assets/ai-resume-builder.jpg';
import cinemateBooking from '@/assets/cinemate-booking.jpg';
import weatherApp from '@/assets/weather-app.jpg';
import netflixTvgo from '@/assets/netflix-tvgo.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Cinema TVGo - Streaming Platform",
      description: "An AI-powered Netflix-style streaming platform that delivers personalized movie and TV show recommendations using machine learning algorithms. Features intelligent content curation, trending analytics, user preference learning, watchlist management, and a sleek dark-themed UI for an immersive viewing experience.",
      image: netflixTvgo,
      technologies: ["Python", "AI/ML", "Data Analytics", "UI/UX Design"],
      liveUrl: "https://netflix-application-cinema-tvgo.vercel.app/",
      githubUrl: "https://netflix-application-cinema-tvgo.vercel.app/",
      featured: true,
    },
    {
      title: "AI Weather Forecast App",
      description: "An AI-powered weather forecasting application that provides real-time weather updates, 7-day forecasts, and intelligent climate analytics. Features location-based predictions, interactive weather maps, humidity and wind speed visualizations, and smart alerts powered by machine learning.",
      image: weatherApp,
      technologies: ["Python", "AI/ML", "Data Analytics", "UI/UX Design"],
      liveUrl: "https://deployed-weather-eight.vercel.app/",
      githubUrl: "https://deployed-weather-eight.vercel.app/",
      featured: true,
    },
    {
      title: "CineMate - Movie Booking Platform",
      description: "An AI-enhanced movie booking platform that offers personalized movie recommendations, intelligent seat selection, and seamless ticket booking. Features real-time showtime updates, smart pricing analytics, user preference learning, and an intuitive UI for a premium cinema experience.",
      image: cinemateBooking,
      technologies: ["Python", "AI/ML", "Data Analytics", "UI/UX Design"],
      liveUrl: "https://cinemate-booking01.vercel.app/",
      githubUrl: "https://cinemate-booking01.vercel.app/",
      featured: true,
    },
    {
      title: "AI Resume Builder",
      description: "An intelligent resume builder powered by AI that automatically generates professional resumes tailored to specific job descriptions. Features smart content suggestions, ATS optimization, skill matching, and multiple template designs to help candidates stand out.",
      image: aiResumeBuilder,
      technologies: ["Python", "AI/ML", "Data Analytics", "UI/UX Design"],
      liveUrl: "https://github.com/shreyas123-g/AI-Resume-builder",
      githubUrl: "https://github.com/shreyas123-g/AI-Resume-builder",
      featured: true,
    },
    {
      title: "Placement Prediction System",
      description: "An AI-driven placement prediction system that uses machine learning algorithms to analyze student academic performance, skills, and market trends to predict placement outcomes. Features data visualization, predictive analytics, and actionable insights for career planning.",
      image: placementPrediction,
      technologies: ["Python", "AI/ML", "Data Analytics", "UI/UX Design"],
      liveUrl: "https://github.com/shreyas123-g/placement",
      githubUrl: "https://github.com/shreyas123-g/placement",
      featured: true,
    },
    {
      title: "Job Tracker Application",
      description: "An AI-powered job tracking application that helps users manage and organize their job applications efficiently. Features intelligent job recommendations, application status tracking, analytics dashboard, and AI-driven insights to optimize the job search process.",
      image: jobTracker,
      technologies: ["Python", "AI/ML", "Data Analytics", "UI/UX Design"],
      liveUrl: "https://github.com/shreyas123-g/job-tracker",
      githubUrl: "https://github.com/shreyas123-g/job-tracker",
      featured: true,
    },
    {
      title: "Car Price Prediction",
      description: "An intelligent car price prediction system using machine learning algorithms to analyze market trends, vehicle specifications, and historical data to provide accurate price estimates for automobiles.",
      image: carPricePrediction,
      technologies: ["Python", "MongoDB", "UI/UX Design"],
      liveUrl: "https://github.com/shreyas123-g/car-prize-prediction",
      githubUrl: "https://github.com/shreyas123-g/car-prize-prediction",
      featured: true,
    },
    {
      title: "Secure Wallet",
      description: "A secure digital wallet application with encrypted transactions, real-time balance tracking, and multi-factor authentication. Features a modern dashboard for managing finances safely.",
      image: secureWallet,
      technologies: ["Python", "MongoDB"],
      liveUrl: "https://github.com/shreyas123-g/main-project-of-coin",
      githubUrl: "https://github.com/shreyas123-g/main-project-of-coin",
      featured: true,
    },
    {
      title: "Interactive Rock Paper Scissors Game",
      description: "A fully interactive Rock Paper Scissors game with dynamic UI updates, score tracking, and responsive design. Features smooth animations and localStorage for game persistence.",
      image: null,
      technologies: ["HTML", "CSS", "JavaScript", "localStorage", "Responsive Design"],
      liveUrl: "https://github.com/shreyas123-g/Shreyas-Project13",
      githubUrl: "https://github.com/shreyas123-g/Shreyas-Project13",
      featured: false,
    },
    {
      title: "YouTube Clone Webpage",
      description: "A static YouTube homepage clone featuring a fixed header, responsive sidebar, video grid layout, and modern UI elements. Showcases advanced CSS Grid and Flexbox techniques.",
      image: null,
      technologies: ["HTML", "CSS", "JavaScript", "CSS Grid", "Responsive Design"],
      liveUrl: "https://github.com/shreyas123-g/Shreyas-Project1-",
      githubUrl: "https://github.com/shreyas123-g/Shreyas-Project1-",
      featured: false,
    },
    {
      title: "Growthspace Website",
      description: "A modern business website with clean design, smooth animations, and optimized performance. Built with focus on user experience and conversion optimization.",
      image: null,
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      liveUrl: "https://github.com/shreyas123-g/Shreyas-Project1-",
      githubUrl: "https://github.com/shreyas123-g/Shreyas-Project1-",
      featured: false,
    },
    {
      title: "Share Current Location App",
      description: "A web application that allows users to share their current location with interactive maps and real-time updates.",
      image: null,
      technologies: ["JavaScript", "Geolocation API", "Maps Integration"],
      liveUrl: "https://github.com/shreyas123-g/Shreyas-Project1-",
      githubUrl: "https://github.com/shreyas123-g/Shreyas-Project1-",
      featured: false,
    },
    {
      title: "Amazon Webpage",
      description: "A clone of Amazon's homepage featuring modern e-commerce design patterns, responsive layout, and interactive user interface elements.",
      image: null,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://github.com/shreyas123-g/shreyas-project2",
      githubUrl: "https://github.com/shreyas123-g/shreyas-project2",
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating my skills in web development and UI/UX design
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-card-hover transition-all duration-500 border-2 hover:border-primary/20">
                <div className="relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-48 bg-hero-secondary flex items-center justify-center">
                      <div className="text-white font-semibold text-lg">Coming Soon</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mt-8">
            <h3 className="font-display font-semibold text-2xl mb-6 text-center text-foreground">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="p-0 h-auto text-primary hover:text-primary-glow"
                        onClick={() => window.open("https://www.figma.com/proto/t2gHjya4Nli7qePuBnBRpc/SHREYAS-PROJECT-1-UI-UX?page-id=26%3A226&node-id=30-546&starting-point-node-id=30%3A546&t=TT69s7rzq7difduk-1", '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="p-0 h-auto text-muted-foreground hover:text-foreground"
                        onClick={() => window.open("https://www.figma.com/proto/t2gHjya4Nli7qePuBnBRpc/SHREYAS-PROJECT-1-UI-UX?page-id=26%3A226&node-id=30-546&starting-point-node-id=30%3A546&t=TT69s7rzq7difduk-1", '_blank')}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
