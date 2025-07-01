import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import FloatingShapes from "@/components/floating-shapes";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 lg:px-8 xl:px-12">
      <Intro />
      <Projects />
      <FloatingShapes />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
