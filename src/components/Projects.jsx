import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

  const projects = [
    {
      id: 1,
      title: 'Instagram Clone',
      subtitle: 'Instagram Clone',
      accent: '#f4c47a',
      icon: '📸',
      tag: 'Full-Stack · Distributed Systems',
    },
    {
      id: 2,
      title: 'Custom In-Memory Data Store',
      subtitle: 'Redis Clone',
      accent: '#a78bfa',
      icon: '⚡',
      tag: 'Systems Programming · Low-Level',
    },
    {
      id: 3,
      title: 'DocuChat AI',
      subtitle: 'RAG-Based Document Chat',
      accent: '#38bdf8',
      icon: '🧠',
      tag: 'AI · RAG · LangChain · Pinecone · React',
    },
    {
      id: 4,
      title: 'AI Job Scraper & Summarizer',
      subtitle: 'LLM-Powered Job Intel',
      accent: '#4ade80',
      icon: '🤖',
      tag: 'Python · LangChain · SQLite · RemoteOK API',
    },
  ]

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        delay: index * 0.18,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      })
    })
    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className='group relative flex-1 min-w-0 rounded-2xl border border-white/10 bg-white/[0.03]
                 p-7 sm:p-8 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.055]
                 transition-all duration-500'
    >
      {/* Hover glow */}
      <div
        className='pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full blur-3xl
                   opacity-0 group-hover:opacity-30 transition-opacity duration-700'
        style={{ background: project.accent }}
      />

      {/* Icon + Title row */}
      <div className='flex items-start gap-3 mb-2'>
        <span className='text-2xl mt-0.5'>{project.icon}</span>
        <div>
          <h3 className='text-lg sm:text-xl font-serif italic font-normal tracking-tight text-white leading-snug'>
            {project.title}
          </h3>
          {project.subtitle && (
            <span
              className='inline-block mt-1 text-xs font-sans px-2 py-0.5 rounded-full border'
              style={{
                color: project.accent,
                borderColor: project.accent + '55',
                background: project.accent + '18',
              }}
            >
              {project.subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Tag */}
      <p className='mb-5 text-xs font-sans uppercase tracking-widest pl-9' style={{ color: project.accent + 'aa' }}>
        {project.tag}
      </p>


    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from([subtitleRef.current, titleRef.current], {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
      })

      gsap.to(glowRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      id='projects'
      className='relative w-screen bg-black px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36'
    >
      <div
        ref={glowRef}
        className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 w-96 rounded-full bg-amber-300/8 blur-3xl'
      />

      <div className='relative mx-auto max-w-5xl'>
        {/* Header */}
        <div className='mb-14 text-center'>
          <p ref={subtitleRef} className='mb-3 text-xs uppercase tracking-[0.35em] text-white/50 font-sans'>
            Selected Work
          </p>
          <h2
            ref={titleRef}
            className='text-4xl font-serif italic font-normal tracking-tight text-white
                       sm:text-5xl lg:text-6xl xl:text-7xl hover:scale-105 transition-transform duration-300'
          >
            Projects
          </h2>
        </div>

        {/* Project cards grid */}
        <div ref={cardsRef} className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects