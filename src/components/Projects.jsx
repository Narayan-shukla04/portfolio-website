import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const marqueeRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, marqueeRef.current], {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      })

      gsap.to(glowRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} id='projects' className='relative w-screen bg-black px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24'>
      <div ref={glowRef} className='pointer-events-none absolute inset-x-0 top-10 mx-auto h-48 w-72 rounded-full bg-amber-300/10 blur-3xl sm:w-96' />
      <div className='mx-auto max-w-6xl'>
        <h1 ref={titleRef} className='text-center text-4xl font-serif italic font-normal tracking-tight text-white transition-transform duration-300 hover:scale-105 sm:text-5xl lg:text-6xl xl:text-7xl'>
          Projects
        </h1>

        <div ref={marqueeRef} className='mt-8 overflow-hidden whitespace-nowrap'>
          <p className='marquee inline-block text-lg font-normal tracking-wide text-white text-opacity-70 sm:text-xl'>
            projects is under process&nbsp;&nbsp;•&nbsp;&nbsp;projects is under process&nbsp;&nbsp;•&nbsp;&nbsp;projects is under process
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects