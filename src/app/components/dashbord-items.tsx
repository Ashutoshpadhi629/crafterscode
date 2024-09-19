"use client";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navLinks } from "@/constants/data";
import { cn } from "@/lib/utils";
import { TooltipContent } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardItems = () => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((item, idx) => (
        <Link
          href={item.href}
          key={idx}
          className={cn(
            `size-10  flex items-center justify-center rounded-full my-2 ${
              pathname === item.href
                ? "bg-zinc-800 text-white dark:bg-white rounded-full dark:text-zinc-700 hover:bg-zinc-600 dark:hover:bg-white/80"
                : "hover:bg-zinc-300 transition-all dark:hover:bg-zinc-600"
            }`
          )}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="">
                <item.icon className="size-6 " />
              </TooltipTrigger>
              <TooltipContent side="top" className="p-1">
                <p className="text-sm font-semibold dark:text-white text-zinc-700">
                  {item.name}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* {item.name} */}
        </Link>
      ))}
    </>
  );
};

export default DashboardItems;
