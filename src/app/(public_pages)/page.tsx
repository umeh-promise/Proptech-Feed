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
      <Filters />
      <Feed />
      <Trends />
    </Wrapper>
  );
}
