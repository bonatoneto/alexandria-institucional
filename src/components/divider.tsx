import { tv, VariantProps } from "tailwind-variants";

const divider = tv({
  base: "h-1 w-full max-w-20",
  variants: {
    variant: {
      gradient: "bg-gradient-lex",
      solid: "bg-white",
    },
  },
  defaultVariants: {
    variant: "gradient",
  },
});

type DividerProps = VariantProps<typeof divider> & {
  className?: string;
};

export default function Divider({ variant, className }: DividerProps) {
  return <div className={divider({ variant, className })} />;
}
