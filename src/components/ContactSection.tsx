import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Linkedin, Github, Instagram, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const MAX_MSG = 500;

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().trim().email('Invalid email address').max(255),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(MAX_MSG, `Message must be under ${MAX_MSG} characters`),
});

type FormData = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof FormData, string>>;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [justSent, setJustSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fe: FieldErrors = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormData;
        if (!fe[k]) fe[k] = i.message;
      });
      setErrors(fe);
      return;
    }

    setIsSending(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
        },
      });

      if (error || (data && (data as any).error)) {
        throw new Error(error?.message || (data as any)?.error || 'Send failed');
      }

      toast({
        title: '✅ Message sent',
        description: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setJustSent(true);
      setTimeout(() => setJustSent(false), 2500);
    } catch (err) {
      console.error('Contact send error:', err);
      toast({
        title: '❌ Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 9686644200', href: 'tel:+919686644200', color: 'from-primary to-primary-glow' },
    { icon: Mail, label: 'Email', value: 'gowdashreyas136@gmail.com', href: 'mailto:gowdashreyas136@gmail.com', color: 'from-secondary to-accent' },
    { icon: MapPin, label: 'Location', value: 'Ujire, Karnataka, India', href: '#', color: 'from-accent to-primary' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyas-com', color: 'hover:text-blue-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/shreyas123-g', color: 'hover:text-foreground' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_shreyas__.7/', color: 'hover:text-pink-500' },
    { icon: Mail, label: 'Email', href: 'mailto:gowdashreyas136@gmail.com', color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden perspective-1000">
      <div className="absolute top-20 right-[10%] w-14 h-14 animate-cube-spin opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-lg" />
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-text-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-display font-semibold text-2xl mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with passionate people. Whether you have a
                question, want to discuss a project, or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((c, i) => (
                <Card key={i} className="group hover:shadow-card-hover transition-all duration-300 border hover:border-primary/20 backdrop-blur-sm bg-card/60">
                  <CardContent className="p-6">
                    <a href={c.href} className="flex items-center space-x-4 group-hover:text-primary transition-colors">
                      <div className={`p-3 bg-gradient-to-br ${c.color} rounded-lg group-hover:shadow-glow transition-all duration-300`}>
                        <c.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">{c.label}</div>
                        <div className="text-muted-foreground text-sm">{c.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-lg mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted/60 backdrop-blur-sm rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 ${s.color}`}
                    aria-label={s.label}
                  >
                    <s.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Glassmorphism form */}
          <Card className="relative border border-white/10 bg-card/40 backdrop-blur-xl shadow-card-hover animate-fade-in overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <CardContent className="p-8 relative">
              <h3 className="font-display font-semibold text-2xl mb-6 text-foreground">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    maxLength={100}
                    aria-invalid={!!errors.name}
                    className="rounded-xl border-2 focus:border-primary transition-colors"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    maxLength={255}
                    aria-invalid={!!errors.email}
                    className="rounded-xl border-2 focus:border-primary transition-colors"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {formData.message.length} / {MAX_MSG}
                    </span>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      // Prevent Enter from accidentally submitting
                      if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
                        // allow newline default; do nothing extra
                      }
                    }}
                    placeholder="Tell me about your project... (min 10 characters)"
                    rows={5}
                    maxLength={MAX_MSG}
                    aria-invalid={!!errors.message}
                    className="rounded-xl border-2 focus:border-primary transition-colors resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-hero-gradient hover:shadow-glow-lg transition-all duration-300 font-semibold py-3 rounded-xl disabled:opacity-70"
                  size="lg"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : justSent ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5 animate-fade-in" />
                      Sent!
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
