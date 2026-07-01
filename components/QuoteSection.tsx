import { QuoteIcon } from "./icons";

type QuoteSectionProps = {
  quote: string;
  cite?: string;
  variant?: "light" | "dark";
};

export default function QuoteSection({ quote, cite, variant = "light" }: QuoteSectionProps) {
  const dark = variant === "dark";
  return (
    <section
      className={`px-margin-mobile py-24 text-center md:py-32 md:px-margin-desktop ${
        dark ? "bg-primary-container text-on-primary-container" : "bg-surface-container-low text-primary"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <QuoteIcon className={`mx-auto mb-8 h-10 w-10 ${dark ? "text-secondary" : "text-outline-variant"}`} />
        <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {cite && (
          <cite className="mt-8 block text-xs uppercase tracking-widest not-italic opacity-70">
            — {cite}
          </cite>
        )}
      </div>
    </section>
  );
}
