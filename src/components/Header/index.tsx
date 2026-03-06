"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import LogoOficial from "../Componentes/LogoOficial";
import { useTheme } from "next-themes";
import { LogOut, User, LayoutDashboard, UserCircle, Settings } from "lucide-react";

const Header = () => {
  // Todos los useState deben estar al inicio, sin condiciones
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [authChecked, setAuthChecked] = useState(false); // Nuevo estado para saber si ya se verificó la autenticación
  
  const { theme } = useTheme();
  const pathname = usePathname();
  
  // Verificar si estamos en el dashboard
  const isDashboard = pathname?.includes("/rdsKids");
  
  // Efecto para verificar autenticación
  useEffect(() => {
    setMounted(true);
    // Verificar si el usuario está autenticado
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem("isAuthenticated") === "true";
      const name = localStorage.getItem("userName") || "";
      setIsAuthenticated(auth);
      setUserName(name);
      setAuthChecked(true); // Marcamos que ya se verificó la autenticación
    }
  }, [pathname]);

  // Efecto para el sticky navbar
  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  // Determinar colores basados en el tema
  const currentTheme = mounted ? theme : "dark";
  const color2 = currentTheme === "dark" ? "#ffffff" : "#0400FD";
  const color3 = currentTheme === "dark" ? "#ffffff" : "#103E94";

  // Filtrar los items del menú según autenticación
  const getFilteredMenuData = () => {
    // Si aún no se ha verificado la autenticación, mostrar solo Home
    if (!authChecked) {
      return menuData.filter(item => item.title === "Home");
    }
    
    if (isAuthenticated && isDashboard) {
      // En el dashboard, mostrar todas las opciones excepto "Iniciar Sesión"
      return menuData.filter(item => item.title !== "Iniciar Sesión");
    } else if (isAuthenticated) {
      // Usuario autenticado pero fuera del dashboard, mostrar Home
      return menuData.filter(item => item.title === "Home");
    } else {
      // Usuario no autenticado, mostrar Home e Iniciar Sesión
      return menuData.filter(item => 
        item.title === "Home" || item.title === "Iniciar Sesión"
      );
    }
  };

  const filteredMenuData = getFilteredMenuData();

  // Renderizado condicional después de todos los Hooks
  if (!mounted) {
    return (
      <header className="header top-0 left-0 z-40 flex w-full items-center absolute bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-35 max-w-full px-4 xl:mr-12">
              <Link href="/" className="header-logo block w-full py-1">
                <LogoOficial color2="#ffffff" color3="#ffffff" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-35 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-1 lg:py-1" : "py-1"
                } `}
              >
                <LogoOficial color2={color2} color3={color3} />
              </Link>
            </div>
            
            <div className="flex w-full justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {filteredMenuData.map((menuItem, index) => {
                      // Icono según el tipo de menú
                      const getIcon = () => {
                        switch(menuItem.title) {
                          case "Dashboard":
                            return <LayoutDashboard className="w-4 h-4 mr-1 inline-block" />;
                          case "Mi Perfil":
                            return <UserCircle className="w-4 h-4 mr-1 inline-block" />;
                          case "Configuración":
                            return <Settings className="w-4 h-4 mr-1 inline-block" />;
                          default:
                            return null;
                        }
                      };

                      return (
                        <li key={menuItem.id} className="group relative">
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-sm lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                pathname === menuItem.path
                                  ? "text-primary dark:text-white"
                                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              }`}
                            >
                              {getIcon()}
                              {menuItem.title}
                            </Link>
                          ) : (
                            // Aquí va la lógica para submenús si los tienes
                            null
                          )}
                        </li>
                      );
                    })}
                    
                    {/* Mostrar nombre de usuario SOLO cuando está autenticado Y authChecked es true */}
                    {authChecked && isAuthenticated && !isDashboard && (
                      <li className="hidden lg:flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <User className="w-4 h-4 mr-1" />
                        {userName || "Usuario"}
                      </li>
                    )}
                    
                    {/* Botón de cerrar sesión SOLO cuando está autenticado Y authChecked es true */}
                    {authChecked && isAuthenticated && (
                      <li className="group relative">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 py-2 text-sm lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-red-500 hover:text-red-600 dark:text-red-400 font-medium cursor-pointer transition-all duration-300 hover:scale-105"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Cerrar Sesión</span>
                        </button>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
              
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* Botón de Cerrar Sesión para móvil SOLO cuando está autenticado Y authChecked es true */}
                {authChecked && isAuthenticated && (
                  <button
                    onClick={handleLogout}
                    className="lg:hidden mr-3 p-2 text-red-500 hover:text-red-600 dark:text-red-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
                    aria-label="Cerrar sesión"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                )}
                
                <div>
                  <div></div>
                  {/*<ThemeToggler />*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;