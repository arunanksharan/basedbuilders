'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
      <a
        className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
        href="/bounties/leaderboard/posters"
      >
        Leaderboard
      </a>
      <a
        className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
        href="/subscribe"
      >
        Subscribe
      </a>
      <a
        className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
        href="/faq"
      >
        FAQ
      </a>
      <a
        className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
        href="/start"
      >
        Create a post
      </a>
    </div>
  );
};

export default Navbar;
