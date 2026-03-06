//src/app/rdsKids/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RDSKidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    
    if (!isAuthenticated) {
      // Redirigir al login si no está autenticado
      router.push("/iniciar-sesion");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
}