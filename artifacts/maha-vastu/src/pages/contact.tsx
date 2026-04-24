import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Phone, Mail, MapPin, MessageCircle, Check, ArrowRight, Clock,
  Sparkles, ShieldCheck, Calendar, Upload, ChevronRight, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import contactHeroBg from "@/assets/contact-hero-bg.png";

const BRAND = {
  name: "Maha Vastu",
  phone: "+91 99999 99999",
  phoneTel: "+919999999999",
  whatsapp: "919999999999",
  email: "consult@mahavastu.example",
  address: "Pimpri-Chinchwad, Pune, Maharashtra 411018",
  mapsQuery: "Pimpri-Chinchwad, Pune",
  hours: "Mon–Sat · 10:00 am – 7:00 pm IST",
};

const SERVICE_OPTIONS = [
  "Vastu Consultation",
  "Astro Vastu (Personalized)",
  "Astrology Consultation",
  "Land & Plot Analysis",
  "Aura & Chakra Healing",
  "Business & Industrial Consulting",
  "Not sure yet — please advise",
];

const PROPERTY_OPTIONS = [
  "Apartment / Flat",
  "Independent house / Villa",
  "Office / Shop",
  "Factory / Industrial",
  "Plot / Land",
  "Other",
];

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5eb] via-[#fffaf0] to-white">
      {/* Spiritual divine background image (behind animation) */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${contactHeroBg})` }}
        aria-hidden="true"
      />
      {/* Soft cream overlay for text readability — stronger on the left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,245,235,0.92) 0%, rgba(255,245,235,0.75) 35%, rgba(255,245,235,0.40) 65%, rgba(255,245,235,0.20) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade into page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 700" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="contactGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#f6d46b" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#ef4d2b" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#ef4d2b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="contactStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f6d46b" />
              <stop offset="100%" stopColor="#ef4d2b" />
            </linearGradient>
          </defs>
          <circle cx="950" cy="350" r="380" fill="url(#contactGlow)" />

          {/* Outer compass ring */}
          <g transform="translate(950 350)" className="animate-mv-orbit" style={{ transformOrigin: "center" }}>
            <circle r="280" fill="none" stroke="url(#contactStroke)" strokeOpacity="0.35" strokeDasharray="3 6" />
            <circle r="220" fill="none" stroke="url(#contactStroke)" strokeOpacity="0.25" />
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={i}
                x1="0" y1="-280" x2="0" y2="-240"
                stroke="url(#contactStroke)"
                strokeWidth="1.2"
                strokeOpacity="0.5"
                transform={`rotate(${i * 22.5})`}
              />
            ))}
          </g>

          {/* Inner directional axes */}
          <g transform="translate(950 350)" className="animate-mv-orbit-reverse" style={{ transformOrigin: "center" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="0" y1="0" x2="0" y2="-200"
                stroke="url(#contactStroke)"
                strokeWidth="1"
                strokeOpacity="0.45"
                transform={`rotate(${i * 45})`}
              />
            ))}
            <circle r="120" fill="none" stroke="url(#contactStroke)" strokeOpacity="0.55" />
            <circle r="60" fill="url(#contactStroke)" fillOpacity="0.18" />
          </g>

          <circle cx="950" cy="350" r="6" fill="#ef4d2b" className="animate-mv-pulse-dot" />

          {[
            { x: 200, y: 100 }, { x: 380, y: 540 }, { x: 620, y: 80 },
            { x: 100, y: 420 }, { x: 730, y: 600 }, { x: 480, y: 240 },
          ].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2" fill="#ef4d2b" className="animate-mv-twinkle" style={{ animationDelay: `${i * 0.6}s` }} />
          ))}
        </svg>
      </div>

      <div className="relative section-container py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f6d46b] bg-white/80 backdrop-blur text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ef4d2b]">
            <Sparkles className="w-3.5 h-3.5" />
            Begin your consultation
          </div>
          <h1 className="font-heading mt-5 text-4xl md:text-6xl font-light tracking-tight text-[#1a1a1a] leading-[1.05]">
            Let's understand your <span className="mv-gradient-text font-medium">situation</span> first.
          </h1>
          <p className="mt-6 text-lg text-[#4a4a4a] leading-relaxed max-w-2xl">
            Share a few details about your home, your kundali, or the question on your mind. A Maha Vastu
            advisor reviews every request personally and responds within 24 hours with a suggested next step
            — completely free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="mv-gradient text-white rounded-full px-7 py-6 text-base">
              <a href={`tel:${BRAND.phoneTel}`} data-testid="contact-hero-call">
                <Phone className="mr-2 w-4 h-4" />
                Call {BRAND.phone}
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-7 py-6 text-base border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Maha Vastu, I'd like to book a consultation.")}`}
                target="_blank" rel="noreferrer"
                data-testid="contact-hero-whatsapp"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-[#1a1a1a]">
              <Clock className="w-5 h-5 text-[#ef4d2b]" />
              <span>{BRAND.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-[#1a1a1a]">
              <ShieldCheck className="w-5 h-5 text-[#ef4d2b]" />
              <span>Reply within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-[#1a1a1a]">
              <Star className="w-5 h-5 text-[#f6b400] fill-[#f6b400]" />
              <span>4.9 / 5 client rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelCards() {
  const channels = [
    {
      icon: Phone,
      label: "Call us",
      title: BRAND.phone,
      sub: BRAND.hours,
      href: `tel:${BRAND.phoneTel}`,
      color: "#ef4d2b",
      bg: "#fff5eb",
      testid: "channel-call",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      title: "Chat with us",
      sub: "Fastest reply, usually within an hour",
      href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Maha Vastu, I'd like to book a consultation.")}`,
      color: "#25D366",
      bg: "rgba(37, 211, 102, 0.12)",
      external: true,
      testid: "channel-whatsapp",
    },
    {
      icon: Mail,
      label: "Email",
      title: BRAND.email,
      sub: "Reports, follow-ups & receipts",
      href: `mailto:${BRAND.email}`,
      color: "#ef4d2b",
      bg: "#fff5eb",
      testid: "channel-email",
    },
    {
      icon: MapPin,
      label: "Studio",
      title: "Pimpri-Chinchwad, Pune",
      sub: "Visits by appointment only",
      href: `https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}`,
      color: "#ef4d2b",
      bg: "#fff5eb",
      external: true,
      testid: "channel-studio",
    },
  ];

  return (
    <section className="section-container py-14 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {channels.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noreferrer" : undefined}
            data-testid={c.testid}
            className="group relative bg-white border border-[#f0e6d2] rounded-2xl p-6 hover:border-[#f6d46b] hover:shadow-lg transition-all"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#f6d46b]/10 to-transparent rounded-tr-2xl rounded-bl-full pointer-events-none" />
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: c.bg }}
            >
              <c.icon className="w-5 h-5" style={{ color: c.color }} />
            </div>
            <div className="mt-5 text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: c.color }}>
              {c.label}
            </div>
            <div className="font-heading text-lg font-medium text-[#1a1a1a] mt-1 break-words">{c.title}</div>
            <div className="text-sm text-[#4a4a4a] mt-1">{c.sub}</div>
            <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#ef4d2b] opacity-0 group-hover:opacity-100 transition-opacity">
              Open <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    propertyType: "",
    location: "",
    dob: "",
    query: "",
    fileName: "",
  });
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const update = (k: keyof typeof form, v: string) => setForm({ ...form, [k]: v });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.email || !form.service || !form.query) {
      setErr("Please fill name, mobile, email, the service you need, and a short query description.");
      return;
    }
    setErr("");
    setDone(true);
  };

  return (
    <section id="form" className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: copy + reassurance */}
          <div className="lg:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Lead form</div>
            <h2 className="font-heading mt-3 text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a]">
              Tell us about your home, your kundali, or your question.
            </h2>
            <p className="mt-5 text-[#4a4a4a] leading-relaxed">
              The more context you share, the more precise our first reply will be. All details stay private
              and are used only to prepare your consultation.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, title: "100% private", body: "Your details are never shared, sold, or added to mailing lists." },
                { icon: Clock, title: "24-hour reply", body: "An advisor reviews every request personally and responds with a clear next step." },
                { icon: Calendar, title: "Muhurat-aligned", body: "First sittings are scheduled at energetically supportive times — never randomly." },
              ].map((it, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fff5eb] border border-[#f6d46b]/40 flex items-center justify-center flex-shrink-0">
                    <it.icon className="w-4.5 h-4.5 text-[#ef4d2b]" />
                  </div>
                  <div>
                    <div className="font-heading text-base font-medium text-[#1a1a1a]">{it.title}</div>
                    <div className="text-sm text-[#4a4a4a] mt-0.5 leading-relaxed">{it.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            {done ? (
              <div className="bg-white rounded-3xl border border-[#f6d46b] p-10 md:p-14 text-center">
                <div className="w-16 h-16 mx-auto rounded-full mv-gradient flex items-center justify-center shadow-md">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="mt-6 font-heading text-2xl md:text-3xl font-medium text-[#1a1a1a]">
                  Request received.
                </h3>
                <p className="mt-3 text-[#4a4a4a] leading-relaxed max-w-md mx-auto">
                  Our team will reach out to <span className="text-[#1a1a1a] font-medium">{form.email}</span>{" "}
                  within 24 hours. Check your email and WhatsApp for the intake form and next steps.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild className="mv-gradient text-white rounded-full px-6">
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hello, I just submitted the form. My name is ${form.name}.`)}`}
                      target="_blank" rel="noreferrer"
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Continue on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6 border-[#ef4d2b] text-[#ef4d2b] hover:bg-[#fff5eb]">
                    <Link href="/services">Explore our services</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="bg-white rounded-3xl border border-[#f0e6d2] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5 shadow-sm"
                data-testid="contact-form"
              >
                <Field label="Full name" required>
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="form-input"
                    placeholder="Your full name"
                    data-testid="form-name"
                  />
                </Field>

                <Field label="Mobile number" required>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => update("mobile", e.target.value)}
                    className="form-input"
                    placeholder="+91 ..."
                    data-testid="form-mobile"
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="form-input"
                    placeholder="you@email.com"
                    data-testid="form-email"
                  />
                </Field>

                <Field label="Service interested in" required>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="form-input"
                    data-testid="form-service"
                  >
                    <option value="">Choose a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Property type">
                  <select
                    value={form.propertyType}
                    onChange={(e) => update("propertyType", e.target.value)}
                    className="form-input"
                    data-testid="form-property"
                  >
                    <option value="">Optional — choose if relevant</option>
                    {PROPERTY_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Location (city / area)">
                  <input
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className="form-input"
                    placeholder="e.g. Pune, Mumbai, Bengaluru"
                    data-testid="form-location"
                  />
                </Field>

                <Field label="Date of birth" hint="For astrology / Astro Vastu only">
                  <input
                    type="date"
                    value={form.dob}
                    onChange={(e) => update("dob", e.target.value)}
                    className="form-input"
                    data-testid="form-dob"
                  />
                </Field>

                <Field label="Upload house / plot plan" hint="Optional · PDF, JPG or PNG">
                  <label className="form-input flex items-center justify-between cursor-pointer hover:border-[#ef4d2b]">
                    <span className="text-[#4a4a4a] truncate">
                      {form.fileName || "Choose file..."}
                    </span>
                    <Upload className="w-4 h-4 text-[#ef4d2b] flex-shrink-0" />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => update("fileName", e.target.files?.[0]?.name || "")}
                      data-testid="form-upload"
                    />
                  </label>
                </Field>

                <div className="md:col-span-2">
                  <Field label="Tell us about your situation" required>
                    <textarea
                      value={form.query}
                      onChange={(e) => update("query", e.target.value)}
                      rows={5}
                      className="form-input resize-y min-h-[120px] py-3"
                      placeholder="Briefly describe what you'd like help with — home concern, life question, plot enquiry, etc."
                      data-testid="form-query"
                    />
                  </Field>
                </div>

                {err && (
                  <div className="md:col-span-2 text-sm text-[#ef4d2b] bg-[#fff5eb] border border-[#f6d46b] rounded-xl px-4 py-3">
                    {err}
                  </div>
                )}

                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-[#f0e6d2]">
                  <p className="text-xs text-[#4a4a4a] max-w-md">
                    By submitting, you agree we may contact you by phone, email or WhatsApp regarding your
                    consultation. Your details remain private.
                  </p>
                  <Button
                    type="submit"
                    className="mv-gradient text-white rounded-full px-7 py-6 text-base whitespace-nowrap"
                    data-testid="form-submit"
                  >
                    Get personalized solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          height: 2.75rem;
          padding-left: 1rem;
          padding-right: 1rem;
          border-radius: 0.75rem;
          border: 1px solid #f0e6d2;
          background: #faf9f6;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .form-input:focus {
          border-color: #ef4d2b;
        }
        textarea.form-input {
          height: auto;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#4a4a4a] font-semibold">
        <span>
          {label}
          {required && <span className="text-[#ef4d2b] ml-1">*</span>}
        </span>
        {hint && <span className="normal-case tracking-normal text-[10px] text-[#4a4a4a]/70">{hint}</span>}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function MapAndHours() {
  return (
    <section className="section-container py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-[#f6d46b]/25 to-[#ef4d2b]/15 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border border-[#f0e6d2] shadow-sm h-[420px] md:h-[480px]">
            <iframe
              title="Maha Vastu studio location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="bg-white border border-[#f0e6d2] rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-bold">Studio address</div>
            <div className="font-heading text-xl font-medium text-[#1a1a1a] mt-2 leading-snug">
              {BRAND.address}
            </div>
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}`}
              target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ef4d2b]"
              data-testid="open-in-maps"
            >
              Open in Google Maps <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white border border-[#f0e6d2] rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-[#ef4d2b] font-bold">Consulting hours</div>
            <ul className="mt-3 divide-y divide-[#f9f1de] text-[15px] text-[#1a1a1a]">
              <li className="flex justify-between py-2">
                <span>Monday – Friday</span>
                <span className="text-[#4a4a4a]">10:00 am – 7:00 pm</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Saturday</span>
                <span className="text-[#4a4a4a]">10:00 am – 5:00 pm</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Sunday</span>
                <span className="text-[#4a4a4a]">By appointment</span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-[#4a4a4a]">All consultations by prior appointment only.</div>
          </div>

          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello Maha Vastu, I'd like to book a consultation.")}`}
            target="_blank" rel="noreferrer"
            className="bg-gradient-to-br from-[#25D366]/10 to-white border border-[#25D366]/30 rounded-2xl p-6 hover:shadow-md transition-shadow flex items-center gap-4"
            data-testid="whatsapp-quick"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div className="flex-1">
              <div className="font-heading text-base font-medium text-[#1a1a1a]">Prefer to chat?</div>
              <div className="text-sm text-[#4a4a4a]">Message us on WhatsApp anytime — usually replied within an hour.</div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#25D366] flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How soon will I hear back after I send the form?",
    a: "An advisor personally reviews every request and replies within 24 hours — usually much sooner. Urgent matters can always reach us on WhatsApp or by phone.",
  },
  {
    q: "Do I have to visit the studio in person?",
    a: "No. Most consultations are done remotely with photos, plans and a video call. On-site visits are arranged for builders, factories, or detailed home audits inside Maharashtra.",
  },
  {
    q: "What should I share for an Astro Vastu reading?",
    a: "Your full date, time and place of birth, plus a basic plan or photos of your home. We will send a clear intake form after you submit the contact form.",
  },
  {
    q: "Will I be asked to perform expensive rituals?",
    a: "Never. Maha Vastu's promise is simple, low-cost, non-destructive remedies. If something genuinely needs a ritual, we explain why before recommending it.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-[#faf9f6] border-y border-[#f0e6d2]">
      <div className="section-container py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold">Before you reach out</div>
          <h2 className="font-heading mt-3 text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a]">
            Quick answers to the things people usually ask first.
          </h2>
          <p className="mt-5 text-[#4a4a4a] leading-relaxed">
            Don't see your question? Drop it in the form above or message us on WhatsApp — we'd rather you ask
            than wonder.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`bg-white border rounded-2xl transition-all ${open ? "border-[#f6d46b] shadow-sm" : "border-[#f0e6d2]"}`}
                data-testid={`faq-${i}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-6"
                  aria-expanded={open}
                >
                  <span className="font-heading text-lg font-medium text-[#1a1a1a]">{f.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#ef4d2b] flex-shrink-0 transition-transform ${open ? "rotate-90" : ""}`}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-6 text-[#4a4a4a] leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, []);

  return (
    <main className="bg-white">
      <ContactHero />
      <ChannelCards />
      <ContactForm />
      <MapAndHours />
      <FAQ />
    </main>
  );
}
