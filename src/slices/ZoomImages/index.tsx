"use client";

import { FC, useState } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type ZoomImagesProps = SliceComponentProps<Content.ZoomImagesSlice>;

const ZoomImages: FC<ZoomImagesProps> = ({ slice }) => {
  const [activeCard, setActiveCard] = useState<number>(0);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-14 md:py-22"
    >
      {/* Desktop */}
      <GridContainer className="hidden md:grid">
        <div className="flex flex-col gap-5 col-start-1 col-end-5">
          <AnimateOnView>
            <div className="font-baloo text-[2rem] text-dark font-semibold md:pt-9">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.15} className="w-full flex justify-start">
            <Divider />
          </AnimateOnView>
          <AnimateOnView delay={0.3}>
            <div className="font-nunito text-dark text-lg tracking-[0.54px]">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
        </div>
        <ul className="col-start-6 col-end-13 flex items-center justify-end gap-4">
          {slice.primary.images.map((item, index) => (
            <AnimateOnView key={index} delay={1.15 + index * 0.1}>
              <li
                key={index}
                className="relative overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  width: activeCard === index ? "322px" : "242px",
                  height: activeCard === index ? "424px" : "318px",
                }}
                onMouseEnter={() => setActiveCard(index)}
              >
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-full object-cover rounded-4xl"
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-4xl"></div>
                <div className="absolute inset-0 w-full flex flex-col justify-end gap-1 px-6 py-12 text-white">
                  <div className="font-baloo text-2xl font-bold">
                    <PrismicRichText field={item.image_title} />
                  </div>
                  {activeCard === index && (
                    <div className="font-nunito text-base tracking-[0.48px]">
                      <PrismicRichText field={item.image_description} />
                    </div>
                  )}
                </div>
              </li>
            </AnimateOnView>
          ))}
        </ul>
      </GridContainer>

      {/* Mobile */}
      <GridContainer className="flex flex-col md:hidden">
        <div className="flex flex-col items-center gap-8">
          <AnimateOnView>
            <div className="font-baloo text-[1.75rem] text-dark leading-[100%] font-semibold md:pt-9 text-center">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.1} className="w-full flex justify-center">
            <Divider />
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <div className="font-nunito text-dark text-lg tracking-[0.54px] text-center">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
        </div>
        <ul className="flex flex-col items-center gap-4 mt-4">
          {slice.primary.images.map((item, index) => (
            <AnimateOnView key={index} delay={0.3 + index * 0.1}>
              <li
                key={index}
                className="relative overflow-hidden  h-[284px] w-full transition-all duration-300 ease-in-out"
              >
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-full object-cover rounded-4xl"
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-4xl"></div>
                <div className="absolute inset-0 w-full flex flex-col justify-end gap-1 px-6 py-12 text-white">
                  <div className="font-baloo text-2xl font-bold">
                    <PrismicRichText field={item.image_title} />
                  </div>
                  <div className="font-nunito text-base tracking-[0.48px]">
                    <PrismicRichText field={item.image_description} />
                  </div>
                </div>
              </li>
            </AnimateOnView>
          ))}
        </ul>
      </GridContainer>
    </section>
  );
};

export default ZoomImages;
