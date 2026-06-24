"use client";

import { Fragment, useCallback, useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
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

          {/* Desktop actions */}
          <div className="hidden items-center gap-[2.4rem] lg:flex">
            <NotificationIcon />
            <Link href="/">List Property</Link>
            <Button>Sign In</Button>
          </div>

          {/* Mobile: ghost Sign In + hamburger */}
          <div className="flex items-center gap-[1.8rem] lg:hidden">
            <Button variant="ghost" className="border-transparent px-0 text-sm">
              Sign In
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex flex-col gap-[.5rem] p-[.4rem]"
            >
              <span
                className={cn(
                  "block h-[2px] w-[2.2rem] bg-grey-100 transition-all duration-200",
                  { "translate-y-[.7rem] rotate-45": mobileOpen },
                )}
              />
              <span
                className={cn(
                  "block h-[2px] w-[2.2rem] bg-grey-100 transition-all duration-200",
                  { "opacity-0": mobileOpen },
                )}
              />
              <span
                className={cn(
                  "block h-[2px] w-[2.2rem] bg-grey-100 transition-all duration-200",
                  { "-translate-y-[.7rem] -rotate-45": mobileOpen },
                )}
              />
            </button>
          </div>
        </Wrapper>
      </header>

      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[6.4rem] z-50 border-t border-white/[6%] bg-dark-100 shadow-lg lg:hidden">
          <ul className="flex flex-col px-[2.4rem] py-[1.2rem]">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between gap-[.4rem] py-[1.2rem] text-grey-100 transition-colors hover:text-white",
                    { "font-medium text-light-grey-100": activeNav(link) },
                  )}
                >
                  {link.title}
                  {link.children && <ChevronDownIcon />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-white/[6%] px-[2.4rem] py-[1.6rem]">
            <Button className="w-full" onClick={() => setMobileOpen(false)}>
              Sign In
            </Button>
          </div>
        </div>
      )}

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
