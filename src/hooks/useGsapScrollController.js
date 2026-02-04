import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DEFAULT_SCROLL_DURATION = 0.8;
const DEFAULT_WHEEL_THRESHOLD = 50;

export default function useGsapScrollController({
  panelSelector,
  sections,
  onSectionChange,
  onInitAnimations,
  scrollDuration = DEFAULT_SCROLL_DURATION,
  wheelThreshold = DEFAULT_WHEEL_THRESHOLD,
}) {
  const [activeSection, setActiveSection] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isAnimatingRef = useRef(false);
  const currentSectionRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const updateActiveSection = useCallback(
    (index) => {
      currentSectionRef.current = index;
      setActiveSection(index);
      if (onSectionChange) {
        onSectionChange(index);
      }
    },
    [onSectionChange],
  );

  const scrollToSection = useCallback(
    (sectionId) => {
      if (!Array.isArray(sections)) return;
      const sectionIndex = sections.findIndex((section) => section.id === sectionId);
      if (sectionIndex === -1) return;

      const panels = gsap.utils.toArray(panelSelector);
      if (!panels[sectionIndex]) return;

      updateActiveSection(sectionIndex);

      if (prefersReducedMotion) {
        panels[sectionIndex].scrollIntoView({ behavior: "auto" });
        return;
      }

      isAnimatingRef.current = true;
      gsap.to(window, {
        duration: scrollDuration,
        scrollTo: { y: panels[sectionIndex], autoKill: false },
        ease: "power3.inOut",
        onComplete: () => {
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 100);
        },
      });
    },
    [panelSelector, prefersReducedMotion, scrollDuration, sections, updateActiveSection],
  );

  useEffect(() => {
    if (!panelSelector) return () => {};

    if (prefersReducedMotion) {
      if (onInitAnimations) {
        onInitAnimations({ prefersReducedMotion: true });
      }
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    const panels = gsap.utils.toArray(panelSelector);
    if (panels.length === 0) return () => {};

    panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateActiveSection(index),
        onEnterBack: () => updateActiveSection(index),
      });
    });

    const handleWheel = (event) => {
      if (isAnimatingRef.current) {
        event.preventDefault();
        return;
      }

      const delta = event.deltaY;
      if (Math.abs(delta) < wheelThreshold) return;

      event.preventDefault();
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

      updateActiveSection(nextSection);

      gsap.to(window, {
        duration: scrollDuration,
        scrollTo: { y: panels[nextSection], autoKill: false },
        ease: "power3.inOut",
        onComplete: () => {
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 100);
        },
      });
    };

    let touchStartY = 0;

    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      if (isAnimatingRef.current) return;

      const touchEndY = event.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;
      if (Math.abs(delta) < wheelThreshold) return;

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

      updateActiveSection(nextSection);

      gsap.to(window, {
        duration: scrollDuration,
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

    if (onInitAnimations) {
      onInitAnimations({ prefersReducedMotion: false });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    onInitAnimations,
    panelSelector,
    prefersReducedMotion,
    scrollDuration,
    updateActiveSection,
    wheelThreshold,
  ]);

  return {
    activeSection,
    prefersReducedMotion,
    scrollToSection,
    currentSectionRef,
  };
}
