import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Star, Quote, Sparkles, ArrowRight, ChevronLeft, ChevronRight,
  Users, Building2, HeartHandshake, Mountain, Award, Phone, MapPin, Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND = {
  phone: "+91 99999 99999",
  phoneTel: "+919999999999",
  whatsapp: "919999999999",
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  service: "Astro Vastu" | "Vastu" | "Astrology" | "Land" | "Aura" | "Business";
  rating: number;
  result: string;
  initials: string;
  color: string;
};

const ALL_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Astro Vastu reading gave me clarity on career direction that six months of confusion couldn't. Worth every minute.",
    name: "Aanya K.",
    role: "Product Lead",
    location: "Bengaluru",
    service: "Astro Vastu",
    rating: 5,
    result: "Career clarity in one sitting",
    initials: "AK",
    color: "#ef4d2b",
  },
  {
    quote:
      "My daughter's academic stress and our financial tension both eased within months. The remedies were simple and didn't demand heavy changes.",
    name: "Rohit & Priya M.",
    role: "Family clients",
    location: "Pune",
    service: "Astro Vastu",
    rating: 5,
    result: "Calmer home in 3 months",
    initials: "RP",
    color: "#ef4d2b",
  },
  {
    quote:
      "We used Maha Vastu for three residential projects. The analysis was technical, respectful of our design, and bookings noticeably improved after launch.",
    name: "Devraj S.",
    role: "Builder",
    location: "Mumbai",
    service: "Land",
    rating: 5,
    result: "Faster bookings, 3 projects",
    initials: "DS",
    color: "#f6b400",
  },
  {
    quote:
      "What impressed me was the scientific tone. No fear. No rituals for the sake of it. Just clean advice and measurable change.",
    name: "Meera R.",
    role: "Architect",
    location: "Hyderabad",
    service: "Vastu",
    rating: 5,
    result: "Practical, measurable advice",
    initials: "MR",
    color: "#ef4d2b",
  },
  {
    quote:
      "Got our entrance and kitchen direction corrected without breaking a single wall. We sleep better and argue less. That alone was the ROI.",
    name: "Sandeep G.",
    role: "Software Engineer",
    location: "Pimpri-Chinchwad",
    service: "Vastu",
    rating: 5,
    result: "Better sleep, calmer mood",
    initials: "SG",
    color: "#ef4d2b",
  },
  {
    quote:
      "Our marriage compatibility reading was honest and detailed. We were warned about a difficult Dasha and prepared for it — that preparation saved us.",
    name: "Karan & Ishita V.",
    role: "Newlyweds",
    location: "Delhi NCR",
    service: "Astrology",
    rating: 5,
    result: "Marriage stayed strong through Dasha",
    initials: "KI",
    color: "#ef4d2b",
  },
  {
    quote:
      "Aura sessions helped me sleep deeply for the first time in years. The chakra work felt grounded — not floaty or theatrical.",
    name: "Nikhil P.",
    role: "Entrepreneur",
    location: "Pune",
    service: "Aura",
    rating: 5,
    result: "Restored deep sleep",
    initials: "NP",
    color: "#ef4d2b",
  },
  {
    quote:
      "Plot energy analysis before we built our factory shifted the entrance and parking layout. Three years on, our team retention is unusually high for our industry.",
    name: "Ashwin Industries",
    role: "MD, Manufacturing",
    location: "Chakan, Pune",
    service: "Land",
    rating: 5,
    result: "High retention, smooth ops",
    initials: "AI",
    color: "#f6b400",
  },
  {
    quote:
      "I came in skeptical. The kundali-based recommendations actually matched my own observations from 20 years of life. That earned my respect immediately.",
    name: "Dr. Anand M.",
    role: "Cardiologist",
    location: "Mumbai",
    service: "Astrology",
    rating: 5,
    result: "Skeptic turned believer",
    initials: "AM",
    color: "#ef4d2b",
  },
  {
    quote:
      "Took our retail showroom Vastu consult after a slow year. Within two seasons, footfall and conversion both jumped — without rebranding or renovation.",
    name: "Lakshmi Saree Bhavan",
    role: "Retail Owner",
    location: "Aurangabad",
    service: "Business",
    rating: 5,
    result: "Footfall + conversion up",
    initials: "LS",
    color: "#f6b400",
  },
  {
    quote:
      "Acharya ji was the only consultant who said 'no, this remedy is not needed for you.' That honesty is rare. We trust them with everything now.",
    name: "Vikram H.",
    role: "Real-estate Investor",
    location: "Nagpur",
    service: "Astro Vastu",
    rating: 5,
    result: "Earned long-term trust",
    initials: "VH",
    color: "#ef4d2b",
  },
  {
    quote:
      "Industrial Vastu for our 80,000 sq.ft. unit was thorough, respectful of safety codes, and delivered on time. We've referred three peers since.",
    name: "Sunrise Engineering",
    role: "GM, Operations",
    location: "Pune",
    service: "Business",
    rating: 5,
    result: "On-time delivery, 3 referrals",
    initials: "SE",
    color: "#f6b400",
  },
];

const FILTERS = [
  { key: "all", label: "All stories", icon: Sparkles },
  { key: "Astro Vastu", label: "Astro Vastu", icon: Sparkles },
  { key: "Vastu", label: "Vastu", icon: Mountain },
  { key: "Astrology", label: "Astrology", icon: Star },
  { key: "Land", label: "Builders & Land", icon: Building2 },
  { key: "Aura", label: "Aura & Chakra", icon: HeartHandshake },
  { key: "Business", label: "Business", icon: Award },
] as const;

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#f6b400] fill-[#f6b400]" : "text-[#f0e6d2]"}`}
        />
      ))}
    </div>
  );
}

function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5eb] via-[#fffaf0] to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 700" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="testiGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#f6d46b" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#ef4d2b" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#ef4d2b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="testiStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f6d46b" />
              <stop offset="100%" stopColor="#ef4d2b" />
            </linearGradient>
          </defs>
          <circle cx="950" cy="350" r="380" fill="url(#testiGlow)" />

          {/* Outer star ring */}
          <g transform="translate(950 350)" className="animate-mv-orbit" style={{ transformOrigin: "center" }}>
            <circle r="290" fill="none" stroke="url(#testiStroke)" strokeOpacity="0.35" strokeDasharray="2 7" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x = Math.sin(angle) * 290;
              const y = -Math.cos(angle) * 290;
              return (
                <g key={i} transform={`translate(${x} ${y}) rotate(${i * 30})`}>
                  <path
                    d="M0,-8 L2,-2 L8,-2 L3,2 L5,8 L0,4 L-5,8 L-3,2 L-8,-2 L-2,-2 Z"
                    fill="url(#testiStroke)"
                    fillOpacity="0.6"
                  />
                </g>
              );
            })}
          </g>

          {/* Inner lotus */}
          <g transform="translate(950 350)" className="animate-mv-orbit-reverse" style={{ transformOrigin: "center" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse
                key={i}
                cx="0" cy="-110" rx="28" ry="85"
                fill="none"
                stroke="url(#testiStroke)"
                strokeWidth="1.3"
                strokeOpacity="0.5"
                transform={`rotate(${i * 45})`}
              />
            ))}
            <circle r="36" fill="url(#testiStroke)" fillOpacity="0.18" />
          </g>

          <circle cx="950" cy="350" r="6" fill="#ef4d2b" className="animate-mv-pulse-dot" />

          {[
            { x: 220, y: 140 }, { x: 360, y: 520 }, { x: 600, y: 100 },
            { x: 130, y: 400 }, { x: 720, y: 580 }, { x: 470, y: 250 },
          ].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2" fill="#ef4d2b" className="animate-mv-twinkle" style={{ animationDelay: `${i * 0.6}s` }} />
          ))}
        </svg>
      </div>

      <div className="relative section-container py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f6d46b] bg-white/80 backdrop-blur text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ef4d2b]">
            <Star className="w-3.5 h-3.5 fill-[#f6b400] text-[#f6b400]" />
            Stories from our clients
          </div>
          <h1 className="font-heading mt-5 text-4xl md:text-6xl font-light tracking-tight text-[#1a1a1a] leading-[1.05]">
            Real homes. Real charts. <span className="mv-gradient-text font-medium">Real change.</span>
          </h1>
          <p className="mt-6 text-lg text-[#4a4a4a] leading-relaxed max-w-2xl">
            For nearly two decades, families, builders and businesses have trusted Maha Vastu with the most
            personal corners of their lives. Here are some of the stories — in their own words.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="mv-gradient text-white rounded-full px-7 py-6 text-base">
              <Link href="/contact" data-testid="testi-hero-cta">
                Start your story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-7 py-6 text-base border-[#ef4d2b] text-[#ef4d2b] hover:bg-[#fff5eb]">
              <a href={`tel:${BRAND.phoneTel}`}>
                <Phone className="mr-2 w-4 h-4" />
                {BRAND.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { num: "4.9", label: "Average client rating", suffix: "/ 5", icon: Star },
    { num: "3,500+", label: "Consultations delivered", icon: Users },
    { num: "500+", label: "Builder & business projects", icon: Building2 },
    { num: "92%", label: "Repeat or referred clients", icon: HeartHandshake },
  ];
  return (
    <section className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fff5eb] border border-[#f6d46b]/40 mx-auto">
              <s.icon className="w-4.5 h-4.5 text-[#ef4d2b]" />
            </div>
            <div className="mt-3 font-heading text-3xl md:text-4xl mv-gradient-text font-medium">
              {s.num}
              {s.suffix && <span className="text-base text-[#4a4a4a] font-light ml-1">{s.suffix}</span>}
            </div>
            <div className="mt-1 text-xs md:text-sm text-[#4a4a4a]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedQuote() {
  const featured = ALL_TESTIMONIALS[0];
  return (
    <section className="section-container py-20 md:py-24">
      <div className="relative rounded-3xl overflow-hidden border border-[#f6d46b] bg-gradient-to-br from-[#fff5eb] via-white to-[#fffaf0] p-10 md:p-16">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#f6d46b]/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#ef4d2b]/15 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <Quote className="w-14 h-14 mx-auto text-[#ef4d2b] opacity-30" />
          <blockquote className="font-heading mt-6 text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1a1a1a] leading-snug">
            "{featured.quote}"
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-heading text-lg shadow-md"
              style={{ background: `linear-gradient(135deg, #f6d46b 0%, ${featured.color} 100%)` }}
            >
              {featured.initials}
            </div>
            <div className="text-left">
              <div className="font-heading text-lg font-medium text-[#1a1a1a]">{featured.name}</div>
              <div className="text-sm text-[#4a4a4a]">
                {featured.role} · {featured.location}
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <StarRow count={featured.rating} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const filtered =
    filter === "all" ? ALL_TESTIMONIALS : ALL_TESTIMONIALS.filter((t) => t.service === filter);

  return (
    <section id="all-stories" className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">All stories</div>
            <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
              Filter by what matters to you.
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                data-testid={`filter-${f.key}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  active
                    ? "mv-gradient text-white border-transparent shadow-sm"
                    : "bg-white text-[#1a1a1a] border-[#f0e6d2] hover:border-[#f6d46b] hover:text-[#ef4d2b]"
                }`}
              >
                <f.icon className="w-3.5 h-3.5" />
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t, i) => (
            <article
              key={i}
              className="group relative bg-white border border-[#f0e6d2] rounded-2xl p-7 hover:border-[#f6d46b] hover:shadow-lg transition-all flex flex-col"
              data-testid={`testimonial-${i}`}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#f6d46b]/10 to-transparent rounded-tr-2xl rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between">
                <StarRow count={t.rating} />
                <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#ef4d2b] bg-[#fff5eb] border border-[#f6d46b]/40 rounded-full px-2.5 py-1">
                  {t.service}
                </span>
              </div>

              <Quote className="w-7 h-7 text-[#ef4d2b] opacity-25 mt-5" />
              <p className="mt-3 text-[#1a1a1a] leading-relaxed flex-1">"{t.quote}"</p>

              <div className="mt-6 pt-5 border-t border-[#f9f1de] flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-heading text-sm shadow-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, #f6d46b 0%, ${t.color} 100%)` }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-heading text-base font-medium text-[#1a1a1a] truncate">{t.name}</div>
                  <div className="text-xs text-[#4a4a4a] flex items-center gap-1 mt-0.5">
                    <span>{t.role}</span>
                    <span className="text-[#f0e6d2]">·</span>
                    <MapPin className="w-3 h-3 text-[#ef4d2b]" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-2 text-[12px] text-[#4a4a4a]">
                <Check className="w-3.5 h-3.5 text-[#ef4d2b] mt-0.5 flex-shrink-0" />
                <span className="italic">{t.result}</span>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-[#4a4a4a]">
            No stories yet under this category — but we have many to share. Please reach out.
          </div>
        )}
      </div>
    </section>
  );
}

function Spotlights() {
  const spotlights = [
    {
      icon: HeartHandshake,
      tag: "Family",
      title: "Aanya's career chapter",
      body: "After six months of indecision, a single Astro Vastu sitting realigned her bedroom and weekly direction of work. Within ten weeks she accepted a role she'd previously been afraid to consider.",
      stat: "10 weeks to clarity",
    },
    {
      icon: Building2,
      tag: "Builder",
      title: "Devraj's three towers",
      body: "Three residential towers planned with Maha Vastu's land-energy method. Possession bookings closed faster than any of the firm's previous projects in the same micro-market.",
      stat: "Bookings closed faster",
    },
    {
      icon: Mountain,
      tag: "Industry",
      title: "An 80,000 sq.ft. unit",
      body: "A manufacturing setup planned at the layout stage with Devata Vastu principles. Three years on, attrition sits well below the regional industry average.",
      stat: "Low attrition, 3 years on",
    },
  ];

  return (
    <section className="section-container py-20 md:py-28">
      <div className="max-w-2xl">
        <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Spotlights</div>
        <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
          A closer look at three transformations.
        </h2>
        <p className="mt-5 text-lg text-[#4a4a4a] leading-relaxed">
          Names and details shared with permission. Outcomes are honest reflections of what our clients
          measured for themselves — not promises we make to you.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {spotlights.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-3xl border border-[#f0e6d2] bg-gradient-to-br from-white via-[#fffaf0] to-[#fff5eb] p-8 hover:border-[#f6d46b] hover:shadow-lg transition-all"
            data-testid={`spotlight-${i}`}
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#f6d46b]/20 blur-2xl group-hover:bg-[#f6d46b]/30 transition-colors" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full mv-gradient flex items-center justify-center shadow-sm">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#ef4d2b] bg-white border border-[#f6d46b] rounded-full px-2.5 py-1">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl md:text-2xl font-medium text-[#1a1a1a]">{s.title}</h3>
              <p className="mt-3 text-[#4a4a4a] leading-relaxed text-[15px]">{s.body}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ef4d2b]">
                <Check className="w-4 h-4" />
                {s.stat}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Carousel() {
  const items = ALL_TESTIMONIALS.slice(0, 6);
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = items[idx];

  return (
    <section className="bg-gradient-to-b from-white via-[#fff5eb]/30 to-white border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">In their own words</div>
          <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
            Listen to a single voice at a time.
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white border border-[#f0e6d2] rounded-3xl shadow-sm p-10 md:p-14 text-center min-h-[320px] flex flex-col items-center justify-center transition-all">
            <Quote className="w-10 h-10 text-[#ef4d2b] opacity-30" />
            <blockquote className="mt-5 font-heading text-xl md:text-2xl font-light text-[#1a1a1a] leading-relaxed">
              "{t.quote}"
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading text-base shadow-sm"
                style={{ background: `linear-gradient(135deg, #f6d46b 0%, ${t.color} 100%)` }}
              >
                {t.initials}
              </div>
              <div className="text-left">
                <div className="font-heading text-base font-medium text-[#1a1a1a]">{t.name}</div>
                <div className="text-xs text-[#4a4a4a]">{t.role} · {t.location}</div>
              </div>
            </div>
            <div className="mt-4">
              <StarRow count={t.rating} />
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[#f0e6d2] shadow-md hover:border-[#f6d46b] hover:text-[#ef4d2b] flex items-center justify-center text-[#1a1a1a]"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[#f0e6d2] shadow-md hover:border-[#f6d46b] hover:text-[#ef4d2b] flex items-center justify-center text-[#1a1a1a]"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 mv-gradient" : "w-1.5 bg-[#f0e6d2] hover:bg-[#f6d46b]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-container py-20 md:py-28">
      <div className="relative rounded-3xl overflow-hidden border border-[#f6d46b] bg-gradient-to-br from-[#fff5eb] via-white to-[#fffaf0] p-10 md:p-16 text-center">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#f6d46b]/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#ef4d2b]/15 blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f6d46b] bg-white text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ef4d2b]">
            Add your story
          </div>
          <h2 className="font-heading mt-5 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a] leading-tight">
            The next testimonial on this page <span className="mv-gradient-text font-medium">could be yours</span>.
          </h2>
          <p className="mt-5 text-lg text-[#4a4a4a] leading-relaxed">
            Book a free 15-minute clarity call. If we cannot help, we will tell you so honestly — and point
            you to someone who can.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="mv-gradient text-white rounded-full px-7 py-6 text-base">
              <Link href="/contact" data-testid="testi-cta-book">
                Book a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-7 py-6 text-base border-[#ef4d2b] text-[#ef4d2b] hover:bg-[#fff5eb]">
              <Link href="/services">Explore our services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, []);

  return (
    <main className="bg-white">
      <TestimonialsHero />
      <StatsBar />
      <FeaturedQuote />
      <TestimonialsGrid />
      <Spotlights />
      <Carousel />
      <CTA />
    </main>
  );
}
