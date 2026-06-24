"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/button";
import Wrapper from "@/src/components/wrapper";
import { ChevronDownIcon, Logo, NotificationIcon } from "@/src/icons";
import { cn } from "@/src/utils";

const navLinks = [
  { title: "Feed", href: "/" },
  { title: "Rent", href: "#", children: [] },
  { title: "Buy", href: "#", children: [] },
  { title: "Shortlets", href: "#" },
  { title: "Snagging", href: "#" },
  { title: "Find Professionals", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const homeRoute = navLinks[0].href;

  const activeNav = useCallback(
    (link: { href: string }) => {
      if (link.href === homeRoute) return pathname === homeRoute;
      return pathname === link.href || pathname.startsWith(link.href + homeRoute);
    },
    [homeRoute, pathname],
  );

  return (
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

        {/* Mobile actions */}
        <div className="flex items-center gap-[1.6rem] lg:hidden">
          <NotificationIcon />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex flex-col gap-[.5rem] p-[.4rem]"
          >
            <span className={cn("block h-[2px] w-[2.2rem] bg-grey-100 transition-all duration-200", { "translate-y-[.7rem] rotate-45": mobileOpen })} />
            <span className={cn("block h-[2px] w-[2.2rem] bg-grey-100 transition-all duration-200", { "opacity-0": mobileOpen })} />
            <span className={cn("block h-[2px] w-[2.2rem] bg-grey-100 transition-all duration-200", { "-translate-y-[.7rem] -rotate-45": mobileOpen })} />
          </button>
        </div>
      </Wrapper>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-white/[6%] bg-dark-100 lg:hidden">
          <ul className="flex flex-col px-[2.4rem] py-[1.2rem]">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between gap-[.4rem] py-[1.2rem] transition-colors hover:text-white",
                    { "text-light-grey-100": activeNav(link) },
                  )}
                >
                  {link.title}
                  {link.children && <ChevronDownIcon />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-[1.2rem] border-t border-white/[6%] px-[2.4rem] py-[1.6rem]">
            <Link href="/" className="text-grey-100 hover:text-white">List Property</Link>
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
}
