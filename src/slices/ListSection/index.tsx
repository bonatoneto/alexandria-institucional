import { FC } from "react";

import AnimateOnView from "@/components/animate-on-view";
import GridContainer from "@/components/container";
import Divider from "@/components/divider";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type MockupSectionProps =
  SliceComponentProps<Content.MockupSectionSlice>;

const MockupSection: FC<MockupSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 md:py-32 flex justify-center items-center"
    >
      {/* Desktop */}
      <GridContainer className="hidden md:grid">
        <div className="col-start-1 col-end-6 h-full flex items-center relative -top-5">
          <AnimateOnView>
            <PrismicNextImage
              field={slice.primary.image}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </AnimateOnView>
        </div>
        <div className="col-start-7 col-end-13 flex flex-col gap-6 justify-center text-dark">
          <div className="flex flex-col gap-5">
            <AnimateOnView delay={0.1}>
              <div className="font-baloo font-semibold text-5xl leading-none">
                <PrismicRichText field={slice.primary.title} />
              </div>
            </AnimateOnView>
            <AnimateOnView delay={0.2} className="w-full flex justify-start">
              <Divider />
            </AnimateOnView>
          </div>
          <ul className="flex flex-col mt-4 gap-6">
            {slice.primary.list.map((item, index) => (
              <li
                className="flex flex-col gap-2"
                key={`${index}-${item.item_title}`}
              >
                <AnimateOnView delay={0.3 * (index + 1)}>
                  <div className="font-nunito text-2xl font-bold text-dark">
                    <PrismicRichText field={item.item_title} />
                  </div>
                </AnimateOnView>
                <AnimateOnView delay={0.3 * (index + 1) + 0.15}>
                  <div className="font-nunito text-lg text-dark">
                    <PrismicRichText field={item.item_description} />
                  </div>
                </AnimateOnView>
              </li>
            ))}
          </ul>
        </div>
      </GridContainer>
      {/* Mobile */}
      <GridContainer className="flex flex-col gap-8 items-center md:hidden">
        <AnimateOnView>
          <div className="font-baloo font-semibold text-4xl leading-none text-center text-dark">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </AnimateOnView>
        <AnimateOnView delay={0.1} className="w-full flex justify-center">
          <Divider />
        </AnimateOnView>
        <ul className="flex flex-col gap-9 w-full mt-2">
          {slice.primary.list.map((item, index) => (
            <li className="flex flex-col gap-4 text-center" key={index}>
              <AnimateOnView delay={0.2 + 0.1 * index}>
                <div className="font-nunito text-lg font-bold text-dark">
                  <PrismicRichText field={item.item_title} />
                </div>
              </AnimateOnView>
              <AnimateOnView delay={0.2 + 0.1 * index + 0.05}>
                <div className="font-nunito text-lg text-dark">
                  <PrismicRichText field={item.item_description} />
                </div>
              </AnimateOnView>
            </li>
          ))}
        </ul>
        <AnimateOnView delay={0.5} className="w-full mt-4">
          <PrismicNextImage
            field={slice.primary.image}
            className="w-full rounded-xl object-cover"
            sizes="100vw"
          />
        </AnimateOnView>
      </GridContainer>
    </section>
  );
};

export default MockupSection;
