import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
