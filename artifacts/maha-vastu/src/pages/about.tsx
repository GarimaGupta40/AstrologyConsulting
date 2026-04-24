import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Compass, Sparkles, Mountain, HeartHandshake, Sun, ShieldCheck,
  Award, Users, MapPin, Quote, Check, ArrowRight, Star, Flame,
  BookOpen, Lightbulb, Eye, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutHeroBg from "@/assets/about-hero-bg.png";
import founderJourneyImg from "@assets/image_1777018008747.png";

const BRAND = {
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
};

const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85";
const TEMPLE_IMG =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85";
const MANDALA_IMG =
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85";
const MEDITATION_IMG =
  "https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85";
const LOTUS_IMG =
  "https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5eb] via-[#fffaf0] to-white">
      {/* Spiritual divine Indian background image (behind animation) */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-75"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
        aria-hidden="true"
      />
      {/* Cream wash overlay — stronger on the left for headline readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,245,235,0.92) 0%, rgba(255,245,235,0.78) 35%, rgba(255,245,235,0.40) 65%, rgba(255,245,235,0.20) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade into white */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 700" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="aboutGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#f6d46b" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#ef4d2b" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#ef4d2b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="aboutStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f6d46b" />
              <stop offset="100%" stopColor="#ef4d2b" />
            </linearGradient>
          </defs>
          <circle cx="950" cy="350" r="380" fill="url(#aboutGlow)" />

          {/* Outer rotating mandala */}
          <g transform="translate(950 350)" className="animate-mv-orbit" style={{ transformOrigin: "center" }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1="0" y1="-300" x2="0" y2="-260"
                stroke="url(#aboutStroke)"
                strokeWidth="1.2"
                strokeOpacity="0.5"
                transform={`rotate(${i * 15})`}
              />
            ))}
            <circle r="300" fill="none" stroke="url(#aboutStroke)" strokeOpacity="0.35" strokeDasharray="2 6" />
            <circle r="260" fill="none" stroke="url(#aboutStroke)" strokeOpacity="0.25" />
          </g>

          {/* Inner counter-rotating lotus */}
          <g transform="translate(950 350)" className="animate-mv-orbit-reverse" style={{ transformOrigin: "center" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse
                key={i}
                cx="0" cy="-130" rx="32" ry="100"
                fill="none"
                stroke="url(#aboutStroke)"
                strokeWidth="1.4"
                strokeOpacity="0.55"
                transform={`rotate(${i * 45})`}
              />
            ))}
            <circle r="40" fill="url(#aboutStroke)" fillOpacity="0.18" />
          </g>

          {/* Central glowing bindu */}
          <circle cx="950" cy="350" r="6" fill="#ef4d2b" className="animate-mv-pulse-dot" />

          {/* Background twinkles */}
          {[
            { x: 180, y: 120 }, { x: 320, y: 540 }, { x: 580, y: 90 },
            { x: 120, y: 420 }, { x: 700, y: 600 }, { x: 460, y: 260 },
          ].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2" fill="#ef4d2b" className="animate-mv-twinkle" style={{ animationDelay: `${i * 0.6}s` }} />
          ))}
        </svg>
      </div>

      <div className="relative section-container py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f6d46b] bg-white/80 backdrop-blur text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ef4d2b]">
            <Sparkles className="w-3.5 h-3.5" />
            About Maha Vastu
          </div>
          <h1 className="font-heading mt-5 text-4xl md:text-6xl font-light tracking-tight text-[#1a1a1a] leading-[1.05]">
            Where ancient <span className="mv-gradient-text font-medium">cosmic wisdom</span> meets modern, measurable practice.
          </h1>
          <p className="mt-6 text-lg text-[#4a4a4a] leading-relaxed max-w-2xl">
            For nearly two decades we have helped families, builders, and businesses align their homes,
            destinies, and energy with the timeless principles of Vastu Shastra and Vedic Astrology — without
            superstition, without fear, and without breaking a single wall.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="mv-gradient text-white rounded-full px-7 py-6 text-base">
              <a href="/#contact" data-testid="about-hero-cta-book">
                Book a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-7 py-6 text-base border-[#ef4d2b] text-[#ef4d2b] hover:bg-[#fff5eb]">
              <a href={`tel:${BRAND.phone}`}>
                <Phone className="mr-2 w-4 h-4" />
                {BRAND.phone}
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2 text-[#1a1a1a]">
              <Award className="w-5 h-5 text-[#ef4d2b]" />
              <span>18+ years of consulting</span>
            </div>
            <div className="flex items-center gap-2 text-[#1a1a1a]">
              <Users className="w-5 h-5 text-[#ef4d2b]" />
              <span>3,500+ clients guided</span>
            </div>
            <div className="flex items-center gap-2 text-[#1a1a1a]">
              <MapPin className="w-5 h-5 text-[#ef4d2b]" />
              <span>Pimpri-Chinchwad, India</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StoryStrip() {
  const stats = [
    { num: "18+", label: "Years of dedicated practice" },
    { num: "3,500+", label: "Homes & businesses guided" },
    { num: "45", label: "Devata Vastu principles applied" },
    { num: "0", label: "Walls demolished — ever" },
  ];
  return (
    <section className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-heading text-3xl md:text-4xl mv-gradient-text font-medium">{s.num}</div>
            <div className="mt-1 text-xs md:text-sm text-[#4a4a4a]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FounderJourney() {
  return (
    <section className="section-container py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#f6d46b]/25 to-[#ef4d2b]/15 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border border-[#f0e6d2] shadow-sm">
            <img src={founderJourneyImg} alt="Founder's journey" loading="lazy" className="w-full h-[520px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white border border-[#f0e6d2] rounded-2xl px-5 py-4 shadow-md hidden md:block max-w-[200px]">
            <Quote className="w-5 h-5 text-[#ef4d2b] mb-1" />
            <div className="text-sm italic text-[#1a1a1a] leading-snug">
              "Energy is not mystery — it is mathematics you can feel."
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">The founder's journey</div>
        <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
          A lifetime devoted to the science of <span className="mv-gradient-text font-medium">space and stars</span>.
        </h2>

        <div className="mt-8 space-y-6 text-[#4a4a4a] text-[17px] leading-relaxed">
          <p>
            Maha Vastu was founded by <span className="text-[#1a1a1a] font-medium">Acharya Vinayak</span>, a
            Pimpri-Chinchwad-based consultant whose practice grew out of a simple, persistent question
            asked of him by clients: <em>"why does my space feel heavy even when nothing is wrong?"</em>
          </p>
          <p>
            That question led to nearly two decades of disciplined study under respected lineage holders,
            including the teachings of <span className="text-[#1a1a1a] font-medium">Sumit Ravel</span> and the
            <span className="text-[#1a1a1a] font-medium"> Vastu Shilpak</span> tradition — schools that treat the
            home as a living organism and the chart as a personal blueprint.
          </p>
          <p>
            Today, the Maha Vastu practice integrates classical Vedic astrology, the 45 Devata principles
            of Vastu, and modern aura and chakra sciences — applied with the rigour of a consultant and the
            care of a family priest. Every recommendation is written, time-bound, and built to be measured.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Trained in Vedic astrology & Kundali analysis",
            "45 Devata Vastu principles practitioner",
            "Astro Vastu personalisation specialist",
            "Aura, chakra & meditation guidance",
            "Land & plot energy consulting",
            "Builder & industrial vastu advisor",
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 text-[#1a1a1a]">
              <Check className="w-5 h-5 text-[#ef4d2b] mt-0.5 shrink-0" />
              <span className="text-[15px]">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: Compass,
    title: "Tradition, applied",
    desc: "We honour classical Vastu Shastra and Vedic Jyotish exactly — but we deliver them as a modern, measurable consulting practice.",
  },
  {
    icon: ShieldCheck,
    title: "No fear, no theatrics",
    desc: "You'll never be sold dosh, panic, or expensive 'urgent' rituals. Just clear diagnosis, clear remedies, and clear timelines.",
  },
  {
    icon: Mountain,
    title: "Non-destructive solutions",
    desc: "We solve 90% of cases without breaking walls. Direction, placement, colour, mantra and muhurat — used with precision.",
  },
  {
    icon: Sun,
    title: "Whole-life alignment",
    desc: "Home, kundali, relationships, finance and inner energy are treated as one connected system — not separate problems.",
  },
];

function Pillars() {
  return (
    <section className="bg-gradient-to-b from-white via-[#fff5eb]/40 to-white border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">What we believe</div>
          <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
            Four pillars that shape every consultation.
          </h2>
          <p className="mt-5 text-lg text-[#4a4a4a] leading-relaxed">
            These aren't slogans. They are the working principles every advisor in our practice agrees to
            before they sit across from a client.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white border border-[#f0e6d2] rounded-2xl p-8 hover:border-[#f6d46b] hover:shadow-lg transition-all"
              data-testid={`pillar-${i}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f6d46b]/10 to-transparent rounded-tr-2xl rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-full mv-gradient flex items-center justify-center shadow-sm">
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium text-[#1a1a1a]">{p.title}</h3>
              <p className="mt-2 text-[#4a4a4a] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LINEAGE = [
  {
    icon: BookOpen,
    title: "Vedic Jyotish lineage",
    body: "Trained in classical Parashari astrology — Kundali, Dasha, Gochar and Muhurat — under traditional Acharyas, with disciplined daily practice for nearly two decades.",
  },
  {
    icon: Mountain,
    title: "Vastu Shilpak tradition",
    body: "Studies inspired by the Vastu Shilpak school and the modern teachings of Sumit Ravel, integrating 45 Devata principles with practical, non-destructive remedies.",
  },
  {
    icon: Eye,
    title: "Aura & chakra sciences",
    body: "Personal sadhana in the seven-chakra system, energy diagnostics and meditative healing — used as the inner mirror of every Astro Vastu reading.",
  },
];

function Lineage() {
  return (
    <section className="section-container py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Our lineage</div>
          <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
            Rooted in three sacred sciences.
          </h2>
          <p className="mt-5 text-lg text-[#4a4a4a] leading-relaxed">
            Maha Vastu is not a single discipline — it is a deliberate weaving of three traditional sciences,
            each studied formally, each practiced daily.
          </p>

          <div className="relative mt-10 rounded-3xl overflow-hidden border border-[#f0e6d2] shadow-sm">
            <img src={MANDALA_IMG} alt="Sacred mandala" loading="lazy" className="w-full h-[280px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/80 font-semibold">Inspired by</div>
              <div className="font-heading text-white text-lg mt-1">
                Vinayak Astro · Sumit Ravel · Vastu Shilpak
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {LINEAGE.map((l, i) => (
            <div
              key={i}
              className="flex gap-5 p-7 bg-white border border-[#f0e6d2] rounded-2xl hover:border-[#f6d46b] transition-colors"
              data-testid={`lineage-${i}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#fff5eb] border border-[#f6d46b]/40 flex items-center justify-center flex-shrink-0">
                <l.icon className="w-5 h-5 text-[#ef4d2b]" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-medium text-[#1a1a1a]">{l.title}</h3>
                <p className="mt-2 text-[#4a4a4a] leading-relaxed">{l.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  {
    year: "2007",
    title: "First foundations",
    body: "Practice begins quietly in Pimpri-Chinchwad, helping local families correct home Vastu without renovation.",
  },
  {
    year: "2011",
    title: "Astro Vastu integration",
    body: "Kundali analysis is formally added to every Vastu consultation — birthing the personalised Astro Vastu method.",
  },
  {
    year: "2016",
    title: "Builders & industry",
    body: "Land, plot and factory energy planning is offered to builders across Pune, Mumbai and the wider PCMC region.",
  },
  {
    year: "2020",
    title: "Aura & chakra healing",
    body: "Seven-chakra alignment, meditation and personal development sessions complete the whole-self consulting model.",
  },
  {
    year: "Today",
    title: "A trusted modern practice",
    body: "3,500+ consultations, six service pillars, and a single promise: clear diagnosis, measurable remedies, no demolition.",
  },
];

function Timeline() {
  return (
    <section className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Our journey</div>
          <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
            Almost two decades, one steady practice.
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f6d46b] via-[#ef4d2b]/40 to-transparent" />

          <div className="space-y-10">
            {TIMELINE.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}
                  data-testid={`timeline-${i}`}
                >
                  <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ef4d2b] bg-white border border-[#f6d46b] rounded-full px-3 py-1">
                      {t.year}
                    </div>
                    <h3 className="font-heading mt-3 text-2xl font-medium text-[#1a1a1a]">{t.title}</h3>
                    <p className="mt-2 text-[#4a4a4a] leading-relaxed">{t.body}</p>
                  </div>
                  <div className="hidden md:block" />

                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full mv-gradient ring-4 ring-[#faf9f6] shadow-md">
                    <span className="absolute inset-0 rounded-full mv-gradient animate-mv-pulse-dot opacity-70" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="section-container py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#f0e6d2] bg-gradient-to-br from-[#fff5eb] via-white to-[#fffaf0] p-10 md:p-12">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#f6d46b]/30 blur-3xl" />
          <div className="relative">
            <div className="w-12 h-12 rounded-full mv-gradient flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-semibold mt-5">Our mission</div>
            <h3 className="font-heading mt-3 text-2xl md:text-3xl font-light text-[#1a1a1a] leading-snug">
              To make Vastu and Astrology a calm, practical tool for everyday families — not a source of fear.
            </h3>
            <p className="mt-4 text-[#4a4a4a] leading-relaxed">
              We translate ancient texts into clear written reports, simple remedies and measurable outcomes.
              No client should ever leave a consultation more anxious than they arrived.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[#f0e6d2] bg-gradient-to-br from-[#fffaf0] via-white to-[#fff5eb] p-10 md:p-12">
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#ef4d2b]/20 blur-3xl" />
          <div className="relative">
            <div className="w-12 h-12 rounded-full mv-gradient flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-semibold mt-5">Our vision</div>
            <h3 className="font-heading mt-3 text-2xl md:text-3xl font-light text-[#1a1a1a] leading-snug">
              A generation that aligns home, kundali and inner energy — and quietly outgrows their old struggles.
            </h3>
            <p className="mt-4 text-[#4a4a4a] leading-relaxed">
              We see Maha Vastu serving 25,000 homes and 500 builders across India by 2030 — bringing Astro
              Vastu into the mainstream of modern decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Practice() {
  const items = [
    { icon: HeartHandshake, title: "Family-first", body: "We sit with the whole family — children, elders, decision-makers — because no home is a one-person system." },
    { icon: ShieldCheck, title: "Written diagnosis", body: "Every consultation ends with a clear written report you can hold, share and revisit later." },
    { icon: Sparkles, title: "Muhurat-aligned", body: "Every remedy is timed to the right cosmic window — never rushed, never random." },
    { icon: Sun, title: "6-month follow-up", body: "We stay with you after the consultation. A six-month follow-up window is included with every Astro Vastu reading." },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#fff5eb]/30 to-white border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#f6d46b]/25 to-[#ef4d2b]/15 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-[#f0e6d2] shadow-sm">
              <img src={MEDITATION_IMG} alt="Meditation and inner alignment" loading="lazy" className="w-full h-[460px] object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">How we practice</div>
            <h2 className="font-heading mt-3 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a]">
              The little things that make every consultation different.
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {items.map((it, i) => (
                <div key={i} className="bg-white border border-[#f0e6d2] rounded-2xl p-6 hover:border-[#f6d46b] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#fff5eb] flex items-center justify-center">
                    <it.icon className="w-4.5 h-4.5 text-[#ef4d2b]" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium text-[#1a1a1a]">{it.title}</h3>
                  <p className="mt-2 text-[#4a4a4a] text-sm leading-relaxed">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="section-container py-20 md:py-28">
      <div className="relative rounded-3xl overflow-hidden border border-[#f6d46b] bg-gradient-to-br from-[#fff5eb] via-white to-[#fffaf0] p-10 md:p-16">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#f6d46b]/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#ef4d2b]/20 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f6d46b] bg-white text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ef4d2b]">
              Our promise
            </div>
            <h2 className="font-heading mt-5 text-3xl md:text-5xl font-light tracking-tight text-[#1a1a1a] leading-tight">
              "If we cannot improve your home, your kundali, or your peace —
              <span className="mv-gradient-text font-medium"> we will tell you so honestly</span>."
            </h2>
            <p className="mt-5 text-[#4a4a4a] leading-relaxed text-lg">
              That is the only promise we make. Eighteen years of practice has taught us that honesty,
              applied to ancient sciences, is the most powerful remedy of all.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="mv-gradient text-white rounded-full px-7 py-6 text-base">
                <a href="/#contact" data-testid="about-promise-cta">
                  Book a free clarity call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-7 py-6 text-base border-[#ef4d2b] text-[#ef4d2b] hover:bg-[#fff5eb]">
                <Link href="/services">Explore our services</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#f6d46b]/40 to-[#ef4d2b]/25 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-[#f0e6d2] shadow-md">
                <img src={LOTUS_IMG} alt="Lotus blossom" loading="lazy" className="w-full h-[360px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, []);

  return (
    <main className="bg-white">
      <AboutHero />
      <StoryStrip />
      <FounderJourney />
      <Pillars />
      <Lineage />
      <MissionVision />
      <Timeline />
      <Practice />
      <Promise />
    </main>
  );
}
