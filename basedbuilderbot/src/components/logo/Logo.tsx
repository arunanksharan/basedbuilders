import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div>
      <a aria-label="Bountycaster" href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image
              alt="Bountycaster"
              loading="lazy"
              width="64"
              height="64"
              decoding="async"
              data-nimg="1"
              className="color:transparent"
              src="/BB-logo.png"
            />
          </div>
          <div className="h-8 text-2xl font-semibold sm:block">
            BasedBuilders
          </div>
        </div>
      </a>
    </div>
  );
};

export default Logo;
