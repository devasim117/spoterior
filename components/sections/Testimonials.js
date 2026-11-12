import Image from "next/image";
import { Quote, Star } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/lib/siteContent";

const clientLogos = [
  "company_1.png",
  "company_4.png",
  "company_11.png",
  "company_6.png",
  "company_7.png",
  "company_8.png",
  "company_2.png",
  "company_3.png",
  "company_10.png",
  "company_9.png",
  "company_5.png",
];

/** Server Component — reviews and client logos are server-rendered. */
const Testimonials = () => {
  return (
    <section className="section section--light testimonials" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          subtitle="Real words from the homeowners and brands we have partnered with."
        />

        <div className="testimonials-grid">
          {testimonials.items.map((item, index) => (
            <Reveal
              className="testimonial-card"
              delay={index * 100}
              key={item.name}>
              <span className="testimonial-quote-icon" aria-hidden="true">
                <Quote size={26} strokeWidth={1.5} />
              </span>

              <div
                className="testimonial-stars"
                aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote>{item.quote}</blockquote>

              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <em>{item.role}</em>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="clients">
          <p className="clients-label">Trusted by leading brands &amp; partners</p>
          <ul className="clients-track">
            {clientLogos.map((logo) => (
              <li className="client-logo" key={logo}>
                <Image
                  src={`/images_brand_company/normalized/${logo}`}
                  alt=""
                  width={400}
                  height={120}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
