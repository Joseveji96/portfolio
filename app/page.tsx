import { frank, inter } from "@/lib/fonts";
import Card from "@/src/components/home/Card";
import Hero from "@/src/components/home/Hero";
import NavBar from "@/src/components/home/NavBar";

export default function Home() {
  return (
    <main className={`${inter.variable} ${frank.variable}`}>
      <div className="bg-background w-full h-screen">
        {/* <FloatingNav navItems={navItems} /> */}
        <NavBar/>
        <Hero />
        <Card/>
      </div>
    </main>
  );
}
