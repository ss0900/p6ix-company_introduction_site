import { useEffect, useRef, useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import ExpandableCard, { type ExpandableCardItem } from "./ExpandableCard";
import { getAssetPath } from "../../utils/assetPath";

interface UnifierMenuSectionProps {
  id: string;
}

const cards: ExpandableCardItem[] = [
  {
    title: "개요",
    description:
      "비용, 계약, 문서 관리의 통합 운영 구조를 확인하고 Unifier의 핵심 가치를 빠르게 파악합니다.",
    href: "/unifier/overview/1",
    image: getAssetPath("/Unifier_Overview.png"),
    imageAlt: "Unifier 개요 카드 배경",
  },
  {
    title: "기능 소개",
    description:
      "비용 통제, 계약 관리, 워크플로우 자동화 등 프로젝트 통제 중심 기능을 확인합니다.",
    href: "/unifier/functions/1",
    image: getAssetPath("/Unifier_Functions.png"),
    imageAlt: "Unifier 기능 소개 카드 배경",
  },
  {
    title: "효과",
    description:
      "공공, 인프라, 민간 프로젝트에서의 도입 효과와 운영 성과를 사례 관점으로 살펴봅니다.",
    href: "/unifier/benefits/1",
    image: getAssetPath("/Unifier_Benefits.png"),
    imageAlt: "Unifier 효과 카드 배경",
  },
];

function UnifierMenuSection({ id }: UnifierMenuSectionProps) {
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
          <h2 className="ppm-menu-title">Primavera Unifier</h2>
          <p className="ppm-menu-subcopy">비용·계약·변경(Change) 업무에서 승인·결재·통제 프로세스를 담당하는 통제 관리 영역입니다.</p>
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

        </div>
      </div>
    </section>
  );
}

export default UnifierMenuSection;
