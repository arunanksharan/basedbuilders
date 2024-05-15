import Error from "next/error";
import { type NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto
import Profiles from "@/app/models/profile";
import dbconfig from "../../utils/dbconfig";
import { profile } from "console";

export async function GET(request: NextRequest) {
  console.log("Request received: GET casts");
  await dbconfig();
  let dbres = await Profiles.find({});
  return new Response(JSON.stringify({ profiles: dbres }), { status: 200 });
}
