function CoreDocsCard({ icon, title, description, className = "", cardRef }) {
  return (
    <article className={`tm-core-docs-card card glass ${className}`.trim()} ref={cardRef}>
      <div className="tm-core-docs-icon-shell">{icon}</div>
      <h3 className="tm-core-docs-card-title">{title}</h3>
      <p className="tm-core-docs-card-desc">{description}</p>
    </article>
  );
}

export default CoreDocsCard;
