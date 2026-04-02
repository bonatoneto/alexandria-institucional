import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import CTAButton from "@/components/cta-button";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
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
        <div className="flex flex-col gap-5 col-start-1 col-end-6">
          <AnimateOnView>
            <div className="font-baloo text-5xl font-semibold leading-[100%] text-dark">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.15}>
            <div className="font-nunito font-lg text-dark">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
        </div>
        <AnimateOnView delay={0.3} className="flex flex-col justify-center gap-5 col-start-9 col-end-13">
          <CTAButton variant="purple" href="#">
            Conheça a Lex
          </CTAButton>
        </AnimateOnView>
      </GridContainer>
      {/* Mobile */}
      <GridContainer className="flex md:hidden">
        <div className="flex flex-col items-center gap-8">
          <AnimateOnView>
            <div className="font-baloo text-4xl font-semibold leading-[100%] text-dark">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Divider />
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <div className="font-nunito font-lg text-dark text-center tracking-[0.54px]">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.3}>
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
