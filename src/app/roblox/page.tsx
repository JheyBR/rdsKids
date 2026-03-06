"use client";

import Link from 'next/link';
import { 
  Gamepad2, 
  ChevronRight, 
  Star, 
  Users, 
  BookOpen, 
  Sparkles,
  Target,
  Zap,
  Code,
  Globe,
  Building2,
  DollarSign,
  Rocket,
  Cpu,
  Shield,
  Palette,
  Music,
  Puzzle,
  Sparkle
} from 'lucide-react';

export default function RobloxPage() {
  const levels = [
    { 
      number: 1, 
      title: "Fundamentos de Roblox Studio", 
      classes: 20, 
      description: "Introducción al desarrollo de juegos 3D",
      icon: Puzzle,
      color: "from-purple-500 to-pink-500",
      topics: ["Interfaz 3D", "Objetos básicos", "Terrenos", "Propiedades"]
    },
    { 
      number: 2, 
      title: "Programación con Lua", 
      classes: 20, 
      description: "Scripting y mecánicas avanzadas",
      icon: Code,
      color: "from-orange-500 to-yellow-500",
      topics: ["Variables Lua", "Funciones", "Eventos", "Físicas"]
    },
    { 
      number: 3, 
      title: "Publicación Profesional", 
      classes: 20, 
      description: "Monetización y publicación de juegos",
      icon: Rocket,
      color: "from-green-500 to-emerald-400",
      topics: ["Monetización", "UI/UX", "Optimización", "Publicación"]
    }
  ];

  const features = [
    {
      icon: Building2,
      title: "Creación 3D",
      description: "Desarrolla juegos 3D completos con Roblox Studio"
    },
    {
      icon: DollarSign,
      title: "Monetización",
      description: "Aprende a generar ingresos con tus juegos"
    },
    {
      icon: Globe,
      title: "Comunidad Activa",
      description: "Publica y comparte con millones de jugadores"
    },
    {
      icon: Shield,
      title: "Desarrollo Seguro",
      description: "Entorno controlado y seguro para jóvenes"
    }
  ];

  const projects = [
    {
      title: "Juego de Obstáculos",
      difficulty: "Principiante",
      duration: "8 horas",
      skills: ["Movimiento 3D", "Checkpoints", "Temporizador"],
      link: "https://www.roblox.com/games/140381845358916/"
      
    },
    {
      title: "Juego de Conocimientos",
      difficulty: "Intermedio",
      duration: "12 horas",
      skills: ["Economía", "Inventario", "Interfaz GUI"],
      link: "https://www.roblox.com/es/games/128897011028696/Aventura-por-el-relieve-de-Colombia"
    },
    {
      title: "Juego de Aventura",
      difficulty: "Avanzado",
      duration: "16 horas",
      skills: ["IA Enemigos", "Aventura", "Misiones"],
      link: "https://www.roblox.com/es/games/104465091537633/Luminaria-Adventure-Beta"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-[#1a0a2a] py-12">
      <div className="container mx-auto px-6">
        
        
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center gap-4 mb-6">

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Para jóvenes de 10 a 14 años</span>
            </div>

            <Link
              href="/rdsKids"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
              border border-purple-500/30 
              bg-white/80 dark:bg-[#1a1a2a]/80
              hover:bg-purple-500/60 hover:border-purple-500/90
              hover:shadow-md
              transition-all duration-200
              group"
            >
              <ChevronRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-3 " />
              Volver al Inicio
            </Link>

          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Roblox Studio
            </span>
            <br />
            Desarrollo de Juegos 3D Profesionales
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Aprende desarrollo de juegos 3D, programación Lua y monetización. 
            60 clases en 3 niveles para crear juegos profesionales y generar ingresos.
          </p>
          
          
        </div>


        {/* Niveles */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Niveles de Aprendizaje
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Programa completo de 60 clases divididas en 3 niveles profesionales
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {levels.map((level) => {
              const Icon = level.icon;
              return (
                <div
                  key={level.number}
                  className={`group relative overflow-hidden rounded-2xl border border-purple-500/30 
                  bg-gradient-to-br from-white to-purple-50/50 dark:from-[#1a1a2a] dark:to-purple-950/30 
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
                          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            NIVEL {level.number}
                          </span>
                          <h3 className="text-2xl font-bold mt-1">{level.title}</h3>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-2 transition-all" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {level.description}
                    </p>
                    
                    {/* Classes Count */}
                    <div className="mb-6 p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Clases en este nivel:</span>
                        <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {level.classes}
                        </span>
                      </div>
                    </div>
                    
                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                        Lo que aprenderás:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {level.topics.map((topic, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      {level.number === 1 ? (
                        <Link
                          href={`/roblox/level-${level.number}`}
                          className="block w-full text-center py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
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
            ¿Por qué aprender Roblox Studio?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="group p-6 rounded-xl border border-purple-500/20 bg-white/80 dark:bg-[#1a1a2a]/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
                    <Icon className="w-6 h-6 text-purple-500" />
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