import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experience";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";


export default function Home() {
  return (
      <main className="">
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Experiences/>
          <Skills/>
          <Courses/>
          <Contact/>
      </main>
  );
}
