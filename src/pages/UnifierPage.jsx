import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SectionIndicator from "../components/SectionIndicator";
import EppmFunctionsSection from "../components/EppmFunctionsSection";
import { unifierFunctionsIntro } from "../data/functionsIntroData";
import { unifierFunctions2Intro } from "../data/unifierFunctions2Data";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { id: "hero", label: "Unifier" },
  { id: "menu", label: "메뉴" },
  { id: "overview-content", label: "개요" },
  { id: "overview-content-2", label: "개요 2" },
  { id: "functions", label: "기능 소개" },
  { id: "functions-2", label: "기능 소개 2" },
  { id: "customers", label: "효과" },
];

const subMenuItems = [
  {
    id: "overview",
    title: "개요",
    description: "비용, 계약, 문서 관리의 완벽한 통합",
    image:
      "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#overview-content",
  },
  {
    id: "functions",
    title: "기능 소개",
    description: "프로젝트 통제와 비용 관리 핵심 기능",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#functions",
  },
  {
    id: "benefits",
    title: "효과",
    description: "공공, 부동산, 인프라 도입 효과",
    image:
      "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#customers",
  },
];

const overview2FlowSteps = [
  {
    title: "Capital Planning",
    description: "투자 결정 및 우선순위",
    tone: "planning",
  },
  {
    title: "Project Controls",
    description: "실행 및 통제",
    tone: "controls",
  },
  {
    title: "Facilities & Asset Mgmt",
    description: "운영 및 자산 관리",
    tone: "asset",
  },
];

// Functions Data (mirrors Unifier modules - 4 cards)
const {
  title: functionsTitle,
  items: functionItems,
  heroImages: functionHeroImages,
} = unifierFunctionsIntro;
const { title: functionsTitle2, items: functionItems2 } =
  unifierFunctions2Intro;

// Customers Data
const customersData = [
  {
    tag: "공공",
    title: "공공기관 시설 관리",
    desc: "대규모 공공 시설의 자산 및 유지보수 관리 시스템 구축",
    img: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "부동산",
    title: "부동산 개발사",
    desc: "복합 개발 프로젝트의 비용 및 계약 관리",
    img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "인프라",
    title: "인프라 운영사",
    desc: "도로 및 철도 자산의 생애주기 관리",
    img: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function UnifierPage() {
  const { sectionId, subId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const currentSectionRef = useRef(0);

  // Section refs
  const heroSectionRef = useRef(null);
  const menuSectionRef = useRef(null);
  const overviewSectionRef = useRef(null);
  const overviewSectionRef2 = useRef(null);
  const functionsSectionRef = useRef(null);
  const functionsSectionRef2 = useRef(null);
  const customersSectionRef = useRef(null);

  // Animation refs
  const overviewCardsRef = useRef([]);
  const overviewFlowRef = useRef(null);
  const functionsImageCardRef = useRef(null);
  const functionsImageCardRef2 = useRef(null);
  const functionsCardsRef = useRef([]);
  const functionsCardsRef2 = useRef([]);
  const customersCardsRef = useRef([]);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Navigate to section
  const scrollToSection = useCallback(
    (sectionId) => {
      const sectionIndex = sections.findIndex((s) => s.id === sectionId);
      if (sectionIndex === -1) return;

      const panels = gsap.utils.toArray(".unifier-panel");
      if (!panels[sectionIndex]) return;

      currentSectionRef.current = sectionIndex;
      setActiveSection(sectionIndex);

      if (prefersReducedMotion) {
        panels[sectionIndex].scrollIntoView({ behavior: "auto" });
      } else {
        isAnimatingRef.current = true;
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: panels[sectionIndex], autoKill: false },
          ease: "power3.inOut",
          onComplete: () => {
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, 100);
          },
        });
      }
    },
    [prefersReducedMotion],
  );

  // Deep linking logic
  useEffect(() => {
    if (sectionId) {
      // Handle mapping if necessary, or just rely on direct ID match
      // The user requested /unifier/overview/1, /unifier/overview/2, /unifier/functions/1, /unifier/functions/2, /unifier/benefits/1
      // Our IDs are: overview-content, overview-content-2, functions, functions-2, customers

      let targetId = sectionId;
      if (sectionId === "overview")
        targetId = subId === "2" ? "overview-content-2" : "overview-content";
      if (sectionId === "modules") targetId = "functions";
      if (sectionId === "functions")
        targetId = subId === "2" ? "functions-2" : "functions";
      if (sectionId === "benefits") targetId = "customers";

      const foundIndex = sections.findIndex((s) => s.id === targetId);

      if (foundIndex !== -1 && foundIndex !== currentSectionRef.current) {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 100);
      }
    }
  }, [sectionId, subId, scrollToSection]);

  // Update URL based on section
  const updateUrlForSection = useCallback(
    (index) => {
      let path = "/unifier";
      // index 0(Hero), 1(Menu) -> /unifier
      if (index === 2) path = "/unifier/overview/1";
      if (index === 3) path = "/unifier/overview/2";
      if (index === 4) path = "/unifier/functions/1";
      if (index === 5) path = "/unifier/functions/2";
      if (index === 6) path = "/unifier/benefits/1";

      navigate(path, { replace: true });
    },
    [navigate],
  );

  // GSAP scroll hijacking
  useEffect(() => {
    if (prefersReducedMotion) {
      initContentAnimations();
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    const panels = gsap.utils.toArray(".unifier-panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          currentSectionRef.current = i;
          setActiveSection(i);
          updateUrlForSection(i);
        },
        onEnterBack: () => {
          currentSectionRef.current = i;
          setActiveSection(i);
          updateUrlForSection(i);
        },
      });
    });

    const handleWheel = (e) => {
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      const threshold = 50;

      if (Math.abs(delta) < threshold) return;

      e.preventDefault();
      isAnimatingRef.current = true;

      let nextSection = currentSectionRef.current;

      if (delta > 0 && currentSectionRef.current < panels.length - 1) {
        nextSection = currentSectionRef.current + 1;
      } else if (delta < 0 && currentSectionRef.current > 0) {
        nextSection = currentSectionRef.current - 1;
      } else {
        isAnimatingRef.current = false;
        return;
      }

      currentSectionRef.current = nextSection;
      setActiveSection(nextSection);

      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: panels[nextSection], autoKill: false },
        ease: "power3.inOut",
        onComplete: () => {
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 100);
        },
      });
    };

    // Touch events
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (isAnimatingRef.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;
      if (Math.abs(delta) < 50) return;

      isAnimatingRef.current = true;
      let nextSection = currentSectionRef.current;

      if (delta > 0 && currentSectionRef.current < panels.length - 1) {
        nextSection = currentSectionRef.current + 1;
      } else if (delta < 0 && currentSectionRef.current > 0) {
        nextSection = currentSectionRef.current - 1;
      } else {
        isAnimatingRef.current = false;
        return;
      }

      currentSectionRef.current = nextSection;
      setActiveSection(nextSection);

      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: panels[nextSection], autoKill: false },
        ease: "power3.inOut",
        onComplete: () => {
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 100);
        },
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    initContentAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [prefersReducedMotion]);

  // Content Animations
  const initContentAnimations = () => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(
        ".unifier-hero-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Menu Stagger
      if (menuSectionRef.current) {
        gsap.fromTo(
          ".unifier-menu-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: menuSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Overview Features
      if (overviewSectionRef.current) {
        gsap.fromTo(
          overviewCardsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: overviewSectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (overviewSectionRef2.current && overviewFlowRef.current) {
        gsap.fromTo(
          overviewFlowRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: overviewSectionRef2.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Functions
      if (functionsSectionRef.current) {
        const functionsTl = gsap.timeline({
          scrollTrigger: {
            trigger: functionsSectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        const functionsTitle =
          functionsSectionRef.current.querySelector(".ppm-cpm-title");

        if (functionsTitle) {
          functionsTl.fromTo(
            functionsTitle,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
          );
        }

        if (functionsImageCardRef.current) {
          functionsTl.fromTo(
            functionsImageCardRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "bounce.out" },
            "-=0.2",
          );
        }

        const cards = functionsCardsRef.current;
        if (cards[0]) {
          functionsTl.fromTo(
            cards[0],
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            "-=0.5",
          );
        }
        if (cards[1]) {
          functionsTl.fromTo(
            cards[1],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3",
          );
        }
        if (cards[2]) {
          functionsTl.fromTo(
            cards[2],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3",
          );
        }
        if (cards[3]) {
          functionsTl.fromTo(
            cards[3],
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            "-=0.3",
          );
        }
      }

      if (functionsSectionRef2.current) {
        const functionsTl2 = gsap.timeline({
          scrollTrigger: {
            trigger: functionsSectionRef2.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        const functionsTitle2 =
          functionsSectionRef2.current.querySelector(".ppm-cpm-title");

        if (functionsTitle2) {
          functionsTl2.fromTo(
            functionsTitle2,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
          );
        }

        if (functionsImageCardRef2.current) {
          functionsTl2.fromTo(
            functionsImageCardRef2.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "bounce.out" },
            "-=0.2",
          );
        }

        const cards2 = functionsCardsRef2.current;
        if (cards2[0]) {
          functionsTl2.fromTo(
            cards2[0],
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            "-=0.5",
          );
        }
        if (cards2[1]) {
          functionsTl2.fromTo(
            cards2[1],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3",
          );
        }
        if (cards2[2]) {
          functionsTl2.fromTo(
            cards2[2],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3",
          );
        }
        if (cards2[3]) {
          functionsTl2.fromTo(
            cards2[3],
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            "-=0.3",
          );
        }
      }

      // Customers
      if (customersSectionRef.current) {
        gsap.fromTo(
          customersCardsRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
              trigger: customersSectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
    return () => ctx.revert();
  };

  return (
    <>
      <div
        className="ppm-page unifier-page-container eppm-page-container"
        ref={containerRef}
      >
        {/* 1. Hero Section */}
        <section
          className="unifier-panel tm-panel"
          id="hero"
          ref={heroSectionRef}
        >
          <div
            className="tm-hero-section"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.7), rgba(10, 10, 15, 0.9)), url(https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1200)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="tm-hero-content">
              <h1 className="unifier-hero-title tm-hero-title">
                Oracle Primavera Unifier
              </h1>
              <p className="tm-hero-subtitle">Unifier</p>
            </div>
            <button
              className="scroll-indicator"
              onClick={() => scrollToSection("menu")}
              aria-label="다음 섹션으로 스크롤"
            >
              <span>Scroll Down</span>
              <div className="scroll-indicator-icon"></div>
            </button>
          </div>
        </section>

        {/* 2. Menu Section (Structure matched to PPM 2nd section) */}
        <section
          className="unifier-panel ppm-panel ppm-overview-section"
          id="menu"
          ref={menuSectionRef}
        >
          <div className="ppm-overview-container">
            <div className="ppm-overview-content">
              {/* Breadcrumb */}
              <nav className="ppm-breadcrumb">
                <Link to="/" className="ppm-breadcrumb-home">
                  <span className="ppm-breadcrumb-home-icon">H</span>
                </Link>
                <span className="ppm-breadcrumb-separator">&gt;</span>
                <span className="ppm-breadcrumb-item ppm-breadcrumb-current">
                  Unifier
                </span>
              </nav>

              {/* Main Title */}
              <h2 className="ppm-overview-title">
                최적의 프로젝트 통제 및
                <br />
                비용 관리 솔루션
              </h2>

              {/* Description */}
              <p className="ppm-overview-description">
                프로젝트(자본사업) 생애주기 전반에서 비용 · 계약 · 변경 · 자금 /
                현금 흐름 · 문서를
                <br />
                워크플로우 기반의 연결된 프로세스로 통합 관리하는 엔터프라이즈급
                Project Controls / PMIS 플랫폼입니다.
              </p>

              {/* Divider */}
              <div className="ppm-overview-divider"></div>

              {/* Sub-menu Cards (PPM Style) */}
              <div className="ppm-submenu-grid">
                {subMenuItems.map((item, index) => (
                  <button
                    key={item.id}
                    className="ppm-submenu-card unifier-menu-card"
                    onClick={() => scrollToSection(item.link.replace("#", ""))}
                  >
                    <div
                      className="ppm-submenu-card-bg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="ppm-submenu-card-overlay" />
                    <h4 className="ppm-submenu-card-title">{item.title}</h4>
                    <div className="ppm-submenu-card-arrow">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Overview Section */}
        <section
          className="unifier-panel tm-panel"
          id="overview-content"
          ref={overviewSectionRef}
        >
          <div className="tm-methods-section unifier-overview-shell">
            <div className="tm-methods-container" id="unifier-overview-1">
              <div className="tm-section-header">
                <h2 className="tm-section-title">
                  혼란에서 명확성으로: 단 하나의 진실
                </h2>
              </div>
              <div className="unifier-overview-layout">
                <aside
                  className="tm-ppm-eppm-card unifier-overview-message-card"
                  ref={(el) => (overviewCardsRef.current[0] = el)}
                >
                  <p>업무 프로세스(Workflow) +</p>
                  <p>프로젝트 통제(Project Controls) +</p>
                  <p>정보 관리(PMIS)의 완벽한 결합</p>
                </aside>

                <div
                  className="unifier-overview-visual-wrap"
                  ref={(el) => (overviewCardsRef.current[1] = el)}
                >
                  <div
                    className="unifier-overview-donut"
                    role="img"
                    aria-label="Platform Core를 중심으로 협력사, 발주처, CM, 시공사가 연결된 통합 구조"
                  >
                    <div className="unifier-overview-outer-ring" />

                    <span className="unifier-overview-ring-label is-top-left">
                      협력사
                    </span>
                    <span className="unifier-overview-ring-label is-top-right">
                      발주처
                    </span>
                    <span className="unifier-overview-ring-label is-bottom-right">
                      CM
                    </span>
                    <span className="unifier-overview-ring-label is-bottom-left">
                      시공사
                    </span>

                    <div className="unifier-overview-inner-segments" />

                    <div className="unifier-overview-core">
                      <span>
                        Platform
                        <br />
                        Core
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="unifier-overview-summary"
                ref={(el) => (overviewCardsRef.current[2] = el)}
              >
                여러 참여자가 공통된 프로세스 안에서 표준화·자동화된 방식으로
                협업합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Overview Section 2 */}
        <section
          className="unifier-panel tm-panel"
          id="overview-content-2"
          ref={overviewSectionRef2}
        >
          <div className="tm-methods-section unifier-overview-shell">
            <div className="tm-methods-container" id="unifier-overview-2">
              <div className="tm-section-header">
                <h2 className="tm-section-title">
                  프로젝트의 탄생부터 운영까지
                </h2>
              </div>

              <div className="unifier-overview2-content" ref={overviewFlowRef}>
                <div className="unifier-overview2-flow" role="list">
                  {overview2FlowSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="unifier-overview2-step-wrap"
                      role="listitem"
                    >
                      <article
                        className={`tm-ppm-eppm-card unifier-overview2-step unifier-overview2-step--${step.tone}`}
                      >
                        <div className="unifier-overview2-step-text">
                          <h3 className="unifier-overview2-step-title">
                            {step.title}
                          </h3>
                          <p className="unifier-overview2-step-description">
                            {step.description}
                          </p>
                        </div>
                      </article>

                      {index < overview2FlowSteps.length - 1 ? (
                        <span
                          className="unifier-overview2-step-connector"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="unifier-overview2-flowline">
                  <div
                    className="unifier-overview2-flowline-track"
                    aria-hidden="true"
                  />
                  <p className="unifier-overview2-flowline-caption">
                    끊김 없는 데이터 흐름 (Seamless Data Flow)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Functions Section */}
        <EppmFunctionsSection
          panelClassName="unifier-panel"
          sectionId="functions"
          title={functionsTitle}
          items={functionItems}
          heroImages={functionHeroImages}
          sectionRef={functionsSectionRef}
          imageCardRef={functionsImageCardRef}
          cardRefs={functionsCardsRef}
          prefersReducedMotion={prefersReducedMotion}
          isActive={sections[activeSection]?.id === "functions"}
        />

        {/* 6. Functions Section 2 */}
        <EppmFunctionsSection
          panelClassName="unifier-panel"
          sectionId="functions-2"
          title={functionsTitle2}
          items={functionItems2}
          sectionRef={functionsSectionRef2}
          imageCardRef={functionsImageCardRef2}
          cardRefs={functionsCardsRef2}
          prefersReducedMotion={prefersReducedMotion}
          isActive={sections[activeSection]?.id === "functions-2"}
        />

        {/* 7. Customers Section */}
        <section
          className="unifier-panel tm-panel"
          id="customers"
          ref={customersSectionRef}
        >
          <div
            className="tm-methods-section"
            style={{ background: "var(--bg-darker)" }}
          >
            <div className="tm-methods-container">
              <div className="tm-section-header">
                <h2 className="tm-section-title">고객 사례</h2>
              </div>
              <div
                className="tm-ppm-eppm-grid"
                style={{
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "30px",
                  marginTop: "40px",
                }}
              >
                {customersData.map((item, index) => (
                  <div
                    key={index}
                    className="tm-ppm-eppm-card"
                    style={{ padding: "0", overflow: "hidden", height: "auto" }}
                    ref={(el) => (customersCardsRef.current[index] = el)}
                  >
                    <div
                      className="tm-card-image"
                      style={{
                        height: "200px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          top: "15px",
                          left: "15px",
                          background: "rgba(0,0,0,0.7)",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "4px",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div
                      className="tm-card-content"
                      style={{ padding: "25px" }}
                    >
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          marginBottom: "15px",
                          color: "var(--text-primary)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "var(--text-secondary)",
                          lineHeight: "1.6",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <SectionIndicator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </>
  );
}

export default UnifierPage;
