import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <a aria-label="Bountycaster" href="/">
        <div className="flex items-center justify-between">
          <picture className="mr-3">
            <img
              alt="Bountycaster"
              className="color:transparent h-[48px] w-[48px] max-[425px]:h-[22px] max-[425px]:w-[22px]"
              src="/BB-logo.png"
            />
          </picture>
          <div className="h-8 max-[425px]:h-auto text-2xl font-semibold max-[425px]:font-normal sm:block max-[425px]:text-lg">
            BasedBuilders
          </div>
        </div>
      </a>
    </div>
  );
};

export default Logo;
