import { FC } from "react";

import GridContainer from "@/components/container";

import { asLink, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const videoUrl = asLink(slice.primary.background_video);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-dvh w-full overflow-hidden"
    >
      <video
        src={videoUrl ?? undefined}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 h-full w-full bg-black opacity-20" />
      <GridContainer className="relative z-10 min-h-dvh">
        <div className="flex flex-col justify-center h-full gap-6 text-white col-start-2 col-span-5 mr-10">
          <div className="font-baloo text-5xl font-bold">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="font-nunito text-lg">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default Hero;
