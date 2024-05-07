import {
  CastParamType,
  NeynarAPIClient,
  isApiErrorResponse,
} from "@neynar/nodejs-sdk";
import axios from "axios";
import dbconfig from "../../app/utils/dbconfig";
import SaveCast from "../../app/models/savecast";

type SaveCastType = {
  username: string;
  message: string;
  castUrl: string;
  embed: { url: string }[];
};

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
const SIGNER_KEY = process.env.SIGNER;

// Instantiate the client
const client = new NeynarAPIClient(NEYNAR_API_KEY as string); // Replace with your Neynar API Key.
const SIGNER = SIGNER_KEY as string;

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

export const castToChannel = async (
  message: { username: string; text: string },
  castUrl: string,
  embeds?: { url: string }[]
) => {
  let config: {} = {
    channelId: "basedbuilders",
  };

  if (embeds && embeds.length > 0) {
    config = { ...config, embeds };
  }

  let messageTemplate = `${message.text}\nCasted by: @${message.username}`;

  await saveCast(message, messageTemplate, castUrl, embeds);

  if (messageTemplate.length >= 320) {
    messageTemplate = `Cast link : ${castUrl}\nCasted by: @${message.username}`;
  }

  let res = await client.publishCast(SIGNER, messageTemplate, config);
  console.log("Cast to channel response:", res);
  return res;
};

export const process_message = (message: string) => {
  let result = message.replace(/@basedbuilders/g, "");
  result = result.replace(/@undefined/g, "").trim();
  result = result.replace("Description", "").trim();
  console.log("Processed message:", result);
  return result;
};

export const fetch_parent_cast = async (parentHash: string) => {
  const res = await client.lookUpCastByHashOrWarpcastUrl(
    parentHash,
    CastParamType.Hash
  );
  // console.log(res);
  return res;
};

async function saveCast(
  message: { username: string; text: string },
  messageTemplate: string,
  castUrl: string,
  embeds: { url: string }[] | undefined
) {
  try {
    await dbconfig();

    let cast = {
      username: message.username,
      message: messageTemplate,
      castUrl: castUrl,
      embeds: embeds || [],
    };

    let savecast = new SaveCast({
      ...cast,
    });

    let db_res = await savecast.save();

    if (db_res) {
      console.log("Cast saved", cast);
    }
  } catch (er) {
    console.log("save error : ", er);
  }
}
