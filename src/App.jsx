import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Slider from './components/slider'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Whatsapp from './components/Whatsapp'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <Experience />
        </div>
        <Slider />
        <div id="stack">
          <Stack />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Whatsapp />
      <footer className="site-footer">
        <div className="footer-inner">
          <span>Promise Ochornma</span>
          <span className="footer-sep">·</span>
          <span>Senior Software Engineer</span>
          <span className="footer-sep">·</span>
          <a
            href="https://www.linkedin.com/in/promise-ochornma"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer-sep">·</span>
          <a href="mailto:ochornmapromise@gmail.com">Email</a>
        </div>
        <p className="footer-copy">© 2026 Prodevs Software Consult. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
