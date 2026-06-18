import React from 'react'
import './Experience.css'

const experiences = [
  {
    id: 'bamboo',
    company: 'Invest Bamboo',
    role: 'Engineering Manager',
    period: '4 yrs 2 mos · Full-time',
    img: '/bamboo.webp',
    points: [
      "Led the mobile development team for Africa's leading investment platform.",
      'Redesigned the user acquisition flow, significantly reducing drop-off rates.',
      'Led migration from native Kotlin & Swift to Flutter for a unified codebase.',
      'Developed Coins by Bamboo — a cross-border remittance application.',
      'Diagnosed and resolved performance bottlenecks across the product.',
    ],
  },
  {
    id: 'misan',
    company: 'Misan by Bamboo',
    role: 'Engineering Manager',
    period: '1 yr · Full-time',
    img: '/misan.webp',
    points: [
      'Led mobile engineering from product inception.',
      'Translated complex UI designs into pixel-accurate implementations.',
      'Maintained code quality standards and resolved critical production issues.',
    ],
  },
  {
    id: 'dclm',
    company: 'DCLM — Deeper Life Bible Church',
    role: 'Senior Software Engineer',
    period: '9 yrs 4 mos · Volunteer',
    img: '/dclm.webp',
    points: [
      'Developed and maintained native Android and iOS mobile applications.',
      'Localized applications for Francophone countries.',
      'Optimized apps across TV, Wear OS, and mobile form factors.',
      'Integrated REST APIs and Firebase services throughout the product.',
      'Managed end-to-end deployments to App Store and Google Play.',
    ],
  },
  {
    id: 'gig',
    company: 'GIG Logistics',
    role: 'Lead Mobile Developer',
    period: '1 yr 1 mo · Full-time',
    img: '/gig.webp',
    points: [
      'Introduced unit and instrumentation testing practices across the team.',
      'Built new features for the customer-facing mobile application.',
      'Integrated seamless payment systems.',
      'Debugged and significantly improved application performance.',
    ],
  },
  {
    id: 'sokash',
    company: 'Sokash Loans',
    role: 'Lead Mobile Developer',
    period: '1 yr · Full-time',
    img: '/sokach.webp',
    points: [
      'Built the iOS version of the Sokash lending application from scratch.',
      'Implemented secure payment integrations.',
      'Applied RxSwift, Realm, and KeyChain for reactive and secure data handling.',
      'Implemented certificate pinning for API security.',
    ],
  },
  {
    id: 'life-press',
    company: 'Life Press Ltd',
    role: 'Mobile Developer',
    period: '2 yrs · Full-time',
    img: '/radio.webp',
    points: [
      'Migrated Android application codebase from Java to Kotlin.',
      'Built the iOS version of the application.',
      'Developed RESTful APIs using Node.js and Express.',
      'Integrated payment systems and media player functionality.',
    ],
  },
]

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-inner">
        <span className="section-label">EXPERIENCE</span>
        <h2 className="section-title">Where I've built things that matter</h2>
        <p className="experience-sub">
          A decade of engineering across finance, logistics, media, and non-profit
          platforms — leading teams and shipping products used by millions.
        </p>

        <div className="exp-list">
          {experiences.map(exp => (
            <div className="exp-card" key={exp.id}>
              <div className="exp-logo">
                <img src={exp.img} alt={exp.company} />
              </div>
              <div className="exp-body">
                <div className="exp-header">
                  <div className="exp-title-block">
                    <h3>{exp.company}</h3>
                    <span className="exp-role">{exp.role}</span>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
