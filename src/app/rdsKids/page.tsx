//app/rdsKids/index.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';
import LogoOficialSigla from "@/components/Componentes/LogoOficialSigla";
import {
  Gamepad2,
  Code,
  Rocket,
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
  Target,
  LogOut
} from 'lucide-react';

const RDSKidsEducation = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("cursos");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  // Obtener datos del usuario del localStorage
  const [studentData, setStudentData] = useState({
    name: "Ana López",
    role: "Estudiante",
    progress: 65,
    level: "Sexto B",
    totalClasses: 3, // Cambiado a 3 porque ahora hay 3 cursos
    completedLevels: 2
  });

  useEffect(() => {
    // Cargar datos del usuario al montar el componente
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    
    if (userName) {
      setStudentData(prev => ({
        ...prev,
        name: userName
      }));
    }
  }, []);

  // Función de logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    router.push("/");
  };

const courses = [
{
id:1,
title:"Roblox Studio",
icon:Gamepad2,
tagline:"Desarrollo de juegos con Lua",
levels:[
{
id:"r1",
name:"Nivel Básico",
classesCompleted:15,
totalClasses:20,
description:"Fundamentos de Roblox Studio y scripting básico"
},
{
id:"r2",
name:"Nivel Intermedio",
classesCompleted:8,
totalClasses:20,
description:"Mecánicas avanzadas y multiplayer"
},
{
id:"r3",
name:"Nivel Avanzado",
classesCompleted:0,
totalClasses:20,
description:"Optimización y publicación de juegos"
}
],
color:"from-purple-500 to-pink-500",
totalLessons:60
},

{
id:2,
title:"Scratch",
icon:Code,
tagline:"Programación visual para niños",
levels:[
{
id:"s1",
name:"Nivel Básico",
classesCompleted:20,
totalClasses:20,
description:"Lógica básica y animaciones"
},
{
id:"s2",
name:"Nivel Intermedio",
classesCompleted:5,
totalClasses:20,
description:"Juegos interactivos y variables"
},
{
id:"s3",
name:"Nivel Avanzado",
classesCompleted:0,
totalClasses:20,
description:"Proyectos complejos y programación avanzada"
}
],
color:"from-blue-500 to-cyan-400",
totalLessons:60
},

{
id:3,
title:"Python + Pygame",
icon:Rocket,
tagline:"Programación con Python y videojuegos",
levels:[
{
id:"p1",
name:"Nivel Básico",
classesCompleted:3,
totalClasses:20,
description:"Aprende Python desde cero y crea tus propios juegos"
},
{
id:"p2",
name:"Nivel Intermedio",
classesCompleted:0,
totalClasses:20,
description:"Desarrolla juegos más complejos con lógica avanzada"
},
{
id:"p3",
name:"Nivel Avanzado",
classesCompleted:0,
totalClasses:20,
description:"Crea juegos profesionales y optimiza tu código"
}
],
color:"from-yellow-500 to-orange-600",
totalLessons:60
}
]

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";
  const color2 = currentTheme === "dark" ? "#ffffff" : "#0400FD";
  const color3 = currentTheme === "dark" ? "#ffffff" : "#103E94";

  const titleClass = currentTheme === "dark"
    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
    : "text-[#355CFF]";

  return (
    <section id="education" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0a0a1a]">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header con botón de logout */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold"></h1>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🎮 ¡Hola, 
            <span className={titleClass}> {studentData.name}! </span>
          </h2>
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
            <div className="grid grid-cols-2 justify-center-safe items-center gap-4">
              
              <div className="ml-60 mt-[-50px] top-[-10px] left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[250px] h-auto">
                <div className="relative z-10">
                  <LogoOficialSigla color2={color2} color3={color3} />
                </div>
                <Image
                  src="/images/kids.png"
                  alt="RDS Kids Logo"
                  width={400}
                  height={200}
                  className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[120px] sm:w-[130px] z-20"
                  priority
                />
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
                  ¡Bienvenido a tu mundo, donde tu imaginación se hace código!
                </h2>
                <p className="text-blue-200 text-lg">
                  Cada paso cuenta. Cada código enseña.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* User Profile Card */}
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
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-center p-3 rounded-lg bg-purple-500/5">
                      <p className="text-2xl font-bold">{studentData.totalClasses}</p>
                      <p className="text-sm text-gray-500">Cursos</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center mt-5 gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Cerrar Sesión</span>
                </button>
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

            {/* Courses Section */}
            {activeTab === "cursos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={course.id === 1 ? "/roblox" : course.id === 2 ? "/scratch" : "/pygame"}
                    className="group relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
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

                      {/* Ver curso completo button */}
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

            {/* Sección de Tareas */}
            {activeTab === "tareas" && (
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="bg-white/80 dark:bg-[#181a2a]/80 rounded-xl p-6 border border-blue-500/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold">{assignment.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        assignment.status === 'entregado' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {assignment.status === 'entregado' ? '✅ Entregado' : '⏳ Pendiente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sección de Logros */}
            {activeTab === "logros" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white/80 dark:bg-[#181a2a]/80 rounded-xl p-4 border border-blue-500/40 flex items-center gap-4">
                    <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                    <div>
                      <h3 className="font-bold">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RDSKidsEducation;