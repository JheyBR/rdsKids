"use client";
import React, { useEffect, useState } from "react";
import BackgroundSVG from "../Componentes/BackgroundSVG";
import LogoOficial from "../Componentes/LogoOficial";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogoSVG from "../Componentes/AnimatedLogoSVG";
import Image from "next/image";
import LogoOficialSigla from "../Componentes/LogoOficialSigla";

const phrases = [
  "Aprende a programar creando tus propios videojuegos",
  "La tecnología también es para niños curiosos",
  "De jugar videojuegos a aprender a crearlos",
  "Desarrolla lógica, creatividad y pensamiento digital",
  "El primer paso para convertirte en creador de tecnología",
  "Programación divertida para niños y jóvenes"
];

const phraseToType = "//Pagina en Construcción";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Evitar renderizado hasta que el componente esté montado
  useEffect(() => {
    setMounted(true);
  }, []);

  // Si no está montado, asume dark (para evitar el parpadeo)
  const currentTheme = mounted ? theme : "dark";

  const color2 = currentTheme === "dark" ? "#ffffff" : "var(--color-logo2)";
  const color3 = currentTheme === "dark" ? "#ffffff" : "var(--color-logo1)";

  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const [index, setIndex] = useState(0);

  // Máquina de escribir frase inicial
  useEffect(() => {
    if (step === 1 && typedText.length < phraseToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(phraseToType.slice(0, typedText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }

    if (step === 1 && typedText.length === phraseToType.length) {
      setTimeout(() => {
        setStep(2);
        setIntroDone(true); // ✅ Aquí se activa la rotación de frases
      }, 500);
    }
  }, [typedText, step]);

  // Inicio automático
  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 800);
    return () => clearTimeout(timer);
  }, []);

  // Cambia frases cada 5 segundos una vez termina intro
  useEffect(() => {
    if (!introDone) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index, introDone]);

  const textClass =
  currentTheme === "dark"
    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400"
    : "text-[white]";

  const [showFinalLogo, setShowFinalLogo] = useState(false);
  const [hideAnimated, setHideAnimated] = useState(false);

  // control de animaciones del logo
  useEffect(() => {
    const timer1 = setTimeout(() => setShowFinalLogo(true), 4000); // Mostrar final
    const timer2 = setTimeout(() => setHideAnimated(true), 4000);  // Ocultar animado
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);


  return (
    <section
      id="home"
      className="relative z-10 pb-2 mb-10 pt-15">
      {/*className="relative z-10 pb-2 mb-20 pt-[120px] md:pb-[10px] md:pt-[50px] xl:pb-[10px] xl:pt-[60px] 2xl:pb-[20px] 2xl:pt-[220px]"*/}
    
      {/* Cambia el tamaño del logo usando un contenedor con clases de Tailwind */}

      <div className="mx-auto mb-0 max-w-[1000px] text-center">
        <div className="relative mt-10 mb-30 min-h-[120px] flex items-center justify-center">
          <div
            className="absolute z-10 rounded-full pointer-events-none"
            style={{
              width: "1500px",
              height: "100px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(45px)",
              background:
                "radial-gradient(circle at center, rgba(4, 0, 253, 0.85) 0%, rgba(16, 62, 148, 0.4) 30%, transparent 100%)",
              opacity: 0.9,
            }}
          />
        </div>
        {/* Frases rotativas (solo después del logo animado) */}          
        <div className="relative z-20 mt-[-210px] flex items-center justify-center min-h-[120px] w-full">
            <AnimatePresence mode="wait">
              <motion.span
                className={`text-3xl sm:text-3xl md:text-xl lg:text-3xl font-bold ${textClass}`}
                key={index}
                initial={{ opacity: 0, scale: 0.6, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: -20 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
        </div>
       

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-10 mt-10">
          {/* Logo RDS */}
          <div className="flex-shrink-0 mt-5 flex justify-center order-1 md:order-none relative">
            {/* Animated logo visible si aún no se ocultó */}
            {!hideAnimated && (
              <div className="absolute top-4 md:top-0 lg:top-0 left-20 md:left-0 lg:left-0 w-[400px] md:w-[550px] lg:w-[600px] h-auto z-10 transition-opacity duration-500">
                 {/* Logo animado */}
                  <div className="relative z-10">
                    <AnimatedLogoSVG />
                  </div>

                  
              </div>
            )}
            {/* Logo final aparece encima al terminar animación */}
              {showFinalLogo && (
                <div className="absolute top-12 left-20 md:left-0 lg:left-0 w-[370px] md:w-[510px] lg:w-[560px] h-auto z-20 transition-opacity duration-500">
                  <div className="relative z-10">
                     <LogoOficialSigla color2={color2} color3={color3} />
                  </div>
                  <Image
                    src="/images/kids.png"
                    alt="RDS Kids Logo"
                    width={500}
                    height={250}
                    className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[300px] z-20"
                    priority
                  />
                </div>
              )}
            {/* Contenedor físico invisible para mantener layout */}
              <div className="invisible mt-25 mb-0   w-[510px] h-auto">
                <LogoOficial color2={color2} color3={color3} />
              </div>  
          </div>              
        </div>
        {/* Botón de contacto */}
        {/* CTA */}
        <div className="mt-25 text-center mb-20">
          <p className="text-3xl font-semibold text-black dark:text-white mb-4">
            🔥 Inscríbete al curso de programación
          </p>

          <a
            href="https://w.app/hes4fx"
            className="inline-flex items-center gap-3 text-xl font-medium text-blue-500 group"
          >
            Reserva tu cupo para el próximo grupo
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          Para niños de 10 a 15 años · No necesitan experiencia previa
          </p>
        </div>          
      </div>

      <BackgroundSVG />
    </section>
  );
};

export default Hero;


{/*inline-flex max-w-fit items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/70*/}