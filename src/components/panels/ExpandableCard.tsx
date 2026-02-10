import { Link } from "react-router-dom";
import type { MouseEvent } from "react";

export interface ExpandableCardItem {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

interface ExpandableCardProps {
  item: ExpandableCardItem;
  isActive: boolean;
  onActivate: () => void;
  onAttemptNavigate: (event: MouseEvent<HTMLAnchorElement>) => void;
}

function ExpandableCard({
  item,
  isActive,
  onActivate,
  onAttemptNavigate,
}: ExpandableCardProps) {
  return (
    <article className={`ppm-menu-card ${isActive ? "is-active" : ""}`}>
      <div
        className="ppm-menu-card-image"
        style={{ backgroundImage: `url(${item.image})` }}
        role="img"
        aria-label={item.imageAlt}
      />

      <Link
        to={item.href}
        className="ppm-menu-card-link"
        onMouseEnter={onActivate}
        onFocus={onActivate}
        onClick={onAttemptNavigate}
        aria-label={`${item.title} 상세로 이동`}
      >
        <span className="ppm-menu-card-bottom-overlay" aria-hidden="true" />

        <div className="ppm-menu-card-content">
          <h3 className="ppm-menu-card-title">{item.title}</h3>
          <p className="ppm-menu-card-description">{item.description}</p>
        </div>

        <span className="ppm-menu-card-cta" aria-hidden="true">
          ↗
        </span>
      </Link>
    </article>
  );
}

export default ExpandableCard;
