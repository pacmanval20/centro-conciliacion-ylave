"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_URL =
  "https://wa.me/51993162995?text=Hola%20Centro%20de%20Conciliaci%C3%B3n%20Ylave%2C%20estuve%20revisando%20su%20p%C3%A1gina%20web%20y%20quiero%20cotizar%20sus%20servicios.";

interface ContactFormData {
  nombre: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

export default function ContactWhatsapp() {
  const sectionRef = useRef<HTMLElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const message = encodeURIComponent(
      `Hola Centro de Conciliación Ylave, mi nombre es ${data.nombre}.\n\nTeléfono: ${data.telefono}\nAsunto: ${data.asunto}\n\n${data.mensaje}`
    );
    window.open(`https://wa.me/51993162995?text=${message}`, "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-header", start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.fromTo(".contact-form-card", { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form-card", start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.fromTo(".contact-info-card", { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-info-card", start: "top 80%", toggleActions: "play none none none" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-surface-2 border border-burgundy/15 text-cream text-sm placeholder:text-txt-muted focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all duration-300";

  return (
    <>
      <section id="contacto" ref={sectionRef} className="section-padding relative" aria-labelledby="contact-heading">
        {/* Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-burgundy rounded-full blur-[200px] opacity-[0.06] pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="contact-header text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-burgundy-glow border border-burgundy/40 mb-4">
              Contacto
            </span>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4">
              Da el primer paso hacia la <span className="gradient-text">solución</span>
            </h2>
            <p className="text-base md:text-lg text-txt-muted max-w-2xl mx-auto">
              Escríbenos por WhatsApp o llena el formulario y te responderemos en menos de 24 horas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="contact-form-card glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-cream mb-6">Envía tu consulta</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-nombre" className="block text-sm font-medium text-txt-2 mb-1.5">Nombre completo</label>
                  <input id="contact-nombre" type="text" {...register("nombre", { required: "Ingresa tu nombre" })} className={inputClasses} placeholder="Tu nombre" />
                  {errors.nombre && <p className="text-xs text-red-400 mt-1" role="alert">{errors.nombre.message}</p>}
                </div>

                <div>
                  <label htmlFor="contact-telefono" className="block text-sm font-medium text-txt-2 mb-1.5">Teléfono / WhatsApp</label>
                  <input id="contact-telefono" type="tel" {...register("telefono", { required: "Ingresa tu teléfono", pattern: { value: /^[0-9+\s()-]{7,15}$/, message: "Ingresa un teléfono válido" } })} className={inputClasses} placeholder="+51 999 999 999" />
                  {errors.telefono && <p className="text-xs text-red-400 mt-1" role="alert">{errors.telefono.message}</p>}
                </div>

                <div>
                  <label htmlFor="contact-asunto" className="block text-sm font-medium text-txt-2 mb-1.5">Tipo de consulta</label>
                  <select id="contact-asunto" {...register("asunto", { required: "Selecciona un tipo de consulta" })} className={`${inputClasses} appearance-none`}>
                    <option value="">Selecciona una opción</option>
                    <option value="Pensión de alimentos">Pensión de alimentos</option>
                    <option value="Régimen de visitas">Régimen de visitas</option>
                    <option value="Tenencia">Tenencia</option>
                    <option value="Liquidación de gananciales">Liquidación de sociedad de gananciales</option>
                    <option value="Cobro de deudas">Cobro de deudas</option>
                    <option value="Desalojo">Desalojo</option>
                    <option value="División de bienes">División y partición de bienes</option>
                    <option value="Indemnización">Indemnización</option>
                    <option value="Otro">Otro asunto</option>
                  </select>
                  {errors.asunto && <p className="text-xs text-red-400 mt-1" role="alert">{errors.asunto.message}</p>}
                </div>

                <div>
                  <label htmlFor="contact-mensaje" className="block text-sm font-medium text-txt-2 mb-1.5">Describe brevemente tu caso</label>
                  <textarea id="contact-mensaje" rows={4} {...register("mensaje", { required: "Describe brevemente tu caso" })} className={`${inputClasses} resize-none`} placeholder="Cuéntanos qué tipo de conflicto necesitas resolver..." />
                  {errors.mensaje && <p className="text-xs text-red-400 mt-1" role="alert">{errors.mensaje.message}</p>}
                </div>

                <button type="submit" className="btn-whatsapp w-full justify-center py-3.5" id="contact-form-submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Enviar por WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-card flex flex-col gap-6">
              {/* Direct WhatsApp Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-cream mb-4">Contacto Directo</h3>
                <div className="space-y-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-400">WhatsApp</div>
                      <div className="text-base font-bold text-cream">+51 993 162 995</div>
                    </div>
                  </a>

                  <a
                    href="tel:+51993162995"
                    className="flex items-center gap-4 p-4 rounded-xl bg-burgundy/10 border border-burgundy/20 hover:bg-burgundy/15 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-burgundy/20 flex items-center justify-center text-burgundy-glow group-hover:scale-110 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-burgundy-glow">Llamar directamente</div>
                      <div className="text-base font-bold text-cream">+51 993 162 995</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours & Location */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-cream mb-4">Horario de Atención</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-burgundy-glow shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-cream">Lunes a Viernes</div>
                      <div className="text-sm text-txt-muted">9:00 AM – 6:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-burgundy-glow shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-cream">Sábados</div>
                      <div className="text-sm text-txt-muted">9:00 AM – 1:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-txt-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-cream">Lima, Perú</div>
                      <div className="text-sm text-txt-muted">Atención presencial y virtual</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency CTA */}
              <div className="glass-card rounded-2xl p-6 gradient-border">
                <p className="text-sm text-txt-2 mb-3 leading-relaxed">
                  <strong className="text-cream">¿Es urgente?</strong> Escríbenos por WhatsApp y un especialista te atenderá en las próximas horas.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center text-sm py-3" id="contact-urgent-cta">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Atención Inmediata</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Contactar por WhatsApp" id="whatsapp-floating-button">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
