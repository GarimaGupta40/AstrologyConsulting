import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Home as HomeIcon, 
  Sparkles, 
  Star, 
  Compass, 
  Flame, 
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Star as StarIconFilled
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// CountUp Component
const CountUp = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      const timer = setInterval(() => {
        start += Math.ceil(end / 20) || 1;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Sticky Nav */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl tracking-tight">
              Maha <span className="font-serif italic text-primary font-medium">Vastu</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo('hero')} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</button>
          </nav>
          <div>
            <Button onClick={() => scrollTo('contact')} size="sm" className="rounded-full px-6">
              Book Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col items-start text-left"
            >
              <motion.div variants={fadeUp}>
                <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 bg-secondary/50 border-border text-foreground font-medium">
                  Scientific Spiritual Consulting
                </Badge>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-sm md:text-base font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Stars · Space · Self
              </motion.h2>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-foreground mb-6">
                Astro · Vastu · Energy
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                Personalised, non-destructive solutions for your home, career, relationships, and energy alignment — backed by 18+ years of consulting and 12,000+ real transformations.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 text-base h-12"
                  data-testid="hero-book-consultation-btn"
                  onClick={() => scrollTo('contact')}
                >
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-12 border-border hover:bg-secondary/30">
                  Get Free Assessment
                </Button>
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground mb-8">
                Based in Pimpri-Chinchwad · Serving 25+ cities
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm font-medium bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <span className="text-yellow-500">★</span> 4.9/5 from 2,400+ reviews
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-md mx-auto md:max-w-none md:ml-auto overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 rounded-[2rem]" />
              <img 
                src="/hero-visual.png" 
                alt="Aura Energy" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-background/20 text-center">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif mb-2 text-primary-foreground"><CountUp end={18} suffix="+" /></span>
              <span className="text-sm font-medium text-background/70 uppercase tracking-wider">Years of experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif mb-2 text-primary-foreground"><CountUp end={12000} suffix="+" /></span>
              <span className="text-sm font-medium text-background/70 uppercase tracking-wider">Clients served</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif mb-2 text-primary-foreground"><CountUp end={25} suffix="+" /></span>
              <span className="text-sm font-medium text-background/70 uppercase tracking-wider">Cities covered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif mb-2 text-primary-foreground">4.9/5</span>
              <span className="text-sm font-medium text-background/70 uppercase tracking-wider">Client rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 md:px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">One integrated practice.</h2>
            <p className="text-lg text-muted-foreground">
              Choose a single service, or combine them through our flagship Astro Vastu program for a fully personalised plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Vastu Consultation */}
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow group overflow-hidden bg-card relative">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <HomeIcon size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-3">Vastu Consultation</h3>
                <p className="font-medium text-foreground mb-3 text-sm">On-site and remote Vastu analysis for homes, offices, and factories.</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Correct structural energy flow using proven Vastu principles without demolition. Receive a detailed report with practical, minimal-change remedies.
                </p>
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Problems Solved:</p>
                  <ul className="space-y-2 mb-6">
                    {["Financial stagnation at home or office", "Persistent health issues in family", "Workplace conflict and unproductive teams"].map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary font-medium text-sm flex items-center gap-1 group/btn hover:underline underline-offset-4">
                    Learn more <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Astro Vastu (Flagship) */}
            <Card className="border-primary/30 shadow-md hover:shadow-lg transition-shadow group overflow-hidden bg-card relative md:col-span-2 lg:col-span-1 lg:row-span-2 ring-1 ring-primary/10">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-lg">
                Premium Flagship
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              <CardContent className="p-8 h-full flex flex-col relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-3">Astro Vastu</h3>
                <p className="font-medium text-foreground mb-3 text-sm">Our flagship service — Kundali-based Vastu planning personalised to your birth chart.</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  A premium, integrated analysis combining your birth chart with property energy mapping. Every remedy is tuned to your personal planetary alignment for maximum impact.
                </p>
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Problems Solved:</p>
                  <ul className="space-y-2 mb-6">
                    {["Generic Vastu not producing results", "Life events timed poorly with decisions", "Uncertainty about property purchase or construction"].map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary font-medium text-sm flex items-center gap-1 group/btn hover:underline underline-offset-4">
                    Learn more <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Astrology Guidance */}
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow group overflow-hidden bg-card relative">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Star size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-3">Astrology Guidance</h3>
                <p className="font-medium text-foreground mb-3 text-sm">Detailed Kundali reading, dasha analysis, and decision-timing support.</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Structured, one-on-one astrology sessions focused on real decisions — career, relationships, health, and timing of major life events.
                </p>
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Problems Solved:</p>
                  <ul className="space-y-2 mb-6">
                    {["Career confusion or stagnation", "Relationship or marriage compatibility doubts", "Recurring life setbacks"].map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary font-medium text-sm flex items-center gap-1 group/btn hover:underline underline-offset-4">
                    Learn more <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Land & Plot Analysis */}
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow group overflow-hidden bg-card relative">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Compass size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-3">Land & Plot Analysis</h3>
                <p className="font-medium text-foreground mb-3 text-sm">Plot-level energy, soil, slope, and directional analysis before purchase.</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Technical evaluation of a plot against Vastu, directional flow, surroundings, and usage intent — before you commit capital.
                </p>
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Problems Solved:</p>
                  <ul className="space-y-2 mb-6">
                    {["Unsure if a plot is auspicious", "Orientation and entry confusion", "Industrial / commercial siting decisions"].map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary font-medium text-sm flex items-center gap-1 group/btn hover:underline underline-offset-4">
                    Learn more <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Aura & Chakra Healing */}
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow group overflow-hidden bg-card relative">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Flame size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-3">Aura & Chakra Healing</h3>
                <p className="font-medium text-foreground mb-3 text-sm">Structured healing sessions to balance chakras and reset your aura.</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Guided, practical sessions to diagnose energy blockages, stabilise chakras, and build a daily practice that sustains the healing outside the session.
                </p>
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Problems Solved:</p>
                  <ul className="space-y-2 mb-6">
                    {["Chronic low energy or anxiety", "Feeling stuck despite effort", "Emotional patterns that repeat"].map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary font-medium text-sm flex items-center gap-1 group/btn hover:underline underline-offset-4">
                    Learn more <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alignment Pillars */}
          <div className="flex flex-wrap justify-center gap-4">
            {["Cosmic Alignment", "Astrological Precision", "Sacred Geometry", "Inner Balance"].map((pillar, i) => (
              <div key={i} className="px-5 py-2 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground shadow-sm">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">From first conversation to real transformation.</h2>
            <p className="text-lg text-muted-foreground">
              No guesswork. No anxiety. Just a clear path from first conversation to real transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-border -z-10" />
            
            {[
              { title: "Book Consultation", desc: "Reserve a slot via form or WhatsApp. Receive an intake link within 24 hours." },
              { title: "Share Details", desc: "Send your Kundali details, floor plan, or plot layout through our secure form." },
              { title: "Deep Analysis", desc: "Our team performs a layered analysis across astrology, directions, and energy flow." },
              { title: "Remedies & Transformation", desc: "Receive a written report with clear, prioritised remedies and a follow-up plan." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center md:text-left pt-6 md:pt-0"
              >
                <div className="w-12 h-12 rounded-full bg-background border-2 border-primary text-primary font-serif text-xl flex items-center justify-center mx-auto md:mx-0 mb-6 relative z-10 shadow-sm">
                  {i + 1}
                </div>
                <h3 className="text-xl font-serif mb-3 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Founder */}
      <section id="about" className="py-24 px-4 md:px-6 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[2rem]"
            >
              <img 
                src="/founder-portrait.png" 
                alt="Founder of Maha Vastu" 
                className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/10 backdrop-blur-md border border-background/20 p-4 rounded-xl text-center">
                <p className="text-sm font-medium tracking-widest uppercase text-background">Pimpri-Chinchwad, Pune</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">About Maha Vastu</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-background">A consultant first. A healer second.</h2>
              <p className="text-xl font-medium text-background/80 mb-8 font-serif italic">
                A modern consulting practice rooted in tradition.
              </p>
              
              <div className="space-y-6 text-background/70 leading-relaxed mb-10">
                <p>
                  Maha Vastu was founded on a simple belief: spirituality is only useful when it produces real change. For nearly two decades, our practice has combined rigorous Vastu analysis, classical astrology, and modern energy science to deliver structured, measurable outcomes for individuals and businesses.
                </p>
                <p>
                  Maha Vastu was founded in Pimpri-Chinchwad with a clear mission: make Vastu, Astrology, and Energy work accessible, analytical, and results-driven — free of superstition, fear, or theatrics.
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "18+ years in Vastu, Astrology & Energy Science",
                  "Analytical, report-driven consulting method",
                  "No fear-based remedies — practical, minimum-intervention guidance"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-background">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <button className="text-primary font-medium flex items-center gap-2 group hover:text-primary/80 transition-colors">
                Read our story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 md:px-6 bg-secondary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Four principles we refuse to compromise on.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Evidence over superstition", desc: "Every remedy is explained, measurable, and reversible. No fear-based rituals, ever." },
              { title: "Minimum intervention", desc: "We prefer corrections that don't require demolition, relocation, or heavy cost." },
              { title: "Personalised, not templated", desc: "Your chart, your space, your circumstance — every plan is built from scratch for you." },
              { title: "Follow-through matters", desc: "We stay with you through execution. A report without follow-up is just paper." }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm"
              >
                <div className="text-primary font-serif text-3xl mb-4 opacity-50">0{i+1}</div>
                <h3 className="text-xl font-semibold font-serif mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Client results</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Real transformations.</h2>
            <p className="text-lg text-muted-foreground">
              Our practice sits where the cosmos, the home, and the self meet. Here's the feeling it leaves behind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rohan Deshmukh", role: "Real Estate Developer, Pune", text: "We used Maha Vastu for three residential projects. The analysis was technical, respectful of our design, and the bookings noticeably improved after launch." },
              { name: "Anjali Kulkarni", role: "Homemaker, Pimpri", text: "My daughter's academic stress and our financial tension both eased within months. The remedies were simple and didn't demand heavy changes." },
              { name: "Dr. Sameer Kale", role: "Clinic Owner, Chinchwad", text: "What impressed me was the scientific tone. No fear. No rituals for the sake of it. Just clean advice and measurable change." },
              { name: "Neha Rao", role: "Software Professional", text: "The Astro Vastu reading gave me clarity on career direction that six months of confusion couldn't. Worth every minute." }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-secondary/10 border-none shadow-none h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, j) => <StarIconFilled key={j} size={16} className="fill-current" />)}
                  </div>
                  <blockquote className="text-foreground font-serif italic text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-4 md:px-6 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready for a calmer, clearer, more aligned life?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 font-medium">
            Book a free 15-minute clarity call. No obligation. No sales.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full px-10 text-lg h-14 text-primary bg-background hover:bg-background/90"
            onClick={() => scrollTo('contact')}
          >
            Book a free call
          </Button>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="py-24 px-4 md:px-6 bg-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-background rounded-l-[4rem] hidden lg:block -z-10" />
        <div className="container mx-auto">
          <div className="text-center md:text-left mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Reach Us</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Talk to us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Write to us, call, or use WhatsApp — whichever feels natural. We respond within 24 hours on working days.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">+91 98765 43210</h4>
                    <p className="text-sm text-muted-foreground">Mon–Sat · 10am to 7pm IST</p>
                  </div>
                </CardContent>
              </Card>

              <a href="https://wa.me/919876543210?text=Hello%20Maha%20Vastu%2C%20I'd%20like%20to%20book%20a%20consultation." target="_blank" rel="noreferrer" className="block">
                <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1 group-hover:text-[#25D366] transition-colors">Chat with an advisor</h4>
                      <p className="text-sm text-muted-foreground">Typical reply within 2 hours</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">consult@mahavastu.example</h4>
                    <p className="text-sm text-muted-foreground">For reports, follow-ups, receipts</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Pimpri-Chinchwad, Pune</h4>
                    <p className="text-sm text-muted-foreground">By appointment only</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="bg-card lg:bg-transparent rounded-2xl lg:rounded-none p-6 md:p-8 lg:p-0 border border-border shadow-sm lg:border-none lg:shadow-none">
              {!formSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-semibold mb-3">Book Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Share a few details about your situation. A Maha Vastu advisor will review your case and respond within 24 hours with a suggested next step — free.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required className="bg-background border-border focus-visible:ring-primary/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="bg-background border-border focus-visible:ring-primary/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (optional)</Label>
                    <Input id="email" type="email" className="bg-background border-border focus-visible:ring-primary/50" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Service Interested In *</Label>
                      <Select required>
                        <SelectTrigger className="bg-background border-border focus:ring-primary/50">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vastu">Vastu Consultation</SelectItem>
                          <SelectItem value="astro-vastu">Astro Vastu</SelectItem>
                          <SelectItem value="astrology">Astrology Guidance</SelectItem>
                          <SelectItem value="land">Land & Plot Analysis</SelectItem>
                          <SelectItem value="aura">Aura & Chakra Healing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Property Type</Label>
                      <Select>
                        <SelectTrigger className="bg-background border-border focus:ring-primary/50">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                          <SelectItem value="factory">Factory</SelectItem>
                          <SelectItem value="plot">Plot</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" className="bg-background border-border focus-visible:ring-primary/50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="situation">Describe your situation</Label>
                    <Textarea 
                      id="situation" 
                      rows={4} 
                      className="bg-background border-border focus-visible:ring-primary/50 resize-none" 
                      placeholder="Tell us what you're looking to resolve or improve..."
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-base rounded-lg mt-4" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Book Consultation"}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting, you agree to be contacted by Maha Vastu via phone, email, or WhatsApp.
                  </p>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-6 border border-border rounded-2xl bg-card shadow-sm">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-semibold mb-4">Request received</h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Our team will reach out within 24 hours. Check your email and WhatsApp for the intake form.
                  </p>
                  <Button variant="outline" onClick={() => setFormSubmitted(false)} className="rounded-full">
                    Submit another
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-background/10 pb-16">
            <div className="lg:col-span-2">
              <div className="text-2xl tracking-tight mb-2">
                Maha <span className="font-serif italic text-primary font-medium">Vastu</span>
              </div>
              <p className="text-sm text-background/60 font-medium tracking-widest uppercase mb-6">
                Astro · Vastu · Energy
              </p>
              <p className="text-background/70 max-w-sm leading-relaxed">
                Scientific spiritual consulting. Practical remedies for your home, career, and energy — grounded in Vastu and Astrology.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6 font-semibold">Services</h4>
              <ul className="space-y-4 text-background/70">
                <li><button onClick={() => scrollTo('vastu')} className="hover:text-primary transition-colors text-sm">Vastu Consultation</button></li>
                <li><button onClick={() => scrollTo('astro-vastu')} className="hover:text-primary transition-colors text-sm">Astro Vastu</button></li>
                <li><button onClick={() => scrollTo('astrology')} className="hover:text-primary transition-colors text-sm">Astrology Guidance</button></li>
                <li><button onClick={() => scrollTo('land')} className="hover:text-primary transition-colors text-sm">Land & Plot Analysis</button></li>
                <li><button onClick={() => scrollTo('aura')} className="hover:text-primary transition-colors text-sm">Aura Healing</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6 font-semibold">Company</h4>
              <ul className="space-y-4 text-background/70">
                <li><button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors text-sm">About Us</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors text-sm">Contact</button></li>
                <li className="pt-4 mt-4 border-t border-background/10">
                  <p className="text-sm font-medium mb-1">Pimpri-Chinchwad, Pune</p>
                  <p className="text-sm mb-1">+91 98765 43210</p>
                  <p className="text-sm">consult@mahavastu.example</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© 2026 Maha Vastu. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FAB WhatsApp */}
      <a 
        href="https://wa.me/919876543210?text=Hello%20Maha%20Vastu%2C%20I'd%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform md:bottom-10 md:right-10"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
