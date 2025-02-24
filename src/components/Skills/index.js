import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import { DynamicCloud } from './dynamic-cloud'
import './index.scss'

const slugs = [
  'autodesk',
  'css3',
  'csharp',
  'cplusplus',
  'dart',
  'express',
  'firebase',
  'flutter',
  'html5',
  'javascript',
  'jquery',
  'kotlin',
  // "matlab",
  'microsoftoffice',
  // "microsoftvisualbasic",
  'mongodb',
  'mysql',
  'nodedotjs',
  'npm',
  'adobephotoshop',
  'python',
  'react',
  // "scss",
  'solidity',
  'swift',
  'unity',
  // "xml"
  'yarn',
]

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Skills', ' ', '&', ' ', 'Experiences']}
              idx={15}
            />
          </h1>
          <div className="fade">
            <p align="LEFT">
              <h2 class="quote">"Jack Of All Trades, Master Of None"</h2>
            </p>
            <p>
              That would be how I would describe myself. Some experience in
              <span class="tech-tag"> AutoCAD</span>,
              <span class="tech-tag"> CSS</span>,
              <span class="tech-tag"> C#</span>,
              <span class="tech-tag"> C++</span>,
              <span class="tech-tag"> Dart</span>,
              <span class="tech-tag"> Express</span>,
              <span class="tech-tag"> Firebase</span>,
              <span class="tech-tag"> Flutter</span>,
              <span class="tech-tag"> HTML</span>,
              <span class="tech-tag"> JavaScript</span>,
              <span class="tech-tag"> jQuery</span>,
              <span class="tech-tag"> Kotlin</span>,
              <span class="tech-tag"> MATLAB</span>,
              <span class="tech-tag"> Microsoft Office</span>,
              <span class="tech-tag"> Microsoft Visual Basic</span>,
              <span class="tech-tag"> MongoDB</span>,
              <span class="tech-tag"> MySQL</span>,
              <span class="tech-tag"> Node.js</span>,
              <span class="tech-tag"> npm</span>,
              <span class="tech-tag"> Photoshop</span>,
              <span class="tech-tag"> Python</span>,
              <span class="tech-tag"> React</span>,
              <span class="tech-tag"> SCSS</span>,
              <span class="tech-tag"> Solidity</span>,
              <span class="tech-tag"> SwiftUI</span>,
              <span class="tech-tag"> Unity 2D</span>,
              <span class="tech-tag"> XML</span>, and
              <span class="tech-tag"> Yarn</span>.
            </p>
            <p>
              I have exposed myself to various software technologies and am
              always keen to learn new ones. I put special effort into
              optimizing my code and ensuring the project's objective is
              delivered.
            </p>
            <p>
              Visit my{' '}
              <a
                href="https://www.linkedin.com/in/deandrehaijielim/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{' '}
              profile for more details.
            </p>
          </div>
        </div>
        <div className="tag-wrap">
          <DynamicCloud iconSlugs={slugs} />
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Skills
