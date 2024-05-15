import Error from "next/error";
import { type NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto
import SaveCast from "@/app/models/savecast";
import dbconfig from "../../utils/dbconfig";
import Profile from "../../models/profile";

import ogImage from "../../assets/og-skills.png";

let OG_IMAGE = ogImage.src;

//replace with env for HOST
let CLIENT_URL = process.env.CLIENT_URL;

let page = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meta Tags Example</title>
    <meta property="og:image" content="${CLIENT_URL}/${OG_IMAGE}">
    <meta property="fc:frame:image" content="${CLIENT_URL}/${OG_IMAGE}" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:input:text" content="Enter your Designation ex: Frontend Engineer, Backend Engineer" />
    <meta property="fc:frame:button:1" content="Save & Continue" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:post_url" content="${CLIENT_URL}/api/frame-profile-saved" />
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
  //save raw_designation
  let profile = await Profile.findOneAndUpdate(
    { FID: data.untrustedData.fid },
    {
      raw_designation: data.untrustedData.inputText,
    }
  );

  let dbres = await profile.save();

  if (dbres) {
    console.log("Saved Designation");
  }

  const newHeaders = new Headers();
  newHeaders.set("Content-Type", `text/html`);
  return new Response(page, {
    status: 200,
    headers: newHeaders,
  });
}
