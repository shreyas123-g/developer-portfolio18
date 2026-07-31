import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, FileText } from 'lucide-react';
import hackerrankSE from '@/assets/hackerrank-software-engineer.png';
import hackerrankSQL from '@/assets/hackerrank-sql.png';
import studyComrade from '@/assets/study-comrade-certificate.png';

const certificates = [
  {
    title: 'Software Engineer Certificate',
    org: 'HackerRank',
    description: 'Verified proficiency in core software engineering fundamentals including problem solving, REST APIs and software design principles.',
    tags: ['Problem Solving', 'REST APIs', 'Software Design'],
    pdf: hackerrankSE,
  },
  {
    title: 'SQL Certificate',
    org: 'HackerRank',
    description: 'Verified skills in SQL — writing complex queries, joins, aggregations and working with relational databases.',
    tags: ['SQL', 'Databases', 'Queries'],
    pdf: hackerrankSQL,
  },
  {
    title: 'Study Comrade Certificate',
    org: 'Study Comrade',
    description: 'Certificate of achievement from Study Comrade recognizing successful completion of the program.',
    tags: ['Learning', 'Achievement'],
    pdf: studyComrade,
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            <Award className="w-3 h-3 mr-1" /> Certificates
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-text-gradient bg-clip-text text-transparent">
            Verified Achievements
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications that validate my technical skills and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.title}
              className="group bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-1">{cert.org}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary/40 hover:bg-primary/10 w-full"
                >
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
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

export default CertificatesSection;
