import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Factory,
  FlameKindling,
  Gauge,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  Zap
} from "lucide-react";
import Image from "next/image";

const phoneNumber = "+27 69 303 7930";
const emailAddress = "quotes@groovecore.co.za";
const companyAddress = "11 Madeley Weg, Strubenvale, Springs, 1559";
const whatsappUrl = "https://wa.me/27693037930";

const navItems = [
  ["Services", "#services"],
  ["Products", "#products"],
  ["Quote", "#quote"],
  ["Contact", "#contact"]
];

const services = [
  {
    title: "Pipe Cutting to Size",
    text: "Accurate cut lengths prepared for site teams, contractors and maintenance crews.",
    icon: Gauge
  },
  {
    title: "Pipe Threading",
    text: "Clean, consistent threading for plumbing, fire and industrial pipework requirements.",
    icon: Wrench
  },
  {
    title: "Pipe Grooving",
    text: "Grooved pipe preparation for couplings and faster mechanical joining on site.",
    icon: Hammer
  },
  {
    title: "Plumbing Supplies",
    text: "Practical supply support for everyday plumbing consumables and project essentials.",
    icon: Truck
  },
  {
    title: "Pipes & Fittings",
    text: "Reliable sourcing of pipe, fittings, valves, flanges, threaded fittings and couplings.",
    icon: Zap
  },
  {
    title: "Industrial Piping Support",
    text: "A contractor-focused team that understands urgent technical supply and repeat orders.",
    icon: Factory
  }
];

const products = [
  "Pipes",
  "Fittings",
  "Valves",
  "Couplings",
  "Flanges",
  "Threaded fittings",
  "Plumbing consumables"
];

const proofPoints = [
  "Precision workmanship",
  "Fast turnaround",
  "Contractor-focused service",
  "Reliable supply",
  "Industrial-grade solutions"
];

const industries = [
  "Plumbing contractors",
  "Construction companies",
  "Factories",
  "Maintenance teams",
  "Fire protection installers",
  "Industrial sites"
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gold-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-bluefire shadow-glow" />
      {children}
    </p>
  );
}

function CtaButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const variants = {
    primary:
      "bg-bluefire text-white shadow-glow hover:bg-bluefire-soft hover:text-carbon",
    secondary:
      "border border-gold/60 bg-gold/10 text-gold-soft shadow-gold hover:bg-gold hover:text-carbon",
    ghost:
      "border border-white/15 bg-white/5 text-white hover:border-bluefire/70 hover:text-bluefire-soft"
  };

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition ${variants[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function BrandLockup({
  compact = false,
  footer = false
}: {
  compact?: boolean;
  footer?: boolean;
}) {
  return (
    <span
      className={`flex items-center ${compact ? "gap-2" : "gap-3"} ${
        footer ? "max-w-[18rem]" : ""
      }`}
    >
      <span
        className={`relative block shrink-0 ${
          compact ? "h-10 w-12" : footer ? "h-14 w-16" : "h-16 w-[4.75rem]"
        }`}
        aria-hidden="true"
      >
        <Image
          src="/images/groovecore-mark.png"
          alt=""
          fill
          sizes={compact ? "48px" : "76px"}
          className="object-contain drop-shadow-[0_0_18px_rgba(22,135,255,0.28)]"
        />
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={`block font-black uppercase tracking-tight ${
            compact ? "text-[1.35rem] leading-[0.9]" : footer ? "text-2xl" : "text-3xl"
          }`}
        >
          <span className="bg-gradient-to-b from-[#35c9ff] via-[#1687ff] to-[#064f8c] bg-clip-text text-transparent drop-shadow-[0_2px_0_rgba(0,0,0,0.65)]">
            Groove
          </span>
          <span className="bg-gradient-to-b from-[#ffe6a3] via-[#d7a84d] to-[#8a5a17] bg-clip-text text-transparent drop-shadow-[0_2px_0_rgba(0,0,0,0.65)]">
            Core
          </span>
        </span>
        <span className="mt-1 block h-px w-full bg-gradient-to-r from-bluefire via-gold to-transparent" />
        <span
          className={`mt-1.5 block font-black uppercase tracking-[0.2em] text-white ${
            footer
              ? "max-w-[12rem] whitespace-normal text-[0.5rem] leading-4"
              : compact
                ? "whitespace-nowrap text-[0.46rem] sm:text-[0.5rem]"
                : "whitespace-nowrap text-[0.52rem] sm:text-[0.58rem]"
          }`}
        >
          Industrial & Plumbing Supplies
        </span>
      </span>
    </span>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-carbon/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <BrandLockup compact />
          <span className="sr-only">
            GrooveCore Industrial and Plumbing Supplies
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-white/72 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4 text-bluefire-soft" />
            {phoneNumber}
          </a>
          <CtaButton href="#quote">Request a Quote</CtaButton>
        </div>

        <a
          href="#contact"
          aria-label="Open contact section"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 text-white md:hidden"
        >
          <Menu className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/groovecore-hero.png"
          alt="Industrial pipe processing workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07090d_0%,rgba(7,9,13,0.94)_32%,rgba(7,9,13,0.6)_62%,rgba(7,9,13,0.82)_100%)]" />
        <div className="absolute inset-0 bg-steel-grid bg-[length:54px_54px] opacity-30" />
      </div>

      <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="animate-rise max-w-3xl">
          <SectionLabel>South African industrial pipe specialists</SectionLabel>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Precision Pipe Processing & Industrial Plumbing Supplies
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
            GrooveCore delivers precision pipe cutting to size, pipe threading,
            pipe grooving and dependable supply of pipes, fittings, valves,
            couplings, flanges and general plumbing supplies for contractors,
            factories and industrial sites.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CtaButton href="#quote">Request a Quote</CtaButton>
            <CtaButton href={whatsappUrl} variant="secondary">
              Call / WhatsApp Now
            </CtaButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["Cut", "Thread", "Groove"].map((item) => (
              <div
                key={item}
                className="border-l-2 border-bluefire bg-white/[0.045] px-4 py-3 backdrop-blur"
              >
                <p className="font-display text-2xl font-bold text-white">
                  {item}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                  To specification
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <div className="premium-panel w-full max-w-md p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-bluefire-soft">
                  Quote-ready support
                </p>
                <p className="mt-2 font-display text-3xl font-bold uppercase text-white">
                  Send your specs
                </p>
              </div>
              <ShieldCheck className="h-10 w-10 text-gold-soft" />
            </div>
            <p className="mt-5 text-sm leading-6 text-white/72">
              Send us your pipe sizes and quantities. We will quote you quickly
              and help prepare your order for delivery or collection.
            </p>
            <div className="mt-6 space-y-3">
              {["Pipe diameter and material", "Cut length and quantity", "Threaded or grooved ends"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/82">
                    <BadgeCheck className="h-4 w-4 text-bluefire-soft" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell bg-carbon">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Processing and supply</SectionLabel>
          <h2 className="section-title">
            Pipe work prepared with accuracy, supplied with urgency.
          </h2>
          <p className="section-copy">
            From once-off site requirements to repeat contractor orders,
            GrooveCore helps teams move faster with practical pipe processing
            and industrial-grade supply support.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <article key={title} className="premium-card group">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-md border border-bluefire/40 bg-bluefire/10 text-bluefire-soft shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-white/68">{text}</p>
              <a
                href="#quote"
                className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-gold-soft transition group-hover:text-white"
              >
                Quote this service <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const inputClass =
    "w-full rounded-md border border-white/14 bg-[#070a0f]/88 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-bluefire/38 focus:border-bluefire/75 focus:bg-black/90 focus:ring-1 focus:ring-bluefire/30";

  return (
    <section id="quote" className="relative overflow-hidden bg-steel py-20">
      <div className="absolute inset-0 bg-radial-blue" />
      <div className="absolute inset-0 bg-steel-grid bg-[length:48px_48px] opacity-20" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-[0.85fr_0.95fr] lg:px-8">
        <div>
          <SectionLabel>Fast quote response</SectionLabel>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.55rem)] font-bold uppercase leading-[0.98] text-white">
            Request a quote for processed pipe, fittings or project supplies.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            Send us your pipe sizes and quantities. We will review the detail,
            confirm any technical requirements and come back quickly with
            practical supply options.
          </p>
          <div className="mt-7 grid gap-3">
            {[
              "Include pipe material, diameter and wall thickness where possible.",
              "Tell us whether you need cutting, threading, grooving or supply only.",
              "Add delivery or collection preference so we can quote accurately."
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm text-white/76">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="relative grid w-full max-w-2xl justify-self-end gap-3 overflow-hidden rounded-md border border-white/10 bg-[#0b1118]/88 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.055),transparent_34%),repeating-linear-gradient(90deg,rgba(255,255,255,0.018)_0,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_8px)] before:opacity-60 sm:grid-cols-2 lg:p-5">
          <input className={inputClass} type="text" placeholder="Name" />
          <input className={inputClass} type="text" placeholder="Company" />
          <input className={inputClass} type="tel" placeholder="Phone" />
          <input className={inputClass} type="email" placeholder="Email" />
          <select className={inputClass} defaultValue="">
            <option value="" disabled>
              Service needed
            </option>
            <option>Pipe cutting to size</option>
            <option>Pipe threading</option>
            <option>Pipe grooving</option>
            <option>Product supply</option>
            <option>Industrial piping support</option>
          </select>
          <input
            className={inputClass}
            type="text"
            placeholder="Pipe size / material"
          />
          <input className={inputClass} type="text" placeholder="Quantity" />
          <select className={inputClass} defaultValue="">
            <option value="" disabled>
              Delivery or collection
            </option>
            <option>Delivery</option>
            <option>Collection</option>
            <option>Please advise</option>
          </select>
          <textarea
            className={`${inputClass} min-h-24 sm:col-span-2`}
            placeholder="Message"
          />
          <button
            type="submit"
            className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 rounded-md border border-bluefire/70 bg-bluefire px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_14px_38px_rgba(22,135,255,0.28)] transition hover:border-bluefire-soft hover:bg-bluefire-soft hover:text-carbon"
          >
            Send Quote Request <ArrowRight className="h-4 w-4" />
          </button>
          <p className="sm:col-span-2 text-center text-xs text-white/48">
            No pressure. Clear requirements help us quote faster and more
            accurately.
          </p>
        </form>
      </div>
    </section>
  );
}

function ProductsAndWhy() {
  return (
    <section id="products" className="section-shell bg-carbon">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <SectionLabel>Industrial supply range</SectionLabel>
          <h2 className="section-title">
            Pipes, fittings and plumbing products sourced for real site work.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product}
                className="flex items-center gap-4 border border-white/10 bg-white/[0.035] p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gold/10 text-gold-soft">
                  <FlameKindling className="h-5 w-5" />
                </span>
                <span className="font-display text-xl font-bold uppercase text-white">
                  {product}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-panel p-6 lg:p-8">
          <SectionLabel>Why choose GrooveCore</SectionLabel>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-white">
            Built for contractors who need it done right.
          </h2>
          <div className="mt-8 space-y-5">
            {proofPoints.map((point) => (
              <div key={point} className="flex gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-bluefire-soft" />
                <div>
                  <h3 className="font-bold text-white">{point}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/62">
                    Practical, dependable support for commercial plumbing and
                    industrial piping requirements.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="#quote" variant="secondary">
              Get pricing
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesGallery() {
  return (
    <section className="section-shell bg-steel">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Industries served</SectionLabel>
            <h2 className="section-title">
              Supply and processing support for demanding work environments.
            </h2>
            <div className="mt-9 grid gap-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 border-b border-white/10 py-3 text-white/80"
                >
                  <HardHat className="h-5 w-5 text-gold-soft" />
                  <span className="font-semibold">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="gallery" className="grid gap-4 sm:grid-cols-2">
            {[
              ["Threaded pipe preparation", "Cut lengths and threaded ends"],
              ["Grooved pipe systems", "Couplings, valves and flanges"],
              ["Industrial stock support", "Pipes and fittings ready for site"],
              ["Contractor supply desk", "Quote-driven service and turnaround"]
            ].map(([title, text], index) => (
              <div
                key={title}
                className={`visual-tile min-h-64 ${index === 0 ? "sm:row-span-2" : ""}`}
              >
                <div className="relative z-10 mt-auto">
                  <p className="font-display text-2xl font-bold uppercase text-white">
                    {title}
                  </p>
                  <p className="mt-2 text-sm text-white/65">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell bg-carbon">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <SectionLabel>Contact GrooveCore</SectionLabel>
          <h2 className="section-title">
            Need pipe processed or products supplied? Talk to the team.
          </h2>
          <p className="section-copy">
            Share your required sizes, quantities, drawings or product list and
            GrooveCore will help you turn the requirement into a clear quote.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CtaButton href="#quote">Request a Quote</CtaButton>
            <CtaButton href={whatsappUrl} variant="secondary">
              WhatsApp Us
            </CtaButton>
          </div>
        </div>

        <div className="premium-panel self-start p-6">
          {[
            [Phone, "Phone / WhatsApp", phoneNumber],
            [Mail, "Email", emailAddress],
            [MapPin, "Address", companyAddress],
            [Clock3, "Operating hours", "Mon - Fri: 07:00 - 17:00"]
          ].map(([Icon, label, value]) => (
            <div
              key={String(label)}
              className="flex gap-4 border-b border-white/10 py-5 last:border-b-0"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-bluefire/10 text-bluefire-soft">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">
                  {String(label)}
                </p>
                <p className="mt-1 font-semibold text-white">{String(value)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 lg:px-8">
        <div>
          <BrandLockup footer />
          <p className="mt-3 text-sm leading-6 text-white/58">
            Precision pipe processing and industrial plumbing supply support
            for South African contractors and industrial teams.
          </p>
        </div>
        {[
          ["Services", services.slice(0, 4).map((item) => item.title)],
          ["Products", products.slice(0, 5)],
          ["Quick Links", ["Request a Quote", "Products", "Industries", "Contact"]]
        ].map(([heading, links]) => (
          <div key={String(heading)}>
            <p className="font-bold uppercase tracking-[0.14em] text-gold-soft">
              {String(heading)}
            </p>
            <div className="mt-4 space-y-2">
              {(links as string[]).map((link) => (
                <a
                  key={link}
                  href={link === "Request a Quote" ? "#quote" : "#top"}
                  className="block text-sm text-white/58 transition hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 text-sm text-white/40 lg:px-8">
        (c) 2026 GrooveCore Industrial and Plumbing Supplies. All rights reserved.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon text-white">
      <Header />
      <Hero />
      <Services />
      <QuoteForm />
      <ProductsAndWhy />
      <IndustriesGallery />
      <Contact />
      <Footer />

      <a
        href={whatsappUrl}
        aria-label="Chat with GrooveCore on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-bluefire text-white shadow-glow transition hover:scale-105 hover:bg-bluefire-soft hover:text-carbon"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
