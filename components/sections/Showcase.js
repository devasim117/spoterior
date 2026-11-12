"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { showcase } from "@/lib/siteContent";

/**
 * Client Component: the horizontal track, arrow buttons and
 * wheel-to-horizontal scrolling all need DOM refs and browser events.
 */
const Showcase = () => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  const scrollBy = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;

    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });

    /* Preserve the original mouse-wheel-to-horizontal-scroll behaviour, but
       only capture the gesture while the track can still move that way — so
       normal page scrolling is never trapped. */
    const onWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      const atLeft = el.scrollLeft <= 0;
      const atRight = el.scrollLeft >= max - 1;
      const canForward = event.deltaY > 0 && !atRight;
      const canBack = event.deltaY < 0 && !atLeft;
      if (canForward || canBack) {
        event.preventDefault();
        el.scrollLeft += event.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    const onResize = () => updateEdges();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", updateEdges);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
    };
  }, [updateEdges]);

  return (
    <section className="section section--dark showcase" id="showcase">
      <div className="container">
        <div className="showcase-head">
          <SectionHeading
            eyebrow={showcase.eyebrow}
            title={showcase.title}
            subtitle={showcase.subtitle}
            align="start"
            theme="dark"
          />

          <div className="showcase-controls">
            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label="Scroll projects left">
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="scroll-button"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label="Scroll projects right">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="showcase-track"
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-label="Project showcase, scrollable">
        {showcase.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 78vw, 340px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="project-body">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="container">
        <p className="showcase-hint">Scroll, drag or use the arrows to explore</p>
      </div>
    </section>
  );
};

export default Showcase;
