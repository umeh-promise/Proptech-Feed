"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/src/utils";
import { MediaItem } from "@/src/types";
import { ChevronDownIcon, PlayIcon } from "lucide-react";

interface PostMediaProps {
  media: MediaItem[];
}

export default function PostMedia({ media }: PostMediaProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!media || media.length === 0) return null;

  const currentItem = media[currentIdx];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : media.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev < media.length - 1 ? prev + 1 : 0));
  };

  return (
    <figure className="mt-1 flex w-full flex-col gap-[1rem]">
      <div className="group relative flex aspect-video max-h-[380px] w-full select-none items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/[6%] bg-black/40">
        {currentItem.type === "image" ? (
          <Image
            src={currentItem.url}
            alt="Post media"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={currentItem.url}
              alt="Video cover"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover opacity-80"
              unoptimized
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/10 transition hover:bg-black/20">
              <div className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-white transition hover:scale-105">
                <PlayIcon />
              </div>
            </div>

            {currentItem.duration && (
              <div className="absolute bottom-3 left-3 flex items-center gap-[.6rem] rounded-full border border-white/5 bg-black/75 px-[1rem] py-[.4rem] text-[10px] font-semibold text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[1rem] w-[1rem] fill-white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{currentItem.duration}</span>
              </div>
            )}
          </div>
        )}

        {media.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-[1rem] top-1/2 flex size-[2.4rem] h-8 w-8 -translate-y-1/2 rotate-90 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-100 transition-opacity hover:bg-black/80 md:opacity-0 md:group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronDownIcon />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-[1rem] top-1/2 flex size-[2.4rem] h-8 w-8 -translate-y-1/2 -rotate-90 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-100 transition-opacity hover:bg-black/80 md:opacity-0 md:group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronDownIcon />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className="mt-[.2rem] flex justify-center gap-[.6rem]">
          {media.map((_, dotIdx) => (
            <div
              key={dotIdx}
              className={cn(
                "h-[.6rem] rounded-full transition-all duration-300",
                dotIdx === currentIdx
                  ? "w-[1.6rem] bg-primary"
                  : "w-[.6rem] bg-white/20",
              )}
            />
          ))}
        </div>
      )}
    </figure>
  );
}
