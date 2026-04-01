"use client";

import { FC } from "react";

import GridContainer from "@/components/container";
import CTAButton from "@/components/cta-button";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type FeatureProps = SliceComponentProps<Content.FeatureSlice>;

const Feature: FC<FeatureProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[url('/assets/background-purple.png')] w-full inset-0 relative bg-no-repeat bg-cover py-14 md:py-8"
    >
      <div className="flex flex-col items-center md:hidden mx-4 pt-0">
        <div className="relative w-[70%] aspect-square -mt-[35%] rounded-4xl overflow-hidden shrink-0">
          <PrismicNextImage
            className="w-full h-full object-cover"
            field={slice.primary.image}
          />
        </div>
        <div className="flex flex-col gap-3 text-white text-center sm:pt-8">
          <div className="font-baloo text-[2rem] font-semibold leading-tight">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="font-nunito text-[1.25rem] leading-snug">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full mt-8">
          <CTAButton href="#" variant="white">
            Conheça a Lex
          </CTAButton>
          {/* <CTAButton href="#" variant="white">
            Trabalhe com a Lex
          </CTAButton> */}
        </div>
      </div>

      <GridContainer className="hidden md:grid">
        <div className="col-start-1 col-end-7 flex">
          <PrismicNextImage
            className="rounded-2xl"
            field={slice.primary.image}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 col-start-8 col-end-13 text-center">
          <div className="flex flex-col gap-3 text-white">
            <div className="font-baloo text-[2rem] font-semibold leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="font-nunito text-[1.25rem] leading-snug">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
          <div className="flex gap-5 items-center w-full">
            <CTAButton href="#" variant="white" className="max-w-1/2">
              Conheça a Lex
            </CTAButton>
            {/* <CTAButton href="#" variant="white" className="max-w-1/2">
              Trabalhe com a Lex
            </CTAButton> */}
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default Feature;
