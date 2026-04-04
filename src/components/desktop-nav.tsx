"use client";

import useActiveSection from "@/hooks/use-active-section";

type MenuItem = {
  menu_item: string | null;
  anchor_name: string | null;
};

type DesktopNavProps = {
  items: MenuItem[];
};

export default function DesktopNav({ items }: DesktopNavProps) {
  const sectionIds = items
    .map((item) => item.menu_item?.replace("#", ""))
    .filter((id): id is string => !!id);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="hidden md:block col-start-9 col-auto col-end-13 w-full">
      <ul className="flex  justify-end gap-8 font-nunito font-sm text-nowrap">
        {items.map((item) => {
          const isActive = activeId === item.menu_item?.replace("#", "");
          return (
            <li key={item.menu_item}>
              <a href={item.menu_item ?? "#"} className="relative py-6 block">
                <span>{item.anchor_name ?? ""}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[4px] bg-[#164896] transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
