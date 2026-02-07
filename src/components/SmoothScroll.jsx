import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SmoothScroll = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false
        })

        const onTick = (time) => {
            lenis.raf(time * 1000)
        }

        gsap.ticker.add(onTick)
        gsap.ticker.lagSmoothing(0)
        lenis.on('scroll', ScrollTrigger.update)
        ScrollTrigger.refresh()

        return () => {
            lenis.off('scroll', ScrollTrigger.update)
            gsap.ticker.remove(onTick)
            lenis.destroy()
        }
    }, [])

    return null
}

export default SmoothScroll
