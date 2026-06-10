import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  gold?: boolean;
  className?: string;
};

export function Eyebrow({ children, gold = false, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-extrabold uppercase tracking-[0.16em]",
        gold ? "text-gold" : "text-green",
        className,
      )}
    >
      {children}
    </p>
  );
}
