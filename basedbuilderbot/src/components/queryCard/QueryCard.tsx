import React from "react";
import Image from "next/image";

// structure
// User info
// Query
// Tags (Frames.js,react)

function QueryCard({
  user,
  query,
}: {
  user: {
    username: string;
    pfp: string;
    display_name: string;
  };
  query: {
    text: string;
    link: string;
    title: string;
    tags: string[];
  };
}) {
  return (
    <div className="flex flex-col  gap-4 border-gray-700 border-b-[1px] w-full">
      {/* query */}
      <span className="flex items-center gap-2 max-[425px]:gap-1">
        <picture>
          <img
            className="object-fill w-9 h-9 rounded-full max-[425px]:w-7 max-[425px]:h-7"
            src={user.pfp}
            alt=""
          />
        </picture>
        <span
          onClick={() => {
            window.open(`https://warpcast.com/${user.username}`, "_blank");
          }}
          className="flex gap-2 max-[425px]:flex-col max-[425px]:gap-0 max-[425px]:ml-1 cursor-pointer"
        >
          <h1 className="max-[425px]:text-sm">{user.display_name}</h1>
          <p className="text-gray-500 max-[425px]:text-[12px]">
            <span className="max-[425px]:hidden">|</span> @{user.username}
          </p>
        </span>
        <a
          className="flex gap-1 text-[12px] text-gray-500 ml-auto underline"
          href={query.link}
        >
          <Image
            className="object-contain "
            height={14}
            width={14}
            src={"/warpcast.png"}
            alt=""
          />{" "}
          <p className="max-[900px]:hidden"> View in Warpcast</p>
        </a>
      </span>
      {/* query */}
      {query.title && (
        <p className="max-[425px]:text-xs font-medium ">{query.title}</p>
      )}
      <p className="max-[425px]:text-xs text-gray-400 text-sm">{query.text}</p>
      {/* tags */}
      <div className="flex gap-2 mb-4 w-full flex-wrap h-auto">
        {query.tags[0] &&
          query.tags[0].split(",").map((tag, idx) => {
            return (
              <span
                className="bg-gray-600 text-white min-w-fit text-xs py-1 px-2 rounded-md max-[425px]:text-[10px]"
                key={"tag" + idx}
              >
                {tag.trim()}
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default QueryCard;
