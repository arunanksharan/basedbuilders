"use client";
import React, { useEffect, useState } from "react";
import BuilderCard from "@/components/builderCard/builderCard";

const fetchProfiles = async () => {
  let res = await fetch(`${process.env.CLIENT_URL}/api/profiles`);
  res = await res.json();
  return res;
};

function Builders() {
  const [builders, setbuilders] = useState<Profiles>();

  const fetchSave = async () => {
    let bd = (await fetchProfiles()) as unknown as Profiles;
    setbuilders(bd);
  };

  useEffect(() => {
    fetchSave();
  }, []);

  return (
    <main className="flex w-[660px] min-h-screen flex-col items-center justify-between p-4 max-[900px]:p-0 max-[425px]:w-full">
      <div className="flex  gap-4 w-full flex-wrap justify-center">
        {builders &&
          [...builders.profiles].map((ele, idx) => {
            return (
              <BuilderCard
                key={idx + "builder"}
                user={{
                  display_name: ele.author?.display_name as string,
                  pfp: ele.author?.pfp_url as string,
                  username: ele.author?.username as string,
                }}
                skill={{
                  designation: ele.data.raw_designation as string,
                  tags: (ele.data.raw_tags || "").split(",").map((sk) => {
                    return sk.trim();
                  }),
                }}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Builders;