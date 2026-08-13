"use client";

import { useRef } from "react";
import { ArrowRightIcon } from "./icons";

export type ReviewCard = {
  author: string;
  quote: string;
  rating?: number;
  googleReviewUrl?: string;
};

const AVATAR_COLORS = [
  "bg-primary text-on-primary",
  "bg-secondary text-on-secondary",
  "bg-primary-container text-on-primary",
  "bg-secondary-container text-on-secondary-container",
];

function getAvatarColor(name: string) {
  const sum = name.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

export default function ReviewsCarousel({ reviews }: { reviews: ReviewCard[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-gutter overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            key={review.author}
            className="flex h-full w-[85%] shrink-0 snap-start flex-col bg-surface p-6 md:w-[calc((100%-48px)/3)] md:p-8"
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-sm ${getAvatarColor(review.author)}`}
              >
                {review.author.trim().charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">{review.author}</p>
                {review.rating && (
                  <div className="text-secondary text-sm">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                )}
              </div>
            </div>
            <p className="mb-4 line-clamp-5 text-sm italic text-on-surface-variant leading-relaxed">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="mt-auto flex items-center justify-between gap-4">
              {review.googleReviewUrl && (
                <a
                  href={review.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-secondary underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Xem trên Google
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 1 && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            aria-label="Đánh giá trước"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-primary transition-colors hover:bg-primary hover:text-on-primary"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            aria-label="Đánh giá tiếp theo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-primary transition-colors hover:bg-primary hover:text-on-primary"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
