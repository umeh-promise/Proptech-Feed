"use client";

import { Fragment, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/button";
import Wrapper from "@/src/components/wrapper";
import {
  ChevronDownIcon,
  Logo,
  NotificationIcon,
  PlusIcon,
  HomeIcon,
  SearchIcon,
  PlusAppIcon,
  ProfileIcon,
} from "@/src/icons";
import { cn } from "@/src/utils";

const navLinks = [
  { title: "Feed", href: "/" },
  { title: "Rent", href: "#", children: [] },
  { title: "Buy", href: "#", children: [] },
  { title: "Shortlets", href: "#" },
  { title: "Snagging", href: "#" },
  { title: "Find Professionals", href: "#" },
];

const bottomTabs = [
  {
    title: "Feed",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Search",
    href: "#",
    icon: <SearchIcon />,
  },
  {
    title: "List",
    href: "#",
    icon: <PlusAppIcon />,
  },
  {
    title: "Alerts",
    href: "#",
    icon: <NotificationIcon />,
  },
  {
    title: "Profile",
    href: "#",
    icon: <ProfileIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const homeRoute = navLinks[0].href;

  const activeNav = useCallback(
    (link: { href: string }) => {
      if (link.href === homeRoute) return pathname === homeRoute;
      return (
        pathname === link.href || pathname.startsWith(link.href + homeRoute)
      );
    },
    [homeRoute, pathname],
  );

  return (
    <Fragment>
      <header className="z-50 border-b border-b-white/[6%] bg-dark-100">
        <Wrapper
          fluid={false}
          className="font-sfPro flex items-center justify-between py-[1.6rem] text-base font-medium text-grey-100"
        >
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center lg:flex">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-[.4rem] border-b-green-100 px-[1rem] py-[1.2rem] transition-all duration-150 hover:border-b-[2px] hover:text-white",
                    { "border-b-[2px] text-light-grey-100": activeNav(link) },
                  )}
                >
                  {link.title}
                  {link.children && <ChevronDownIcon />}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-[2.4rem] lg:flex">
            <NotificationIcon />
            <Link href="/">List Property</Link>
            <Button>Sign In</Button>
          </div>

          <div className="flex items-center gap-[1.6rem] lg:hidden">
            <NotificationIcon />
          </div>
        </Wrapper>
      </header>

      <button
        type="button"
        aria-label="Create post"
        className="fixed bottom-[7.2rem] right-[2rem] z-50 flex size-[5rem] items-center justify-center rounded-full bg-primary transition-transform hover:scale-105 active:scale-95 lg:hidden"
      >
        <PlusIcon />
      </button>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-white/[6%] bg-dark-100 px-[.8rem] pb-[env(safe-area-inset-bottom)] pt-[.8rem] lg:hidden">
        {bottomTabs.map((tab) => (
          <Link
            key={tab.title}
            href={tab.href}
            className={cn(
              "flex flex-col items-center gap-[.3rem] px-[.8rem] py-[.6rem] text-[1rem] text-grey-200 transition-colors hover:text-white",
              { "text-primary": tab.href === "/" && pathname === "/" },
            )}
          >
            {tab.icon}
            <span className="text-sm">{tab.title}</span>
          </Link>
        ))}
      </nav>
    </Fragment>
  );
}
