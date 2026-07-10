import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import kodnestImg from '@/assets/kodnest-cert.jpg.asset.json';
import mindmatrixImg from '@/assets/mindmatrix-cert.jpg.asset.json';
import kodnestPdf from '@/assets/kodnest-cert.pdf.asset.json';
import mindmatrixPdf from '@/assets/mindmatrix-cert.pdf.asset.json';

const experiences = [
  {
    title: 'Full Stack Java Development with AI',
    org: 'KodNest — Campus2 Onsite Internship',
    period: '9th February 2026 — 9th May 2026',
    description:
      'Completed an onsite internship focused on Java Full Stack development enriched with AI, building end-to-end applications and strengthening core engineering skills.',
    skills: ['Java', 'Spring Boot', 'SQL', 'React', 'AI Integration'],
    image: kodnestImg.url,
    pdf: kodnestPdf.url,
  },
  {
    title: 'Android App Development using Generative AI',
    org: 'MindMatrix — VTU MoU Partner (Online)',
    period: '2nd February 2026 — 18th May 2026',
    description:
      'Industry-aligned internship on Android development with GenAI: Kotlin & Jetpack Compose, Android Studio, Google Cloud Labs, Google AI Studio, Firebase, UI/UX prototyping and iterative debugging.',
    skills: ['Kotlin', 'Jetpack Compose', 'Google AI Studio', 'Firebase', 'UI/UX'],
    image: mindmatrixImg.url,
    pdf: mindmatrixPdf.url,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            <Award className="w-3 h-3 mr-1" /> Experience
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent">
            Internships & Certifications
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hands-on training programs where I built real projects and earned industry-verified certificates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <Card
              key={exp.title}
              className="group overflow-hidden bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={exp.image}
                  alt={`${exp.title} certificate`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mt-1">{exp.org}</p>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary/40 hover:bg-primary/10"
                >
                  <a href={exp.pdf} target="_blank" rel="noopener noreferrer">
                    View Certificate <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
