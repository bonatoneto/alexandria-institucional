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

type DividerProps = VariantProps<typeof divider>;

export default function Divider({ variant }: DividerProps) {
  return <div className={divider({ variant })} />;
}
