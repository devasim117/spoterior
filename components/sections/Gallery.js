import Image from "next/image";
import { Plus } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { gallery } from "@/lib/siteContent";

const GALLERY_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

/** Server Component — portfolio images are server-rendered and lazily loaded. */
const Gallery = () => {
  return (
    <section className="section section--light gallery" id="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          subtitle={gallery.subtitle}
        />

        <div className="gallery-grid">
          {gallery.images.map((image, index) => (
            <figure
              className={`gallery-item item${index + 1}`}
              key={image.src + index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={GALLERY_SIZES}
                style={{ objectFit: "cover" }}
              />
              <figcaption className="gallery-caption">
                <span>{image.alt}</span>
                <span className="gallery-plus" aria-hidden="true">
                  <Plus size={16} />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <Reveal className="gallery-foot">
          <a href="#showcase" className="btn btn-outline-dark">
            View Full Showcase
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Gallery;
