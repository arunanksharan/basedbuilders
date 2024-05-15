import Error from "next/error";
import { type NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto
import Profiles from "@/app/models/profile";
import dbconfig from "../../utils/dbconfig";
import { profile } from "console";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.neynar.com/v2/farcaster/user/bulk",
  params: {
    fids: "500601",
    viewer_fid: "3",
  },
  headers: {
    accept: "application/json",
    api_key: "9876710B-E4E3-493F-AC67-68CC5EF6FF3A",
  },
};

export async function GET(request: NextRequest) {
  console.log("Request received: GET casts");
  await dbconfig();
  let dbres = await Profiles.find({});
  options.params.fids = dbres
    .map((ele) => {
      return ele.FID;
    })
    .join(",");

  let list = await axios.request(options);

  return new Response(
    JSON.stringify({
      profiles: dbres.map((ele, idx) => {
        return { data: ele, author: list.data.users[idx] };
      }),
    }),
    {
      status: 200,
    }
  );
}
