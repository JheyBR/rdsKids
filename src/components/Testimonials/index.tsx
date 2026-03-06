"use client";


import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const testimonialData = [
  {
    id: 1,
    name: "Carolina Arango",
    role: "Directora Administrativa – ASCUN",
    content:
      "Pasamos de caos a claridad. RDS no solo entendió el problema, lo solucionó como si fuera parte de nuestro equipo.",
      image: "/images/testimonials/auth-01.png",
      logo: "/images/testimonials/ASCUN-logo.jpg",
  },
  {
    id: 2,
    name: "Joseph Lopez",
    role: "CEO – Octopus DevOps",
    content:
      "Hoy tenemos más clientes, más orden y más tiempo para enfocarnos en crecer. RDS fue una decisión estratégica.",
      image: "/images/testimonials/auth-01.png",
      logo: "/images/testimonials/OctopusDevOps-logo.png",
  },


];
; 

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => setMounted(true), []);
    const currentTheme = mounted ? theme : "dark";
  
  const titleClass =
    currentTheme === "dark"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
      : "text-[#355CFF]"; 


  return (
    <section className="relative z-10 py-20 bg-[#0E1323]">
      <div className="container">
        {/* Intro */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-15">
            No decimos que somos buenos.
            <br />
            <span className={titleClass}> Ellos lo dicen mejor.</span>
          </h2>
        </div>
        {/* Header */}
        <div className="relative mb-16 text-center">
          <Image
            src="/images/Who/BannerPC.jpeg"
            alt="Equipo RDS"
            width={1920}
            height={200}
            className="w-full h-[100px] object-cover rounded-xl opacity-25  fade-all-edges"
            priority
          />
          <h2 className="absolute inset-0 flex items-center justify-center px-6 text-center text-white font-bold leading-tight text-[clamp(1.5rem,3vw,1.5rem)]">
            Empresas que confiaron en RDS
          <br />hoy tienen procesos claros, tecnología funcional y resultados reales.
          </h2>

        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8 transition"
            >
              {/* Glow effect */}
              <div
                className="absolute  inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                style={{
                  filter: "blur(100px)",
                  background:
                    "radial-gradient(circle at top, rgba(74,108,247,0.25), transparent 70%)",
                }}
              />

              {/* Stars */}
              <div className="relative z-10 mb-4 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Content */}
              <p className="relative z-10 mb-6 text-lg leading-relaxed">
                “{testimonial.content}”
              </p>

              <div className="relative z-10 mt-6 flex flex-grid justify-center items-center gap-4 border-t border-white/10 pt-4">
                {/* Avatar 
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full border border-white/20 object-cover"
                />*/}
                {/* Name & role */}
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-body-color">
                    {testimonial.role}
                  </p>
                </div>
                {/*<img
                  src={testimonial.logo}
                  className="h-12 w-12 rounded-full border border-white/20 object-cover"
                />*/}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-15 text-center">
          <p className="text-3xl font-semibold text-black dark:text-white mb-4">
            Si ellos pasaron del caos a la claridad, ¿por qué tú no?
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=+573507535369&text=Hola%20Quiero%20que%20hablemos%20sobre%20mi%20proyecto%20y%20las%20necesidades%20del%20mismo..."
            className="inline-flex items-center gap-3 text-xl font-medium text-blue-500 group"
          >
            Quiero empezar ahora
            <span className="transition-transform duration-300 group-hover:translate-x-2 ">
              →
            </span>
          </a>
        </div> 

      </div>

      {/* Decorative background */}
      <div className="absolute right-0 top-10 z-[-1] opacity-40">
        <svg
          width="240"
          height="500"
          viewBox="0 0 240 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="120"
            y="-50"
            width="160"
            height="600"
            rx="2"
            transform="rotate(45 120 -50)"
            fill="url(#grad)"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
