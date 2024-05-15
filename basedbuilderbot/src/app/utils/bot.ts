import {
  CastParamType,
  NeynarAPIClient,
  isApiErrorResponse,
} from '@neynar/nodejs-sdk';
import axios from 'axios';
import dbconfig from '../../app/utils/dbconfig';
import SaveCast from '../../app/models/savecast';
import { getQueryDetails } from './openai';

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
  let res = await client.publishCast(SIGNER, 'gm', {
    channelId: 'basedbuilders',
  });
  return res;
};

export const recast = async (castHash: string) => {
  let res = await client.publishReactionToCast(SIGNER, 'recast', castHash);
  if (!res.success) {
    return false;
  }
  return true;
};

export const castToChannel = async (
  message: {
    username: string;
    text: string;
    fid: number;
    display_name: string;
    pfp_url: string;
  },
  castUrl: string,
  hash: string,
  embeds?: { url: string }[]
) => {
  let config: {} = {
    channelId: 'basedbuilders',
  };

  let messageTemplate = `${message.text}\nCasted by: @${message.username}`;
  let initMessage = messageTemplate;
  let embedsUrls: { [label: string]: any }[] = [];

  if (messageTemplate.length >= 320) {
    // messageTemplate = `Cast link : ${castUrl}\nCasted by: @${message.username}`;
    messageTemplate = `Casted by: @${message.username}`;
    embedsUrls = [
      {
        cast_id: {
          fid: message.fid,
          hash: hash,
        },
      },
    ];
  }

  if (embeds && embeds.length > 0) {
    embedsUrls = [...embedsUrls, ...embeds];
  }

  config = { ...config, embeds: embedsUrls };

  let res = await client.publishCast(SIGNER, messageTemplate, config);
  console.log('Cast to channel response:', res);

  const openAiRes = await getQueryDetails({ cast: initMessage });
  // console.log('openAiRes', openAiRes);

  const gentitle: string = openAiRes.title;
  const gentags: string[] = openAiRes.keywords;
  await saveCast(message, initMessage, castUrl, embedsUrls, gentitle, gentags);
  return res;
};

export const process_message = (message: string) => {
  let result = message.replace(/@basedbuilders/g, '');
  result = result.replace(/@undefined/g, '').trim();
  result = result.replace('Description', '').trim();
  console.log('Processed message:', result);
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
  author: { username: string; display_name: string; pfp_url: string },
  messageTemplate: string,
  castUrl: string,
  embeds: { url?: string; hash?: string }[],
  genTitle: string,
  genTags: string[]
) {
  try {
    await dbconfig();

    let cast = {
      username: author.username,
      message: messageTemplate,
      display_name: author.display_name,
      pfp_url: author.pfp_url,
      castUrl: castUrl,
      embed: embeds ? JSON.stringify(embeds) : '',
      genTitle: genTitle,
      genTags: genTags,
    };

    let savecast = new SaveCast({
      ...cast,
    });

    let db_res = await savecast.save();

    if (db_res) {
      console.log('Cast saved', cast);
    }
  } catch (er) {
    console.log('save error : ', er);
  }
}
