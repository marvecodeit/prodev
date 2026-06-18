import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Senior Software Engineer</span>
          <h1 className="hero-name">
            Promise<br />Ochornma
          </h1>
          <p className="hero-stack">Mobile (iOS · Android) · Backend</p>
          <p className="hero-bio">
            Over 10 years building high-performance mobile applications for
            Android and iOS, deployed to users globally. I specialize in Swift,
            Kotlin, Flutter, and Node.js — with a focus on clean architecture
            and engineering excellence.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-primary">View Experience</a>
            <a href="#contact" className="cta-outline">Get in Touch</a>
          </div>
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/promise-ochornma"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="social-sep" />
            <a href="mailto:ochornmapromise@gmail.com">
              ochornmapromise@gmail.com
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img src="/profile.webp" alt="Promise Ochornma" />
            <div className="hero-status">
              <span className="status-dot" />
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
