import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skillGroups = [
  {
    id: 1,
    category: 'Frontend',
    icon: '🎨',
    accent: '#f4c47a',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'GSAP'],
  },
  {
    id: 2,
    category: 'Backend',
    icon: '⚙️',
    accent: '#6ee7b7',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT / OAuth2', 'FastAPI'],
  },
  {
    id: 3,
    category: 'Databases',
    icon: '🗄️',
    accent: '#93c5fd',
    skills: ['MySQL', 'MongoDB', 'Query Optimization', 'Database Design'],
  },
  {
    id: 4,
    category: 'Languages',
    icon: '💻',
    accent: '#f9a8d4',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    id: 5,
    category: 'Tools & Technologies',
    icon: '🛠️',
    accent: '#fcd34d',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'OpenAPI', 'Jest', 'GitHub Actions', 'AWS S3', 'LangChain', 'VectorDB'],
  },
  {
    id: 6,
    category: 'Concepts',
    icon: '🧠',
    accent: '#c4b5fd',
    skills: ['DSA', 'OOP', 'Agile', 'Responsive Design', 'Microservices', 'RAG', 'Prompt Engineering'],
  },
]

const SkillCard = ({ group, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 36,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        delay: index * 0.08,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
      })
    })
    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className='group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6
                 hover:border-white/20 hover:bg-white/[0.055] transition-all duration-500 backdrop-blur-sm'
    >
      {/* Hover glow */}
      <div
        className='pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full blur-2xl
                   opacity-0 group-hover:opacity-25 transition-opacity duration-700'
        style={{ background: group.accent }}
      />

      {/* Header */}
      <div className='flex items-center gap-2 mb-4'>
        <span className='text-lg'>{group.icon}</span>
        <h3 className='text-sm font-sans font-semibold uppercase tracking-widest' style={{ color: group.accent }}>
          {group.category}
        </h3>
      </div>

      {/* Accent line */}
      <div
        className='h-px w-10 mb-4 rounded-full'
        style={{ background: group.accent + '88' }}
      />

      {/* Skills */}
      <div className='flex flex-wrap gap-2'>
        {group.skills.map((skill) => (
          <span
            key={skill}
            className='text-xs font-sans px-3 py-1 rounded-full border border-white/12 text-white/65
                       hover:text-white/90 hover:border-white/25 transition-all duration-200 cursor-default'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
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
      id='skills'
      className='relative w-screen bg-black px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36'
    >
      <div
        ref={glowRef}
        className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 w-96 rounded-full bg-violet-400/8 blur-3xl'
      />

      <div className='relative mx-auto max-w-5xl'>
        {/* Header */}
        <div className='mb-14 text-center'>
          <p ref={subtitleRef} className='mb-3 text-xs uppercase tracking-[0.35em] text-white/50 font-sans'>
            What I Work With
          </p>
          <h2
            ref={titleRef}
            className='text-4xl font-serif italic font-normal tracking-tight text-white
                       sm:text-5xl lg:text-6xl xl:text-7xl hover:scale-105 transition-transform duration-300'
          >
            Skills
          </h2>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {skillGroups.map((group, index) => (
            <SkillCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
