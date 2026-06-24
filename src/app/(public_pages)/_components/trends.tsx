import { UsersIcon, MapPinIcon } from "@/src/icons";
import CardWrapper from "./card-wrapper";
import { ArrowRightIcon } from "@/src/icons/arrow-right";
import { FlameIcon } from "lucide-react";

const trendingLocations = [
  { name: "Lekki Epe", posts: "120 post today" },
  { name: "2 Bedroom Rental Abuja", posts: "80 post today" },
  { name: "Ajah", posts: "250 post today" },
];

const hotRequests = [
  {
    type: "Buy",
    title: "Lekki Phase 1, Lagos",
    description: "Looking for a 4-bed detached in Lekki Phase 1",
    budget: "₦180M - ₦230M",
    responses: "12 responses",
  },
  {
    type: "Rent",
    title: "Ikoyi",
    description: "2-bed serviced apartment in Ikoyi, max ₦15M/yr",
    budget: "₦10M - ₦15M",
    responses: "7 responses",
  },
];

const topCommunities = [
  { name: "Lekki Landlords", members: "12.4k members" },
  { name: "Abuja Developers Group", members: "5.8k members" },
  { name: "House hunting Circle", members: "1.4k members" },
];

export default function Trends() {
  return (
    <aside className="no-scrollbar hidden xl:sticky xl:top-0 xl:block xl:h-dvh xl:overflow-y-auto xl:py-[3.2rem]">
      <section className="flex flex-col gap-[2.4rem]">
        <CardWrapper className="flex-col gap-[1.6rem] px-[1.6rem]">
          <header className="flex items-center gap-[.8rem]">
            <MapPinIcon className="text-yellow-100" />
            <h4 className="font-medium text-light-grey-100">
              Trending Locations
            </h4>
          </header>
          <ul className="flex flex-col gap-[.8rem]">
            {trendingLocations.map((location) => (
              <li
                key={location.name}
                className="flex cursor-pointer flex-col gap-[.4rem] text-grey-100 transition-colors duration-150 hover:text-white"
              >
                <h5 className="text-sm font-medium text-light-grey-100">
                  {location.name}
                </h5>
                <p className="text-xs tracking-[-0.6%] text-grey-200">
                  {location.posts}
                </p>
              </li>
            ))}
          </ul>
        </CardWrapper>

        <CardWrapper className="flex-col gap-[.8rem] px-[1.6rem]">
          <header className="flex items-center gap-[.8rem]">
            <FlameIcon className="text-yellow-100" />
            <h4 className="font-medium text-light-grey-100">Hot Requests</h4>
          </header>
          <ul className="flex w-full flex-col gap-[.8rem]">
            {hotRequests.map((request) => (
              <li
                key={request.title}
                className="flex cursor-pointer flex-col gap-[.4rem] rounded-[.8rem] border border-white/[6%] p-[.8rem] text-grey-100 transition-colors duration-150 hover:text-white"
              >
                <div className="flex items-center gap-[.6rem] text-sm font-semibold text-light-grey-100">
                  <span>{request.type}</span>
                  <span className="text-grey-200">•</span>
                  <span>{request.title}</span>
                </div>
                <p className="text-xs leading-snug text-grey-200">
                  {request.description}
                </p>
                <div className="flex items-center gap-[.6rem] pt-[.4rem] text-xs text-grey-200">
                  <span>{request.budget}</span>
                  <span>•</span>
                  <span>{request.responses}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardWrapper>

        <CardWrapper className="flex-col gap-[1.6rem] px-[1.6rem]">
          <header className="flex items-center gap-[.8rem]">
            <UsersIcon className="text-yellow-100" />
            <h4 className="font-medium text-light-grey-100">Top Communities</h4>
          </header>
          <ul className="flex flex-col gap-[.8rem]">
            {topCommunities.map((community) => (
              <li
                key={community.name}
                className="flex cursor-pointer flex-col gap-[.4rem] rounded-[.8rem] border border-white/[6%] p-[.8rem] text-grey-100 transition-colors duration-150 hover:text-white"
              >
                <h5 className="flex items-center justify-between text-sm font-medium text-light-grey-100">
                  {community.name} <ArrowRightIcon />
                </h5>
                <p className="text-xs tracking-[-0.6%] text-grey-200">
                  {community.members}
                </p>
              </li>
            ))}
          </ul>
        </CardWrapper>
      </section>
    </aside>
  );
}
