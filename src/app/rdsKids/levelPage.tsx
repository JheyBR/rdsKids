//app/rdsKids/levelPage.tsx
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
  BarChart3,
  Rocket,
  Zap,
  Shield,
  Heart,
  Music,
  Image as ImageIcon
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
  course: 'roblox' | 'scratch' | 'pygame';
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
    },
    pygame: {
      title: "Python + Pygame",
      icon: Rocket,
      color: "from-yellow-500 to-orange-600",
      totalLevels: 4,
      description: "Programación con Python y creación de juegos"
    }
  };

  const currentCourse = courseInfo[course];
  const Icon = currentCourse.icon;

  // Datos de ejemplo para 20 clases
  const classes: ClassItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Clase ${i + 1}: ${getClassTitle(course, level, i + 1)}`,
    description: getClassDescription(course, level, i + 1),
    duration: "60 min", // Todas las clases de Pygame son de 60 minutos
    type: getClassType(course, i + 1),
    status: getClassStatus(i + 1),
    points: calculatePoints(course, i + 1),
    resources: getResourcesForClass(course, i + 1),
    projectUrl: i === 19 ? `/projects/${course}/final` : undefined // Clase 20 es proyecto final
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

    const pygameTitles = [
      // FASE 1 – Fundamentos de Python (Clases 1–5)
      "¿Qué es programar? - Introducción a Python",
      "Entrada de datos y matemáticas",
      "Condicionales - Tomando decisiones",
      "Bucles - Repetir acciones",
      "Funciones - Creando nuestros propios comandos",
      
      // FASE 2 – Introducción a Pygame (Clases 6–10)
      "Primera ventana con Pygame",
      "Dibujar en pantalla",
      "Movimiento de objetos",
      "Control por teclado",
      "Detección de colisiones",
      
      // FASE 3 – Construcción del Juego (Clases 11–17)
      "Estructura del juego",
      "Velocidad y dificultad",
      "Sistema de puntuación",
      "Sistema de vidas",
      "Efectos de sonido",
      "Sprites e imágenes",
      "Pantalla de inicio y reinicio",
      
      // FASE 4 – Proyecto Final (Clases 18–20)
      "Diseño del juego en papel",
      "Desarrollo del juego",
      "🎮 Feria tecnológica - Presentación final"
    ];

    const titles = course === 'roblox' ? robloxTitles : course === 'scratch' ? scratchTitles : pygameTitles;
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
      ],
      pygame: [
        // FASE 1
        "Entiende qué es programar con actividades divertidas de robot y tu primer código en Python",
        "Aprende a pedir datos al usuario y hacer cálculos matemáticos como una calculadora gamer",
        "Descubre cómo tomar decisiones con condicionales y crea un juego de adivinar números",
        "Domina los bucles para repetir acciones y crear contadores para niveles",
        "Crea tus propias funciones para tener poderes especiales en tu juego",
        
        // FASE 2
        "Crea tu primera ventana de juego con Pygame y entiende el bucle principal del juego",
        "Aprende a dibujar formas, usar colores y coordenadas para crear tu personaje",
        "Haz que los objetos cobren vida y se muevan por la pantalla",
        "Controla tu personaje con las teclas del teclado",
        "Detecta cuando los objetos chocan y crea un juego de recoger monedas",
        
        // FASE 3
        "Organiza tu código con la estructura profesional de juegos",
        "Ajusta la velocidad del juego y crea niveles de dificultad",
        "Implementa un sistema de puntuación que cuenta tus logros",
        "Añade vidas a tu personaje para hacer el juego más emocionante",
        "Incorpora música y efectos de sonido a tu juego",
        "Trabaja con imágenes y sprites para darle vida a tu juego",
        "Crea una pantalla de inicio y permite reiniciar el juego",
        
        // FASE 4
        "Diseña tu propio juego en papel: personajes, reglas y mecánicas",
        "Programa tu juego completo aplicando todo lo aprendido",
        "Presenta tu creación en la feria tecnológica y comparte con amigos"
      ]
    };

    const descArray = descriptions[course];
    return descArray[classNum - 1] || `Descripción de la clase ${classNum}`;
  }

  function getClassType(course: string, classNum: number): 'video' | 'taller' | 'proyecto' {
    if (course === 'pygame') {
      if (classNum === 20) return 'proyecto'; // Feria tecnológica
      if (classNum % 5 === 0 || classNum === 17) return 'taller'; // Mini retos y proyectos
      return 'video';
    }
    
    // Comportamiento original para otros cursos
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

  function calculatePoints(course: string, classNum: number): number {
    if (course === 'pygame') {
      if (classNum === 20) return 100; // Proyecto final
      if (classNum % 5 === 0) return 40; // Talleres importantes
      return 25; // Clases regulares
    }
    
    // Puntos originales para otros cursos
    if (classNum % 5 === 0) return 50;
    if (classNum % 2 === 0) return 30;
    return 20;
  }

  function getResourcesForClass(course: string, classNum: number): string[] {
    if (course === 'pygame') {
      const resources = ['Video', 'Código ejemplo'];
      
      // Añadir recursos específicos según la clase
      if (classNum <= 5) {
        resources.push('Ejercicios Python');
      } else if (classNum <= 10) {
        resources.push('Plantilla Pygame');
      } else if (classNum <= 17) {
        resources.push('Assets del juego');
      } else {
        resources.push('Guía del proyecto');
      }
      
      return resources;
    }
    
    return ['Archivo', 'Presentación  '];
  }

  const completedClasses = classes.filter(c => c.status === 'completed').length;
  const totalPoints = classes.reduce((sum, c) => c.status === 'completed' ? sum + c.points : sum, 0);
  const progressPercentage = (completedClasses / 20) * 100;

  // Función para obtener el nombre de la fase según el curso
  const getPhaseName = (course: string, classNum: number): string => {
    if (course !== 'pygame') return '';
    
    if (classNum <= 5) return 'Fase 1: Fundamentos de Python';
    if (classNum <= 10) return 'Fase 2: Introducción a Pygame';
    if (classNum <= 17) return 'Fase 3: Construcción del Juego';
    return 'Fase 4: Proyecto Final';
  };

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
                    {course === 'pygame' ? '4 fases • 20 clases • 60 min cada una' : `Nivel ${level} de ${currentCourse.totalLevels} • 20 clases`}
                  </p>
                  {course === 'pygame' && (
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                      {currentCourse.description}
                    </p>
                  )}
                </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-1  gap-8">
          
          {/* Class List */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Lista de Clases
              </h2>
              {course === 'pygame' && (
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm">
                    🐍 Fase 1: Python
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm">
                    🎮 Fase 2: Pygame
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm">
                    ⚙️ Fase 3: Desarrollo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm">
                    🏆 Fase 4: Proyecto
                  </span>
                </div>
              )}
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {course === 'pygame' 
                  ? 'Aprende Python desde cero y crea tus propios videojuegos con Pygame. ¡20 clases para convertirte en desarrollador de juegos!'
                  : 'Completa las 20 clases en orden para desbloquear el siguiente nivel.'}
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
                          {course === 'pygame' && (
                            <span className="inline-block text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mb-2">
                              {getPhaseName(course, classItem.id)}
                            </span>
                          )}
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
                          {classItem.type === 'taller' ? 'Taller práctico' : 'Proyecto'}
                           
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
                                Proyecto Final
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
                      {classItem.status === 'completed' && 'Repasar clase'}
                      {classItem.status === 'current' && 'Comenzar clase'}
                      {classItem.status === 'locked' && 'Bloqueado'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            {course !== 'pygame' && level > 1 && (
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-500/20 hover:bg-blue-500/10 transition">
                <ChevronLeft className="w-5 h-5" />
                Nivel {level - 1}
              </button>
            )}
            
            {course !== 'pygame' && level < currentCourse.totalLevels && (
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