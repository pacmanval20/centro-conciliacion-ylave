import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conciliacionylave.pe"),
  title:
    "Centro de Conciliación Ylave | Conciliación Extrajudicial en Lima, Perú",
  description:
    "Resuelve tus conflictos familiares, civiles y patrimoniales mediante conciliación extrajudicial en Lima. Pensión de alimentos, régimen de visitas, tenencia, desalojo, deudas y más. Atención especializada con acuerdos seguros y respaldados legalmente.",
  keywords: [
    "conciliación extrajudicial Lima",
    "centro de conciliación Lima",
    "pensión de alimentos conciliación",
    "régimen de visitas",
    "tenencia conciliación",
    "desalojo extrajudicial",
    "conciliación familiar Lima",
    "conciliación civil Lima",
    "división de bienes",
    "cobro de deudas conciliación",
    "conciliación Perú",
    "acuerdo extrajudicial",
    "liquidación sociedad gananciales",
  ],
  authors: [{ name: "Centro de Conciliación Ylave" }],
  creator: "Centro de Conciliación Ylave",
  publisher: "Centro de Conciliación Ylave",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://conciliacionylave.pe",
    siteName: "Centro de Conciliación Ylave",
    title:
      "Centro de Conciliación Ylave | Conciliación Extrajudicial en Lima",
    description:
      "Resuelve conflictos familiares, civiles y patrimoniales mediante conciliación extrajudicial. Acuerdos seguros, rápidos y respaldados legalmente en Lima, Perú.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Centro de Conciliación Ylave — Conciliación Extrajudicial en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Centro de Conciliación Ylave | Conciliación Extrajudicial en Lima",
    description:
      "Resuelve conflictos familiares, civiles y patrimoniales mediante conciliación extrajudicial. Acuerdos seguros y respaldados legalmente.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://conciliacionylave.pe",
  },
};

/* ─── Schema.org JSON-LD ─── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://conciliacionylave.pe/#organization",
  name: "Centro de Conciliación Ylave",
  description:
    "Centro de Conciliación Extrajudicial en Lima, Perú. Resolvemos conflictos familiares, civiles y patrimoniales mediante acuerdos legales seguros y efectivos.",
  url: "https://conciliacionylave.pe",
  telephone: "+51993162995",
  email: "contacto@conciliacionylave.pe",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.0464,
    longitude: -77.0428,
  },
  areaServed: {
    "@type": "City",
    name: "Lima",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Conciliación Extrajudicial",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conciliación Extrajudicial en Materia Familiar",
          description:
            "Pensión de alimentos, régimen de visitas, tenencia y liquidación de sociedad de gananciales.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conciliación Extrajudicial en Materia Civil y Patrimonial",
          description:
            "Cobro y pago de deudas, desalojo, división y partición de bienes, indemnizaciones y obligaciones de dar, hacer o no hacer.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asesoría Legal Especializada",
          description:
            "Evaluación legal previa de cada caso y orientación enfocada en alcanzar acuerdos efectivos.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la conciliación extrajudicial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La conciliación extrajudicial es un mecanismo alternativo de resolución de conflictos en el que las partes, con la ayuda de un conciliador certificado, buscan llegar a un acuerdo mutuamente satisfactorio sin necesidad de acudir a un proceso judicial. El acta de conciliación tiene valor de sentencia judicial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué conflictos se pueden resolver mediante conciliación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se pueden conciliar conflictos familiares como pensión de alimentos, régimen de visitas y tenencia, así como conflictos civiles y patrimoniales como cobro de deudas, desalojo, división de bienes, indemnizaciones y obligaciones de dar, hacer o no hacer.",
      },
    },
    {
      "@type": "Question",
      name: "¿La conciliación es obligatoria antes de ir a juicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En el Perú, para la mayoría de materias civiles y familiares conciliables, es obligatorio intentar la conciliación extrajudicial antes de interponer una demanda judicial. El acta de conciliación (con o sin acuerdo) es un requisito de procedibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma una conciliación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso de conciliación puede resolverse en una o dos sesiones, generalmente dentro de un plazo de 30 días calendario desde la solicitud. Es significativamente más rápido que un proceso judicial, que puede demorar meses o años.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una conciliación extrajudicial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los costos varían según la materia y la complejidad del caso. En el Centro de Conciliación Ylave ofrecemos tarifas accesibles y esquemas de honorarios adaptados al servicio y al resultado obtenido. Contáctenos para una cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿El acta de conciliación tiene valor legal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El acta de conciliación con acuerdo total o parcial tiene calidad de título de ejecución, lo que significa que tiene el mismo valor que una sentencia judicial y es de obligatorio cumplimiento por las partes.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Centro de Conciliación Ylave",
  url: "https://conciliacionylave.pe",
  logo: "https://conciliacionylave.pe/logo.png",
  description:
    "Centro de Conciliación Extrajudicial especializado en materia familiar, civil y patrimonial en Lima, Perú.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+51-993162995",
    contactType: "customer service",
    areaServed: "PE",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={outfit.variable}>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans noise-overlay antialiased`}>
        {/* Ambient Background Glows */}
        <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
        <div className="ambient-glow ambient-glow-2" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
