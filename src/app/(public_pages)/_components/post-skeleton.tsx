export default function PostSkeleton() {
  return (
    <div className="flex flex-col gap-[1.2rem] rounded-[1.2rem] border border-light-grey-100/[6%] bg-dark-100 p-[1.6rem]">
      <div className="flex items-center gap-[1rem]">
        <div className="size-[4rem] shrink-0 animate-pulse rounded-full bg-dark-600" />
        <div className="flex flex-col gap-[.6rem]">
          <div className="h-[1.4rem] w-[14rem] animate-pulse rounded bg-dark-600" />
          <div className="h-[1rem] w-[8rem] animate-pulse rounded bg-dark-600" />
        </div>
      </div>
      <div className="flex flex-col gap-[.6rem]">
        <div className="h-[1.2rem] w-full animate-pulse rounded bg-dark-600" />
        <div className="h-[1.2rem] w-11/12 animate-pulse rounded bg-dark-600" />
        <div className="h-[1.2rem] w-4/5 animate-pulse rounded bg-dark-600" />
      </div>
      <div className="h-[26rem] w-full animate-pulse rounded-[.8rem] bg-dark-600" />
      <div className="flex items-center justify-between border-t border-white/[6%] pt-[1rem]">
        <div className="flex items-center gap-[1.6rem]">
          <div className="h-[1.2rem] w-[3.6rem] animate-pulse rounded bg-dark-600" />
          <div className="h-[1.2rem] w-[3.6rem] animate-pulse rounded bg-dark-600" />
        </div>
        <div className="h-[1.2rem] w-[3.6rem] animate-pulse rounded bg-dark-600" />
      </div>
    </div>
  );
}
