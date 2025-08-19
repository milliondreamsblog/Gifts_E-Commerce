import React, { useRef, useEffect, useState } from "react";

export default function Slider({
  slides = [],
  slideWidthPercent = 75,
  gap = 4,
  autoplay = false,
  autoplayInterval = 3000,
  className = "",
}) {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const gapClass = `gap-${gap}`;

  // Compute scroll amount for one slide
  const step = () => {
    const el = trackRef.current;
    if (!el) return 0;
    return el.clientWidth * (slideWidthPercent / 100);
  };

  const next = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: step(), behavior: "smooth" });
  };

  const prev = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: -step(), behavior: "smooth" });
  };

  // Detect active (center) slide
  useEffect(() => {
    const observers = [];

    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(idx);
            }
          });
        },
        {
          root: trackRef.current,
          threshold: 0.6, // ~60% visible means "active"
        }
      );

      observer.observe(slide);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [slides]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      if (!isHovered) next();
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [autoplay, autoplayInterval, isHovered]);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sidePadding = (100 - slideWidthPercent) / 2;

  return (
    <div className={`relative ${className}`}>
      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ›
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className={`overflow-x-auto scroll-smooth snap-x snap-mandatory flex items-start ${gapClass} py-6`}
        style={{
          paddingLeft: `${sidePadding}%`,
          paddingRight: `${sidePadding}%`,
          scrollbarWidth: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((s, idx) => (
          <article
            key={idx}
            ref={(el) => (slideRefs.current[idx] = el)}
            className={`snap-center flex-shrink-0 transition-transform duration-300 ${
              idx === activeIndex ? "scale-100" : "scale-95 opacity-70"
            }`}
            style={{
              flexBasis: `${slideWidthPercent}%`,
              maxWidth: `${slideWidthPercent}%`,
            }}
          >
            <SlideCard {...s} showButton={idx === activeIndex} />
          </article>
        ))}
      </div>
    </div>
  );
}

function SlideCard({ image, title, subtitle, cta, gradient = false, showButton }) {
  return (
    <div className="mx-2 rounded-xl overflow-hidden h-56 md:h-64 shadow-lg relative">
      {gradient ? (
        <div className="h-full w-full p-6 bg-gradient-to-r from-amber-400 to-orange-300 flex items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-4 text-sm">{subtitle}</p>
            {showButton && cta && (
              <button className="bg-[#A21114] text-white px-4 py-2 rounded-md">
                {cta}
              </button>
            )}
          </div>
          {image && (
            <div className="hidden md:block w-1/3">
              <img src={image} alt="" className="object-contain h-40 w-full" />
            </div>
          )}
        </div>
      ) : (
            <div
                className="h-full w-full relative flex items-center justify-center text-center"
                style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* dark overlay for contrast */}

                <div className="relative z-10 p-4">
                {title && <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>}
                {subtitle && <p className="text-sm text-white mb-4">{subtitle}</p>}
                {showButton && cta && (
                    <button className="bg-[#A21114] text-white px-4 py-2 rounded-md">
                    {cta}
                    </button>
                )}
                </div>
            </div>
            )
        }
    </div>
  );
}
