"use client";

import { Button } from "@/src/components/button";
import Wrapper from "@/src/components/wrapper";
import { ChevronDownIcon, Logo, NotificationIcon } from "@/src/icons";
import { cn } from "@/src/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const navLinks = [
  {
    title: "Feed",
    href: "/",
  },
  {
    title: "Rent",
    href: "#",
    children: [],
  },
  {
    title: "Buy",
    href: "#",
    children: [],
  },
  {
    title: "Shortlets",
    href: "#",
  },
  {
    title: "Snagging",
    href: "#",
  },
  {
    title: "Find Professionals",
    href: "#",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const homeRoute = navLinks[0].href;

  const activeNav = useCallback(
    (link: { href: string }) => {
      if (link.href === homeRoute) {
        return pathname === homeRoute;
      }
      return (
        pathname === link.href || pathname.startsWith(link.href + homeRoute)
      );
    },
    [homeRoute, pathname],
  );

  return (
    <section className="border-b border-b-white/[6%] bg-dark-100">
      <Wrapper
        fluid={false}
        className="font-sfPro flex items-center justify-between py-[1.9rem] text-base font-medium text-grey-100"
      >
        <Logo />

        <ul className="flex items-center">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-[.4rem] border-b-green-100 px-[1rem] py-[1.2rem] transition-all duration-150 hover:border-b-[2px] hover:text-white",
                  {
                    "border-b-[2px] text-light-grey-100": activeNav(link),
                  },
                )}
              >
                {link.title}
                {link.children && <ChevronDownIcon />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[2.4rem]">
          <NotificationIcon />
          <Link href="/">List Property</Link>
          <Button>Sign In</Button>
        </div>
      </Wrapper>
    </section>
  );
}
