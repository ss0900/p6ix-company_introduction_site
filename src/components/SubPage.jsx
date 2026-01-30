import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initPageAnimations } from '../utils/animations'

gsap.registerPlugin(ScrollTrigger)

function SubPage({ title, subtitle, content, image }) {
  useEffect(() => {
    ScrollTrigger.refresh()
    initPageAnimations()

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="subpage-container">
      <section className="subpage-hero fade-in-section" style={{
        backgroundImage: image ? `linear-gradient(rgba(10, 10, 15, 0.7), rgba(10, 10, 15, 0.9)), url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="subpage-hero-content">
          <h1 className="subpage-title">{title}</h1>
          <p className="subpage-subtitle">{subtitle}</p>
        </div>
      </section>

      <section className="subpage-content">
        <div className="subpage-body">
          {content}
        </div>
      </section>
    </div>
  )
}

export default SubPage
