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
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.set(phone1Ref.current, {
        y: isMobile ? 40 : -60,
        x: isMobile ? -20 : -40,
        scale: 0.85,
        opacity: 0,
      });
      gsap.set(phone2Ref.current, {
        y: isMobile ? 40 : 60,
        x: isMobile ? 20 : 40,
        scale: 0.85,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? "top 90%" : "top 75%",
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
    <div
      ref={containerRef}
      className="relative flex w-full min-h-[400px] items-start justify-center md:block md:min-h-0"
    >
      <div
        ref={phone1Ref}
        className="relative z-20 w-[45%] -mr-[5%] md:absolute md:mr-0 md:w-[max(280px,42%)] md:left-[10%] xl:left-[20%] md:-top-40"
      >
        <PrismicNextImage field={primary} className="w-full h-auto" />
      </div>
      <div
        ref={phone2Ref}
        className="relative z-10 w-[45%] -ml-[5%] mt-16 md:mt-0 md:absolute md:ml-0 md:w-[max(280px,42%)] md:right-0 xl:md:-top-32"
      >
        <PrismicNextImage field={secondary} className="w-full h-auto " />
      </div>
    </div>
  );
}
