import Error from "next/error";
import { type NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto
import SaveCast from "@/app/models/savecast";
import dbconfig from "../../utils/dbconfig";

export async function GET(request: NextRequest) {
  console.log("Request received: GET casts");
  await dbconfig();
  let dbres = await SaveCast.find({});
  return new Response(JSON.stringify({ casts: dbres }), { status: 200 });
}
