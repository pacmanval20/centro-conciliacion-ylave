"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const services: ServiceItem[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    title: "Conciliación en Materia Familiar",
    description: "Protege los derechos de tu familia con acuerdos legales que garanticen el bienestar de tus hijos y patrimonio familiar.",
    items: ["Pensión de alimentos", "Régimen de visitas", "Tenencia", "Liquidación de sociedad de gananciales"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Conciliación Civil y Patrimonial",
    description: "Recupera lo que te corresponde y resuelve disputas contractuales con acuerdos que tienen fuerza de sentencia judicial.",
    items: ["Cobro y pago de deudas", "Desalojo", "División y partición de bienes", "Indemnizaciones", "Obligaciones de dar, hacer o no hacer"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Asesoría Legal Especializada",
    description: "Antes de firmar cualquier documento, consulta con nuestros especialistas. Evaluamos tu caso y te orientamos hacia la mejor solución.",
    items: ["Evaluación legal previa de cada caso", "Orientación para alcanzar acuerdos efectivos", "Profesionales especializados", "Honorarios adaptados al resultado"],
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.7, delay: i * 0.15, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="section-padding relative" aria-labelledby="services-heading">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-burgundy rounded-full blur-[250px] opacity-[0.04] pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="services-header text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-burgundy-glow border border-burgundy/40 mb-4">
            Nuestros Servicios
          </span>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4">
            Soluciones legales para cada <span className="gradient-text">tipo de conflicto</span>
          </h2>
          <p className="text-base md:text-lg text-txt-muted max-w-2xl mx-auto">
            Ofrecemos conciliación extrajudicial en materia familiar, civil y patrimonial con acuerdos que tienen valor de sentencia judicial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="glass-card rounded-2xl p-6 md:p-8 group relative overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-burgundy flex items-center justify-center mb-6 text-white shadow-lg shadow-burgundy/20 group-hover:shadow-burgundy/40 transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-cream mb-3 group-hover:text-burgundy transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-txt-muted mb-5 leading-relaxed group-hover:text-txt-2 transition-colors">
                  {service.description}
                </p>

                {/* Items list */}
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-txt-2">
                      <svg className="w-4 h-4 mt-0.5 text-burgundy-glow shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-txt-muted text-sm md:text-base mb-4">¿No estás seguro de qué servicio necesitas?</p>
          <a
            href="https://wa.me/51993162995?text=Hola%20Centro%20de%20Conciliaci%C3%B3n%20Ylave%2C%20necesito%20orientaci%C3%B3n%20sobre%20mi%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            id="services-consult-cta"
          >
            <span>Consulta tu caso gratis</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
