//src/app/iniciar-sesion/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Star, Rocket, Gamepad2 } from "lucide-react";
import LogoOficialSigla from "@/components/Componentes/LogoOficialSigla";

const IniciarSesion = () => {

  useEffect(() => {
    // Ocultar footer cuando la página de login se monte
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }
    
    // Restaurar footer cuando la página se desmonte
    return () => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.display = 'block';
      }
    };
  }, []);

  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "dark";
  const color2 = currentTheme === "dark" ? "#ffffff" : "#0400FD";
  const color3 = currentTheme === "dark" ? "#ffffff" : "#103E94";

  // Credenciales de demostración
  const demoCredentials = {
    email: "estudiante@rdskids.com",
    password: "rds123"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: ""
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "✉️ El correo electrónico es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "🔍 Ups! Escribe un correo válido";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "🔒 La contraseña es requerida";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "🎮 La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (formData.email === demoCredentials.email && formData.password === demoCredentials.password) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userName", "Ana López");
        
        router.push("/rdsKids");
      } else {
        setErrors({
          email: "😕 Credenciales incorrectas. ¿Quieres probar la cuenta demo?",
          password: "😕 Credenciales incorrectas"
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoAccess = () => {
    setFormData({
      email: demoCredentials.email,
      password: demoCredentials.password,
      rememberMe: false
    });
  };

  // Elementos flotantes decorativos
  const floatingElements = [
    { icon: Star, className: "top-20 left-[10%] text-yellow-300 animate-bounce", size: 24 },
    { icon: Rocket, className: "bottom-20 right-[10%] text-blue-300 animate-pulse", size: 32 },
    { icon: Gamepad2, className: "top-40 right-[15%] text-purple-300 animate-spin-slow", size: 28 },
    { icon: Star, className: "bottom-40 left-[5%] text-pink-300 animate-float", size: 20 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 overflow-hidden relative">
      
      {/* Elementos decorativos flotantes */}
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

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          
          
          <div className="block lg:hidden w-full mb-6">
            {/* Logo responsive para móvil */}
            <div className="relative h-[200px] w-full max-w-[400px] mx-auto">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[280px] sm:w-[320px] h-auto z-20">
                <div className="relative z-10">
                  <LogoOficialSigla color2={color2} color3={color3} />
                </div>
                <Image
                  src="/images/kids.png"
                  alt="RDS Kids Logo"
                  width={400}
                  height={200}
                  className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[200px] sm:w-[240px] z-20"
                  priority
                />
              </div>
            </div>
            
            {/* Mensaje corto para móvil */}
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                ¡Aprende jugando!
              </h2>
              <div className="flex justify-center gap-2 mt-2">
                {['🎮', '🚀', '🎨', '🤖'].map((emoji, i) => (
                  <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lado izquierdo - Versión desktop (oculto en móvil) */}
          <div className="hidden lg:block relative">
            {/* Logo principal con kids.png */}
            <div className="relative h-[500px] w-full">
              {/* Logo con sigla */}
              <div className="absolute top-12 left-20 md:left-0 lg:left-0 w-[370px] md:w-[510px] lg:w-[560px] h-auto z-20 transition-opacity duration-500">
                <div className="relative z-10">
                  <LogoOficialSigla color2={color2} color3={color3} />
                </div>
                <Image
                  src="/images/kids.png"
                  alt="RDS Kids Logo"
                  width={500}
                  height={250}
                  className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[300px] z-20"
                  priority
                />
              </div>
            </div>

            <div className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-700">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                ¡Aprende jugando!
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Roblox, Python, Scratch y mucho más diversión te espera
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {['🎮', '🚀', '🎨', '🤖'].map((emoji, i) => (
                  <span key={i} className="text-3xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario de login */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border-4 border-blue-300 dark:border-blue-700 relative overflow-hidden">
        
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-300 rounded-full opacity-20"></div>
              
              <div className="text-center mb-6 sm:mb-8 relative">
                <div className="flex justify-center gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl">🎮</span>
                  <span className="text-3xl sm:text-4xl">✨</span>
                  <span className="text-3xl sm:text-4xl">🚀</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  ¡Bienvenido!
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  Ingresa a tu aventura
                </p>
              </div>

             

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">📧</span> Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className={`w-full pl-10 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 ${
                        errors.email ? "border-red-400" : "border-blue-300 dark:border-blue-700"
                      } bg-white/80 dark:bg-gray-700/80 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base sm:text-lg transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-xs sm:text-sm text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded-xl">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Campo de contraseña con emoji */}
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">🔐</span> Contraseña Secreta
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full pl-10 pr-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 ${
                        errors.password ? "border-red-400" : "border-blue-300 dark:border-blue-700"
                      } bg-white/80 dark:bg-gray-700/80 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base sm:text-lg transition-all`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-xs sm:text-sm text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded-xl">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Recordar y olvidé contraseña 
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-blue-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      🐶 Recordarme
                    </span>
                  </label>
                  <Link
                    href="/recuperar-contrasena"
                    className="text-sm sm:text-base text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1"
                  >
                    <span>🔑</span> ¿Olvidaste la Contraseña?
                  </Link>
                </div>*/}

                {/* Botón de submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 sm:py-4 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border-2 border-white/50 shadow-lg transform hover:scale-105"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Cargando...
                    </>
                  ) : (
                    <>
                      ¡Comenzar Aventura!
                      <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                    </>
                  )}
                </button>
              </form>

              {/* Registro 
              <p className="mt-6 text-center text-sm sm:text-lg text-gray-600 dark:text-gray-400">
                🌟 ¿Nuevo por aquí?{" "}
                <Link
                  href="/registro"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-bold underline decoration-2"
                >
                  ¡Crea tu cuenta! 🦸
                </Link>
              </p>*/}

              {/* Credenciales de demo para móvil */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl sm:rounded-2xl border-2 border-yellow-300 block lg:hidden">
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">🎪</span>
                  <strong>Zona de prueba:</strong>
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-2 rounded-lg">
                    <span className="block text-xs text-gray-500">Usuario:</span>
                    <span className="font-mono text-xs break-all">estudiante@rdskids.com</span>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-2 rounded-lg">
                    <span className="block text-xs text-gray-500">Contraseña:</span>
                    <span className="font-mono text-xs">rds123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IniciarSesion;