import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/lib/siteContent";

/** Server Component — the services copy is server-rendered. */
const Features = () => {
  return (
    <section className="section section--light services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Crafted Around You"
          subtitle="From the first conversation to the final styling, every stage is handled in-house by a dedicated design team."
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                className="service-card"
                delay={index * 90}
                key={service.title}>
                <span className="service-icon">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
