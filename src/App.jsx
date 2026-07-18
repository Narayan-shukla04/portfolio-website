import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contect from './components/Contect'

const App = () => {
  const progressRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: '0% 50%' })

      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return <div className='min-h-screen overflow-x-hidden'>

    <SmoothScroll />

    <div ref={progressRef} className='scroll-progress' />

    <Navbar />


    <main>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contect />


    </main>


  </div>
}

export default App