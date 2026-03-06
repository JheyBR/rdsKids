// src/components/Header/menuData.tsx
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Iniciar Sesión",
    path: "/iniciar-sesion",
    newTab: false,
  },
 // {
 //   id: 3,
 //   title: "Mi Perfil",
 //   path: "/rdsKids/perfil",
 //   newTab: false,
 // },
 // {
 //   id: 4,
 //   title: "Configuración",
 //   path: "/rdsKids/configuracion",
 //   newTab: false,
 // },
];

export default menuData;