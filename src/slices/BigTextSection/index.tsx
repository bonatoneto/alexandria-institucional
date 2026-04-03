import React, { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import CTAButton from "@/components/cta-button";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

const textComponents = {
  list: ({ children }: { children: React.ReactNode }) => (
    <ul className="flex flex-col md:flex-row  gap-1">{children}</ul>
  ),
};

export type BigTextSectionProps =
  SliceComponentProps<Content.BigTextSectionSlice>;

const BigTextSection: FC<BigTextSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        backgroundImage: `url(${slice.primary.background_image.url})`,
      }}
      className="bg-cover bg-center py-12 md:py-24 flex items-center justify-center -mt-16"
    >
      <GridContainer>
        <div className="flex flex-col col-start-1 col-end-13 items-center gap-8 md:gap-6 pt-16 md:pb-0">
          <div className="flex flex-col gap-5 items-center md:gap-2">
            <AnimateOnView>
              <div className="text-[2rem] md:leading-[120%] md:text-5xl text-dark font-semibold text-center font-baloo leading-tight">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.2}>
              <div className="flex font-nunito text-lg text-center text-dark">
                <PrismicRichText
                  field={slice.primary.text}
                  components={textComponents}
                />
              </div>
            </AnimateOnView>
          </div>
          <AnimateOnView
            delay={0.4}
            className="w-full max-w-[331px] flex justify-center"
          >
            <CTAButton href="#" variant="gradient">
              Conheca a Lex
            </CTAButton>
          </AnimateOnView>
        </div>
      </GridContainer>
    </section>
  );
};

export default BigTextSection;
