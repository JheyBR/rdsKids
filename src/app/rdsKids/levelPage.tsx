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
  Image as ImageIcon,
  Upload,
  X,
  File,
  Check
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

// Modal component for file upload
const UploadModal = ({ isOpen, onClose, classItem, onUpload }: { 
  isOpen: boolean; 
  onClose: () => void; 
  classItem: ClassItem | null;
  onUpload: (file: File) => void;
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  if (!isOpen || !classItem) return null;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true);
      // Simular carga de archivo
      setTimeout(() => {
        setUploading(false);
        setUploaded(true);
        onUpload(selectedFile);
        // Cerrar modal después de 1.5 segundos
        setTimeout(() => {
          onClose();
          setSelectedFile(null);
          setUploaded(false);
        }, 1500);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#1a1a2a] border border-blue-500/40 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold">Subir Tarea</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Clase:</p>
            <p className="font-semibold">{classItem.title}</p>
          </div>

          {!uploaded ? (
            <>
              {/* File Upload Area */}
              <div className="mb-6">
                <label 
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-blue-500/30 rounded-lg cursor-pointer hover:border-blue-500/50 transition group"
                >
                  <Upload className="w-8 h-8 text-blue-500 mb-2 group-hover:scale-110 transition" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {selectedFile ? selectedFile.name : 'Seleccionar archivo'}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    PDF, imagen o .zip (max 10MB)
                  </span>
                  <input 
                    id="file-upload"
                    type="file" 
                    className="hidden" 
                    onChange={handleFileSelect}
                    accept=".pdf,.jpg,.jpeg,.png,.zip"
                  />
                </label>
              </div>

              {/* Selected File Info */}
              {selectedFile && (
                <div className="mb-6 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                  <div className="flex items-center gap-3">
                    <File className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium truncate">{selectedFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploading}
                  className={`flex-1 py-2 rounded-lg font-medium transition ${
                    !selectedFile || uploading
                      ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90'
                  }`}
                >
                  {uploading ? 'Subiendo...' : 'Enviar'}
                </button>
              </div>
            </>
          ) : (
            // Success Message
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-lg font-bold mb-2">¡Tarea enviada!</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tu archivo ha sido subido correctamente
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LevelPage = ({ course, level, levelName }: LevelPageProps) => {
  const { theme } = useTheme();
  const router = useRouter();
  const [activeClass, setActiveClass] = useState<number>(1);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedClassForUpload, setSelectedClassForUpload] = useState<ClassItem | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<Record<number, boolean>>({});
  
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
      totalLevels: 3,
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
    duration: "60 min",
    type: getClassType(course, i + 1),
    status: getClassStatus(i + 1),
    points: calculatePoints(course, i + 1),
    resources: ['Taller'],
    projectUrl: i === 19 ? `/projects/${course}/final` : undefined
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
      "¿Qué es programar?",
      "Variables y tipos de datos",
      "Entrada de datos",
      "Operaciones matemáticas",
      "Condicionales",
      "Bucles while",
      "Bucles for",
      "Funciones",
      "Mini proyecto consola",
      "Introducción a Pygame",
      "Crear ventana",
      "Dibujar en pantalla",
      "Movimiento de objetos",
      "Control con teclado",
      "Colisiones",
      "Sistema de puntuación",
      "Sistema de vidas",
      "Sprites e imágenes",
      "Mini juego completo",
      "Presentación del juego"
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
        "Entiende qué es programar con actividades divertidas",
        "Aprende a usar variables para guardar información",
        "Pide datos al usuario con input()",
        "Realiza operaciones matemáticas básicas",
        "Toma decisiones con if/else",
        "Repite acciones con bucles while",
        "Repite acciones con bucles for",
        "Crea tus propias funciones",
        "Crea un programa de consola interactivo",
        "Instala Pygame y crea tu primera ventana",
        "Dibuja formas y usa colores",
        "Mueve objetos por la pantalla",
        "Controla objetos con el teclado",
        "Detecta cuando los objetos chocan",
        "Crea un sistema de puntuación",
        "Añade vidas a tu personaje",
        "Trabaja con imágenes y sprites",
        "Añade efectos de sonido",
        "Desarrolla un juego completo",
        "Presenta tu juego y compártelo"
      ]
    };

    const descArray = descriptions[course];
    return descArray[classNum - 1] || `Descripción de la clase ${classNum}`;
  }

  function getClassType(course: string, classNum: number): 'video' | 'taller' | 'proyecto' {
    if (classNum % 5 === 0) return 'proyecto';
    if (classNum % 2 === 0) return 'taller';
    return 'video';
  }

  function getClassStatus(classNum: number): 'completed' | 'current' | 'locked' {
    const completedClasses = 8;
    
    if (classNum <= completedClasses) return 'completed';
    if (classNum === completedClasses + 1) return 'current';
    return 'locked';
  }

  function calculatePoints(course: string, classNum: number): number {
    if (classNum % 5 === 0) return 50;
    if (classNum % 2 === 0) return 30;
    return 20;
  }

  const handleUploadClick = (classItem: ClassItem) => {
    setSelectedClassForUpload(classItem);
    setUploadModalOpen(true);
  };

  const handleFileUpload = (file: File) => {
    if (selectedClassForUpload) {
      setUploadedFiles(prev => ({
        ...prev,
        [selectedClassForUpload.id]: true
      }));
      console.log(`Archivo subido para clase ${selectedClassForUpload.id}:`, file.name);
    }
  };

  const completedClasses = classes.filter(c => c.status === 'completed').length;
  const totalPoints = classes.reduce((sum, c) => c.status === 'completed' ? sum + c.points : sum, 0);
  const progressPercentage = (completedClasses / 20) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0a0a1a] py-8">
      {/* Upload Modal */}
      <UploadModal 
        isOpen={uploadModalOpen}
        onClose={() => {
          setUploadModalOpen(false);
          setSelectedClassForUpload(null);
        }}
        classItem={selectedClassForUpload}
        onUpload={handleFileUpload}
      />

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
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          
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

                  {/* Action Buttons */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {/* Main Action Button */}
                    <button
                      className={`w-full py-3 rounded-lg font-medium transition-all mb-3 ${
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

                    {/* Upload Button - Only for unlocked classes */}
                    {classItem.status !== 'locked' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUploadClick(classItem);
                        }}
                        className={`w-full py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                          uploadedFiles[classItem.id]
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30'
                            : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 hover:bg-blue-500/20'
                        }`}
                      >
                        <Upload className="w-4 h-4" />
                        {uploadedFiles[classItem.id] ? 'Tarea subida ✓' : 'Subir tarea'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            {level > 1 && (
              <button 
                onClick={() => router.push(`/${course}/level-${level - 1}`)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-500/20 hover:bg-blue-500/10 transition"
              >
                <ChevronLeft className="w-5 h-5" />
                Nivel {level - 1}
              </button>
            )}
            
            {level < currentCourse.totalLevels && (
              <button 
                onClick={() => {
                  if (completedClasses >= 20 && totalPoints >= 600) {
                    router.push(`/${course}/level-${level + 1}`);
                  }
                }}
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