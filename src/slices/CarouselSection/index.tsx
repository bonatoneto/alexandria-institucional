import { FC } from "react";

// import CarouselCards from "@/components/carousel-cards";
import Carousel from "@/components/carousel";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CarouselSectionProps =
  SliceComponentProps<Content.CarouselSectionSlice>;

const CarouselSection: FC<CarouselSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ backgroundImage: `url(${slice.primary.backgorund_image.url})` }}
      className="relative overflow-x-clip overflow-y-visible bg-center bg-cover w-full bg-no-repeat max-h-90"
    >
      <GridContainer className="items-center !pr-0">
        <div className="flex flex-col gap-5 text-white col-start-1 col-end-6">
          <div className="font-baloo text-5xl font-bold">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <Divider variant="solid" />
          <div className="font-nunito text-lg">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className="col-start-7 col-end-13 overflow-visible -mt-8">
          <Carousel items={slice.primary.carousel} />
        </div>
      </GridContainer>
    </section>
  );
};

export default CarouselSection;
