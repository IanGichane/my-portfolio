import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import About from "@/components/sections/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";


export default function Home() {

  return (
    <div className="bg-slate-50">
      <Hero  id='about'  />
      {/* <About   /> */}
      <TechStack/>
      {/* <Projects id='projects' />
      <Blog id='blog' /> */}
      {/* <Contact id='contact' /> */}

    </div>
  );
}
