import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import DevOpsSection from './components/DevOpsSection.jsx'
import Timeline from './components/Timeline.jsx'
import GithubSection from './components/GithubSection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevOpsSection />
        <Timeline />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
