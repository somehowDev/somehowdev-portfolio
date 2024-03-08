import AboutMe from "@/components/AboutMe/AboutMe";
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
      <section id="projects" style={{ marginTop: "400px" }}>
        <div style={{ color: "white" }}>Projects</div>
      </section>
      <section id="guide-line">
        <div style={{ color: "white" }}>Guide line</div>
      </section>
    </main>
  );
}
