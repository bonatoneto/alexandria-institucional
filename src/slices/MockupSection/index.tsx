import { FC } from "react";

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
      className="h-[100dvh] flex justify-center items-center"
    >
      <GridContainer>
        <div className="col-start-1 col-end-6 flex flex-col gap-5 text-dark">
          <div className="font-baloo font-bold text-5xl leading-none">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <Divider />
          <div className="font-nunito text-2xl font-bold mt-5">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
          <div className="font-nunito text-lg">
            <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
        <div className="col-start-7 col-end-13">
          <MockupOrbit
            primary={slice.primary.mockup_image_primary}
            secondary={slice.primary.mockup_image_secondary}
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default MockupSection;
