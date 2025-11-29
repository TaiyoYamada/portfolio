import StarBackground from "@/components/StarBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Awards />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
