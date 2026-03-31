"use client";

import { useEffect, useRef } from "react";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type MockupOrbitProps = {
  primary: ImageField;
  secondary: ImageField;
};

export default function MockupOrbit({ primary, secondary }: MockupOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const phone1Ref = useRef<HTMLDivElement>(null);
  const phone2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state before animation
      gsap.set(phone1Ref.current, { y: -60, x: -40, scale: 0.85, opacity: 0 });
      gsap.set(phone2Ref.current, { y: 60, x: 40, scale: 0.85, opacity: 0 });

      // Entrance animation triggered on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(phone1Ref.current, {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "expo.out",
      }).to(
        phone2Ref.current,
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 2.4,
          ease: "expo.out",
        },
        "-=1.4",
      );

      // Continuous float loop after entrance
      tl.add(() => {
        gsap.to(phone1Ref.current, {
          y: -14,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(phone2Ref.current, {
          y: 14,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={phone1Ref}
        className="absolute left-[10%] xl:left-[20%] -top-40 w-[max(280px,42%)] z-20"
      >
        <PrismicNextImage
          field={primary}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      <div
        ref={phone2Ref}
        className="absolute right-[0%] xl:-top-32 w-[max(280px,42%)] z-10"
      >
        <PrismicNextImage
          field={secondary}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
