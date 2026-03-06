"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import BackgroundSVG2 from "../Componentes/BackgroundSVG2";

const cards = [
  {
    tag: "PROBLEMA",
    title: "Tu web no vende.",
    subtitle: "Y no es por el diseño.",
    details: `Creamos páginas y landing pages pensadas
para una sola cosa: convertir.

Nada de plantillas genéricas.
Nada de adornos innecesarios.
Solo estructura, mensaje y conversión.`,
    cta: "¿Por qué no está vendiendo?",
  },
  {
    tag: "ESCALA",
    title: "Procesos que te frenan.",
    subtitle: "Cuando el negocio crece pero el sistema no.",
    details: `Diseñamos software a la medida
para automatizar y ordenar tu operación.

Menos trabajo manual.
Menos errores.
Más control real.`,
    cta: "¿Por qué el sistema no escala?",
  },
  {
    tag: "ESTRATEGIA",
    title: "Lo genérico no funciona.",
    subtitle: "Porque tu negocio no es genérico.",
    details: `No adaptamos tu negocio a una herramienta.
Adaptamos la herramienta a tu negocio.

Arquitectura clara.
Decisiones técnicas con sentido.`,
    cta: "¿Por qué lo genérico falla?",
  },
  {
    tag: "FUTURO",
    title: "La brecha empieza temprano.",
    subtitle: "Y se paga caro después.",
    details: `Con RDS Kids formamos pensamiento lógico
y criterio tecnológico desde la base.

No para consumir tecnología.
Para crearla.`,
    cta: "¿Qué pasa si no se corrige ahora?",
  },
];

export default function Who() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";

  const titleClass =
    currentTheme === "dark"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
      : "text-[#355CFF]";

  return (
    <section className="relative z-10 mt-10">
      <div className="container mx-auto px-4 mt-10">
            {/* Intro */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-15">
            La tecnología no es el problema.
            <br />
            <span className={titleClass}>La improvisación sí.</span>
          </h2>
        </div>
        {/* Banner */}
        <div className="relative mb-16 text-center">
          <Image
            src="/images/Who/BannerPC.jpeg"
            alt="Equipo RDS"
            width={1920}
            height={200}
            className="w-full h-[100px] object-cover rounded-xl opacity-25  fade-all-edges"
            priority
            />
          <h1 className="absolute inset-0 flex items-center justify-center px-6 text-center text-white font-bold leading-tight text-[clamp(1.5rem,3vw,1.5rem)]">
            “La mayoría de los negocios no tienen un problema digital.
            <br /> Tienen un problema de enfoque.”
          </h1>
        </div>


        

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="group relative cursor-pointer rounded-xl border border-blue-500/40 
                bg-white/80 dark:bg-[#181a2a]/80 p-6 transition-all duration-300
                hover:shadow-xl hover:-translate-y-1"
              >
                {/* Glow hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
                  style={{
                    filter: "blur(30px)",
                    background:
                      "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-xs tracking-widest text-blue-500 font-bold">
                    {card.tag}
                  </span>

                  <h3 className={`mt-2 text-xl font-bold ${titleClass}`}>
                    {card.title}
                  </h3>

                  <p className="mt-2 text-body-color dark:text-body-color-dark">
                    {card.subtitle}
                  </p>

                  {/* Expand */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-6" : "max-h-0"
                    }`}
                  >
                    <div className="border-l-2 border-blue-500 pl-4 text-sm leading-relaxed text-body-color dark:text-body-color-dark whitespace-pre-line">
                      {card.details}
                    </div>
                  </div>

                  <p className="mt-4 text-sm font-medium text-blue-500 inline-flex items-center gap-2 group">
                    {isOpen ? (
                      <>
                        Ocultar
                        <span className="transition-transform duration-300 group-hover:-translate-y-1.5">
                          ↑
                        </span>
                      </>
                    ) : (
                      <>
                        {card.cta}
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div className="max-w-4xl mx-auto text-center mt-15 mb-10">
          <p className="lg:text-xl md:text-xl font-medium text-body-color dark:text-body-color-dark">
            Páginas que no convierten, sistemas que no escalan y decisiones
            tecnológicas sin dirección.
            <br />
            <span className="font-bold">
              Nada de eso se soluciona improvisando.
            </span>
          </p>
        </div>  

        <div className="mt-0 text-center">
          <a
              href="https://api.whatsapp.com/send?phone=+573507535369&text=Hola%20Quiero%20que%20hablemos%20sobre%20mi%20proyecto%20y%20las%20necesidades%20del%20mismo..."
              className="inline-flex items-center gap-3 text-xl font-medium text-blue-500 group"
              >
              Analizar tu escenario 
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
        </div>
      </div>

      <BackgroundSVG2 />
    </section>
  );
}
