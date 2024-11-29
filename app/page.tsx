import { frank, inter } from "@/lib/fonts";
import Card from "@/src/components/home/Card";
import Hero from "@/src/components/home/Hero";
import NavBar from "@/src/components/home/NavBar";
import {proyects} from "../lib/data";

export default function Home() {
  return (
    <main className={`${inter.variable} ${frank.variable}`}>
      <div className="bg-background w-full h-screen">
        {/* <FloatingNav navItems={navItems} /> */}
        <NavBar/>
        <Hero />
        <div className="mb-96">
          {
            proyects.map((project, index) =>{
              return <Card key={index} i={index} {...project}/>
            })
          }
        </div>
        
      </div>
    </main>
  );
}
