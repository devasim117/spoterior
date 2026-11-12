import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { hero } from "@/lib/siteContent";

/** Server Component — the hero copy is fully present in the initial HTML. */
const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow--a" aria-hidden="true" />
      <div className="hero-glow hero-glow--b" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <Reveal>
            <span className="eyebrow eyebrow--dark">
              <span className="eyebrow-dot" />
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="hero-title">
              Luxury Interior Design for{" "}
              <em className="text-gold-gradient">Modern Living</em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="hero-text">{hero.description}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="hero-actions">
              <a href={hero.primaryCta.href} className="btn btn-primary">
                {hero.primaryCta.label}
                <ArrowRight size={18} className="btn-icon" />
              </a>
              <a href={hero.secondaryCta.href} className="btn btn-ghost">
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="hero-highlight">
              <span className="hero-highlight-line" />
              {hero.highlight}
            </p>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={200}>
          <div className="hero-frame">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{ objectFit: "cover" }}
            />
            <span className="hero-frame-ring" aria-hidden="true" />
          </div>

          <div className="hero-card">
            <div className="hero-card-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div className="hero-card-body">
              <strong>{hero.floatingCard.value}</strong>
              <div>
                <span>{hero.floatingCard.label}</span>
                <em>{hero.floatingCard.note}</em>
              </div>
            </div>
          </div>

          <div className="hero-badge-float" aria-hidden="true">
            <span>Est.</span>
            <strong>1994</strong>
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default Hero;
