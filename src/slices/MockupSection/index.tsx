"use client";

import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";
import MockupOrbit from "@/components/mockup-orbit";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type FeatureProps = SliceComponentProps<Content.FeatureSlice>;

const Feature: FC<FeatureProps> = ({ slice }) => {
  return (
    <section
      id="nosso-ecossistema"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[url('/assets/background-purple.png')] w-full inset-0 relative bg-no-repeat bg-top md:bg-center bg-cover md:py-24 pb-60"
    >
      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden mx-4 pt-0">
        <div className="flex flex-col gap-8 text-white text-center mt-8">
          <AnimateOnView delay={0.15}>
            <div className="font-baloo text-[2rem] font-semibold leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.3} className="flex w-full justify-center">
            <Divider />
          </AnimateOnView>
          <AnimateOnView delay={0.45}>
            <div className="font-nunito text-[1.25rem] leading-snug">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </AnimateOnView>
        </div>
        <div className="absolute top-2/3 w-2/3 min-w-[460px]">
          <MockupOrbit
            primary={slice.primary.mockup_image_primary}
            secondary={slice.primary.mockup_image_secondary}
          />
        </div>
      </div>
      {/* Desktop */}
      <GridContainer className="hidden md:grid">
        <div className="col-start-2 col-end-6 flex">
          <div className="flex flex-col justify-center items-center gap-10 col-start-8 col-end-13">
            <div className="flex flex-col gap-3 text-white">
              <AnimateOnView delay={0.15}>
                <div className="font-baloo text-[4rem] font-semibold leading-tight">
                  <PrismicRichText field={slice.primary.title} />
                </div>
              </AnimateOnView>
              <AnimateOnView delay={0.3}>
                <Divider />
              </AnimateOnView>
              <AnimateOnView delay={0.45}>
                <div className="font-nunito text-[1.25rem] leading-snug">
                  <PrismicRichText field={slice.primary.description} />
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
        <div className="col-start-8 col-end-13 w-full ">
          <MockupOrbit
            primary={slice.primary.mockup_image_primary}
            secondary={slice.primary.mockup_image_secondary}
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default Feature;
