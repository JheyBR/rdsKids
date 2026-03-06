"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link"; // Importar Link de next/link

const services = [
  {
    id: 0,
    label: "Sitios Web",
    title: "Desarrollo de Sitios Web Profesionales",
    description:
      "Diseñamos y desarrollamos sitios web estratégicos, autoadministrables y optimizados para buscadores (SEO), pensados para representar correctamente tu negocio y convertir visitas en oportunidades reales. No es solo una página web: es tu base digital para vender, crecer y generar confianza.",
    route: [
      "Contacto inicial (WhatsApp o formulario)",
      "Reunión de levantamiento de información",
      "Propuesta de diseño y estructura",
      "Aprobación y presupuesto",
      "Desarrollo web",
      "Entrega final y soporte postventa",
    ],
    benefits: [
      "Mayor visibilidad online",
      "Captación efectiva de clientes",
      "Diseño personalizado y escalable",
      "Optimización para motores de búsqueda",
      "Control completo sobre contenidos",
    ],
    Phrase: "Ideal si necesitas presencia profesional, visibilidad y resultados claros en internet.",
    cta: "Empezar mi presencia digital",
    link: "https://api.whatsapp.com/send?phone=+573507535369&text=Hola%20Quiero%20mas%20Informacion%20sobre%20el%20Servicio%20de%20Desarrollo%20de%20Software",
    external: true, // Agregar flag para links externos
  },
  {
    id: 1,
    label: "Software a Medida",
    title: "Software a la Medida & Plataforma SaaS (WIS)",
    description:
      "Creamos sistemas que ordenan, automatizan y escalan la operación de tu empresa, usando nuestra plataforma SaaS WIS o desarrollos completamente a la medida. Centralizamos procesos, datos y decisiones para que tu negocio funcione con claridad y control.",
    route: [
      "Diagnóstico y mapeo de procesos",
      "Evaluación de viabilidad con WIS",
      "Desarrollo e integración personalizada",
      "Pruebas, ajustes y retroalimentación",
      "Capacitación y despliegue",
      "Soporte técnico según el plan",
    ],
    benefits: [
      "Adaptabilidad total al proceso",
      "Reducción de errores operativos y mayor eficiencia",
      "Ahorro frente a soluciones genéricas",
      "Escalable y accesible desde cualquier lugar",
      "Datos centralizados y seguros",
    ],
    Phrase: "Ideal si necesitas presencia profesional, visibilidad y resultados claros en internet.",
    cta: "Diagnosticar mi sistema actual",
    link: "https://api.whatsapp.com/send?phone=+573507535369&text=Hola%20Quiero%20mas%20Informaci%C3%B3n%20sobre%20el%20Servicio%20de%20Paginas%20Web%20y%20Landing%20Page",
    external: true,
  },
  {
    id: 2,
    label: "RDS Kids",
    title: "RDS Kids — Programación de Videojuegos",
    description:
      "Formamos niños y jóvenes en programación a través de videojuegos y tecnología real. RDS Kids enseña pensamiento lógico, creatividad y resolución de problemas con un enfoque práctico, progresivo y adaptado a cada edad. ",
    route: [
      "🧩 Scratch – Lógica y pensamiento computacional (niños pequeños)",
      "🎮 Roblox Studio (LUA) – Desarrollo de videojuegos interactivos",
      "🕹 Unity (C#) – Programación de videojuegos en 2D y 3D",
      "🐍 Python – Lógica, automatización y bases de programación real",
      "🌐 Desarrollo Web – HTML, CSS y JavaScript",
    ],
    benefits: [
      "Estimula lógica y creatividad",
      "Introducción lúdica a la programación",
      "Habilidades del siglo XXI",
      "Aprendizaje progresivo según edad y nivel",
      "Bases sólidas para futuras carreras tecnológicas",
      "Certificación digital",
    ],
    Phrase: "No es solo aprender a jugar. Es aprender a crear.",
    cta: "Conocer el programa ideal para mi hijo/a",
    link: "/rds-Kids", // IMPORTANTE: Cambiado de "/rds-Kids" a "/rds-kids"
    external: false, // Esto es una ruta interna
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";
  
  const titleClass =
    currentTheme === "dark"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
      : "text-[#355CFF]"; 

  // Obtener el servicio activo
  const activeServiceData = services[activeService];

  return (
    <section id="services" className="relative py-10">
      <div className="container max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-15">
            Servicios diseñados para resolver 
            <br />
            <span className={titleClass}> problemas reales de negocio.</span>
          </h2>
        </div>
        
        {/* Header */}
        <div className="relative mb-16 text-center">
          <Image
            src="/images/Who/BannerPC.jpeg"
            alt="Equipo RDS"
            width={1920}
            height={200}
            className="w-full h-[100px] object-cover rounded-xl opacity-25 fade-all-edges"
            priority
          />
          <h2 className="absolute inset-0 flex items-center justify-center px-6 text-center text-white font-bold leading-tight text-[clamp(1.5rem,3vw,1.5rem)]">
            No vendemos horas. Construimos soluciones con impacto.
            <br />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-start">
          
          {/* Selector */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all
                  ${
                    activeService === index
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-blue-500/30"
                  }`}
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-40 group-hover:opacity-100 transition duration-300" 
                  style={{
                    filter: "blur(30px)",
                    background:
                      "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-xs tracking-widest text-blue-500 mb-2">
                    SERVICIO
                  </p>
                  <h3 className="lg:text-xl md:text-md text-sm font-bold">
                    {service.label}
                  </h3>
                </div>
              </button>
            ))}
          </div>
          
          {/* Card principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-2xl border border-blue-500/40 p-14 bg-[#181a2a]/80">

            {/* LEFT */}
            <div>
              <p className="text-xs tracking-widest text-blue-500 mb-4">
                SERVICIO 0{activeService + 1}
              </p>

              <h2 className="lg:text-4xl md:text-2xl text-xl font-bold mb-6">
                {activeServiceData.title}
              </h2>

              <p className="text-lg text-body-color mb-10">
                {activeServiceData.description}
              </p>

              <p className="text-lg text-body-color mb-10">
                {activeServiceData.Phrase}
              </p>

              {/* Botón condicional - Link interno o externo */}
              {activeServiceData.external ? (
                // Link externo
                <a
                  href={activeServiceData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-blue-500 font-medium group hover:text-blue-400 transition-colors"
                >
                  {activeServiceData.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              ) : (
                // Link interno usando Next.js Link
                <Link
                  href={activeServiceData.link}
                  className="inline-flex items-center gap-3 text-blue-500 font-medium group hover:text-blue-400 transition-colors"
                >
                  {activeServiceData.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              )}
            </div>

            {/* RIGHT */}
            <div className="grid gap-6">
              <div className="rounded-xl p-6">
                <h4 className="font-semibold mb-4">Ruta del usuario</h4>
                <ul className="space-y-2 text-sm text-body-color">
                  {activeServiceData.route.map((step, i) => (
                    <li key={i}>• {step}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-6">
                <h4 className="font-semibold mb-4">Beneficios clave</h4>
                <ul className="space-y-2 text-sm text-body-color">
                  {activeServiceData.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}