import { useCallback } from 'react'
import gsap from 'gsap'

import HeroVideo from '../components/HeroVideo'
import PPMPanel from '../components/panels/PPMPanel'
import EPPMPanel from '../components/panels/EPPMPanel'
import OPCPanel from '../components/panels/OPCPanel'
import UnifierPanel from '../components/panels/UnifierPanel'
import AconexPanel from '../components/panels/AconexPanel'
import SectionIndicator from '../components/SectionIndicator'
import useGsapScrollController from '../hooks/useGsapScrollController'

const sections = [
  { id: 'hero', label: 'Main' },
  { id: 'ppm', label: 'P6 PPM' },
  { id: 'eppm', label: 'P6 EPPM' },
  { id: 'opc', label: 'OPC' },
  { id: 'unifier', label: 'Unifier' },
  { id: 'aconex', label: 'Aconex' }
]

function Home() {
  const initAnimations = useCallback(({ prefersReducedMotion }) => {
    if (prefersReducedMotion) return

    gsap.utils.toArray('.fade-in-section').forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    gsap.utils.toArray('.stagger-cards').forEach((container) => {
      const cards = container.querySelectorAll('.card-item')
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%'
          }
        }
      )
    })
  }, [])

  const { activeSection, scrollToSection } = useGsapScrollController({
    panelSelector: '.panel',
    sections,
    onInitAnimations: initAnimations
  })

  return (
    <>
      <SectionIndicator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main>
        <section className="panel">
          <HeroVideo id="hero" scrollToSection={scrollToSection} />
        </section>
        <section className="panel">
          <PPMPanel id="ppm" />
        </section>
        <section className="panel">
          <EPPMPanel id="eppm" isActive={activeSection === 2} />
        </section>
        <section className="panel">
          <OPCPanel id="opc" />
        </section>
        <section className="panel">
          <UnifierPanel id="unifier" />
        </section>
        <section className="panel">
          <AconexPanel id="aconex" />
        </section>
      </main>
    </>
  )
}

export default Home
