import { FC } from "react";

import GridContainer from "@/components/container";
import CTAButton from "@/components/cta-button";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection: FC<CtaSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
    >
      <GridContainer>
        <div className="flex flex-col gap-5 col-start-1 col-end-6">
          <div className="font-baloo text-5xl font-semibold leading-[100%] text-dark">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="font-nunito font-lg text-dark">
            <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 col-start-9 col-end-13">
          {/* <CTAButton variant="gradient" href="#">
            Trabalhar com a Lex
          </CTAButton> */}
          <CTAButton variant="purple" href="#">
            Conheça a Lex
          </CTAButton>
        </div>
      </GridContainer>
    </section>
  );
};

export default CtaSection;
