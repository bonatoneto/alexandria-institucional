import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";
import MockupOrbit from "@/components/mockup-orbit";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type MockupSectionProps =
  SliceComponentProps<Content.MockupSectionSlice>;

const MockupSection: FC<MockupSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-13 md:py-0 md:h-[100dvh] flex justify-center items-center"
    >
      <GridContainer className="hidden md:grid">
        <div className="col-start-1 col-end-6 flex flex-col gap-5 text-dark">
          <AnimateOnView>
            <div className="font-baloo font-bold text-5xl leading-none">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Divider />
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <div className="font-nunito text-2xl font-bold mt-5">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.3}>
            <div className="font-nunito text-lg">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
        </div>
        <div className="col-start-7 col-end-13">
          <MockupOrbit
            primary={slice.primary.mockup_image_primary}
            secondary={slice.primary.mockup_image_secondary}
          />
        </div>
      </GridContainer>
      <GridContainer className="flex flex-col gap-5 items-center md:hidden">
        <AnimateOnView>
          <div className="font-baloo font-bold text-5xl leading-none text-center text-dark">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </AnimateOnView>
        <AnimateOnView delay={0.1}>
          <Divider />
        </AnimateOnView>
        <AnimateOnView delay={0.2}>
          <div className="font-baloo font-bold text-lg leading-none text-center text-dark">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
        </AnimateOnView>
        <AnimateOnView delay={0.3}>
          <div className="font-nunito text-lg text-center text-dark">
            <PrismicRichText field={slice.primary.text} />
          </div>
        </AnimateOnView>
        <MockupOrbit
          primary={slice.primary.mockup_image_primary}
          secondary={slice.primary.mockup_image_secondary}
        />
      </GridContainer>
    </section>
  );
};

export default MockupSection;
