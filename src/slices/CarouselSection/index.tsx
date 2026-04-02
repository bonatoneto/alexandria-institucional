import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import Carousel from "@/components/carousel";
import CarouselMobile from "@/components/carousel-mobile";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CarouselSectionProps =
  SliceComponentProps<Content.CarouselSectionSlice>;

const CarouselSection: FC<CarouselSectionProps> = ({ slice }) => {
  return (
    <section
      id="sobre"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Mobile */}
      <div className="flex flex-col md:hidden sm:mt-12">
        <div
          style={{
            backgroundImage: `url(${slice.primary.backgorund_image.url})`,
          }}
          className="flex flex-col items-center gap-8 text-white text-center bg-center bg-cover bg-no-repeat px-6 pt-12 pb-[240px]"
        >
          <AnimateOnView>
            <div className="font-baloo text-[2rem] font-bold leading-[100%]">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </AnimateOnView>
          <AnimateOnView delay={0.1} className="flex w-full justify-center">
            <Divider variant="solid" />
          </AnimateOnView>
          <AnimateOnView delay={0.2}>
            <div className="font-nunito text-lg">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </AnimateOnView>
        </div>
        <div className="overflow-x-clip -mt-[220px]">
          <CarouselMobile items={slice.primary.carousel} />
        </div>
      </div>

      {/* Desktop */}
      <div
        style={{
          backgroundImage: `url(${slice.primary.backgorund_image.url})`,
        }}
        className="hidden md:block relative overflow-x-clip overflow-y-visible bg-center bg-cover w-full bg-no-repeat max-h-90"
      >
        <GridContainer className="items-center !pr-0">
          <div className="flex flex-col gap-5 text-white col-start-1 col-end-6">
            <AnimateOnView>
              <div className="font-baloo text-5xl font-bold">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.1}>
              <Divider variant="solid" className="w-full flex justify-center" />
            </AnimateOnView>
            <AnimateOnView delay={0.2}>
              <div className="font-nunito text-lg">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </AnimateOnView>
          </div>
          <div className="col-start-7 col-end-13 overflow-visible -mt-8">
            <Carousel items={slice.primary.carousel} />
          </div>
        </GridContainer>
      </div>
    </section>
  );
};

export default CarouselSection;
