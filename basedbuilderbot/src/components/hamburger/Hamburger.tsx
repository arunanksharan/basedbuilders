"use client";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  const [visible, setvisible] = useState(false);

  if (!visible) {
    return (
      <div
        onClick={() => {
          setvisible(true);
        }}
        className=" absolute right-0 top-0 p-5 cursor-pointer hover:opacity-50 hidden max-[425px]:flex"
      >
        <GiHamburgerMenu />
      </div>
    );
  }

  const template = `Description (what do you wanna built out? Being specific & detailed about your requirements will help get better reponses)

@basedbuildersbot `;

  let CAST_URL = `https://warpcast.com/~/compose?text=${encodeURIComponent(
    template
  )}`;

  return (
    <div className="hamburger min-[425px]:hidden flex fixed top-0 right-0 w-screen h-screen">
      <div className="flex flex-col w-[80%] mr-auto h-full bg-black border-r-[#0160F6] border-r-[2px] p-3 pr-0">
        <picture className="mr-3 flex gap-2 items-center">
          <img
            alt="Bountycaster"
            className="color:transparent h-[48px] w-[48px] max-[425px]:h-[24px] max-[425px]:w-[24px]"
            src="/BB-logo.png"
          />
          <h1 className="text-l">BasedBuilders</h1>
          <span
            className="ml-auto"
            onClick={() => {
              setvisible(false);
            }}
          >
            <IoCloseCircleOutline className="w-6 h-6" />
          </span>
        </picture>
        <div className="flex flex-col gap-3 mt-6">
          <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
            Open Queries
          </span>
          <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
            Builders
          </span>
          <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
            FAQs
          </span>

          <span
            onClick={() => {
              window.open(CAST_URL, "_blank");
            }}
            className="text-sm text-gray-400 hover:text-white cursor-pointer"
          >
            Create a post
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
