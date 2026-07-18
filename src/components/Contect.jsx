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
            <div ref={bgRef} className='absolute inset-0 bg-gradient-to-bottom from-neutral-900 via-black to-neutral-900 opacity-90' />
            <div ref={contentRef} className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
                <p className='text-xs uppercase tracking-[0.35em] text-white text-opacity-60'>Contact</p>
                <h2 className='mt-4 text-4xl font-serif italic font-normal tracking-tight text-white sm:text-5xl lg:text-6xl'>
                    Lets build something calm and strong
                </h2>
                <p className='mt-5 max-w-2xl text-base leading-7 text-white text-opacity-70'>
                    Share your idea, goals, and timeline. I will reply with a clear plan and next steps.
                </p>

                <div className='mt-8 flex flex-col items-center gap-3 text-white/60 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3'>

                    {/* Email */}
                    <a
                        className='flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white'
                        href='mailto:nnnshukla@gmail.com'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
                        </svg>
                        nnnshukla@gmail.com
                    </a>

                    <span className='hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block' />

                    {/* Phone */}
                    <a
                        className='flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white'
                        href='tel:+917879494236'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        +91 7879494236
                    </a>

                    <span className='hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block' />

                    {/* LinkedIn */}
                    <a
                        className='flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white'
                        href='https://www.linkedin.com/in/narayan-shukla-264111316/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.863-3.059-1.865 0-2.15 1.454-2.15 2.959v5.704h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.608v5.588z"/>
                        </svg>
                        LinkedIn
                    </a>

                    <span className='hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block' />

                    {/* Location */}
                    <span className='flex items-center gap-2 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Bhopal, India
                    </span>

                </div>
            </div>
        </section>
    )
}

export default Contect
