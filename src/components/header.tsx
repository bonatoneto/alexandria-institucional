import Link from "next/link";

import GridContainer from "./container";
import DesktopNav from "./desktop-nav";
import MobileMenuButton from "./mobile-menu";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type HeaderProps = {
  data: Content.HeaderDocument["data"];
};

export default function Header({ data }: HeaderProps) {
  return (
    <header className="fixed z-30 py-6 md:py-0 top-0 w-full bg-white">
      <GridContainer className="items-center">
        <Link href="/">
          <PrismicNextImage
            field={data.logo}
            className="h-full max-w-[110px] md:min-w-[170px] object-contain object-left"
          />
        </Link>
        <DesktopNav items={data.menu_navigation} />
        <div className="col-end-13 flex justify-end md:hidden">
          <MobileMenuButton items={data.menu_navigation} />
        </div>
      </GridContainer>
    </header>
  );
}
