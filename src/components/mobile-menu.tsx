"use client";

import Image from "next/image";
import { useState } from "react";

import useActiveSection from "@/hooks/use-active-section";

type MenuItem = {
  menu_item: string | null;
  anchor_name: string | null;
};

type MobileMenuProps = {
  items: MenuItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2"
      >
        <Image src="/assets/list.svg" alt="Menu" width={32} height={32} />
      </button>

      <div
        className={`absolute left-0 right-0 top-full bg-white shadow-lg rounded-b-xl transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="py-2">
          <ul className="flex flex-col">
            {items.map((item, index) => {
              const isActive = activeId === item.menu_item?.replace("#", "");
              return (
                <li key={item.menu_item ?? index}>
                  <a
                    href={item.menu_item ?? "#"}
                    onClick={() => setOpen(false)}
                    style={
                      isActive
                        ? {
                            background:
                              "linear-gradient(90deg, rgba(40, 73, 152, 0.12) 0%, rgba(124, 81, 161, 0.12) 50%, rgba(218, 103, 82, 0.12) 100%)",
                          }
                        : undefined
                    }
                    className={`block text-center font-nunito text-sm text-dark py-4 transition-all duration-300 ${isActive ? "font-semibold" : ""}`}
                  >
                    {item.anchor_name ?? ""}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
