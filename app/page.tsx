import AboutMe from "@/components/AboutMe/AboutMe";
import GuideLine from "@/components/GuideLine/GuideLine";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import StrokeText from "@/components/StrokeText/StrokeText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="guide-line">
        <GuideLine />
      </section>
    </main>
  );
}
