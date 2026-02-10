import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import type { EppmHomeMenuCard } from "../../data/eppmHomeMenuCards";

interface HoverExpandCardProps {
  item: EppmHomeMenuCard;
  isActive: boolean;
  onActivate: () => void;
  onAttemptNavigate: (event: MouseEvent<HTMLAnchorElement>) => void;
}

function HoverExpandCard({
  item,
  isActive,
  onActivate,
  onAttemptNavigate,
}: HoverExpandCardProps) {
  return (
    <article className={`eppm-menu-card ${isActive ? "is-active" : ""}`}>
      <div
        className="eppm-menu-card-image"
        style={{ backgroundImage: `url(${item.imageSrc})` }}
        role="img"
        aria-label={`${item.title} 배경 이미지`}
      />

      <Link
        to={item.href}
        className="eppm-menu-card-link"
        onMouseEnter={onActivate}
        onFocus={onActivate}
        onClick={onAttemptNavigate}
        aria-label={`${item.title} 상세 페이지로 이동`}
      >
        <span className="eppm-menu-card-overlay" aria-hidden="true" />

        <div className="eppm-menu-card-content">
          <h3 className="eppm-menu-card-title">{item.title}</h3>
          <p className="eppm-menu-card-description">{item.description}</p>
        </div>

        <span className="eppm-menu-card-cta" aria-hidden="true">
          ↗
        </span>
      </Link>
    </article>
  );
}

export default HoverExpandCard;
