import React from "react";
import BuilderCard from "@/components/builderCard/builderCard";

const fetchProfiles = async () => {
  let res = await fetch(`${process.env.CLIENT_URL}/api/profiles`);
  res = await res.json();
  return res;
};

async function Builders() {
  let builders = (await fetchProfiles()) as unknown as {
    profiles: {
      _id: string;
      tags: string[];
      FID: string;
      raw_designation: string;
      raw_tags: string;
    }[];
  };
  console.log(builders);
  return (
    <main className="flex w-[660px] min-h-screen flex-col items-center justify-between p-4 max-[900px]:p-0 max-[425px]:w-full">
      <div className="flex  gap-4 w-full flex-wrap justify-center">
        {[...builders.profiles].map((ele, idx) => {
          return (
            <BuilderCard
              key={idx + "builder"}
              user={{
                display_name: "John Swaroop",
                pfp: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/ac5ae44f-ee9c-49a1-51b6-73857d9ad700/rectcrop3",
                username: "johnswaroop",
              }}
              skill={{
                designation: ele.raw_designation,
                tags: [
                  ...ele.raw_tags.split(",").map((sk) => {
                    return sk.trim();
                  }),
                ],
              }}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Builders;
