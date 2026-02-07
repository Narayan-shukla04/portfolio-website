import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hero from '../assets/hero.png'

const Hero = () => {
    const containerRef = useRef(null)
    const imageRef = useRef(null)
    const glowOneRef = useRef(null)
    const glowTwoRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const copyRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
            tl.from(titleRef.current, { y: 24, opacity: 0, duration: 0.7 })
                .from(subtitleRef.current, { y: 24, opacity: 0, duration: 0.7 }, '-=0.35')
                .from(copyRef.current, { y: 18, opacity: 0, duration: 0.6 }, '-=0.35')

            gsap.from(imageRef.current, {
                x: 40,
                opacity: 0,
                duration: 1.1,
                ease: 'power2.out'
            })

            gsap.to(imageRef.current, {
                yPercent: 8,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            })

            gsap.to([titleRef.current, subtitleRef.current], {
                yPercent: -8,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            })

            gsap.to(glowOneRef.current, {
                x: -30,
                y: 20,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })

            gsap.to(glowTwoRef.current, {
                x: 20,
                y: -20,
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="relative flex min-h-screen w-screen items-center overflow-hidden bg-black">

            <div ref={glowOneRef} className="pointer-events-none absolute -left-24 -top-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
            <div ref={glowTwoRef} className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />


            <div className="absolute inset-y-0 right-0">
                <img ref={imageRef} className="object-cover w-screen h-screen bg-transparent max-w-4xl origin-left opacity-50 xl:opacity-100 lg:scale-110 lg:-translate-x-8" src={hero} alt="" />
            </div>

            <div className="relative w-full">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full text-center md:text-left lg:w-2/3 xl:w-1/2 flex flex-col items-center md:items-start">

                        <h1 className="mt-6 tracking-tighter text-white">
                            <span ref={titleRef} className="font-sans font-normal text-7xl">Design</span><br />
                            <span ref={subtitleRef} className="font-serif italic font-normal text-8xl">Develop & deliver</span>
                        </h1>
                        <p ref={copyRef} className="mt-12 font-sans text-base font-normal leading-7 md:max-w-sm text-white text-opacity-70">I’m a web developer fresher with a strong foundation in modern web technologies. I enjoy building responsive, user-friendly applications and continuously improving my skills through hands-on projects. I’m eager to learn, grow, and contribute to real-world products.</p>

                        <div className="flex items-center justify-center mt-8 space-x-3 md:justify-start sm:space-x-4">



                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero