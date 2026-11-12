import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { cta } from "@/lib/siteContent";

/** Server Component — the contact call-to-action is server-rendered. */
const CTA = () => {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <Reveal className="cta-panel">
          <div className="cta-glow" aria-hidden="true" />
          <span className="eyebrow eyebrow--dark">
            <span className="eyebrow-dot" />
            {cta.eyebrow}
          </span>
          <h2 className="cta-title">{cta.title}</h2>
          <p className="cta-text">{cta.text}</p>

          <div className="cta-actions">
            <a href={cta.primaryCta.href} className="btn btn-primary">
              {cta.primaryCta.label}
              <ArrowRight size={18} className="btn-icon" />
            </a>
            <a href={cta.secondaryCta.href} className="btn btn-ghost">
              {cta.secondaryCta.label}
            </a>
          </div>

          <p className="cta-contact">
            <Phone size={16} aria-hidden="true" />
            <span>
              Prefer to talk? Call{" "}
              <a href="tel:+10000000000">+91 9810046716</a>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
