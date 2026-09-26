"use client";

import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/51993162995?text=Hola%20Centro%20de%20Conciliaci%C3%B3n%20Ylave%2C%20estuve%20revisando%20su%20p%C3%A1gina%20web%20y%20quiero%20cotizar%20sus%20servicios.";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong shadow-lg shadow-burgundy/5" : "bg-transparent"
      }`}
    >
      <nav
        className="container-custom flex items-center justify-between h-[72px] md:h-[80px]"
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group z-30"
          aria-label="Centro de Conciliación Ylave — Ir al inicio"
        >
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl gradient-burgundy flex items-center justify-center shadow-lg shadow-burgundy/20 group-hover:shadow-burgundy/40 transition-shadow duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7V10C2 16.5 6.84 22.74 12 24C17.16 22.74 22 16.5 22 10V7L12 2Z" fill="#FFFFFF" fillOpacity="0.9" />
              <path d="M12 6L8 8.5V11C8 14.5 9.84 17.74 12 19C14.16 17.74 16 14.5 16 11V8.5L12 6Z" fill="#217DA0" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="brand-name text-[11px] sm:text-sm md:text-base font-bold tracking-wide leading-tight">
              Centro de Conciliación
            </span>
            <span className="text-base md:text-lg font-bold text-burgundy leading-tight tracking-widest uppercase">
              Ylave
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-txt-2 hover:text-cream transition-colors duration-300 rounded-lg hover:bg-burgundy/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-whatsapp text-sm py-2.5 px-5"
          aria-label="Contactar por WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>Solicitar cita</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-30 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileOpen}
        >
          <span className={`w-6 h-0.5 bg-cream rounded-full transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`w-6 h-0.5 bg-cream rounded-full transition-all duration-300 ${isMobileOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-cream rounded-full transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 z-20 h-dvh overflow-y-auto w-[min(320px,100vw)] bg-surface-2 border-l border-burgundy/15 shadow-2xl transition-transform duration-500 lg:hidden ${
            isMobileOpen ? "translate-x-0 visible" : "translate-x-full invisible"
          }`}
        >
          <div className="flex flex-col pt-24 px-6">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block py-3 px-4 text-base font-medium text-txt-2 hover:text-cream hover:bg-burgundy/5 rounded-xl transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-burgundy/15">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-sm"
                onClick={handleNavClick}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Solicitar cita</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-burgundy/15">
              <p className="text-xs text-txt-muted mb-2">Llámanos directamente:</p>
              <a href="tel:+51993162995" className="text-sm font-medium text-beige hover:text-cream transition-colors">
                +51 993 162 995
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
