import { FC } from "react";

import GridContainer from "@/components/container";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type ZoomImagesProps = SliceComponentProps<Content.ZoomImagesSlice>;

const ZoomImages: FC<ZoomImagesProps> = ({ slice }) => {
  console.log(slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-22"
    >
      <GridContainer>
        <div className="flex flex-col gap-5 col-start-1 col-end-5">
          <div className="font-baloo text-[2rem] text-dark font-bold">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="h-1 w-full max-w-20 bg-gradient-lex"></div>
          <div className="font-nunito text-dark text-lg tracking-[0.54px]">
            <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
        <ul className="col-start-6 flex col-end-13 gap-4">
          {slice.primary.images.map((item, index) => (
            <li
              key={index}
              className="relative flex-1 overflow-hidden scale-90 hover:scale-100 transition-transform duration-300 ease-in-out"
            >
              <PrismicNextImage
                field={item.image}
                className="w-full h-full object-cover rounded-4xl"
              />
              <div className="absolute inset-0 w-full flex flex-col justify-end gap-1 px-6 py-12 text-white">
                <div className="font-baloo text-2xl font-bold">
                  <PrismicRichText field={item.image_title} />
                </div>
                <div className="font-nunito text-base tracking-[0.48px]">
                  <PrismicRichText field={item.image_description} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </GridContainer>
    </section>
  );
};

export default ZoomImages;
