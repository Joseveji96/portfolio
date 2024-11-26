import Hero from "@/components/home/Hero";
import NavBar from "@/components/home/NavBar";
import { frank, inter } from "@/lib/fonts";

export default function Home() {
  return (
    <main className={`${inter.variable} ${frank.variable}`}>
      <div className="bg-background w-full h-screen">
        {/* <FloatingNav navItems={navItems} /> */}
        <NavBar/>
        <Hero />
      </div>
    </main>
  );
}
