import React from 'react'
import './slider.css'

const techStack = [
  {
    name: 'Kotlin',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  },
  {
    name: 'Swift',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Dart',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
]

const Slider = () => {
  const doubled = [...techStack, ...techStack]
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <img src={item.logo} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
