"use client";

import { FC, useEffect, useState } from "react";

import GridContainer from "@/components/container";

import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import CTAButton from "@/components/cta-button";

export type FeatureProps = SliceComponentProps<Content.FeatureSlice>;

const Feature: FC<FeatureProps> = ({ slice }) => {
  // const [animationData, setAnimationData] = useState(null);

  // const backgroundAnimation = slice.primary.background_animation;

  // useEffect(() => {
  //   if (!isFilled.linkToMedia(backgroundAnimation)) return;

  //   fetch(backgroundAnimation.url)
  //     .then((res) => res.json())
  //     .then(setAnimationData);
  // }, [backgroundAnimation]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[url('/assets/background-purple.png')] w-full inset-0 relative bg-no-repeat bg-cover py-8"
    >
      <GridContainer>
        <div className="col-start-1 col-end-7 flex">
          <PrismicNextImage
            className=" col-start-1 col-end-7"
            field={slice.primary.image}
          />
        </div>
        <div className="flex flex-col justify-center gap-10 col-start-8 col-end-13">
          <div className="flex flex-col gap-3 col-start-8 text-white">
            <div className="font-baloo text-[2rem] font-semibold leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="font-nunito text-[1.25rem] leading-snug">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <CTAButton href="#" variant="white">
              Seja cliente Lex
            </CTAButton>
            <CTAButton href="#" variant="white">
              Trabalhe com a Lex
            </CTAButton>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default Feature;
