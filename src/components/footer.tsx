import Image from "next/image";

import GridContainer from "./container";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type FooterProps = {
  data: Content.FooterDocument["data"];
};

export default function Footer({ data }: FooterProps) {
  const backgroundImageUrl = data.background_image.url;

  return (
    <footer
      className="w-full text-white bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <GridContainer className="pt-24 pb-12">
        <div className="col-start-1 col-end-5 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="w-40">
              <PrismicNextImage field={data.logo} />
            </div>
            {data.selos.map((item, index) => (
              <PrismicNextImage
                key={index}
                field={item.selo}
                className="w-32"
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-baloo text-xs font-bold">
              <PrismicRichText field={data.social_media_title} />
            </div>
            <ul className="flex items-center gap-3">
              {data.social_media.map((item, index) => (
                <li key={index}>
                  <PrismicNextLink field={item.social_link}>
                    <PrismicNextImage
                      className="hover:scale-110"
                      field={item.social_icon}
                    />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-start-11 col-end-13 flex flex-col items-end gap-4">
          <div className="font-baloo font-bold text-sm text-right">
            <PrismicRichText field={data.title_address} />
          </div>
          <div className="font-nunito text-sm text-right">
            <PrismicRichText field={data.address} />
          </div>
        </div>
        <div className="col-start-11 col-end-13 flex items-end justify-end mt-4">
          <a
            href={`https://wa.me/${data.support_number}?text=Olá!%20Gostaria%20de%20obter%20suporte.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white rounded-full px-5 py-2 font-nunito text-sm"
          >
            <Image
              src="/assets/WhatsappLogo.svg"
              alt="ícone do Whatsapp"
              width={20}
              height={20}
            />
            Suporte
          </a>
        </div>
      </GridContainer>

      <GridContainer>
        <div className="h-px w-full bg-[#B3B3B3] col-start-1 col-end-13" />
      </GridContainer>

      <GridContainer className="pt-12 pb-24">
        <div className="col-start-1 col-end-7 flex items-center">
          <div className="font-nunito text-xs text-white/60">
            <PrismicRichText field={data.copyright_text} />
          </div>
        </div>
        <div className="col-start-7 col-end-13 flex items-center justify-end gap-6">
          {data.links_externos.map((item, index) => (
            <PrismicNextLink
              key={index}
              field={item.link}
              className="font-nunito text-xs underline underline-offset-2 hover:font-semibold"
            />
          ))}
        </div>
      </GridContainer>
    </footer>
  );
}
