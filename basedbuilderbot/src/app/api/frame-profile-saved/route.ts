import Error from "next/error";
import { type NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto
import SaveCast from "@/app/models/savecast";
import dbconfig from "../../utils/dbconfig";
import Profile from "../../models/profile";

import ogImage from "../../assets/og-final.png";

let OG_IMAGE = ogImage.src;

//replace with env for HOST
let CLIENT_URL = process.env.CLIENT_URL;

let page = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta property="og:image" content="${CLIENT_URL}/${OG_IMAGE}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meta Tags Example</title>
    <meta property="fc:frame:image" content="${CLIENT_URL}/${OG_IMAGE}" />
    <meta property="fc:frame" content="vNext" />
</head>
<body>
    <h1>Welcome to the Meta Tags Example Page</h1>
    <p>This page includes custom meta tags for a specific frame configuration.</p>
</body>
</html>`;

export async function POST(request: NextRequest) {
  const data = JSON.parse(await request.text()) as unknown as PollData;

  //init DB
  await dbconfig();

  //find user by fid
  //save raw_tags
  let profile = await Profile.findOneAndUpdate(
    { FID: data.untrustedData.fid },
    {
      raw_tags: data.untrustedData.inputText,
    }
  );

  let dbres = await profile.save();

  if (dbres) {
    console.log("Saved skills");
  }

  const newHeaders = new Headers();
  newHeaders.set("Content-Type", `text/html`);
  return new Response(page, {
    status: 200,
    headers: newHeaders,
  });
}
