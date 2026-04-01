"use client";

import "swiper/css";
import "swiper/css/autoplay";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type CarouselItem = Content.CarouselSectionSliceDefaultPrimaryCarouselItem;

type CarouselMobileProps = {
  items: CarouselItem[];
};

export default function CarouselMobile({ items }: CarouselMobileProps) {
  return (
    <div className="w-full py-4 [&_.swiper]:overflow-visible">
      <Swiper
        slidesPerView={1.4}
        spaceBetween={12}
        centeredSlides={true}
        loop={true}
        speed={600}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        touchStartPreventDefault={false}
      >
        {[...items, ...items].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[320px] w-full rounded-[28px] overflow-hidden">
              <PrismicNextImage
                field={item.image}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end py-8 px-5 text-white bg-black/20">
                <div className="font-baloo font-bold text-xl">
                  <PrismicRichText field={item.image_title} />
                </div>
                <div className="font-nunito text-sm">
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
