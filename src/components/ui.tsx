import Link from "next/link";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  lead: string;
};

export function PageHero({ title, lead }: PageHeroProps) {
  return (
    <section className="flex min-h-screen items-center bg-navy px-0 text-white">
      <Container>
        <h1 className="mb-4 max-w-225 text-[clamp(2.6rem,5vw,4.8rem)] tracking-[-0.055em] text-white">
          {title}
        </h1>
        <p className="max-w-182.5 text-[clamp(1.05rem,2vw,1.28rem)] text-white">
          {lead}
        </p>
      </Container>
    </section>
  );
}

type BulletListProps = {
  items: string[];
  light?: boolean;
  className?: string;
};

export function BulletList({ items, light = false, className }: BulletListProps) {
  return (
    <ul className={cn("my-6 list-none p-0", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "relative border-b py-3 pl-5 font-semibold",
            light ? "border-white/20" : "border-line",
          )}
        >
          <span
            className="absolute left-0 top-[1.3rem] h-1.75 w-1.75 bg-gold"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

type CardVariant = "default" | "gold";

type CardProps = {
  number?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: React.ReactNode;
  variant?: CardVariant;
  className?: string;
};

function isNumericLabel(value: string) {
  return /^\d{2}$/.test(value);
}

const cardVariantClasses: Record<CardVariant, string> = {
  default: "border border-navy/10",
  gold: "border border-gold/30 border-t-4 border-t-gold bg-linear-to-b from-gold/5 to-white",
};

export function Card({
  number,
  title,
  description,
  href,
  linkLabel,
  variant = "default",
  className,
}: CardProps) {
  const numbered = number ? isNumericLabel(number) : false;

  return (
    <article
      className={cn(
        "bg-white p-10",
        numbered && cardVariantClasses[variant],
        className,
      )}
    >
      {number &&
        (numbered ? (
          <span className="mb-5 inline-flex items-center justify-center text-2xl font-extrabold text-gold">
            {number}
          </span>
        ) : (
          <h2
            className={cn(
              "text-3xl font-extrabold",
              variant === "gold" && "text-gold",
            )}
          >
            {number}
          </h2>
        ))}
      <h3
        className={cn(
          "mb-3 font-display text-xl",
          number && !numbered && "mt-8",
        )}
      >
        {title}
      </h3>
      <p className="mb-0 text-muted">{description}</p>
      {href && linkLabel && (
        <Link
          href={href}
          className="mt-4 inline-block rounded-none border border-green p-3 font-extrabold text-green"
        >
          {linkLabel}
        </Link>
      )}
    </article>
  );
}
