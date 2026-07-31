import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Projects featured />
      <Footer />
    </main>
  );
}