import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contect = () => {
    const sectionRef = useRef(null)
    const bgRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                y: 24,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%'
                }
            })

            gsap.to(bgRef.current, {
                yPercent: 12,
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
        <section ref={sectionRef} id='contact' className='relative w-screen overflow-hidden bg-black px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28'>
            <div ref={bgRef} className='absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-900 opacity-90' />
            <div ref={contentRef} className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
                <p className='text-xs uppercase tracking-[0.35em] text-white text-opacity-60'>Contact</p>
                <h2 className='mt-4 text-4xl font-serif italic font-normal tracking-tight text-white sm:text-5xl lg:text-6xl'>
                    Lets build something calm and strong
                </h2>
                <p className='mt-5 max-w-2xl text-base leading-7 text-white text-opacity-70'>
                    Share your idea, goals, and timeline. I will reply with a clear plan and next steps.
                </p>

                <div className='mt-8 flex flex-col items-center gap-2 text-white text-opacity-70 sm:flex-row sm:gap-6'>
                    <a className='text-sm hover:text-white' href='mailto:hello@yourmail.com'>
                        nnnshukla@gmail.com.com
                    </a>
                    <span className='hidden h-1 w-1 rounded-full bg-white bg-opacity-40 sm:inline-block' />
                    <span className='text-sm'>Bhopal, India</span>
                </div>
            </div>
        </section>
    )
}

export default Contect
