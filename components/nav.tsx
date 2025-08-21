"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <ul className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20 xl:h-max py-8 bg-white/10 backdrop-blur-sm xl:rounded-full">
        {NAV_ITEMS.map(({ name, icon: Icon, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={cn(
                pathname === path && "text-accent",
                "relative flex items-center group hover:text-accent transition-colors duration-300"
              )}
            >
              <div className="absolute right-0 pr-12 hidden xl:group-hover:block">
                <div className="relative p-1.5 flex items-center text-primary bg-white rounded">
                  <div className="text-xs font-semibold leading-none capitalize">
                    {name}
                  </div>
                  <div className="absolute -right-2 border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0" />
                </div>
              </div>
              <Icon className="text-3xl xl:text-xl" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
