import { cn } from "@/lib/utils";

type GridContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GridContainer({
  children,
  className,
}: GridContainerProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 mx-auto w-full px-6 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
}
