import { FC } from "react";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type BigTextSectionProps =
  SliceComponentProps<Content.BigTextSectionSlice>;

const BigTextSection: FC<BigTextSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      // className="sticky top-0"
    >
      <div
        style={{
          backgroundImage: `url(${slice.primary.background_image.url})`,
        }}
        className="bg-cover bg-center py-24 flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-12">
          <div className="text-5xl text-dark font-semibold text-center font-baloo">
            <PrismicRichText field={slice.primary.text} />
          </div>
          <div className="h-1 w-full max-w-56 bg-gradient-lex"></div>
        </div>
      </div>
    </section>
  );
};

export default BigTextSection;
