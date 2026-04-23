import { useState, useEffect } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, Star, Check, ArrowRight,
  Compass, Sparkles, Mountain, HeartHandshake, Sun, ShieldCheck,
  Clock, FileText, ChevronRight, Menu, X, Quote, Award, Users, Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND = {
  name: "Maha Vastu",
  tagline: "Astrology & Vastu Science",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "consult@mahavastu.example",
  address: "Pimpri-Chinchwad, Pune, Maharashtra",
  mapsQuery: "Pimpri-Chinchwad, Pune",
};

const HERO_IMG =
  "https://images.unsplash.com/photo-1747409020046-c7137dc46ef6?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85";
const AURA_IMG =
  "https://images.unsplash.com/photo-1759223293148-52173d3a70b3?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85";

const SERVICES = [
  {
    title: "Vastu Consulting",
    tag: "Align your space with natural energy",
    desc: "On-site and remote Vastu analysis for homes, offices, and factories. Correct structural energy flow using proven Vastu principles without demolition.",
    audience: "Homeowners, business owners, factory managers",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Astrology Consulting",
    tag: "Clarity for career, relationships & timing",
    desc: "Detailed Kundali reading, dasha analysis, and decision-timing support with a written prediction summary.",
    audience: "Professionals, couples, students, NRIs",
    image: "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Astro Vastu",
    tag: "Where your stars meet your space",
    desc: "A premium, integrated analysis combining your birth chart with property energy mapping. Every remedy is tuned to your personal planetary alignment.",
    audience: "Serious seekers, builders, entrepreneurs",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1200&q=80",
    flagship: true,
  },
  {
    title: "Land Analysis",
    tag: "Buy right, build right",
    desc: "Plot-level energy, soil, slope, and directional analysis before purchase. Go / no-go recommendation with risk flags identified early.",
    audience: "Buyers, builders, developers, industrialists",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aura Healing",
    tag: "Clear the energy you carry",
    desc: "Structured healing sessions to balance chakras, reset your aura, and build a daily practice that sustains the healing outside the session.",
    audience: "Individuals seeking inner balance",
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=1200&q=80",
  },
];

const STEPS = [
  { n: "1", title: "Reserve a slot", desc: "Reserve a slot via form or WhatsApp. Receive an intake link within 24 hours." },
  { n: "2", title: "Share your details", desc: "Send your Kundali details, floor plan, or plot layout through our secure form." },
  { n: "3", title: "Layered analysis", desc: "Our team performs a layered analysis across astrology, directions, and energy flow." },
  { n: "4", title: "Written report", desc: "Receive a written report with clear, prioritised remedies and a follow-up plan." },
];

const STATS = [
  { icon: Award, value: "18+", label: "Years of consulting" },
  { icon: Users, value: "12,000+", label: "Real transformations" },
  { icon: MapPin, value: "25+", label: "Cities served" },
  { icon: Building2, value: "5", label: "Service pillars" },
];

const PHILOSOPHY = [
  { icon: FileText, title: "Analytical, report-driven method", desc: "Every engagement ends with a written diagnostic report — not a sales call. Clear, measurable remedies you can act on." },
  { icon: ShieldCheck, title: "No fear, no theatrics", desc: "Every remedy is explained, measurable, and reversible. No fear-based rituals, ever." },
  { icon: Sparkles, title: "Non-destructive corrections", desc: "We prefer corrections that don't require demolition, relocation, or heavy cost." },
  { icon: HeartHandshake, title: "We stay through execution", desc: "We stay with you through execution. A report without follow-up is just paper. 6-month follow-up window included." },
];

const TESTIMONIALS = [
  { quote: "The Astro Vastu reading gave me clarity on career direction that six months of confusion couldn't. Worth every minute.", name: "Aanya K.", role: "Product Lead, Bengaluru" },
  { quote: "My daughter's academic stress and our financial tension both eased within months. The remedies were simple and didn't demand heavy changes.", name: "Rohit & Priya M.", role: "Family clients, Pune" },
  { quote: "We used Maha Vastu for three residential projects. The analysis was technical, respectful of our design, and the bookings noticeably improved after launch.", name: "Devraj S.", role: "Builder, Mumbai" },
  { quote: "What impressed me was the scientific tone. No fear. No rituals for the sake of it. Just clean advice and measurable change.", name: "Meera R.", role: "Architect, Hyderabad" },
];

const SIGNS = [
  "Persistent health issues in family",
  "Financial stagnation at home or office",
  "Workplace conflict and unproductive teams",
  "Orientation and entry confusion",
  "Generic Vastu not producing results",
  "Industrial / commercial siting decisions",
  "Life events timed poorly with decisions",
  "Relationship or marriage compatibility doubts",
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl border-b border-[#f0e6d2]">
      <div className="section-container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full mv-gradient flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-heading text-xl font-semibold tracking-tight text-[#1a1a1a]">{BRAND.name}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a4a4a]">{BRAND.tagline}</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((s) => !s)}
              className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] hover:text-[#ef4d2b] py-2"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              data-testid="nav-services-toggle"
            >
              Services
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-90" : "rotate-90"}`} style={{ transform: servicesOpen ? "rotate(-90deg)" : "rotate(90deg)" }} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px]">
                <div className="bg-white border border-[#f0e6d2] rounded-2xl shadow-lg overflow-hidden">
                  {SERVICES.map((s) => (
                    <a
                      key={s.title}
                      href="#services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[#fff5eb] transition-colors border-b border-[#f9f1de] last:border-b-0"
                      data-testid={`nav-service-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="w-9 h-9 rounded-full mv-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1a1a1a] flex items-center gap-2">
                          {s.title}
                          {s.flagship && (
                            <span className="text-[9px] uppercase tracking-wider font-bold text-[#ef4d2b] bg-[#fff5eb] px-1.5 py-0.5 rounded">
                              Flagship
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#4a4a4a] mt-0.5">{s.tag}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-[#1a1a1a] hover:text-[#ef4d2b]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${BRAND.phone}`}
            className="flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] hover:text-[#ef4d2b]"
            data-testid="nav-phone-link"
          >
            <Phone className="w-4 h-4 text-[#ef4d2b]" />
            {BRAND.phone}
          </a>
          <Button asChild className="mv-gradient text-white hover:opacity-90 rounded-full px-5">
            <a href="#contact">Book a Consultation</a>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-[#f0e6d2]" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#f0e6d2] bg-white">
          <div className="section-container py-4 flex flex-col gap-1">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((s) => !s)}
              className="flex items-center justify-between text-sm font-medium text-[#1a1a1a] py-2"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <ChevronRight className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-90" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 border-l-2 border-[#f6d46b] flex flex-col gap-2 mb-2">
                {SERVICES.map((s) => (
                  <a
                    key={s.title}
                    href="#services"
                    onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                    className="text-sm text-[#4a4a4a] hover:text-[#ef4d2b] py-1"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            )}
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-[#1a1a1a] py-2">
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a] py-2"
            >
              <Phone className="w-4 h-4 text-[#ef4d2b]" />
              {BRAND.phone}
            </a>
            <Button asChild className="mv-gradient text-white rounded-full mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Book a Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroBackdrop() {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const sparks = [
    { cx: 14, cy: 22, d: 0 },
    { cx: 84, cy: 26, d: 1.2 },
    { cx: 28, cy: 74, d: 0.6 },
    { cx: 72, cy: 80, d: 2.1 },
    { cx: 50, cy: 10, d: 1.7 },
    { cx: 90, cy: 62, d: 0.3 },
    { cx: 8,  cy: 52, d: 2.4 },
    { cx: 42, cy: 92, d: 1.0 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(130vw,1100px)] aspect-square opacity-[0.20]">
        <svg viewBox="-110 -110 220 220" className="w-full h-full">
          <defs>
            <linearGradient id="mvVastu" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f6d46b" />
              <stop offset="100%" stopColor="#ef4d2b" />
            </linearGradient>
            <radialGradient id="mvBrahma" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ef4d2b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f6d46b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer rotating dashed circle (cosmic boundary) */}
          <g className="animate-mv-orbit">
            <circle cx="0" cy="0" r="100" fill="none" stroke="url(#mvVastu)" strokeWidth="0.4" strokeDasharray="1 3" />
          </g>

          {/* Vastu chakra: nested squares + diagonals (counter-rotating slowly) */}
          <g className="animate-mv-orbit-reverse">
            {/* 9x9 Vastu Purusha grid (3 outer squares hint at the mandala layers) */}
            <rect x="-90" y="-90" width="180" height="180" fill="none" stroke="url(#mvVastu)" strokeWidth="0.6" />
            <rect x="-72" y="-72" width="144" height="144" fill="none" stroke="url(#mvVastu)" strokeWidth="0.5" />
            <rect x="-54" y="-54" width="108" height="108" fill="none" stroke="url(#mvVastu)" strokeWidth="0.5" />
            <rect x="-36" y="-36" width="72" height="72" fill="none" stroke="url(#mvVastu)" strokeWidth="0.5" />
            <rect x="-18" y="-18" width="36" height="36" fill="none" stroke="url(#mvVastu)" strokeWidth="0.6" />

            {/* 9x9 grid lines inside outer square */}
            {Array.from({ length: 8 }).map((_, i) => {
              const p = -90 + (i + 1) * 20;
              return (
                <g key={i}>
                  <line x1={p} y1={-90} x2={p} y2={90} stroke="url(#mvVastu)" strokeWidth="0.2" />
                  <line x1={-90} y1={p} x2={90} y2={p} stroke="url(#mvVastu)" strokeWidth="0.2" />
                </g>
              );
            })}

            {/* Diagonal direction lines (8 dik) */}
            <line x1="-90" y1="-90" x2="90" y2="90" stroke="url(#mvVastu)" strokeWidth="0.4" />
            <line x1="-90" y1="90" x2="90" y2="-90" stroke="url(#mvVastu)" strokeWidth="0.4" />
            <line x1="0" y1="-90" x2="0" y2="90" stroke="url(#mvVastu)" strokeWidth="0.4" />
            <line x1="-90" y1="0" x2="90" y2="0" stroke="url(#mvVastu)" strokeWidth="0.4" />

            {/* 8 directional markers (dik palakas) */}
            {directions.map((_, i) => {
              const a = (i * 45 - 90) * (Math.PI / 180);
              const x = Math.cos(a) * 90;
              const y = Math.sin(a) * 90;
              return <circle key={i} cx={x} cy={y} r="2" fill="#ef4d2b" />;
            })}
          </g>

          {/* 45° rotated inner square (yantra layer) */}
          <g className="animate-mv-orbit" style={{ transformOrigin: "0 0" }}>
            <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="url(#mvVastu)" strokeWidth="0.5" transform="rotate(45)" />
          </g>

          {/* 8-petal lotus around Brahma sthana */}
          <g className="animate-mv-orbit-reverse">
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d="M0,-26 C6,-22 6,-12 0,-8 C-6,-12 -6,-22 0,-26 Z"
                fill="none"
                stroke="url(#mvVastu)"
                strokeWidth="0.5"
                transform={`rotate(${i * 45})`}
              />
            ))}
          </g>

          {/* Brahma sthana — central glow + pulsing dot */}
          <circle cx="0" cy="0" r="14" fill="url(#mvBrahma)" />
          <circle cx="0" cy="0" r="3" fill="url(#mvVastu)" className="animate-mv-pulse-dot" />
        </svg>
      </div>

      <div className="absolute inset-0">
        {sparks.map((s, i) => (
          <span
            key={i}
            className="absolute block w-[6px] h-[6px] rounded-full bg-[#ef4d2b] animate-mv-twinkle"
            style={{ left: `${s.cx}%`, top: `${s.cy}%`, animationDelay: `${s.d}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-warm-glow">
      <HeroBackdrop />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#f6d46b]/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#ef4d2b]/15 blur-3xl" />
      <div className="section-container relative py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f6d46b] bg-white/80 text-xs font-semibold uppercase tracking-[0.2em] text-[#ef4d2b]">
            <Sun className="w-3.5 h-3.5" /> Scientific Spiritual Consulting
          </div>
          <h1 className="font-heading mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-light tracking-tight text-[#1a1a1a]">
            Where your stars meet <span className="mv-gradient-text font-medium">your space.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#4a4a4a] max-w-2xl leading-relaxed">
            Personalised, non-destructive solutions for your home, career, relationships, and energy alignment — backed by 18+ years of consulting and 12,000+ real transformations.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button asChild className="mv-gradient text-white hover:opacity-90 rounded-full px-7 h-12 text-base shadow-md">
              <a href="#contact">Book a Free Clarity Call <ArrowRight className="w-4 h-4 ml-2" /></a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-7 h-12 text-base border-[#ef4d2b] text-[#ef4d2b] hover:bg-[#fff5eb]">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-[#4a4a4a]">
            <div className="flex items-center gap-1">
              {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-[#f6d46b] text-[#f6d46b]" />)}
              <span className="ml-1 font-medium text-[#1a1a1a]">4.9 / 5</span>
              <span>· Trusted by builders, professionals & families</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#f6d46b]/35 to-[#ef4d2b]/25 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-[#f0e6d2] shadow-xl aspect-[4/5]">
            <img src={HERO_IMG} alt="Sacred geometry" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#f6d46b] font-semibold">Our Practice</div>
              <div className="font-heading text-xl font-medium mt-1">Crafted for clarity, balance, and results.</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-white border border-[#f0e6d2] rounded-2xl px-5 py-4 shadow-md">
            <div className="w-10 h-10 rounded-full mv-gradient flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-semibold">Based in</div>
              <div className="font-heading text-sm font-medium text-[#1a1a1a]">Pimpri-Chinchwad · 25+ cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white border border-[#f0e6d2] rounded-2xl p-6 md:p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-11 h-11 mx-auto rounded-full bg-[#fff5eb] flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5 text-[#ef4d2b]" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-[#1a1a1a]">{s.value}</div>
              <div className="text-xs md:text-sm text-[#4a4a4a] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-container py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">What we do</div>
          <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">Five disciplines, one integrated practice.</h2>
        </div>
        <p className="text-[#4a4a4a] max-w-md leading-relaxed">
          Every engagement begins with listening. Explore our core services below, or book a free 15-minute clarity call to find the right fit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        {SERVICES.map((s, i) => {
          const span = s.flagship ? "md:col-span-3 lg:col-span-2 md:row-span-2" : "md:col-span-3 lg:col-span-2";
          return (
            <a key={i} href="#contact"
              className={`group relative rounded-2xl overflow-hidden border border-[#f0e6d2] aspect-[4/5] hover:-translate-y-1 transition-transform duration-500 ${span}`}>
              <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              {s.flagship && (
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.22em] font-bold text-white bg-[#ef4d2b] px-3 py-1 rounded-full">
                  Premium Flagship
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#f6d46b] font-semibold">{s.tag}</div>
                <div className="font-heading text-xl md:text-2xl font-medium mt-1">{s.title}</div>
                <p className="mt-3 text-sm text-white/85 leading-relaxed line-clamp-3">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-[#f6d46b] transition-colors">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">How it works</div>
          <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">A clear path from first conversation to real transformation.</h2>
          <p className="mt-5 text-lg text-[#4a4a4a] leading-relaxed">No guesswork. No anxiety. Just a clear path from first conversation to real transformation.</p>
        </div>
        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-8 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#f6d46b] to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STEPS.map((s, i) => (
              <div key={i} className="relative bg-white border border-[#f0e6d2] rounded-2xl p-7 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full mv-gradient flex items-center justify-center text-white font-heading text-xl font-semibold shadow-md">{s.n}</div>
                <h3 className="mt-6 font-heading text-xl font-medium text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-2 text-[#4a4a4a] leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-container py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">About Maha Vastu</div>
        <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">A modern consulting practice rooted in tradition.</h2>
        <p className="mt-5 text-[#4a4a4a] text-lg leading-relaxed">
          Maha Vastu was founded in Pimpri-Chinchwad with a clear mission: make Vastu, Astrology, and Energy work accessible, analytical, and results-driven — free of superstition, fear, or theatrics.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Written diagnostic report",
            "Practical remedial actions",
            "Muhurat-aligned execution",
            "6-month follow-up window",
            "Non-destructive corrections",
            "Lifetime advisory reference",
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 text-[#1a1a1a]">
              <Check className="w-5 h-5 text-[#ef4d2b] mt-0.5 shrink-0" />
              <span className="text-[15px]">{b}</span>
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild className="mv-gradient text-white rounded-full px-6">
            <a href="#contact">Book a Consultation</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6 border-[#ef4d2b] text-[#ef4d2b] hover:bg-[#fff5eb]">
            <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-[#f6d46b]/30 to-[#ef4d2b]/20 rounded-3xl blur-2xl" />
        <div className="relative rounded-3xl overflow-hidden border border-[#f0e6d2] shadow-sm">
          <img src={AURA_IMG} alt="Maha Vastu aura" className="w-full h-[420px] object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white border border-[#f0e6d2] rounded-2xl px-5 py-4 shadow-md hidden md:block">
          <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-semibold">Founded</div>
          <div className="font-heading text-lg font-medium text-[#1a1a1a]">Pimpri-Chinchwad · 2007</div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Our philosophy</div>
          <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">Four principles we refuse to compromise on.</h2>
          <p className="mt-5 text-lg text-[#4a4a4a] leading-relaxed">Our practice sits where the cosmos, the home, and the self meet. Here's the feeling it leaves behind.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PHILOSOPHY.map((p, i) => (
            <div key={i} className="bg-white border border-[#f0e6d2] rounded-2xl p-8">
              <div className="w-11 h-11 rounded-full bg-[#fff5eb] flex items-center justify-center">
                <p.icon className="w-5 h-5 text-[#ef4d2b]" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-medium text-[#1a1a1a]">{p.title}</h3>
              <p className="mt-2 text-[#4a4a4a] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Signs() {
  return (
    <section className="section-container py-20 md:py-28">
      <div className="relative rounded-3xl overflow-hidden border border-[#f6d46b] bg-gradient-to-br from-[#fff5eb] via-white to-[#fffaf0] p-6 md:p-12 lg:p-16">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#f6d46b]/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#ef4d2b]/15 blur-3xl" />
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f6d46b] bg-white text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ef4d2b]">
              When to consult
            </div>
            <h2 className="font-heading mt-5 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1a1a1a]">Signs it's time to call us.</h2>
            <p className="mt-4 text-[#4a4a4a] leading-relaxed">If any of these feel familiar, a 15-minute clarity call usually points you in the right direction.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SIGNS.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-[15px] text-[#1a1a1a]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ef4d2b] shrink-0" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#f6d46b] bg-white p-10 text-center">
              <Sparkles className="w-12 h-12 mx-auto text-[#ef4d2b]" />
              <h3 className="font-heading text-2xl font-medium mt-4 text-[#1a1a1a]">Free 15-min clarity call</h3>
              <p className="mt-2 text-[#4a4a4a] text-sm leading-relaxed">No obligation. No sales. Just a written assessment of what to do next.</p>
              <Button asChild className="mt-6 mv-gradient text-white rounded-full">
                <a href="#contact">Reserve a slot</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Voices of transformation</div>
            <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">Real outcomes, in their own words.</h2>
          </div>
          <div className="flex items-center gap-1">
            {[0,1,2,3,4].map(i => <Star key={i} className="w-5 h-5 fill-[#f6d46b] text-[#f6d46b]" />)}
            <span className="ml-2 text-sm font-medium text-[#1a1a1a]">4.9 / 5 average</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white border border-[#f0e6d2] rounded-2xl p-8 relative hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#f6d46b]" />
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-[#f6d46b] text-[#f6d46b]" />)}
              </div>
              <p className="text-[#1a1a1a] text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-[#f0e6d2] flex items-center gap-3">
                <div className="w-11 h-11 rounded-full mv-gradient flex items-center justify-center text-white font-heading font-semibold">
                  {t.name.split(" ").map(s => s[0]).join("").slice(0,2)}
                </div>
                <div>
                  <div className="font-heading text-base font-medium text-[#1a1a1a]">{t.name}</div>
                  <div className="text-xs text-[#4a4a4a]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="section-container py-20 md:py-28">
      <div className="relative rounded-3xl overflow-hidden mv-gradient text-white p-10 md:p-16">
        <div className="absolute inset-0 opacity-20 bg-sacred-geometry" />
        <div className="relative max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-white/80 font-semibold">Ready to begin?</div>
          <h2 className="font-heading mt-4 text-3xl md:text-4xl font-light">Ready for a calmer, clearer, more aligned life?</h2>
          <p className="mt-4 text-white/90 leading-relaxed">Book a free 15-minute clarity call. No obligation. No sales.</p>
          <Button asChild className="mt-6 bg-white text-[#ef4d2b] hover:bg-white/90 rounded-full px-7 h-12">
            <a href="#contact">Book Your Free Call <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.service) {
      setErr("Please fill your name, mobile, email, and select a service.");
      return;
    }
    setErr("");
    setDone(true);
  };

  return (
    <section id="contact" className="section-container py-16 md:py-24">
      <div>
        <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Begin your consultation</div>
        <h2 className="font-heading mt-3 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1a1a1a] max-w-4xl">Let's understand your situation first.</h2>
        <p className="mt-5 text-lg text-[#4a4a4a] max-w-2xl">
          Share a few details about your situation. A Maha Vastu advisor will review your case and respond within 24 hours with a suggested next step — free.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#f0e6d2] hover:shadow-md transition-shadow" data-testid="contact-phone-card">
            <div className="w-11 h-11 rounded-full bg-[#fff5eb] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#ef4d2b]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-semibold">Call</div>
              <div className="font-heading text-lg font-medium text-[#1a1a1a]">{BRAND.phone}</div>
              <div className="text-sm text-[#4a4a4a] mt-0.5">Mon–Sat · 10am to 7pm IST</div>
            </div>
          </div>
          <a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Maha Vastu, I'd like to book a consultation.")}`}
             target="_blank" rel="noreferrer"
             className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#f0e6d2] hover:shadow-md transition-shadow" data-testid="contact-whatsapp-card">
            <div className="w-11 h-11 rounded-full bg-[#25D366]/15 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#25D366] font-semibold">WhatsApp</div>
              <div className="font-heading text-lg font-medium text-[#1a1a1a]">Chat with us</div>
              <div className="text-sm text-[#4a4a4a] mt-0.5">Fastest response, usually within an hour</div>
            </div>
          </a>
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#f0e6d2] hover:shadow-md transition-shadow" data-testid="contact-email-card">
            <div className="w-11 h-11 rounded-full bg-[#fff5eb] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#ef4d2b]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-semibold">Email</div>
              <div className="font-heading text-lg font-medium text-[#1a1a1a] break-all">{BRAND.email}</div>
              <div className="text-sm text-[#4a4a4a] mt-0.5">For reports, follow-ups, receipts</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#f0e6d2]">
            <div className="w-11 h-11 rounded-full bg-[#fff5eb] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#ef4d2b]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-semibold">Studio</div>
              <div className="font-heading text-lg font-medium text-[#1a1a1a]">{BRAND.address}</div>
              <div className="text-sm text-[#4a4a4a] mt-0.5">Visits by appointment only</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[#f0e6d2] h-[280px]">
            <iframe
              title="Maha Vastu Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`}
              className="w-full h-full" loading="lazy" />
          </div>
        </div>

        <div className="lg:col-span-3">
          {done ? (
            <div className="bg-white rounded-2xl border border-[#f6d46b] p-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-full mv-gradient flex items-center justify-center">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-medium text-[#1a1a1a]">Request received.</h3>
              <p className="mt-2 text-[#4a4a4a] leading-relaxed">Our team will reach out within 24 hours. Check your email and WhatsApp for the intake form.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-white rounded-2xl border border-[#f0e6d2] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className="text-xs uppercase tracking-[0.22em] text-[#4a4a4a] font-semibold">Your name</label>
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                  className="mt-2 w-full rounded-xl border border-[#f0e6d2] bg-[#faf9f6] px-4 h-11 outline-none focus:border-[#ef4d2b]" placeholder="Full name" />
              </div>
              <div className="md:col-span-1">
                <label className="text-xs uppercase tracking-[0.22em] text-[#4a4a4a] font-semibold">Mobile</label>
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}
                  className="mt-2 w-full rounded-xl border border-[#f0e6d2] bg-[#faf9f6] px-4 h-11 outline-none focus:border-[#ef4d2b]" placeholder="+91 ..." />
              </div>
              <div className="md:col-span-1">
                <label className="text-xs uppercase tracking-[0.22em] text-[#4a4a4a] font-semibold">Email</label>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} data-testid="lead-email-input"
                  className="mt-2 w-full rounded-xl border border-[#f0e6d2] bg-[#faf9f6] px-4 h-11 outline-none focus:border-[#ef4d2b]" placeholder="you@email.com" />
              </div>
              <div className="md:col-span-1">
                <label className="text-xs uppercase tracking-[0.22em] text-[#4a4a4a] font-semibold">Service</label>
                <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}
                  className="mt-2 w-full rounded-xl border border-[#f0e6d2] bg-[#faf9f6] px-4 h-11 outline-none focus:border-[#ef4d2b]">
                  <option value="">Choose a service</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-[0.22em] text-[#4a4a4a] font-semibold">Tell us a little</label>
                <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={4}
                  className="mt-2 w-full rounded-xl border border-[#f0e6d2] bg-[#faf9f6] px-4 py-3 outline-none focus:border-[#ef4d2b]"
                  placeholder="Briefly tell us what you're facing or what you'd like to understand..." />
              </div>
              {err && <div className="md:col-span-2 text-sm text-[#ef4d2b]">{err}</div>}
              <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between pt-2">
                <p className="text-xs text-[#4a4a4a] max-w-md leading-relaxed">
                  By submitting, you agree to be contacted by Maha Vastu via phone, email, or WhatsApp.
                </p>
                <Button type="submit" className="mv-gradient text-white hover:opacity-90 rounded-full px-7 h-12">
                  Send Request <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#faf9f6] border-t border-[#f0e6d2] mt-20">
      <div className="section-container py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full mv-gradient flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="font-heading text-xl font-semibold">{BRAND.name}</div>
          </div>
          <p className="mt-4 text-sm text-[#4a4a4a] leading-relaxed">
            Scientific spiritual consulting. Practical remedies for your home, career, and energy — grounded in Vastu and Astrology.
          </p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold mb-4">Services</div>
          <ul className="space-y-2 text-sm text-[#1a1a1a]">
            {SERVICES.map(s => <li key={s.title}><a href="#services" className="hover:text-[#ef4d2b]">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold mb-4">Practice</div>
          <ul className="space-y-2 text-sm text-[#1a1a1a]">
            <li><a href="#about" className="hover:text-[#ef4d2b]">About</a></li>
            <li><a href="#how" className="hover:text-[#ef4d2b]">How it works</a></li>
            <li><a href="#philosophy" className="hover:text-[#ef4d2b]">Philosophy</a></li>
            <li><a href="#testimonials" className="hover:text-[#ef4d2b]">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold mb-4">Reach us</div>
          <ul className="space-y-3 text-sm text-[#1a1a1a]">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#ef4d2b] mt-0.5" /> {BRAND.phone}</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-[#ef4d2b] mt-0.5" /> <span className="break-all">{BRAND.email}</span></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#ef4d2b] mt-0.5" /> {BRAND.address}</li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-[#ef4d2b] mt-0.5" /> Mon–Sat · 10am to 7pm IST</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#f0e6d2]">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#4a4a4a]">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div>Crafted in Pimpri-Chinchwad · Serving 25+ cities</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Maha Vastu, I'd like to book a consultation.")}`}
      target="_blank" rel="noreferrer"
      data-testid="floating-whatsapp-btn"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg animate-mv-pulse hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

export default function Home() {
  useEffect(() => { document.title = "Maha Vastu — Astrology & Vastu Science"; }, []);
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Nav />
      <main className="pt-20">
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <About />
        <Philosophy />
        <Signs />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
