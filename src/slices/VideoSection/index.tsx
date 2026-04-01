import { FC } from "react";

import Divider from "@/components/divider";

import { asLink, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type VideoSectionProps = SliceComponentProps<Content.VideoSectionSlice>;

const VideoSection: FC<VideoSectionProps> = ({ slice }) => {
  const videoUrl = asLink(slice.primary.video);

  console.log(videoUrl);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-dvh w-full overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoUrl ?? undefined}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 h-full w-full bg-black opacity-20" />
      <div className="relative z-10 min-h-dvh flex flex-col gap-5 md:gap-8 items-center justify-center text-white">
        <div className="font-baloo text-4xl leading-[100%] md:text-[4rem] font-bold text-center md:leading-none">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <Divider />
        <div className="font-nunito text-lg md:text-2xl md:font-semibold text-center">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
