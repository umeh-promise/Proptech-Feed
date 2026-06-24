import {
  BookSimpleIcon,
  ChevronDownIcon,
  MessageIcon,
  RocketLaunchIcon,
  UsersIcon,
  PlusIcon,
} from "@/src/icons";
import CardWrapper from "./card-wrapper";
import { Button } from "@/src/components/button";

const topFilters = [
  { id: 1, name: "Messages", icon: <MessageIcon /> },
  { id: 2, name: "My Boosts", icon: <RocketLaunchIcon /> },
  { id: 3, name: "Saved", icon: <BookSimpleIcon /> },
  { id: 4, name: "Communities", icon: <UsersIcon /> },
];

const bottomFilters = [
  { id: 1, name: "Location" },
  { id: 2, name: "Listing Type" },
  { id: 3, name: "Budget" },
  { id: 4, name: "User Type" },
];

export default function Filters() {
  return (
    <section className="flex flex-col gap-[2.4rem]">
      <CardWrapper>
        <ul className="flex flex-col">
          {topFilters.map((filter) => (
            <li
              key={filter.id}
              className="flex cursor-pointer items-center gap-[.8rem] px-[1.6rem] py-[1.2rem] text-grey-100 transition-colors duration-150 hover:text-white"
            >
              {filter.icon} {filter.name}
            </li>
          ))}
        </ul>
      </CardWrapper>
      <CardWrapper className="px-0">
        <ul className="flex w-full flex-col divide-y-[1px] divide-grey-100/[6%]">
          {bottomFilters.map((filter) => (
            <li
              key={filter.id}
              className="flex w-full cursor-pointer items-center justify-between gap-[.8rem] px-[1.6rem] py-[1.2rem] transition-colors duration-150 hover:text-white"
            >
              {filter.name} <ChevronDownIcon />
            </li>
          ))}
        </ul>
      </CardWrapper>

      <Button className="font-openRunde py-[.8rem]">
        <PlusIcon /> Create Post
      </Button>
    </section>
  );
}
