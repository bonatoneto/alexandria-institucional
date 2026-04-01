import GridContainer from "./container";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type HeaderProps = {
  data: Content.HeaderDocument["data"];
};

export default function Header({ data }: HeaderProps) {
  return (
    <header className="fixed z-30 top-0 w-full bg-white">
      <GridContainer>
        <PrismicNextImage field={data.logo} className="h-full min-w-[196px]" />
        <nav className="col-start-9 col-auto col-end-13 w-full">
          <ul className="flex gap-6 font-nunito font-sm text-nowrap justify-between">
            {data.menu_navigation.map((item) => (
              <li
                key={item.menu_item}
                className="border-b-2 border-[#164896] py-6"
              >
                <a href={item.menu_item ?? "#"}>
                  <span>{item.anchor_name ?? ""}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </GridContainer>
    </header>
  );
}
