
import Hero from "@/components/Hero/index";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "RDS - Reliable Develoment Software",
  description: "Diseño y Desarrollo de Softawer y paginass WEB, SaaS",
  // other metadata
};

export default function Home() {
  return (
    <>
     
      <Hero />
      {/*<Who />   
      <Services />
      <Testimonials />
      <Team />*/}

    </>
  );
}
