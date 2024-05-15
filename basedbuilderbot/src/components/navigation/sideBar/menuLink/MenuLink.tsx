"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";
import { IconType } from "react-icons";

interface MenuLinkProps {
  Icon: React.ElementType; // This accepts a component
  title: string;
  path: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  Icon,
  title,
  path,
}: MenuLinkProps) => {
  const pathname = usePathname();
  //   console.log(pathname)
  return (
    <Link
      className={`menuitem ${
        pathname === path ? "bg-[#ffffff28] rounded-xl" : ""
      } dark:text-white font-medium text-gray-900 group flex gap-2 p-2 text-sm leading-6 m-4`}
      href={path}
    >
      <Icon size={28} className="mr-2 " />
      {title}
    </Link>
  );
};

export default MenuLink;

// class="dark:text-white font-medium text-gray-900 group flex gap-x-3 p-2 text-sm leading-6 bg-gray-200 border-l-2 border-themed-500 dark:bg-warpcast-500 dark:border-gray-200 dark:border"

// "dark:text-white font-medium text-gray-900 group flex gap-x-3 p-2 text-sm leading-6 "
