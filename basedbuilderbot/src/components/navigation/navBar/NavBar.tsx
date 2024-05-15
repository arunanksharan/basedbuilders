"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center leading-5 space-x-4 sm:space-x-6 ">
      {/* <a
        className="hidden sm:block font-normal text-gray-900 dark:text-gray-400"
        href="/"
      >
        Open Queries
      </a>
      <a
        className="hidden sm:block font-normal text-gray-900 dark:text-gray-400"
        href="/bounties/leaderboard/posters"
      >
        Builders
      </a> */}
      <a
        className="hidden sm:block font-normal text-gray-900 dark:text-gray-400"
        href="/subscribe"
      >
        Subscribe
      </a>
      <a
        className="hidden sm:block font-normal text-gray-900 dark:text-gray-400"
        href="/faq"
      >
        FAQs
      </a>
      <a
        className="hidden sm:block font-normal text-gray-900 dark:text-gray-400"
        href="/start"
      >
        Create a post
      </a>
    </div>
  );
};

export default Navbar;
