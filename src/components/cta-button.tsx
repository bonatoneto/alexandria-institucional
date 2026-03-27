import { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { tv, VariantProps } from "tailwind-variants";

const ctaButton = tv({
  base: "inline-flex items-center w-full justify-center rounded-full px-8 py-3 font-nunito font-semibold text-sm transition-opacity hover:opacity-90",
  variants: {
    variant: {
      white: "bg-white text-dark",
      purple: "bg-purple-lex text-white",
      gradient: "bg-gradient-cta text-white",
    },
  },
  defaultVariants: {
    variant: "gradient",
  },
});

type CTAButtonProps = ComponentProps<"a"> &
  VariantProps<typeof ctaButton> & {
    children: React.ReactNode;
    href: string;
  };

export default function CTAButton({
  children,
  href,
  variant,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <a href={href} className={cn(ctaButton({ variant }), className)} {...props}>
      {children}
    </a>
  );
}
