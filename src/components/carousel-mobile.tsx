"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type CarouselItem = Content.CarouselSectionSliceDefaultPrimaryCarouselItem;

type CarouselMobileProps = {
  items: CarouselItem[];
};

export default function CarouselMobile({ items }: CarouselMobileProps) {
  return (
    <ul className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative h-[320px] max-w-[65%] snap-center rounded-[28px] overflow-hidden shrink-0 first:ml-[16px] last:mr-[16px]"
        >
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
        </li>
      ))}
    </ul>
  );
}
