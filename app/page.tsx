import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import CompetitiveProgramming from "@/components/competitive-programming"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      <CustomCursor />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <CompetitiveProgramming />
      <Contact />
      <Footer />
    </main>
  )
}
