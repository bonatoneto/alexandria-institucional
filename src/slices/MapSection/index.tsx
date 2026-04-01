import { FC } from "react";

import GridContainer from "@/components/container";

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
        <div className="flex flex-col col-start-1 col-end-13 items-center gap-7 text-dark text-center pt-32 pb-24">
          <div className="font-baloo text-5xl font-semibold">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="font-nunito text-lg">
            <PrismicRichText field={slice.primary.text} />
          </div>
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
