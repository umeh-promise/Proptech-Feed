import { FeedComposer } from "./feed-composer";
import { FeedList } from "./feed-list";
import Stories from "./stories";

export default function Feed() {
  return (
    <div className="pb-[8rem] pt-[2.4rem] lg:pb-0 xl:h-dvh xl:overflow-y-auto xl:py-[3.2rem]">
      <section className="flex flex-col gap-[2.4rem]">
        <Stories />
        <FeedComposer />
        <FeedList />
      </section>
    </div>
  );
}
