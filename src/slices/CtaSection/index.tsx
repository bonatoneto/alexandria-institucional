import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import CTAButton from "@/components/cta-button";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection: FC<CtaSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
    >
      {/* Desktop */}
      <GridContainer className="hidden md:grid">
        <div className="flex flex-col gap-12 col-start-3 col-end-10 items-center text-center">
          <div className="flex flex-col items-center gap-5">
            <AnimateOnView>
              <div className="flex items-center justify-center gap-3 w-full">
                <div className="font-baloo text-5xl font-semibold leading-[100%] text-dark text-nowrap ">
                  <PrismicRichText field={slice.primary.title} />
                </div>
                <PrismicNextImage
                  field={slice.primary.image}
                  className="inline-block w-auto h-full min-h-10"
                />
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.15}>
              <div className="font-nunito font-lg text-dark">
                <PrismicRichText field={slice.primary.text} />
              </div>
            </AnimateOnView>
          </div>
          <AnimateOnView
            delay={0.3}
            className="flex w-full justify-center max-w-[331px]"
          >
            <CTAButton variant="gradient" href="#">
              Saiba mais
            </CTAButton>
          </AnimateOnView>
        </div>
      </GridContainer>
      {/* Mobile */}
      <GridContainer className="flex md:hidden pt-60">
        <div className="flex flex-col items-center gap-8 text-center">
          <AnimateOnView>
            <div className="flex flex-col gap-2 items-center font-baloo text-4xl font-semibold leading-[100%] text-dark">
              <PrismicRichText field={slice.primary.title} />
              <PrismicNextImage
                field={slice.primary.image}
                className="max-h-9"
              />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.1} className="w-full flex justify-center">
            <Divider />
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <div className="font-nunito font-lg text-dark text-center tracking-[0.54px]">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.3} className="w-full">
            <CTAButton variant="purple" href="#">
              Conheça a Lex
            </CTAButton>
          </AnimateOnView>
        </div>
      </GridContainer>
    </section>
  );
};

export default CtaSection;
