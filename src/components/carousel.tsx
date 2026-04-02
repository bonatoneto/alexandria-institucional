"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { motion } from "motion/react";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type CarouselItem = Content.CarouselSectionSliceDefaultPrimaryCarouselItem;

type CarouselCardsProps = {
  items: CarouselItem[];
};

export default function Carousel({ items }: CarouselCardsProps) {
  return (
    <div className="w-full h-[424px] overflow-x-visible overflow-y-hidden [&_.swiper]:overflow-visible [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:transition-[width] [&_.swiper-slide]:duration-300 [&_.swiper-slide]:!h-[424px] [&_.swiper-slide]:!flex [&_.swiper-slide]:!items-center [&_.swiper-slide-prev]:!w-[322px] [&_.swiper-slide-prev_.card]:h-[424px] [&_.swiper-slide-prev_.card]:w-full [&_.description]:hidden [&_.swiper-slide-prev_.description]:block z-20 relative">
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
        touchStartPreventDefault={false}
      >
        {[...items, ...items].map((item, index) => {
          const itemIndex = index % items.length;

          // Ordem de entrada: esquerda (último) → centro (primeiro) → direita (segundo)
          // Para 3 items: index 2 (esq) = 0s, index 0 (centro) = 0.4s, index 1 (dir) = 0.65s
          let delay = 0;
          if (itemIndex === items.length - 1) {
            // Card da esquerda entra primeiro
            delay = 0;
          } else if (itemIndex === 0) {
            // Card do centro entra depois
            delay = 0.4;
          } else {
            // Cards da direita entram por último
            delay = 0.4 + itemIndex * 0.25;
          }

          return (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay,
                  ease: "easeOut",
                }}
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
