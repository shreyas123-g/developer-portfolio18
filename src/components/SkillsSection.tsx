import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Code, Smartphone, Layers } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Creating intuitive and visually appealing user interfaces",
      skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Design Systems"],
      color: "from-primary to-primary-glow",
    },
    {
      title: "Frontend Development",
      icon: Code,
      description: "Building responsive and interactive web applications",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
      color: "from-secondary to-accent",
    },
    {
      title: "Editing Skills",
      icon: Layers,
      description: "Designing the picture and other tools to edit",
      skills: ["Lightroom", "Picsart", "Snapseed", "Photo Editing", "Color Correction"],
      color: "from-accent to-primary",
    },
    {
      title: "Responsive Design",
      icon: Smartphone,
      description: "Ensuring optimal experience across all devices",
      skills: ["Mobile-First", "Cross-Browser", "Performance", "Accessibility", "SEO"],
      color: "from-primary-glow to-secondary",
    },
  ];

  const coreSkills = [
    { name: "JavaScript", level: 90, color: "bg-primary" },
    { name: "HTML/CSS", level: 95, color: "bg-secondary" },
    { name: "UI/UX Design", level: 85, color: "bg-accent" },
    { name: "Responsive Design", level: 92, color: "bg-primary-glow" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-text-gradient bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills to bring your digital ideas to life
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Skills Progress */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display font-semibold text-2xl mb-8 text-center text-foreground">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreSkills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground font-semibold">{skill.level}%</span>
                </div>
                
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 delay-300`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;