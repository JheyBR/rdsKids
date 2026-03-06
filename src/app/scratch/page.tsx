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
      topics: ["Bloques básicos", "Animaciones", "Eventos", "Sonidos"]
    },
    { 
      number: 2, 
      title: "Desarrollo de Juegos", 
      classes: 20, 
      description: "Creación de videojuegos completos",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-400",
      topics: ["Variables", "Condicionales", "Bucles", "Juegos interactivos"]
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
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Ideal para principiantes de 8 a 12 años</span>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/scratch/level-1"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-105"
            >
              Comenzar Nivel 1 Gratis
              <ChevronRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 text-lg font-semibold rounded-xl hover:bg-blue-500/10 transition"
            >
              <Zap className="w-5 h-5" />
              Ver Demostración
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80">
            <div className="flex items-center gap-3">
              <Users className="w-10 h-10 text-blue-500" />
              <div>
                <p className="text-3xl font-bold">10M+</p>
                <p className="text-gray-500">Estudiantes</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl border border-green-500/20 bg-white/80 dark:bg-[#181a2a]/80">
            <div className="flex items-center gap-3">
              <Star className="w-10 h-10 text-green-500" />
              <div>
                <p className="text-3xl font-bold">4.9/5</p>
                <p className="text-gray-500">Calificación</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl border border-purple-500/20 bg-white/80 dark:bg-[#181a2a]/80">
            <div className="flex items-center gap-3">
              <BookOpen className="w-10 h-10 text-purple-500" />
              <div>
                <p className="text-3xl font-bold">40</p>
                <p className="text-gray-500">Clases</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl border border-orange-500/20 bg-white/80 dark:bg-[#181a2a]/80">
            <div className="flex items-center gap-3">
              <Target className="w-10 h-10 text-orange-500" />
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-gray-500">Práctico</p>
              </div>
            </div>
          </div>
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
                <Link
                  key={level.number}
                  href={`/scratch/level-${level.number}`}
                  className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-white to-blue-50/50 dark:from-[#181a2a] dark:to-blue-950/30 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                    
                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                        Lo que aprenderás:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {level.topics.map((topic, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
                        {level.number === 1 ? "Comenzar Gratis" : "Continuar Nivel"}
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

        {/* Sample Projects */}
        <div className="mb-20" id="demo">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Proyectos que crearás
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-blue-500/30 bg-white/80 dark:bg-[#181a2a]/80 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -translate-y-12 translate-x-12" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm">
                      {project.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Cpu className="w-4 h-4" />
                      {project.duration}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Habilidades desarrolladas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIdx) => (
                        <span 
                          key={skillIdx}
                          className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={project.link}
                    className="w-full py-2.5 border border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-500/10 transition inline-block text-center"
                  >
                    Ver Proyecto Ejemplo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age Groups */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Para todas las edades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">8-10</div>
                <h3 className="text-xl font-bold mb-2">Principiantes</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Animaciones básicas y juegos simples
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">10-12</div>
                <h3 className="text-xl font-bold mb-2">Intermedios</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Juegos interactivos con lógica
                </p>
              </div>
            </div>
            
            
          </div>
        </div>

        {/* Final CTA 
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 mb-8">
            <div className="bg-white dark:bg-[#0a1a2a] rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para crear tu primer proyecto?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a miles de niños que ya están creando sus propios juegos y animaciones
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/scratch/level-1"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl text-lg font-semibold hover:opacity-90 transition"
                >
                  <Code className="w-6 h-6" />
                  Comenzar Gratis
                </Link>
                
                <Link
                  href="/rds-kids"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl text-lg font-semibold hover:bg-blue-500/10 transition"
                >
                  <Users className="w-6 h-6" />
                  Ver Todos los Cursos
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            No se requiere tarjeta de crédito • Acceso inmediato • Soporte en español
          </p>
        </div>*/}
      </div>
    </div>
  );
}