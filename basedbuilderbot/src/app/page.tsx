"use client";

import QueryCard from "@/components/queryCard/QueryCard";
import { error } from "console";
import { useEffect, useState } from "react";

// either Static metadata

interface Cast {
  _id: string;
  username: string;
  message: string;
  display_name: string;
  pfp_url: string;
  castUrl: string;
  embed: Embed[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Embed {
  cast_id: CastId;
}

interface CastId {
  fid: number;
  hash: string;
}

interface CastsData {
  casts: Cast[];
}

// This page hits - useEffect to fetch data from the server
// read api from mongodb
// Context/state management

const fetchCasts = async () => {
  let res = await fetch(`${process.env.CLIENT_URL}/api/casts`);
  res = await res.json();
  return res;
};

export default function HomePage() {
  const [casts, setcasts] = useState<CastsData | null>(null);

  const fetchSave = async () => {
    let ct = (await fetchCasts()) as unknown as CastsData;
    setcasts(ct);
  };
  useEffect(() => {
    fetchSave();
  }, []);

  if (!casts) {
    return <></>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 max-[900px]:p-0">
      <div className="flex flex-col gap-6 w-full">
        {casts.casts.map((ct, idx) => {
          return (
            <QueryCard
              key={idx + "qc"}
              user={{
                display_name: ct.display_name,
                pfp: ct.pfp_url,
                username: ct.username,
              }}
              query={{
                link: ct.castUrl,
                text: ct.message,
              }}
            />
          );
        })}
      </div>
    </main>
  );
}
