import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import my_img from '../assets/my_img.png'

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const copyRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, copyRef.current], {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      })

      gsap.from(imageRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      })

      gsap.to(imageRef.current, {
        y: 10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} id='about' className='relative flex min-h-screen w-screen items-center overflow-hidden bg-black px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28 xl:px-24'>
      <div className='mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16'>
        <div className='order-2 w-full text-center sm:text-left lg:order-1 lg:w-3/5'>
          <h1 ref={titleRef} className='text-4xl font-serif italic font-normal tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl hover:scale-105 transition-transform duration-300'>
            Narayan shukla
          </h1>
          <p ref={copyRef} className='mt-6 max-w-xl font-sans text-sm font-normal leading-6 text-white text-opacity-70 sm:mt-8 sm:text-base sm:leading-7'>
            I’m a web developer fresher with a strong foundation in modern web technologies. I enjoy building responsive, user-friendly applications and continuously improving my skills through hands-on projects. I’m eager to learn, grow, and contribute to real-world products.
          </p>
        </div>

        <div className='order-1 flex w-full justify-center lg:order-2 lg:w-2/5'>
          <img
            ref={imageRef}
            src={my_img}
            alt=""
            className='h-48 w-48 rounded-full bg-black object-cover shadow-lg transition-transform duration-300 hover:scale-105 sm:h-60 sm:w-60 lg:h-72 lg:w-72'
          />
        </div>
      </div>
    </div>
  )
}

export default About