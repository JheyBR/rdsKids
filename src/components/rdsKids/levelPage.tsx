"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { 
  Video, 
  FileText, 
  CheckCircle, 
  Lock, 
  PlayCircle,
  Download,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Code,
  Gamepad2,
  Star,
  Target,
  BarChart3
} from 'lucide-react';
import { useRouter } from "next/navigation";

interface ClassItem {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: 'video' | 'taller' | 'proyecto';
  status: 'completed' | 'current' | 'locked';
  points: number;
  resources?: string[];
  projectUrl?: string;
}

interface LevelPageProps {
  course: 'roblox' | 'scratch';
  level: number;
  levelName: string;
}

const LevelPage = ({ course, level, levelName }: LevelPageProps) => {
  const { theme } = useTheme();
  const router = useRouter();
  const [activeClass, setActiveClass] = useState<number>(1);
  
  const courseInfo = {
    roblox: {
      title: "Roblox Studio",
      icon: Gamepad2,
      color: "from-purple-500 to-pink-500",
      totalLevels: 3,
      description: "Desarrollo profesional de juegos"
    },
    scratch: {
      title: "Scratch",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
      totalLevels: 2,
      description: "Programación visual para niños"
    }
  };

  const currentCourse = courseInfo[course];
  const Icon = currentCourse.icon;

  // Datos de ejemplo para 20 clases
  const classes: ClassItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Clase ${i + 1}: ${getClassTitle(course, level, i + 1)}`,
    description: getClassDescription(course, level, i + 1),
    duration: i < 5 ? "45 min" : i < 10 ? "60 min" : "75 min",
    type: getClassType(i + 1),
    status: getClassStatus(i + 1),
    points: calculatePoints(i + 1),
    resources: ['Video', 'PDF', 'Proyecto Ejemplo'],
    projectUrl: i % 4 === 0 ? `/projects/${course}/level${level}/class${i+1}` : undefined
  }));

  function getClassTitle(course: string, level: number, classNum: number): string {
    const robloxTitles = [
      "Introducción a Roblox Studio",
      "Interfaz y Herramientas",
      "Creando tu Primer Objeto",
      "Materiales y Texturas",
      "Iluminación Básica",
      "Scripting con Lua",
      "Variables y Funciones",
      "Eventos y Triggers",
      "Personaje Básico",
      "Movimiento con WASD",
      "Interacción con Objetos",
      "Sistema de Salud",
      "Interfaz de Usuario",
      "Sistema de Puntuación",
      "Menús y Botones",
      "Sonidos y Efectos",
      "Partículas Básicas",
      "Optimización",
      "Testing y Debug",
      "Publicación Final"
    ];

    const scratchTitles = [
      "Conociendo Scratch",
      "Bloques de Movimiento",
      "Disfraces y Apariencia",
      "Sonidos y Música",
      "Eventos y Control",
      "Variables Básicas",
      "Condicionales Si/No",
      "Bucles y Repetición",
      "Creando un Personaje",
      "Animación Básica",
      "Interacción entre Sprites",
      "Juego de Preguntas",
      "Laberinto Interactivo",
      "Sistema de Vidas",
      "Contador de Puntos",
      "Efectos Especiales",
      "Historias Interactivas",
      "Mini Juego Completo",
      "Compartir Proyecto",
      "Reto Final"
    ];

    const titles = course === 'roblox' ? robloxTitles : scratchTitles;
    return titles[classNum - 1] || `Clase ${classNum}`;
  }

  function getClassDescription(course: string, level: number, classNum: number): string {
    const descriptions = {
      roblox: [
        "Conoce el entorno de desarrollo y sus posibilidades",
        "Aprende a navegar por la interfaz de Roblox Studio",
        "Crea y manipula partes básicas en 3D",
        "Aplica materiales y texturas a tus objetos",
        "Ilumina tu escena de manera profesional",
        "Primeros pasos con el lenguaje Lua",
        "Almacena y manipula datos en tu juego",
        "Crea interacciones y respuestas a eventos",
        "Configura y personaliza tu personaje",
        "Implementa controles de movimiento fluidos",
        "Haz que los objetos reaccionen al jugador",
        "Crea un sistema de vida para tu personaje",
        "Diseña interfaces de usuario básicas",
        "Implementa un contador de puntos",
        "Crea menús interactivos para tu juego",
        "Añade efectos de sonido y música",
        "Implementa sistemas de partículas",
        "Optimiza el rendimiento de tu juego",
        "Depura y prueba tu proyecto",
        "Prepara tu juego para publicación"
      ],
      scratch: [
        "Primer contacto con la plataforma Scratch",
        "Mueve tus personajes por la pantalla",
        "Cambia la apariencia de tus sprites",
        "Añade sonidos y música a tu proyecto",
        "Controla la ejecución con eventos",
        "Introducción a las variables",
        "Toma decisiones en tu código",
        "Repite acciones automáticamente",
        "Crea y personaliza un personaje",
        "Anima tus sprites de manera sencilla",
        "Haz que los sprites interactúen",
        "Crea un juego de preguntas y respuestas",
        "Diseña y programa un laberinto",
        "Implementa un sistema de vidas",
        "Crea un contador de puntos funcional",
        "Añade efectos visuales especiales",
        "Crea una historia con decisiones",
        "Desarrolla un juego completo",
        "Comparte tu proyecto con la comunidad",
        "Proyecto final integrador"
      ]
    };

    const descArray = descriptions[course];
    return descArray[classNum - 1] || `Descripción de la clase ${classNum}`;
  }

  function getClassType(classNum: number): 'video' | 'taller' | 'proyecto' {
    if (classNum % 5 === 0) return 'proyecto';
    if (classNum % 2 === 0) return 'taller';
    return 'video';
  }

  function getClassStatus(classNum: number): 'completed' | 'current' | 'locked' {
    // Ejemplo: el estudiante ha completado 8 clases
    const completedClasses = 8;
    
    if (classNum <= completedClasses) return 'completed';
    if (classNum === completedClasses + 1) return 'current';
    return 'locked';
  }

  function calculatePoints(classNum: number): number {
    if (classNum % 5 === 0) return 50; // Proyectos valen más
    if (classNum % 2 === 0) return 30; // Talleres
    return 20; // Videos
  }

  const completedClasses = classes.filter(c => c.status === 'completed').length;
  const totalPoints = classes.reduce((sum, c) => c.status === 'completed' ? sum + c.points : sum, 0);
  const progressPercentage = (completedClasses / 20) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0a0a1a] py-8">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header Navigation */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver a cursos
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentCourse.color}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {currentCourse.title} - {levelName}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nivel {level} de {currentCourse.totalLevels} • 20 clases
                  </p>
                </div>
              </div>
            </div>
            
            {/* Progress Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80">
                <p className="text-2xl font-bold">{completedClasses}/20</p>
                <p className="text-sm text-gray-500">Clases</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80">
                <p className="text-2xl font-bold">{totalPoints}</p>
                <p className="text-sm text-gray-500">Puntos</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80">
                <p className="text-2xl font-bold">{Math.round(progressPercentage)}%</p>
                <p className="text-sm text-gray-500">Progreso</p>
              </div>
              <div className="text-center p-4 rounded-xl border border-blue-500/20 bg-white/80 dark:bg-[#181a2a]/80">
                <p className="text-2xl font-bold">{20 - completedClasses}</p>
                <p className="text-sm text-gray-500">Restantes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm mb-2">
            <span>Progreso del nivel</span>
            <span>{completedClasses} de 20 clases</span>
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Class Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Class List */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Lista de Clases
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Completa las 20 clases en orden para desbloquear el siguiente nivel.
              </p>
            </div>

            <div className="space-y-4">
              {classes.map((classItem) => (
                <div
                  key={classItem.id}
                  className={`group relative rounded-xl border ${
                    classItem.status === 'current' 
                      ? 'border-blue-500 ring-2 ring-blue-500/20' 
                      : classItem.status === 'completed'
                      ? 'border-green-500/30'
                      : 'border-gray-300 dark:border-gray-700 opacity-80'
                  } bg-white/80 dark:bg-[#181a2a]/80 p-6 transition-all duration-300 hover:shadow-lg ${
                    classItem.status !== 'locked' ? 'cursor-pointer hover:-translate-y-1' : ''
                  }`}
                  onClick={() => classItem.status !== 'locked' && setActiveClass(classItem.id)}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    {classItem.status === 'completed' && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                    {classItem.status === 'current' && (
                      <PlayCircle className="w-6 h-6 text-blue-500 animate-pulse" />
                    )}
                    {classItem.status === 'locked' && (
                      <Lock className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Class Number */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      classItem.status === 'completed' 
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                        : classItem.status === 'current'
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-500'
                    }`}>
                      <span className="text-xl font-bold">{classItem.id}</span>
                    </div>

                    {/* Class Info */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{classItem.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {classItem.description}
                          </p>
                        </div>
                        
                        {/* Points Badge */}
                        <div className="mt-2 md:mt-0">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                            <Star className="w-4 h-4" />
                            {classItem.points} puntos
                          </span>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        <span className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" />
                          {classItem.duration}
                        </span>
                        
                        <span className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${
                          classItem.type === 'video' 
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                            : classItem.type === 'taller'
                            ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                            : 'bg-green-500/10 text-green-600 dark:text-green-400'
                        }`}>
                          {classItem.type === 'video' && <Video className="w-4 h-4" />}
                          {classItem.type === 'taller' && <FileText className="w-4 h-4" />}
                          {classItem.type === 'proyecto' && <Target className="w-4 h-4" />}
                          {classItem.type.charAt(0).toUpperCase() + classItem.type.slice(1)}
                        </span>

                        {classItem.status === 'completed' && (
                          <span className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                            <CheckCircle className="w-4 h-4" />
                            Completada
                          </span>
                        )}
                      </div>

                      {/* Resources */}
                      {classItem.status !== 'locked' && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-3">
                            {classItem.resources?.map((resource, idx) => (
                              <span key={idx} className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-800">
                                {resource}
                              </span>
                            ))}
                            {classItem.projectUrl && (
                              <a 
                                href={classItem.projectUrl}
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition"
                              >
                                <Download className="w-4 h-4" />
                                Proyecto
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        classItem.status === 'completed'
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20'
                          : classItem.status === 'current'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90'
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={classItem.status === 'locked'}
                    >
                      {classItem.status === 'completed' && 'Ver nuevamente'}
                      {classItem.status === 'current' && 'Comenzar clase'}
                      {classItem.status === 'locked' && 'Bloqueado'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Class Details */}
          <div className="space-y-6">
            {/* Current Class Preview */}
            <div className="relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-blue-500" />
                Clase Actual
              </h3>
              
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle className="w-16 h-16 text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">Video de la clase {activeClass}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">{classes[activeClass - 1]?.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {classes[activeClass - 1]?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Duración</span>
                      <span className="font-medium">{classes[activeClass - 1]?.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Tipo</span>
                      <span className="font-medium">{classes[activeClass - 1]?.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Puntos</span>
                      <span className="font-medium text-yellow-600 dark:text-yellow-400">
                        {classes[activeClass - 1]?.points} pts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Level Stats */}
            <div className="relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-purple-500" />
                Estadísticas
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Videos completados</span>
                    <span className="font-medium">
                      {classes.filter(c => c.type === 'video' && c.status === 'completed').length}/8
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Talleres completados</span>
                    <span className="font-medium">
                      {classes.filter(c => c.type === 'taller' && c.status === 'completed').length}/8
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '50%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Proyectos completados</span>
                    <span className="font-medium">
                      {classes.filter(c => c.type === 'proyecto' && c.status === 'completed').length}/4
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Next Level Requirements */}
            <div className="relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                Siguiente Nivel
              </h3>
              
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300">
                  Para desbloquear el nivel {level + 1}, necesitas:
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${
                        completedClasses >= 20 ? 'text-green-500' : 'text-gray-400'
                      }`} />
                      Completar 20 clases
                    </span>
                    <span className={completedClasses >= 20 ? 'text-green-500 font-medium' : ''}>
                      {completedClasses}/20
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${
                        totalPoints >= 600 ? 'text-green-500' : 'text-gray-400'
                      }`} />
                      600 puntos mínimos
                    </span>
                    <span className={totalPoints >= 600 ? 'text-green-500 font-medium' : ''}>
                      {totalPoints}/600
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${
                        classes.filter(c => c.type === 'proyecto' && c.status === 'completed').length >= 4 
                          ? 'text-green-500' 
                          : 'text-gray-400'
                      }`} />
                      4 proyectos finales
                    </span>
                    <span className={
                      classes.filter(c => c.type === 'proyecto' && c.status === 'completed').length >= 4 
                        ? 'text-green-500 font-medium' 
                        : ''
                    }>
                      {classes.filter(c => c.type === 'proyecto' && c.status === 'completed').length}/4
                    </span>
                  </div>
                </div>
                
                {completedClasses >= 20 && totalPoints >= 600 && (
                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition">
                    ¡Desbloquear Nivel {level + 1}!
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            {level > 1 && (
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-500/20 hover:bg-blue-500/10 transition">
                <ChevronLeft className="w-5 h-5" />
                Nivel {level - 1}
              </button>
            )}
            
            {level < currentCourse.totalLevels && (
              <button 
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                  completedClasses >= 20 && totalPoints >= 600
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!(completedClasses >= 20 && totalPoints >= 600)}
              >
                Nivel {level + 1}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelPage;