"use client";

import "swiper/css";
import "swiper/css/autoplay";

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
  const loopedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-visible [&_.swiper]:overflow-visible [&_.swiper-wrapper]:items-center [&_.swiper-slide-prev]:!w-[322px] [&_.swiper-slide-prev_.card]:h-[424px] [&_.swiper-slide-prev_.card]:w-full [&_.description]:hidden [&_.swiper-slide-prev_.description]:block">
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        loop={true}
        centeredSlides={true}
        observer={true}
        observeParents={true}
        initialSlide={items.length}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {loopedItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative card h-[318px] w-full rounded-2xl overflow-hidden transition-all duration-300">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
