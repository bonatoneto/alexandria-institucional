"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useRef } from "react";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion, useInView } from "motion/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

type CarouselItem = Content.CarouselSectionSliceDefaultPrimaryCarouselItem;

type CarouselCardsProps = {
  items: CarouselItem[];
};

// Aguarda a animação mais longa terminar (delay 2s + duration 0.6s + margem)
const AUTOPLAY_DELAY_MS = 2800;

// initialSlide={1} faz: index 0 = esquerda, 1 = centro, 2 = direita
const ENTRY_DELAYS = [1, 1.5, 2];

export default function Carousel({ items }: CarouselCardsProps) {
  const containerRef = useRef(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const slides = [...items, ...items];

  useEffect(() => {
    if (!isInView) return;
    const swiper = swiperRef.current;
    if (!swiper) return;

    const timer = setTimeout(() => swiper.autoplay.start(), AUTOPLAY_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[424px] overflow-x-visible overflow-y-hidden [&_.swiper]:overflow-visible [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:transition-[width] [&_.swiper-slide]:duration-300 [&_.swiper-slide]:!h-[424px] [&_.swiper-slide]:!flex [&_.swiper-slide]:!items-center [&_.swiper-slide-prev]:!w-[322px] [&_.swiper-slide-prev_.card]:h-[424px] [&_.swiper-slide-prev_.card]:w-full [&_.description]:hidden [&_.swiper-slide-prev_.description]:block z-20 relative"
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        loop={true}
        centeredSlides={true}
        observer={true}
        observeParents={true}
        speed={600}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        initialSlide={1}
        touchStartPreventDefault={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop();
        }}
      >
        {slides.map((item, index) => {
          const entryDelay = ENTRY_DELAYS[index];

          return (
            <SwiperSlide key={index}>
              <motion.div
                initial={entryDelay ? { opacity: 0, y: 60 } : false}
                animate={
                  entryDelay && isInView ? { opacity: 1, y: 0 } : undefined
                }
                transition={
                  entryDelay
                    ? { duration: 0.6, delay: entryDelay, ease: "easeOut" }
                    : undefined
                }
                className="w-full h-full flex items-center justify-center"
              >
                <div className="relative card !min-h-[318px] h-[318px] w-full rounded-[28px] overflow-hidden transition-[height,min-height,width] duration-300">
                  <PrismicNextImage
                    field={item.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-10 flex flex-col justify-end py-10 px-6 text-white bg-black/20">
                    <div className="font-baloo font-bold text-2xl">
                      <PrismicRichText field={item.image_title} />
                    </div>
                    <div className="font-nunito text-base description">
                      <PrismicRichText field={item.image_description} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
