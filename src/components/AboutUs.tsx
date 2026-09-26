"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Centro Autorizado",
    text: "Autorizados por el Ministerio de Justicia y Derechos Humanos del Perú (MINJUSDH).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Conciliadores Certificados",
    text: "Nuestro equipo cuenta con certificación vigente y especialización en materia familiar y civil.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Acuerdos con Valor Legal",
    text: "Cada acta de conciliación tiene calidad de título de ejecución, equivalente a una sentencia judicial.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M12 22V12" />
        <path d="M2 7l10 5 10-5" />
      </svg>
    ),
    title: "Honorarios Transparentes",
    text: "Ofrecemos esquemas de honorarios adaptados al tipo de servicio y al resultado obtenido.",
  },
];

const testimonials = [
  {
    name: "María G.",
    role: "Madre de familia, Lima",
    text: "Gracias al Centro de Conciliación Ylave pude resolver la pensión de alimentos de mis hijos de forma rápida y sin necesidad de ir a juicio. El proceso fue claro y el equipo me guió en cada paso.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    role: "Propietario de inmueble, Lima",
    text: "Tenía un inquilino que no pagaba hace meses. A través de la conciliación logramos un acuerdo de desalojo voluntario en solo dos sesiones. Mucho más rápido y económico que un juicio.",
    rating: 5,
  },
  {
    name: "Ana L.",
    role: "Emprendedora, Lima",
    text: "Un socio me debía dinero y no respondía. En el centro me ayudaron a llegar a un acuerdo de pago que se firmó con valor legal. Fue la mejor decisión antes de pensar en un abogado litigante.",
    rating: 5,
  },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-header", start: "top 80%", toggleActions: "play none none none" },
      });

      gsap.fromTo(".about-story", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-story", start: "top 80%", toggleActions: "play none none none" },
      });

      gsap.utils.toArray<HTMLElement>(".credential-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, delay: i * 0.15, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="section-padding relative" aria-labelledby="about-heading">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="about-header text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-burgundy-glow border border-burgundy/40 mb-4">
            Sobre Nosotros
          </span>
          <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4">
            Tu conflicto merece una <span className="gradient-text">solución profesional</span>
          </h2>
          <p className="text-base md:text-lg text-txt-muted max-w-2xl mx-auto">
            En el Centro de Conciliación Ylave creemos que todo conflicto puede resolverse a través del diálogo y con la orientación legal adecuada.
          </p>
        </div>

        {/* Story + Values */}
        <div className="about-story glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Story */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-cream mb-5">¿Por qué elegirnos?</h3>
              <div className="space-y-4 text-txt-2 leading-relaxed text-sm md:text-base">
                <p>
                  Sabemos que enfrentar un conflicto legal puede ser abrumador. Los procesos judiciales son largos, costosos y emocionalmente desgastantes. Por eso, nuestro equipo de conciliadores certificados trabaja para{" "}
                  <strong className="text-beige">facilitar acuerdos rápidos, seguros y con pleno respaldo legal</strong>.
                </p>
                <p>
                  Antes de firmar cualquier documento o tomar una decisión, consulta con un especialista. Evaluamos tu caso de forma personalizada y te orientamos hacia la mejor solución para proteger tus derechos e intereses.
                </p>
                <p>
                  Brindamos <strong className="text-beige">acompañamiento legal durante todo el proceso</strong> y un enfoque orientado a alcanzar acuerdos efectivos, con honorarios sujetos a resultados cuando corresponda.
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-cream mb-6">Nuestro proceso</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Evaluación Inicial", desc: "Analizamos tu caso y determinamos si es conciliable. Te explicamos tus opciones legales." },
                  { step: "02", title: "Solicitud de Conciliación", desc: "Preparamos la solicitud y notificamos formalmente a la otra parte para la audiencia." },
                  { step: "03", title: "Audiencia de Conciliación", desc: "Un conciliador certificado guía a las partes hacia un acuerdo mutuamente beneficioso." },
                  { step: "04", title: "Acta con Valor Legal", desc: "Se emite el acta de conciliación con calidad de título de ejecución, como una sentencia." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 group">
                    <div className="shrink-0 w-10 h-10 rounded-xl gradient-burgundy flex items-center justify-center text-sm font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-cream mb-1">{item.title}</h4>
                      <p className="text-sm text-txt-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {credentials.map((cred) => (
            <div key={cred.title} className="credential-card glass-card rounded-2xl p-6 text-center group">
              <div className="w-12 h-12 rounded-xl gradient-burgundy flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {cred.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold text-cream mb-2">{cred.title}</h3>
              <p className="text-xs md:text-sm text-txt-muted leading-relaxed">{cred.text}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-burgundy-glow border border-burgundy/40 mb-4">
              Testimonios
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
              Lo que dicen nuestros <span className="gradient-text">clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card glass-card rounded-2xl p-6 md:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm md:text-base text-txt-2 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-burgundy flex items-center justify-center text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cream">{testimonial.name}</div>
                    <div className="text-xs text-txt-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
