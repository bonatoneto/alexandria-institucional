import { FC } from "react";

import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type BigTextSectionProps =
  SliceComponentProps<Content.BigTextSectionSlice>;

const BigTextSection: FC<BigTextSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        backgroundImage: `url(${slice.primary.background_image.url})`,
      }}
      className="bg-cover bg-center pt-12 pb-24 md:py-24 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8 md:gap-12 pb-24 sm:pb-48 md:pb-0">
        <div className="text-[2rem] leading-[100%] md:leading-[120%] md:text-5xl text-dark font-semibold text-center font-baloo">
          <PrismicRichText field={slice.primary.text} />
        </div>
        <Divider />
      </div>
    </section>
  );
};

export default BigTextSection;
