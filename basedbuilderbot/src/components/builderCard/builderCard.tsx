import React from "react";
import Image from "next/image";

// structure
// User info
// Query
// Tags (Frames.js,react)

function BuilderCard({
  user,
  skill,
}: {
  user: {
    username: string;
    pfp: string;
    display_name: string;
  };
  skill: {
    designation: string;
    tags: string[];
  };
}) {
  return (
    <div className="flex flex-col max-w-[250px] bg-gray-900 gap-4 p-4 rounded-lg">
      {/* query */}
      <span className="flex items-center gap-2 max-[425px]:gap-1">
        <picture>
          <img
            className="object-fill w-9 h-9 rounded-full max-[425px]:w-7 max-[425px]:h-7"
            src={user.pfp}
            alt=""
          />
        </picture>
        <span className="flex flex-col  max-[425px]:ml-1">
          <h1 className="max-[425px]:text-sm">{user.display_name}</h1>
          <p className="text-gray-500 max-[425px]:text-[12px]">
            @{user.username}
          </p>
        </span>
        <a
          className="flex gap-1 text-[12px] text-gray-500 ml-auto mb-auto"
          href="https://warpcast.com/phil/0x9450f4e8"
        >
          <Image
            className="object-contain mt-2"
            height={18}
            width={18}
            src={"/warpcast.png"}
            alt=""
          />{" "}
        </a>
      </span>
      {/* query */}
      <p className="max-[425px]:text-xs">{skill.designation}</p>
      {/* tags */}
      <div className="flex gap-2 mb-4 w-full overflow-hidden">
        {skill.tags.slice(0, 3).map((tag, idx) => {
          return (
            <span
              className="bg-gray-600 text-white text-xs py-1 px-2 rounded-md max-[425px]:text-[10px]"
              key={"tag" + idx}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default BuilderCard;
