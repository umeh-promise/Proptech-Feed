"use client";

import { useEffect, useRef, useState } from "react";
import { mockPosts } from "@/src/utils/mock-data";
import PostCard from "./post-card";
import PostSkeleton from "./post-skeleton";

const PAGE_SIZE = 10;

export function FeedList() {
  const [count, setCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const data = mockPosts.slice(0, count);
  const hasMore = count < mockPosts.length;

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount((c) => Math.min(c + PAGE_SIZE, mockPosts.length));
        }
      },
      { rootMargin: "500px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasMore]);

  return (
    <div className="flex flex-col gap-[1.6rem]">
      {data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {hasMore && (
        <div ref={sentinelRef} className="flex flex-col gap-[1.6rem]">
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
    </div>
  );
}
