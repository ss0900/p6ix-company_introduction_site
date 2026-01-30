import { useEffect, useRef, useState } from 'react'

function HeroVideo({ id, scrollToSection }) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(container)

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)

    return () => {
      observer.disconnect()
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  return (
    <section id={id} className="hero hero-video-section" ref={containerRef}>
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="container hero-content">
        <h1 className="hero-title">
          <span style={{ display: 'block' }}>프로젝트의 성공을</span>
          <span className="gradient-text">함께 만들어갑니다</span>
        </h1>

        <p className="hero-subtitle">
          Oracle Primavera 전문 파트너로서 건설 프로젝트의
          체계적인 관리와 성공적인 완수를 지원합니다.
        </p>

        <div className="hero-cta">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('services')}
          >
            솔루션 알아보기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            문의하기
          </button>
        </div>
      </div>

      <button
        className="scroll-indicator"
        onClick={() => scrollToSection('services')}
        aria-label="Scroll to next section"
      >
        <span>Scroll Down</span>
        <div className="scroll-indicator-icon" />
      </button>
    </section>
  )
}

export default HeroVideo
