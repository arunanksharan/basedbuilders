import Image from "next/image";
import { Metadata } from "next";
import ogImage from "../app/assets/og.png";
import QueryCard from "@/components/queryCard/QueryCard";
import { error } from "console";

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

const template = `Description (what do you wanna built out? Being specific & detailed about your requirements will help get better reponses)

@basedbuildersbot `;

let CAST_URL = `https://warpcast.com/~/compose?text=${encodeURIComponent(
  template
)}`;

let OG_IMAGE = ogImage.src;

//replace with env for HOST
let CLIENT_URL = process.env.CLIENT_URL;
export const metadata = {
  title: "Basedbuilderbot",
  openGraph: {
    images: [OG_IMAGE],
  },
  other: {
    "fc:frame:image": `${CLIENT_URL}/${OG_IMAGE}`,
    "fc:frame": "vNext",
    "fc:frame:button:1": "Cast Query",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": CAST_URL,
    "fc:frame:button:2": "FAQ",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": `${CLIENT_URL}/faq`,
    "fc:frame:button:3": "Join",
    "fc:frame:button:3:action": "post",
    "fc:frame:button:3:post_url": `${CLIENT_URL}/api/frame-designation`,
  },
};

// This page hits - useEffect to fetch data from the server
// read api from mongodb
// Context/state management

const fetchCasts = async () => {
  let res = await fetch(`${process.env.CLIENT_URL}/api/casts`);
  res = await res.json();
  return res;
};

export default async function HomePage() {
  let casts = [] as unknown as CastsData;
  try {
    casts = (await fetchCasts()) as unknown as CastsData;
  } catch (er) {
    console.log(error);
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
