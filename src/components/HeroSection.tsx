import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/51993162995?text=Hola%20Centro%20de%20Conciliaci%C3%B3n%20Ylave%2C%20quisiera%20solicitar%20una%20cita.";

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-stage">
        <div className="hero-photo">
          <Image src="/conciliacion-ylave-inicio.webp" alt="Una conciliadora conversa con una pareja en una oficina luminosa." fill preload sizes="100vw" className="hero-image" />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="container-custom hero-content">
          <div className="hero-copy">
            <p className="hero-eyebrow">CENTRO DE CONCILIACIÓN YLAVE</p>
            <h1 id="hero-heading">Resuelve tus conflictos<br /> sin ir a juicio.</h1>
            <p className="hero-description">Acuerdos legales, seguros y efectivos.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hero-cta" id="hero-whatsapp-cta">
              Solicitar tu cita
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
            </a>
            <a href="#servicios" className="hero-services" id="hero-services-cta">Conoce nuestros servicios <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>
      <div className="hero-trust">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[{number:"500+",label:"Casos resueltos"},{number:"95%",label:"Acuerdos exitosos"},{number:"10+",label:"Años de experiencia"},{number:"24h",label:"Respuesta rápida"}].map(metric=>(
            <div key={metric.label} className="text-center"><div className="hero-metric">{metric.number}</div><p className="text-sm text-txt-muted mt-1">{metric.label}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
