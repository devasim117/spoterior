import { Sparkle } from "lucide-react";
import { marqueeItems } from "@/lib/siteContent";

/**
 * Infinite scrolling text band. The item list is rendered twice so the
 * translateX(-50%) keyframe loops seamlessly.
 *
 * Server Component — animation is pure CSS.
 */
const Marquee = () => {
  return (
    <div className="marquee" aria-label="Studio highlights">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div
            className="marquee-group"
            key={group}
            aria-hidden={group === 1 ? "true" : undefined}>
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={`${group}-${item}`}>
                {item}
                <Sparkle size={16} className="marquee-star" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
