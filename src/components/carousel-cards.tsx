"use client";

import { useEffect, useState } from "react";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type CarouselItem = Content.CarouselSectionSliceDefaultPrimaryCarouselItem;

type CarouselCardsProps = {
  items: CarouselItem[];
  interval?: number;
};

const ACTIVE_W = 322;
const ACTIVE_H = 424;
const INACTIVE_W = 242;
const INACTIVE_H = 318;
const GAP = 16;

// Opacity decreases linearly from center outward (1 at slot 0, ~0.3 at outermost)
function slotOpacity(slot: number, n: number): number {
  const maxAbs = Math.floor(n / 2);
  if (maxAbs === 0) return 1;
  return 1 - (Math.abs(slot) / maxAbs) * 0.1;
}

// Center X of slot relative to active card center (slot 0)
function slotCenterX(slot: number): number {
  if (slot === 0) return 0;
  const abs = Math.abs(slot);
  const x = (ACTIVE_W + INACTIVE_W) / 2 + abs * GAP + (abs - 1) * INACTIVE_W;
  return slot > 0 ? x : -x;
}

// Slot of item i given current activeIdx
function getSlot(i: number, active: number, n: number): number {
  let offset = (i - active + n) % n;
  if (offset > (n - 1) / 2) offset -= n;
  return offset;
}

export default function CarouselCards({
  items,
  interval = 5000,
}: CarouselCardsProps) {
  const n = items.length;
  const [activeIdx, setActiveIdx] = useState(0);
  // Index of the card that must jump (no transition) on this render
  const [noTransIdx, setNoTransIdx] = useState(-1);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextActive = (activeIdx + 1) % n;
      // The item at the farthest-left slot wraps to the far right
      const wrapItemIdx = (n - Math.floor(n / 2) + activeIdx) % n;

      setNoTransIdx(wrapItemIdx);
      setActiveIdx(nextActive);

      // Re-enable transition after the DOM has painted the new position
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransIdx(-1);
        });
      });
    }, interval);
    return () => clearTimeout(timer);
  }, [activeIdx, interval, n]);

  return (
    <div className="relative overflow-visible" style={{ height: ACTIVE_H }}>
      {items.map((item, i) => {
        const slot = getSlot(i, activeIdx, n);
        const isActive = slot === 0;
        const w = isActive ? ACTIVE_W : INACTIVE_W;
        const h = isActive ? ACTIVE_H : INACTIVE_H;
        const cx = slotCenterX(slot);
        const opacity = slotOpacity(slot, n);
        const noTrans = i === noTransIdx;
        const transition = noTrans
          ? "none"
          : "left 700ms ease-in-out, width 700ms ease-in-out, height 700ms ease-in-out, opacity 700ms ease-in-out";

        return (
          <div
            key={i}
            className="absolute top-1/2 rounded-3xl overflow-hidden"
            style={{
              width: w,
              height: h,
              left: `calc(50% + ${cx - w / 2}px)`,
              transform: "translateY(-50%)",
              opacity,
              transition,
            }}
          >
            <PrismicNextImage
              field={item.image}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="font-baloo font-bold text-xl ">
                <PrismicRichText field={item.image_title} />
              </div>
              <div
                className="font-nunito text-sm overflow-hidden"
                style={{
                  maxHeight: isActive ? 200 : 0,
                  opacity: isActive ? 1 : 0,
                  transition: noTrans
                    ? "none"
                    : "max-height 500ms ease-in-out, opacity 500ms ease-in-out",
                }}
              >
                <div className="pt-1">
                  <PrismicRichText field={item.image_description} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
