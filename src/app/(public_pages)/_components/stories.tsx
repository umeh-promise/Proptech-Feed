"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@/src/icons";
import { stories } from "@/src/utils/mock-data";
import { cn } from "@/src/utils";

export default function Stories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState({
    left: false,
    right: true,
  });

  const checkScrollLimits = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowArrows({
        left: scrollLeft > 4,
        right: scrollLeft < scrollWidth - clientWidth - 4,
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollLimits);
      checkScrollLimits();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollLimits);
      }
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollOffset = direction === "left" ? -240 : 240;
      container.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full select-none overflow-hidden">
      {showArrows.left && (
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="absolute left-2 top-10 z-40 inline-flex size-[2.4rem] rotate-90 items-center justify-center self-center rounded-full bg-dark-100 transition-transform duration-150 hover:scale-105"
          aria-label="Scroll left"
        >
          <ChevronDownIcon />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="no-scrollbar flex items-center gap-4 overflow-x-auto scroll-smooth px-[.12rem] py-[.4rem]"
      >
        {stories.map((story) => (
          <figure
            key={story.id}
            className="group flex shrink-0 cursor-pointer flex-col items-center gap-1"
          >
            <div
              className={cn(
                "bg-neutral-900 flex size-[6.2rem] items-center justify-center rounded-full ring-1 ring-grey-100 transition-transform duration-200 group-hover:scale-105",
                {
                  "bg-transparent ring-2 ring-primary": story.hasActiveStory,
                },
              )}
            >
              <div className="bg-neutral-900 relative size-[6.1rem] overflow-hidden rounded-full border-2 border-background">
                <Image
                  src={story.avatar}
                  alt={story.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <figcaption className="text-text-secondary group-hover:text-text-primary w-[70px] truncate text-center text-xs font-medium transition-colors">
              {story.name}
            </figcaption>
          </figure>
        ))}
      </div>

      {showArrows.right && (
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="absolute right-2 top-10 z-40 inline-flex size-[2.4rem] -rotate-90 items-center justify-center self-center rounded-full bg-dark-100 transition-transform duration-150 hover:scale-105"
          aria-label="Scroll right"
        >
          <ChevronDownIcon />
        </button>
      )}
    </section>
  );
}
