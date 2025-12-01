import Header from "@/components/layout/Header";
import StarBackground from "@/components/effects/StarBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
// import Research from "@/components/sections/Research";
import Experience from "@/components/sections/Experience";
import Awards from "@/components/sections/Awards";
import Articles from "@/components/sections/Articles";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Research /> */}
      <Experience />
      <Awards />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
