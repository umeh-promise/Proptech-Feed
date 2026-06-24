import Wrapper from "@/src/components/wrapper";
import { Metadata } from "next";
import Filters from "./_components/filters";
import Trends from "./_components/trends";
import Feed from "./_components/feed";

export const metadata: Metadata = {
  title: "Feed",
};

export default function Home() {
  return (
    <Wrapper
      fluid={false}
      className="grid h-full grid-cols-1 gap-[2.4rem] lg:grid-cols-[24rem_1fr] xl:grid-cols-[24rem_1fr_24rem] xl:gap-[4rem]"
    >
      <aside className="hidden lg:sticky lg:top-0 lg:block lg:h-dvh lg:overflow-y-auto lg:py-[3.2rem]">
        <Filters />
      </aside>
      <div className="pb-[8rem] pt-[2.4rem] lg:pb-0 xl:h-dvh xl:overflow-y-auto xl:py-[3.2rem]">
        <Feed />
      </div>
      <aside className="hidden xl:sticky xl:top-0 xl:block xl:h-dvh xl:overflow-y-auto xl:py-[3.2rem]">
        <Trends />
      </aside>
    </Wrapper>
  );
}
