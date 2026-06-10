import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "hero-primary"
  | "hero-outline";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-green border-green text-white hover:bg-navy hover:border-navy",
  secondary:
    "bg-transparent border-navy text-navy hover:bg-navy hover:text-white",
  light:
    "bg-white border-white text-navy hover:bg-gold hover:border-gold",
  "hero-primary":
    "bg-white border-white text-navy hover:bg-gold hover:border-gold hover:text-navy",
  "hero-outline":
    "bg-transparent border-white text-white hover:bg-white/10 hover:border-white",
};

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  shape?: "default" | "pill";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  showArrow?: boolean;
  tabIndex?: number;
};

export function Button({
  href,
  variant = "primary",
  shape = "default",
  className,
  children,
  type = "button",
  onClick,
  showArrow = false,
  tabIndex,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 border-2 px-4 py-3 text-sm font-bold transition-colors sm:px-5 sm:py-3.5 sm:text-base",
    shape === "pill" && "rounded-full px-6 sm:px-7",
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={18} weight="bold" aria-hidden />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} tabIndex={tabIndex}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} tabIndex={tabIndex}>
      {content}
    </button>
  );
}
