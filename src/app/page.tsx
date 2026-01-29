import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";
import { Experience } from "./sections/experience";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
