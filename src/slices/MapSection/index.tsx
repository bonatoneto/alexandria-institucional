import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type MapSectionProps = SliceComponentProps<Content.MapSectionSlice>;

const MapSection: FC<MapSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GridContainer className="rounded-b-4xl relative z-10 bg-white">
        <div className="flex flex-col col-start-1 col-end-13 items-center gap-8 md:gap-6 text-dark text-center py-14 md:pt-32 md:pb-24">
          <AnimateOnView>
            <div className="font-baloo text-4xl md:text-5xl font-semibold leading-[100%]">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.1} className="w-full flex justify-center">
            <Divider />
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <div className="font-nunito text-lg">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </AnimateOnView>
        </div>
      </GridContainer>
      <div className="-mt-10 relative">
        <iframe
          src={`https://www.google.com/maps?q=${slice.primary.latitude},${slice.primary.longitude}&z=15&output=embed`}
          width="100%"
          height="382px"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default MapSection;
