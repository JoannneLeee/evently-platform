"use client"

import { HeaderLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {

  const pathName = usePathname();
    
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {HeaderLinks.map((item) => {
        const isActive = pathName === item.route
        return (
          <li key={item.label} className={`${isActive && "text-blue-800"} flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={item.route}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
