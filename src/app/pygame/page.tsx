"use client";

import Link from 'next/link';
import { 
  Rocket,
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
  Cpu,
  Shield,
  Palette,
  Music,
  Puzzle,
  Gamepad2,
  Terminal,
  Brain,
  Layers
} from 'lucide-react';

export default function PythonPage() {
  const levels = [
    { 
      number: 1, 
      title: "Fundamentos de Python", 
      classes: 20, 
      description: "Aprende los fundamentos de programación con Python",
      icon: Terminal,
      color: "from-yellow-500 to-orange-600",
      topics: ["Variables", "Condicionales", "Bucles", "Funciones", "Pygame básico"]
    },
    { 
      number: 2, 
      title: "Pygame Intermedio", 
      classes: 20, 
      description: "Crea juegos más complejos con Pygame",
      icon: Gamepad2,
      color: "from-orange-500 to-red-500",
      topics: ["Listas", "Diccionarios", "Sprites", "Enemigos", "IA básica"]
    },
    { 
      number: 3, 
      title: "Desarrollo Profesional", 
      classes: 20, 
      description: "Programación orientada a objetos y juegos avanzados",
      icon: Brain,
      color: "from-red-500 to-purple-500",
      topics: ["POO", "Herencia", "Físicas", "Networking", "Publicación"]
    }
  ];

  const features = [
    {
      icon: Terminal,
      title: "Python desde Cero",
      description: "Aprende el lenguaje de programación más popular del mundo"
    },
    {
      icon: Gamepad2,
      title: "Creación de Juegos",
      description: "Desarrolla videojuegos 2D completos con Pygame"
    },
    {
      icon: Brain,
      title: "Lógica de Programación",
      description: "Desarrolla habilidades de pensamiento computacional"
    },
    {
      icon: Rocket,
      title: "Proyectos Reales",
      description: "Crea juegos para compartir con amigos y familia"
    }
  ];

  const projects = [
    {
      title: "Calculadora Gamer",
      difficulty: "Principiante",
      duration: "4 horas",
      skills: ["Variables", "Input usuario", "Operaciones matemáticas"],
      link: "/pygame/projects/calculadora"
    },
    {
      title: "Juego de la Serpiente",
      difficulty: "Intermedio",
      duration: "8 horas",
      skills: ["Pygame", "Colisiones", "Puntuación"],
      link: "/pygame/projects/snake"
    },
    {
      title: "Plataformas 2D",
      difficulty: "Avanzado",
      duration: "12 horas",
      skills: ["Sprites", "Físicas", "Niveles"],
      link: "/pygame/projects/platformer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-[#1a0f0a] py-12">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Para jóvenes de 12 a 16 años</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">
              Python + Pygame
            </span>
            <br />
            Programación y Creación de Videojuegos
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Aprende el lenguaje de programación más popular del mundo mientras creas tus propios videojuegos. 
            60 clases en 3 niveles desde fundamentos hasta desarrollo profesional.
          </p>
          
         
        </div>

        {/* Niveles */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Niveles de Aprendizaje
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Programa completo de 60 clases divididas en 3 niveles desde fundamentos hasta desarrollo profesional
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level) => {
              const Icon = level.icon;
              return (
                <Link
                  key={level.number}
                  href={`/pygame/level-${level.number}`}
                  className="group relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-white to-yellow-50/50 dark:from-[#1a1a2a] dark:to-orange-950/30 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                          <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                            NIVEL {level.number}
                          </span>
                          <h3 className="text-2xl font-bold mt-1">{level.title}</h3>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 group-hover:translate-x-2 transition-all" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {level.description}
                    </p>
                    
                    {/* Classes Count */}
                    <div className="mb-6 p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Clases en este nivel:</span>
                        <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
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
                            className="px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
                        {level.number === 1 ? "Iniciar Nivel" : "Continuar Nivel"}
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            ¿Por qué aprender Python?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx}
                  className="group p-6 rounded-xl border border-yellow-500/20 bg-white/80 dark:bg-[#1a1a2a]/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-yellow-500/10 w-fit mb-4">
                    <Icon className="w-6 h-6 text-yellow-500" />
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

        {/* Projects Showcase */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Proyectos que crearás
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Aplica tus conocimientos creando juegos completos y funcionales
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/80 dark:bg-[#1a1a2a]/80 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${project.difficulty === 'Principiante' ? 'bg-green-500/10 text-green-600' :
                      project.difficulty === 'Intermedio' ? 'bg-yellow-500/10 text-yellow-600' :
                      'bg-red-500/10 text-red-600'}`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 mt-4">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Duración: {project.duration}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Habilidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-700 dark:text-yellow-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href={project.link}>
                  <button className="w-full py-2 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 rounded-lg font-medium hover:bg-yellow-500/10 transition">
                    Ver proyecto
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Currículum Detallado */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contenido del Curso
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Descubre todo lo que aprenderás en cada nivel
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-yellow-500/30 bg-white/80 dark:bg-[#1a1a2a]/80">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <Terminal className="w-5 h-5 text-yellow-500" />
                </div>
                Nivel 1: Fundamentos
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ ¿Qué es programar?</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Variables y tipos de datos</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Condicionales y bucles</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Funciones básicas</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Introducción a Pygame</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl border border-yellow-500/30 bg-white/80 dark:bg-[#1a1a2a]/80">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Gamepad2 className="w-5 h-5 text-orange-500" />
                </div>
                Nivel 2: Pygame Intermedio
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Listas y diccionarios</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Sprites y animaciones</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Sistema de enemigos</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ IA básica</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Sistema de niveles</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl border border-yellow-500/30 bg-white/80 dark:bg-[#1a1a2a]/80">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <Brain className="w-5 h-5 text-red-500" />
                </div>
                Nivel 3: Profesional
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Programación Orientada a Objetos</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Herencia y clases</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Sistema de físicas</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Networking básico</li>
                <li className="text-sm text-gray-600 dark:text-gray-300">✓ Publicación y distribución</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}