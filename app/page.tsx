"use client"
import { frank, inter, dm } from "@/lib/fonts";
import Card from "@/src/components/home/Card";
// import Hero from "@/src/components/home/Hero";
import NavBar from "@/src/components/home/NavBar";
import {proyects} from "../lib/data";
import OverlaySection from "@/src/components/home/OverlaySection";
// import Parallax from "@/src/components/home/Parallax";


export default function Home() {
  
  return (
    <main className={`${inter.variable} ${frank.variable} ${dm.variable}`}>
      <div className="w-full h-screen">
        <NavBar/>
        <OverlaySection />
        <div className="mb-96">
          {proyects.map((project, index) => (
            <Card 
              key={project.id || index} 
              i={index} 
              {...project}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
