import AboutMe from "@/components/AboutMe/AboutMe";
import StrokeText from "@/components/StrokeText/StrokeText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div id="aboutMe">
        <AboutMe />
      </div>
    </main>
  );
}
