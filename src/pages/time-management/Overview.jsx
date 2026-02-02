import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SubPage from '../../components/SubPage'

gsap.registerPlugin(ScrollTrigger)

function TimeManagementOverview() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const definitionRef = useRef(null)
  const definitionTextRef = useRef(null)
  const iconsRef = useRef([])
  const arrowLeftRef = useRef(null)
  const shieldRef = useRef(null)
  const arrowRightRef = useRef(null)
  const resultsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })

      // 1. Title: Fade-in + slide down
      tl.fromTo(titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )

      // 2. Definition box: Highlight sweep effect
      tl.fromTo(definitionRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'left center' },
        '-=0.2'
      )

      // Text typing effect (simulated with clip-path)
      tl.fromTo(definitionTextRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power1.inOut' },
        '-=0.3'
      )

      // 3. Left resource icons: Pop-up one by one
      iconsRef.current.forEach((icon, index) => {
        tl.fromTo(icon,
          { opacity: 0, scale: 0, rotation: -10 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(1.7)' },
          index === 0 ? '-=0.3' : '-=0.2'
        )
      })

      // 4. Left arrow: Drawing animation
      tl.fromTo(arrowLeftRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'left center' },
        '-=0.2'
      )

      // 5. Shield: Scale up + rotation entrance
      tl.fromTo(shieldRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(1.4)' },
        '-=0.3'
      )

      // 6. Right arrow: Drawing animation
      tl.fromTo(arrowRightRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'left center' },
        '-=0.3'
      )

      // 7. Results: Sequential slide-in from top to bottom
      resultsRef.current.forEach((result, index) => {
        tl.fromTo(result,
          { opacity: 0, x: 50, y: -20 },
          { opacity: 1, x: 0, y: 0, duration: 0.4, ease: 'power3.out' },
          index === 0 ? '-=0.2' : '-=0.25'
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const content = (
    <div className="tm-overview-section" ref={sectionRef}>
      {/* Section Title */}
      <div className="tm-section-header" ref={titleRef}>
        <h2 className="tm-section-title">공정관리의 정의</h2>
      </div>

      {/* Definition Box */}
      <div className="tm-definition-box" ref={definitionRef}>
        <p className="tm-definition-text" ref={definitionTextRef}>
          미래의 일을 계획하고, 계획된 일이 일정에 맞게 진행되도록 노력하는 것
        </p>
      </div>

      {/* Visual Flow Diagram */}
      <div className="tm-flow-container">
        {/* Input Section - Left */}
        <div className="tm-flow-input">
          <div className="tm-input-icons">
            <div className="tm-icon-group">
              {/* Worker Icon */}
              <div 
                className="tm-icon-wrapper" 
                ref={el => iconsRef.current[0] = el}
                data-tooltip="인력: 숙련공, 기술자, 관리자 등"
              >
                <svg className="tm-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="18" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M22 16 H42 Q44 16 44 14 L42 10 Q40 8 38 8 H26 Q24 8 22 10 L20 14 Q20 16 22 16 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M18 58 V40 Q18 32 26 32 H38 Q46 32 46 40 V58" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              {/* Scaffolding Icon */}
              <div 
                className="tm-icon-wrapper" 
                ref={el => iconsRef.current[1] = el}
                data-tooltip="자재: 철근, 콘크리트, 목재 등"
              >
                <svg className="tm-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="48" width="40" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="16" y="32" width="32" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="20" y="16" width="24" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="20" y1="52" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="44" y1="52" x2="44" y2="20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              {/* Materials Icon */}
              <div 
                className="tm-icon-wrapper" 
                ref={el => iconsRef.current[2] = el}
                data-tooltip="장비: 크레인, 굴삭기, 운반차량 등"
              >
                <svg className="tm-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="36" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="36" y="36" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="22" y="12" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
          <p className="tm-input-label">인력, 자재, 장비</p>
        </div>

        {/* Arrow with Management Label */}
        <div className="tm-flow-arrow" ref={arrowLeftRef}>
          <span className="tm-arrow-label">경제적 운용 + 총괄적 관리</span>
          <div className="tm-arrow-line">
            <svg viewBox="0 0 100 24" preserveAspectRatio="none">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="var(--color-accent)"/>
                </linearGradient>
              </defs>
              <path className="tm-arrow-path" d="M0 12 L85 12" stroke="url(#arrowGradient)" strokeWidth="3" fill="none"/>
              <polygon className="tm-arrow-head" points="85,6 100,12 85,18" fill="var(--color-accent)"/>
            </svg>
          </div>
        </div>

        {/* Control Center - Shield Icon */}
        <div className="tm-flow-control" ref={shieldRef}>
          <div className="tm-control-shield">
            <svg className="tm-shield-icon" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Pulse effect circles */}
              <circle className="tm-pulse-ring tm-pulse-ring-1" cx="40" cy="48" r="45" stroke="var(--color-accent)" strokeWidth="1" fill="none" opacity="0"/>
              <circle className="tm-pulse-ring tm-pulse-ring-2" cx="40" cy="48" r="55" stroke="var(--color-accent)" strokeWidth="1" fill="none" opacity="0"/>
              {/* Shield outline */}
              <path className="tm-shield-outline" d="M40 4 L72 16 L72 48 Q72 72 40 92 Q8 72 8 48 L8 16 Z" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(0, 212, 255, 0.1)"/>
              {/* Clock inside shield */}
              <circle cx="40" cy="40" r="18" stroke="var(--color-accent)" strokeWidth="2" fill="none"/>
              <line className="tm-clock-minute" x1="40" y1="40" x2="40" y2="28" stroke="var(--color-accent)" strokeWidth="2"/>
              <line className="tm-clock-hour" x1="40" y1="40" x2="50" y2="40" stroke="var(--color-accent)" strokeWidth="2"/>
              {/* Gear teeth around clock */}
              <circle className="tm-gear-ring" cx="40" cy="40" r="24" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Arrow to Results */}
        <div className="tm-flow-arrow tm-flow-arrow-right" ref={arrowRightRef}>
          <div className="tm-arrow-line">
            <svg viewBox="0 0 100 24" preserveAspectRatio="none">
              <path className="tm-arrow-path" d="M0 12 L85 12" stroke="url(#arrowGradient)" strokeWidth="3" fill="none"/>
              <polygon className="tm-arrow-head" points="85,6 100,12 85,18" fill="var(--color-accent)"/>
            </svg>
          </div>
        </div>

        {/* Results Section - Right */}
        <div className="tm-flow-results">
          <div 
            className="tm-result-item tm-result-orange" 
            ref={el => resultsRef.current[0] = el}
            data-tooltip="프로젝트 완료 기한 준수"
          >
            <span className="tm-result-icon">📅</span>
            <span className="tm-result-text">약속한 기일 내 완성</span>
          </div>
          <div 
            className="tm-result-item tm-result-blue" 
            ref={el => resultsRef.current[1] = el}
            data-tooltip="예산 초과 없는 프로젝트 수행"
          >
            <span className="tm-result-icon">💰</span>
            <span className="tm-result-text">비용 범위 내 완성</span>
          </div>
          <div 
            className="tm-result-item tm-result-yellow" 
            ref={el => resultsRef.current[2] = el}
            data-tooltip="요구 품질 기준 달성"
          >
            <span className="tm-result-icon">✅</span>
            <span className="tm-result-text">품질 충족</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="개요"
      subtitle="Time Management Overview"
      content={content}
      image="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default TimeManagementOverview
