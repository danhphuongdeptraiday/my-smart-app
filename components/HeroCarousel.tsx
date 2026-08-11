"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  url: string;
  alt: string;
};

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {slides.map((slide, index) => (
        <Image
          key={`${slide.url}-${index}`}
          src={slide.url}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-3 md:bottom-10">
          {slides.map((slide, index) => (
            <button
              key={`${slide.url}-dot-${index}`}
              type="button"
              aria-label={`Xem ảnh ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}
