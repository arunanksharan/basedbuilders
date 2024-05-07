import { type NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto
import dbconfig from "../../utils/dbconfig";
import SaveCast from "./../../models/savecast";

type SaveCastType = {
  username: string;
  message: string;
  castUrl: string;
  embed: { url: string }[];
};

export async function POST(request: Request) {
  try {
    await dbconfig();
    const text = await request.text();
    const payload = JSON.parse(text) as SaveCastType;
    console.log("save request:", payload);

    let savecast = new SaveCast({
      ...payload,
    });

    let db_res = await savecast.save();

    if (db_res) {
      return new Response("Success! save completed", {
        status: 201,
      });
    }
  } catch (error: any) {
    console.error("save :", error);
    return new Response(`save : ${error.message}`, {
      status: 400,
    });
  }
}
