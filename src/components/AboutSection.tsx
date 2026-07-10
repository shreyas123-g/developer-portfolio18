import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User, Calendar } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      institution: "SDM Institute of Technology, Ujire",
      degree: "Engineering",
      period: "Aug 2022 – Present",
      icon: GraduationCap,
    },
    {
      institution: "SDM PU College, Ujire",
      degree: "12th/PUC",
      period: "Jul 2021 – Sep 2022",
      icon: Calendar,
    },
    {
      institution: "Anugraha English Medium School, Ujire",
      degree: "10th Grade",
      period: "Jun 2019 – Aug 2020",
      icon: User,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden perspective-1000">
      {/* 3D Background elements */}
      <div className="absolute top-10 right-10 w-20 h-20 animate-cube-spin opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
      </div>
      <div className="absolute bottom-20 left-10 w-16 h-16 animate-float3d opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-accent to-primary rounded-xl"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-hero-gradient rounded-full"></div>
              <div className="pl-8">
                <h3 className="font-display font-semibold text-2xl mb-4 text-foreground">
                  Passionate Developer & Designer
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I focus on clean design, intuitive interfaces, and seamless functionality to 
                  deliver engaging and efficient solutions that enhance user satisfaction.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in both development and design, I bring a unique 
                  perspective to every project, ensuring that technical excellence meets 
                  exceptional user experience.
                </p>
              </div>
            </div>

            {/* Key strengths */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Responsive Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-muted-foreground">Modern Frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span className="text-muted-foreground">User-Centered Approach</span>
              </div>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <img src={sdmLogo.url} alt="SDM Institute of Technology" className="w-16 h-16 object-contain" />
              <h3 className="font-display font-semibold text-2xl text-foreground">
                Educational Background
              </h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-hero-gradient rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <edu.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground mb-1">
                          {edu.institution}
                        </h4>
                        <p className="text-primary font-medium mb-2">{edu.degree}</p>
                        <p className="text-muted-foreground text-sm">{edu.period}</p>
                      </div>
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

export default AboutSection;