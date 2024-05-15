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

  const template = `Description (what do you wanna built out? Being specific & detailed about your requirements will help get better reponses)

  @basedbuildersbot `;

  let CAST_URL = `https://warpcast.com/~/compose?text=${encodeURIComponent(
    template
  )}`;

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
        href="/faq"
      >
        FAQs
      </a>
      <p
        className="hidden sm:block font-normal text-gray-900 dark:text-gray-400 cursor-pointer"
        onClick={() => [window.open(CAST_URL, "_blank")]}
      >
        Create a post
      </p>
    </div>
  );
};

export default Navbar;
