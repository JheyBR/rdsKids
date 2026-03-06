"use client";

import Link from 'next/link';
import { 
  Code, 
  ChevronRight, 
  Star, 
  Users, 
  BookOpen, 
  Sparkles,
  Target,
  Zap,
  Puzzle,
  Gamepad2,
  Palette,
  Music,
  Cpu,
  Shield,
  Globe
} from 'lucide-react';

export default function ScratchPage() {
  const levels = [
    { 
      number: 1, 
      title: "Introducción a Programación", 
      classes: 20, 
      description: "Fundamentos de programación visual",
      icon: Puzzle,
      color: "from-blue-500 to-cyan-400",
    },
    { 
      number: 2, 
      title: "Desarrollo de Juegos", 
      classes: 20, 
      description: "Creación de videojuegos completos",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-400",
    }
  ];

  const features = [
    {
      icon: Palette,
      title: "Interfaz Visual",
      description: "Arrastra y suelta bloques para programar sin escribir código"
    },
    {
      icon: Music,
      title: "Multimedia Integrada",
      description: "Biblioteca de sonidos, imágenes y animaciones"
    },
    {
      icon: Globe,
      title: "Comunidad Global",
      description: "Comparte proyectos con millones de usuarios"
    },
    {
      icon: Shield,
      title: "Seguro para Niños",
      description: "Entorno 100% seguro y moderado"
    }
  ];

  const projects = [
    {
      title: "Juego de Laberinto",
      difficulty: "Principiante",
      duration: "2 horas",
      skills: ["Movimiento", "Colisiones", "Puntuación"],
      link: "https://scratch.mit.edu/projects/79919282/"
    },
    {
      title: "Historia Interactiva",
      difficulty: "Intermedio",
      duration: "3 horas",
      skills: ["Eventos", "Disfraces", "Diálogos"],
      link: "https://scratch.mit.edu/projects/433257905/"
    },
    {
      title: "Juego de Preguntas",
      difficulty: "Avanzado",
      duration: "4 horas",
      skills: ["Variables", "Condicionales", "Lógica"],
      link: "https://scratch.mit.edu/projects/142737815/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-[#0a1a2a] py-12">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center gap-4 mb-6">

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Ideal para principiantes de 8 a 12 años</span>
            </div>

            <Link
              href="/rdsKids"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
              border border-blue-500/30 
              bg-white/80 dark:bg-[#1a1a2a]/80
              hover:bg-blue-500/60 hover:border-blue-500/90
              hover:shadow-md
              transition-all duration-200
              group"
            >
              <ChevronRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-3" />
              Volver al Inicio
            </Link>

          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Scratch
            </span>
            <br />
            Programación Visual para Niños
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Aprende los fundamentos de programación creando juegos, historias y animaciones. 
            40 clases en 2 niveles diseñadas especialmente para niños.
          </p>
          
          
        </div>

        

        {/* Niveles */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Niveles de Aprendizaje
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Programa progresiva de 40 clases divididas en 2 niveles fundamentales
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level) => {
              const Icon = level.icon;
              return (
                <div
                  key={level.number}
                  className={`group relative overflow-hidden rounded-2xl border border-blue-500/30 
                  bg-gradient-to-br from-white to-blue-50/50 dark:from-[#181a2a] dark:to-blue-950/30 
                  p-8 transition-all duration-500 hover:-translate-y-2
                  ${level.number !== 1 ? "opacity-70 cursor-not-allowed" : "hover:shadow-2xl"}`}
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${level.color.replace('from-', '').split(' ')[0]}20, transparent 50%)`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Level Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${level.color}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            NIVEL {level.number}
                          </span>
                          <h3 className="text-2xl font-bold mt-1">{level.title}</h3>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {level.description}
                    </p>
                    
                    {/* Classes Count */}
                    <div className="mb-6 p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Clases en este nivel:</span>
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {level.classes}
                        </span>
                      </div>
                    </div>
                    
                    
                    
                    {/* CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {level.number === 1 ? (
                      <Link
                        href={`/scratch/level-${level.number}`}
                        className="block w-full text-center py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        Ingresar
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="w-full py-3 bg-gray-300 dark:bg-gray-700 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
                      >
                        Bloqueado
                      </button>
                    )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            ¿Por qué aprender con Scratch?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="group p-6 rounded-xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
}