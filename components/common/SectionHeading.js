import Reveal from "@/components/common/Reveal";

/**
 * Shared section header: small eyebrow label, display title and optional
 * supporting line. Used across every section for a consistent rhythm.
 *
 * Server Component — purely presentational.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  titleId,
}) => {
  return (
    <Reveal className={`section-heading section-heading--${align} is-${theme}`}>
      {eyebrow && (
        <span className={`eyebrow${theme === "dark" ? " eyebrow--dark" : ""}`}>
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="section-title" id={titleId}>
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
};

export default SectionHeading;
