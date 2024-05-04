import { NeynarAPIClient, isApiErrorResponse } from "@neynar/nodejs-sdk";
import { AxiosError } from "axios";

// Instantiate the client
console.log(process.env.NEYNAR_API_KEY);
const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY as string); // Replace with your Neynar API Key.
const SIGNER = process.env.SIGNER as string;

export const gm = async () => {
  let res = await client.publishCast(SIGNER, "gm", {
    channelId: "basedbuilders",
  });
  return res;
};

export const recast = async (castHash: string) => {
  let res = await client.publishReactionToCast(SIGNER, "recast", castHash);
  if (!res.success) {
    return false;
  }
  return true;
};
