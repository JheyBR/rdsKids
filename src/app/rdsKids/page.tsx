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
  Star,
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
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

const toggleCourse = (courseId:number) => {
  setExpandedCourse(expandedCourse === courseId ? null : courseId);
};
  
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

     const floatingElements = [
    { icon: Star, className: "top-20 left-[10%] text-yellow-300 animate-bounce", size: 24 },
    { icon: Rocket, className: "bottom-20 right-[10%] text-blue-300 animate-pulse", size: 32 },
    { icon: Gamepad2, className: "top-40 right-[15%] text-purple-300 animate-spin-slow", size: 28 },
    { icon: Star, className: "bottom-40 left-[5%] text-pink-300 animate-float", size: 20 },
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden  bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      <div className="container max-w-7xl mx-auto px-6 bg-transparent relative z-10">

      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.className} opacity-50 z-0 hidden sm:block`}
        >
          <element.icon size={element.size} />
        </div>
      ))}

      {/* Fondo de estrellas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
        
        {/* Header con botón de logout */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold"></h1>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🎮 ¡Hola, 
            <span className={titleClass}> {studentData.name}! </span>
          </h2>
        </div>

        {/* Banner Header */}
        <div className="relative mb-5">
          <Image
            src="/images/Who/BannerPC.jpeg"
            alt="RDS Kids Educación"
            width={1920}
            height={200}
            className="w-full h-[120px] object-cover rounded-xl opacity-20 fade-all-edges"
            priority
          />
          
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

              {/* LOGO - SIEMPRE VISIBLE */}
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

              {/* TEXTO - SOLO DESKTOP */}
              <div className="hidden md:flex items-center justify-center">
                <div className="ml-10">
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

        
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <div className="group relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6 hover:shadow-xl transition-all duration-300">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">

                {/* USER */}
                <div className="flex items-center gap-4 justify-center md:justify-start">

                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{studentData.name}</h3>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
                        {studentData.role}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium">
                        {studentData.level}
                      </span>
                    </div>
                  </div>

                </div>

                {/* PROGRESS AREA */}
                <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Progreso Total</span>
                      <span className="font-semibold">{studentData.progress}%</span>
                    </div>

                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${studentData.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Active Courses */}
                  <div className="grid grid-cols-2 md:col-span-2 lg:col-span-2 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-center">
                    <p className="text-xl text-gray-100">Cursos Activos</p>
                    <p className="text-2xl font-bold">{studentData.totalClasses}</p>
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
                //{ id: "tareas", label: "Tareas", icon: FileText },
                //{ id: "logros", label: "Logros", icon: Trophy }
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="group relative rounded-xl border border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 p-6 hover:shadow-xl transition-all duration-300"
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
                        <Link
                          href={course.id === 1 ? "/roblox" : course.id === 2 ? "/scratch" : "/pygame"}
                        >
                          <ChevronRight className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer" />
                        </Link>
                      </div>

                      {expandedCourse === course.id && (
                      <div className="space-y-4 mt-4 animate-fadeIn">
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
                      )}
                      
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
                        
                        <Link
                            href={course.id === 1 ? "/roblox" : course.id === 2 ? "/scratch" : "/pygame"}
                          >
                            <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
                              <GraduationCap className="w-5 h-5" />
                              Ingresar al curso
                            </button>
                          </Link>
                        
                        
                        <button
                          onClick={() => toggleCourse(course.id)}
                          className="mt-4 w-full text-center py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-medium transition-all"
                        >
                          {expandedCourse === course.id ? "Ver menos ▲" : "Ver más ▼"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sección de Tareas 
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
            )}*/}

            {/* Sección de Logros 
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
            )}*/}
          </div>
        
      </div>
    </section>
  );
};

export default RDSKidsEducation;