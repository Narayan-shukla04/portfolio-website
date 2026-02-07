import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
    const headerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                y: -40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div>
            <header ref={headerRef} className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-shrink-0">
                            <h2 className='text-white font-sanserif text-3xl '>
                                portfolio
                            </h2>
                        </div>

                        <div className="md:hidden">
                            <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                            <a href="#about" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-105"> About </a>

                            <a href="#projects" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-105"> Projects </a>

                            <a href="#contact" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-105"> Contact</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Navbar