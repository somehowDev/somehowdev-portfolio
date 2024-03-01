import AboutMe from "@/components/AboutMe/AboutMe";
import StrokeText from "@/components/StrokeText/StrokeText";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "black",
      }}
      className="main relative overflow-hidden"
    >
      <div id="aboutMe">
        <AboutMe />
      </div>
    </main>
  );
}
