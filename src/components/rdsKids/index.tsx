"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from 'next/link';
import {
  Gamepad2,
  Code,
  BookOpen,
  CheckCircle,
  Upload,
  FileText,
  Trophy,
  BarChart,
  Users,
  ChevronRight,
  Calendar,
  Award,
  GraduationCap,
  User,
  Sparkles,
  Target
} from 'lucide-react';

const RDSKidsEducation = () => {
  const [activeTab, setActiveTab] = useState("cursos");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  const studentData = {
    name: "Ana López",
    role: "Estudiante",
    progress: 65,
    level: "Intermedio",
    streak: 12,
    totalClasses: 45,
    completedLevels: 2
  };

  const courses = [
    {
      id: 1,
      title: "Roblox Studio",
      icon: Gamepad2,
      tagline: "Desarrollo de juegos con Lua",
      levels: [
        { 
          id: "r1", 
          name: "Nivel Básico", 
          classesCompleted: 15, 
          totalClasses: 20,
          description: "Fundamentos de Roblox Studio y scripting básico"
        },
        { 
          id: "r2", 
          name: "Nivel Intermedio", 
          classesCompleted: 8, 
          totalClasses: 20,
          description: "Mecánicas avanzadas y multiplayer"
        },
        { 
          id: "r3", 
          name: "Nivel Avanzado", 
          classesCompleted: 0, 
          totalClasses: 20,
          description: "Optimización y publicación de juegos"
        }
      ],
      color: "from-purple-500 to-pink-500",
      totalLessons: 60
    },
    {
      id: 2,
      title: "Scratch",
      icon: Code,
      tagline: "Programación visual para niños",
      levels: [
        { 
          id: "s1", 
          name: "Nivel 1", 
          classesCompleted: 20, 
          totalClasses: 20,
          description: "Lógica básica y animaciones"
        },
        { 
          id: "s2", 
          name: "Nivel 2", 
          classesCompleted: 5, 
         totalClasses: 20,
         description: "Juegos interactivos y variables"
        },
      ],
      color: "from-blue-500 to-cyan-400",
      totalLessons: 40
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Crear un Objeto 3D en Roblox",
      course: "Roblox - Nivel Básico",
      dueDate: "2024-12-15",
      status: "entregado",
      grade: 4.8,
      teacher: "Prof. Carlos",
      teacherComment: "Excelente trabajo de modelado. El diseño es muy creativo.",
      studentWork: "modelo_3d.png"
    },
    {
      id: 2,
      title: "Script de Movimiento para Personaje",
      course: "Roblox - Nivel Intermedio",
      dueDate: "2024-12-18",
      status: "pendiente",
      grade: null,
      teacher: "Prof. María",
      description: "Implementa movimiento fluido con WASD"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Completaste Nivel 1 de Scratch",
      description: "20 clases finalizadas",
      icon: Trophy,
      color: "text-yellow-500",
      date: "2024-11-30"
    },
    {
      id: 2,
      title: "Racha de 12 días",
      description: "¡Asistencia perfecta!",
      icon: Sparkles,
      color: "text-green-500",
      date: "2024-12-11"
    }
  ];

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";

  const titleClass = currentTheme === "dark"
    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
    : "text-[#355CFF]";

  return (
    <section id="education" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0a0a1a]">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sistema Educativo
            <br />
            <span className={titleClass}>RDS Kids</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprende programación de manera estructurada. Cada curso tiene clases organizadas en diferentes niveles.
          </p>
        </div>

        {/* Banner Header */}
        <div className="relative mb-12">
          <Image
            src="/images/Who/BannerPC.jpeg"
            alt="RDS Kids Educación"
            width={1920}
            height={200}
            className="w-full h-[120px] object-cover rounded-xl opacity-20 fade-all-edges"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
                ¡Bienvenido al Futuro del Aprendizaje!
              </h2>
              <p className="text-blue-200 text-lg">
                Cada paso cuenta. Cada código enseña.
              </p>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* User Profile Card - CORREGIDO */}
          <div className="lg:col-span-1">
            <div className="group relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-[#181a2a]"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{studentData.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {studentData.role}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    {studentData.level}
                  </span>
                </div>
                
                <div className="w-full space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progreso Total</span>
                      <span>{studentData.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${studentData.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-lg bg-blue-500/5">
                      <p className="text-2xl font-bold">{studentData.streak}</p>
                      <p className="text-sm text-gray-500">Días seguidos</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-purple-500/5">
                      <p className="text-2xl font-bold">{studentData.totalClasses}</p>
                      <p className="text-sm text-gray-500">Clases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto mb-8 pb-2">
              {[
                { id: "cursos", label: "Mis Cursos", icon: BookOpen },
                { id: "tareas", label: "Tareas", icon: FileText },
                { id: "progreso", label: "Progreso", icon: BarChart },
                { id: "logros", label: "Logros", icon: Trophy }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-medium text-lg whitespace-nowrap transition-all relative ${
                    activeTab === tab.id
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Courses Section - CORREGIDO */}
            {activeTab === "cursos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={course.id === 1 ? "/roblox" : "/scratch"}
                    className="group relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
                      style={{
                        filter: "blur(30px)",
                        background: "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${course.color}`}>
                          <course.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{course.tagline}</p>
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>

                      {/* Levels Progress */}
                      <div className="space-y-4">
                        {course.levels.map((level) => (
                          <div key={level.id} className="group/level">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">{level.name}</h4>
                              <span className="text-sm font-medium">
                                {level.classesCompleted}/{level.totalClasses} clases
                              </span>
                            </div>
                            
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700"
                                style={{
                                  width: `${(level.classesCompleted / level.totalClasses) * 100}%`
                                }}
                              />
                            </div>
                            
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {level.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Total Course Progress */}
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Curso completo: {course.totalLessons} clases</span>
                          <span>
                            {course.levels.reduce((acc, level) => acc + level.classesCompleted, 0)}/{course.totalLessons}
                          </span>
                        </div>
                      </div>

                      {/* Ver curso completo button - MOVIDO AQUÍ */}
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 font-medium">
                          Ver curso completo
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Resto del código permanece igual... */}
            {/* ... (assignments, achievements, teacher panel, CTA) ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RDSKidsEducation;