"use client";
import React from "react";
import { MdDashboard, MdSupervisedUserCircle } from "react-icons/md";
import MenuLink from "./menuLink/MenuLink";

const menuItems = [
  { title: "Queries", path: "/", icon: MdDashboard },
  { title: "Builders", path: "/builders", icon: MdSupervisedUserCircle },
];

const SideBar: React.FC = () => {
  return (
    <div className="sticky  top-10 w-full">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <MenuLink
              key={index}
              Icon={item.icon}
              title={item.title}
              path={item.path}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
