import { FeedComposer } from "./feed-composer";
import { FeedList } from "./feed-list";
import Stories from "./stories";

export default function Feed() {
  return (
    <aside className="h-dvh overflow-y-auto py-[3.2rem]">
      <section className="flex flex-col gap-[2.4rem]">
        <Stories />
        <FeedComposer />
        <FeedList />
      </section>
    </aside>
  );
}
