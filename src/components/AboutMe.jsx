import React, { useState } from 'react'
import './AboutMe.css'

const TABS = ['About', 'Skills', 'Education']

const AboutMe = () => {
  const [active, setActive] = useState('About')

  return (
    <section className="about-section">
      <div className="about-inner">
        <span className="section-label">ABOUT ME</span>
        <h2 className="section-title">The person behind the code</h2>

        <div className="about-grid">
          <div className="about-left">
            <p>
              Mobile developer with over 10 years of experience in Android and iOS.
              I have built robust, engaging applications that serve users globally —
              localized in multiple international languages — with a sharp focus on
              performance, accessibility, and engineering best practices.
            </p>
            <p>
              I'm passionate about clean architecture, reusable code, and building
              products that genuinely improve how people live and work. From leading
              engineering teams to writing production code, I bring both technical
              depth and product thinking to every project.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <h3>10+</h3>
                <span>Years Engineering</span>
              </div>
              <div className="about-stat">
                <h3>6+</h3>
                <span>Companies</span>
              </div>
              <div className="about-stat">
                <h3>Global</h3>
                <span>User Base</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-tabs">
              {TABS.map(tab => (
                <button
                  key={tab}
                  className={`about-tab${active === tab ? ' active' : ''}`}
                  onClick={() => setActive(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="about-content">
              {active === 'About' && (
                <div className="about-text-block">
                  <p>
                    Engineering Manager and Senior Software Engineer with a background in
                    mobile and backend systems. I've led teams, architected products from
                    scratch, and contributed to apps used by millions globally.
                  </p>
                  <p>
                    My engineering philosophy: write code that is readable, maintainable,
                    and built to last — code that the next engineer can understand and
                    extend with confidence.
                  </p>
                </div>
              )}

              {active === 'Skills' && (
                <ul className="skills-list">
                  {[
                    'Android (Kotlin, Java) — Jetpack, Compose, Room, LiveData',
                    'iOS (Swift, SwiftUI) — UIKit, Alamofire, RxSwift',
                    'Flutter & Dart — cross-platform mobile development',
                    'RESTful APIs — Retrofit, Volley, Postman',
                    'Node.js, Express.js, MongoDB, SQL',
                    'Unit & Instrumentation Testing',
                    'Firebase — Auth, Firestore, Cloud Messaging',
                    'Dependency Injection — Hilt, Dagger, Koin',
                    'Git, CI/CD, App Store & Play Store deployment',
                    'Performance optimization & accessibility',
                  ].map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              )}

              {active === 'Education' && (
                <div className="edu-list">
                  <div className="edu-item">
                    <h4>Nexford University</h4>
                    <p>Master of Business Administration (MBA)</p>
                    <time>May 2023 – Oct 2025</time>
                  </div>
                  <div className="edu-item">
                    <h4>University of Benin</h4>
                    <p>M.Eng, Mechanical Engineering</p>
                    <small>
                      Specialized in analysis of Thermal Power Plants using
                      Nigeria Power Station as Case Study
                    </small>
                    <time>2013 – 2015</time>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
