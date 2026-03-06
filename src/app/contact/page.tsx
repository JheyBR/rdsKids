import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hablemos de tu siguiente decisión tecnológica"
        description="No vendemos soluciones genéricas. Te ayudamos a elegir el camino correcto antes de invertir tiempo y dinero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
