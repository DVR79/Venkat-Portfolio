import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ToolsMarquee from '@/components/ToolsMarquee';
import About from '@/components/About';
import ImpactStrip from '@/components/ImpactStrip';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ToolsMarquee />
        <About />
        <ImpactStrip />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
