"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Qué es la conciliación extrajudicial?",
    answer: "La conciliación extrajudicial es un mecanismo alternativo de resolución de conflictos en el que las partes, con la ayuda de un conciliador certificado, buscan llegar a un acuerdo mutuamente satisfactorio sin necesidad de acudir a un proceso judicial. El acta de conciliación tiene valor de sentencia judicial y es de obligatorio cumplimiento.",
  },
  {
    question: "¿Qué conflictos se pueden resolver mediante conciliación?",
    answer: "Se pueden conciliar conflictos familiares como pensión de alimentos, régimen de visitas, tenencia y liquidación de sociedad de gananciales. También conflictos civiles y patrimoniales como cobro de deudas, desalojo, división y partición de bienes, indemnizaciones y obligaciones de dar, hacer o no hacer.",
  },
  {
    question: "¿La conciliación es obligatoria antes de ir a juicio?",
    answer: "Sí. En el Perú, para la mayoría de materias civiles y familiares conciliables, es obligatorio intentar la conciliación extrajudicial antes de interponer una demanda judicial. El acta de conciliación (con acuerdo o sin acuerdo) es un requisito de procedibilidad exigido por ley.",
  },
  {
    question: "¿Cuánto tiempo toma una conciliación?",
    answer: "El proceso de conciliación generalmente se resuelve en una o dos sesiones, dentro de un plazo de 30 días calendario desde la solicitud. Es significativamente más rápido que un proceso judicial, que puede demorar meses o incluso años.",
  },
  {
    question: "¿Cuánto cuesta una conciliación extrajudicial?",
    answer: "Los costos varían según la materia y la complejidad del caso. En el Centro de Conciliación Ylave ofrecemos tarifas accesibles y esquemas de honorarios adaptados al servicio y al resultado obtenido. Contáctenos por WhatsApp para una cotización personalizada sin compromiso.",
  },
  {
    question: "¿El acta de conciliación tiene valor legal?",
    answer: "Sí. El acta de conciliación con acuerdo total o parcial tiene calidad de título de ejecución, lo que significa que tiene el mismo valor que una sentencia judicial y es de obligatorio cumplimiento por las partes. En caso de incumplimiento, se puede solicitar su ejecución directamente ante un juez.",
  },
  {
    question: "¿Qué pasa si la otra parte no asiste a la conciliación?",
    answer: "Si la parte invitada no asiste a la audiencia de conciliación, se levanta un acta por inasistencia. Esta acta te permite continuar con el proceso judicial si así lo decides, cumpliendo con el requisito legal de haber intentado la conciliación.",
  },
  {
    question: "¿Necesito un abogado para la conciliación?",
    answer: "No es obligatorio contar con un abogado para asistir a una audiencia de conciliación. Sin embargo, es altamente recomendable contar con asesoría legal previa para entender tus derechos y opciones. En el Centro de Conciliación Ylave te brindamos orientación profesional antes y durante el proceso.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".faq-header", start: "top 80%", toggleActions: "play none none none" },
      });

      gsap.utils.toArray<HTMLElement>(".faq-item").forEach((item, i) => {
        gsap.fromTo(item, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, delay: i * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (openIndex === i) {
        gsap.to(ref, { maxHeight: ref.scrollHeight + 32, paddingTop: 12, paddingBottom: 16, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(ref, { maxHeight: 0, paddingTop: 0, paddingBottom: 0, duration: 0.3, ease: "power2.in" });
      }
    });
  }, [openIndex]);

  return (
    <section id="preguntas" ref={sectionRef} className="section-padding relative" aria-labelledby="faq-heading">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="faq-header text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-burgundy-glow border border-burgundy/40 mb-4">
            Preguntas Frecuentes
          </span>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4">
            Resolvemos tus <span className="gradient-text">dudas frecuentes</span>
          </h2>
          <p className="text-base md:text-lg text-txt-muted max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre conciliación extrajudicial en Lima.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item glass-card rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left transition-colors duration-300 hover:bg-burgundy/5"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-sm md:text-base font-semibold text-cream pr-4">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-lg bg-burgundy/20 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#207656" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                ref={(el) => { contentRefs.current[index] = el; }}
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="overflow-hidden px-5 md:px-6"
                style={{ maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
              >
                <p className="text-sm md:text-base text-txt-muted leading-relaxed border-t border-burgundy/15 pt-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-txt-muted text-sm md:text-base mb-4">¿Tienes otra pregunta? Escríbenos directamente.</p>
          <a
            href="https://wa.me/51993162995?text=Hola%20Centro%20de%20Conciliaci%C3%B3n%20Ylave%2C%20tengo%20una%20consulta%20sobre%20conciliaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
            id="faq-whatsapp-cta"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Pregúntanos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
