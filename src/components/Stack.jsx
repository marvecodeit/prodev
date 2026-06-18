import React from 'react'
import './Stack.css'

const stacks = [
  {
    name: 'Kotlin',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    type: 'Android',
  },
  {
    name: 'Swift',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    type: 'iOS',
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    type: 'Cross-Platform',
  },
  {
    name: 'Dart',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    type: 'Language',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    type: 'Android',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    type: 'Backend',
  },
  {
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    type: 'Backend Framework',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    type: 'NoSQL Database',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    type: 'Cloud Services',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    type: 'SQL Database',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    type: 'Version Control',
  },
  {
    name: 'Postman',
    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    type: 'API Testing',
  },
]

const Stack = () => {
  return (
    <section className="stack-section">
      <div className="stack-inner">
        <span className="section-label">TECH STACK</span>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="stack-sub">
          From mobile engineering to backend systems — the tools and languages
          that power my development workflow.
        </p>

        <div className="stack-grid">
          {stacks.map((item, i) => (
            <div className="stack-card" key={i}>
              <div className="stack-icon">
                <img src={item.logo} alt={item.name} />
              </div>
              <div className="stack-info">
                <h4>{item.name}</h4>
                <span>{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
