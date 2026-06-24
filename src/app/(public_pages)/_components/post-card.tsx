"use client";

import Image from "next/image";
import {
  CheckFillIcon,
  CommentIcon,
  HeartIcon,
  MapPinIcon,
  SendIcon,
} from "@/src/icons";
import { cn } from "@/src/utils";
import { Post } from "@/src/types";
import PostMedia from "./post-media";
import { KeyIcon, TagIcon } from "lucide-react";

const listingColors: Record<string, string> = {
  "For Rent": "bg-green-100 text-green-300",
  "For Sale": "bg-dark-900 text-blue-300",
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col gap-[1.2rem] rounded-[1.2rem] border border-light-grey-100/[6%] bg-dark-100 p-[1.6rem]">
      <header className="flex items-center justify-between">
        <figure className="flex items-center gap-[1rem]">
          <div className="relative size-[4rem] shrink-0 overflow-hidden rounded-full bg-dark-600">
            <Image
              src={post.user.avatar}
              alt={post.user.name}
              fill
              sizes="40px"
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="flex flex-col">
            <div className="flex items-center gap-[.8rem]">
              <h5 className="text-sm font-semibold text-light-grey-100">
                {post.user.name}
              </h5>
              {post.user.isVerified && <CheckFillIcon />}
              <span className="inline-flex size-[.4rem] rounded-full bg-light-grey-100/[6%]" />
              <p>{post.user.role}</p>
            </div>
            <div className="flex items-center gap-[.4rem] text-xs text-grey-200">
              <p>{post.category}</p>
              <span className="inline-flex size-[.4rem] rounded-full bg-light-grey-100/[6%]" />
              <p>{post.timestamp}</p>
            </div>
          </figcaption>
        </figure>
      </header>

      <p className="text-base leading-relaxed text-grey-100">{post.content}</p>

      {post.location && (
        <div className="flex items-center gap-[.4rem] text-xs text-grey-200">
          <MapPinIcon className="size-6" />
          <span className="text-base font-medium">{post.location}</span>
          {post.listingType && (
            <span
              className={cn(
                "inline-flex items-center gap-[.4rem] rounded-full px-[.8rem] py-[.2rem] text-xs font-medium",
                listingColors[post.listingType],
              )}
            >
              {post.listingType === "For Sale" ? (
                <TagIcon className="size-5 rotate-90" />
              ) : (
                <KeyIcon className="size-5 rotate-180" />
              )}
              {post.listingType}
            </span>
          )}
        </div>
      )}

      {post.media && post.media.length > 0 && <PostMedia media={post.media} />}

      <div className="flex items-center gap-[1.6rem]">
        <button
          type="button"
          className="flex items-center gap-[.4rem] transition-colors hover:text-white"
        >
          <HeartIcon /> {post.likes}
        </button>
        <button
          type="button"
          className="flex items-center gap-[.4rem] transition-colors hover:text-white"
        >
          <CommentIcon variant="full" /> {post.commentsCount}
        </button>
        <button
          type="button"
          className="flex items-center gap-[.4rem] transition-colors hover:text-white"
        >
          <SendIcon /> {post.bookmarkedCount}
        </button>
      </div>
    </article>
  );
}
