import { useEffect, useRef, useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import ExpandableCard, { type ExpandableCardItem } from "./ExpandableCard";

interface PpmMenuSectionProps {
  id: string;
}

// 이미지 경로는 아래 cards 배열의 image 값만 교체하면 바로 반영됩니다. (public 기준)
const cards: ExpandableCardItem[] = [
  {
    title: "개요",
    description:
      "포트폴리오 목표와 투자 우선순위를 정렬하고, 프로젝트 전반의 실행 방향을 한눈에 파악합니다.",
    href: "/ppm/overview/1",
    image: "/PPM%20개요.png",
    imageAlt: "PPM 개요 카드 배경",
  },
  {
    title: "기능 소개",
    description:
      "CPM 기반 일정 관리, 시나리오 분석, 자원 최적화를 통해 계획 정확도와 실행력을 동시에 강화합니다.",
    href: "/ppm/functions/1",
    image: "/PPM%20기능%20소개.png",
    imageAlt: "PPM 기능 소개 카드 배경",
  },
  {
    title: "효과",
    description:
      "의사결정 속도 향상, 리스크 조기 대응, 성과 가시성 확보로 프로젝트 성공 확률을 높입니다.",
    href: "/ppm/benefits",
    image: "/PPM%20효과.png",
    imageAlt: "PPM 효과 카드 배경",
  },
];

function PpmMenuSection({ id }: PpmMenuSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouchMode, setIsTouchMode] = useState(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const syncTouchMode = () => {
      setIsTouchMode(mediaQuery.matches);
    };

    syncTouchMode();
    mediaQuery.addEventListener("change", syncTouchMode);
    return () => mediaQuery.removeEventListener("change", syncTouchMode);
  }, []);

  const handleAttemptNavigate =
    (index: number) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (!isTouchMode) return;

      if (activeIndex !== index) {
        event.preventDefault();
        setActiveIndex(index);
      }
    };

  const handleMouseLeave = () => {
    if (isTouchMode) return;
    // 포인터가 영역을 벗어나면 활성 카드를 해제해 균등 레이아웃 기본 상태로 복귀합니다.
    setActiveIndex(null);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (isTouchMode) return;
    const nextFocusTarget = event.relatedTarget as Node | null;
    if (!nextFocusTarget || !cardsRef.current?.contains(nextFocusTarget)) {
      setActiveIndex(null);
    }
  };

  return (
    <section id={id} className="section ppm-menu-section">
      <div className="container ppm-menu-container">
        <header className="ppm-menu-header">
          <h2 className="ppm-menu-title">Primavera P6 PPM</h2>
          <p className="ppm-menu-subcopy">PPM 하위 메뉴를 빠르게 살펴보세요.</p>
        </header>

        <div className="ppm-menu-layout">
          <div
            ref={cardsRef}
            className="ppm-menu-cards"
            onMouseLeave={handleMouseLeave}
            onBlur={handleBlur}
          >
            {cards.map((card, index) => (
              <ExpandableCard
                key={card.title}
                item={card}
                isActive={activeIndex === index}
                onActivate={() => setActiveIndex(index)}
                onAttemptNavigate={handleAttemptNavigate(index)}
              />
            ))}
          </div>

          <div className="ppm-menu-dots" aria-label="PPM 메뉴 카드 인디케이터">
            {cards.map((card, index) => (
              <button
                key={card.title}
                type="button"
                className={`ppm-menu-dot ${activeIndex === index ? "is-active" : ""}`}
                aria-label={`${card.title} 카드 선택`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PpmMenuSection;
