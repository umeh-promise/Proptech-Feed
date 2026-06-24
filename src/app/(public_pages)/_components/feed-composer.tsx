"use client";

import { Button } from "@/src/components/button";
import { CommentIcon, InboxIcon, MapPinIcon } from "@/src/icons";
import CardWrapper from "./card-wrapper";
import { cn } from "@/src/utils";
import { Textarea } from "@/src/components/textarea";
import Image from "next/image";
import { Building2Icon } from "lucide-react";

const tabs = [
  { label: "Property", icon: <Building2Icon /> },
  { label: "General", icon: <CommentIcon /> },
  { label: "Request", icon: <InboxIcon /> },
] as const;

export function FeedComposer() {
  return (
    <CardWrapper className="flex-col">
      <ul className="flex px-2">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            className={cn(
              "flex cursor-pointer items-center gap-[.8rem] px-[1.6rem] py-[.8rem] text-sm font-medium transition-colors hover:text-foreground",
              {
                "border-b border-b-primary text-primary":
                  tab.label === "General",
              },
            )}
          >
            {tab.icon}
            {tab.label}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-[1rem] p-3">
        <div className="flex items-center gap-[.4rem]">
          <div className="bg-neutral-900 relative size-[6rem] overflow-hidden rounded-full">
            <Image
              src="/profile.svg"
              alt="avatar"
              fill
              className="size-[4.8rem] object-cover"
              unoptimized
            />
          </div>
          <Textarea
            placeholder="Share an update, ask a question, say hi…"
            variant="tertiary"
            rows={1}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            className="border-transparent px-4 font-normal"
          >
            <MapPinIcon className="size-8" />
            Location
          </Button>
          <Button
            type="button"
            className="gap-1.5 rounded-full px-[1.6rem] py-[.8rem]"
          >
            Post
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
}
