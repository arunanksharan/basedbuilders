"use client";
import React, { useEffect, useState } from "react";
import BuilderCard from "@/components/builderCard/builderCard";

const fetchProfiles = async () => {
  let res = await fetch(`${process.env.CLIENT_URL}/api/profiles`);
  res = await res.json();
  return res;
};

function Builders() {
  const [builders, setbuilders] = useState<Profiles | null>(null);

  const fetchSave = async () => {
    let bd = (await fetchProfiles()) as unknown as Profiles;
    setbuilders(bd);
  };

  useEffect(() => {
    fetchSave();
  }, []);

  if (!builders) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4 max-[900px]:p-0">
        <div className="flex flex-col gap-6 w-full">
          <div
            role="status"
            className="flex justify-center w-[660px] max-[670px]:w-full pt-8 max-[425px]:pt-[40vh]"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </main>
    );
  }

  if (builders.profiles.length == 0) {
    return (
      <main className="flex w-[600px] max-[670px]:w-full  mt-4  flex-col items-center justify-between   bg-gray-900 gap-4 p-4 rounded-lg">
        <div className="flex flex-col  w-full">
          <div
            role="status"
            className="flex flex-col items-center w-full h-fit"
          >
            <h1 className="font-semibold text-center">
              We are working to get the best BasedBuilders !{" "}
            </h1>
            <p
              className="underline "
              onClick={() => {
                window.open(
                  "https://warpcast.com/~/channel/basedbuilders",
                  "_blank"
                );
              }}
            >
              Join Us
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex w-[600px] min-h-screen flex-col items-center justify-between p-4 max-[900px]:p-0 max-[425px]:w-full mx-auto">
      <div className="flex  gap-4 flex-col w-full ">
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
