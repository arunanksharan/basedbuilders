import { NeynarAPIClient, isApiErrorResponse } from '@neynar/nodejs-sdk';

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
  message: { username: string; text: string },
  embeds?: { url: string }[]
) => {
  let config: {} = {
    channelId: 'basedbuilders',
  };

  if (embeds && embeds.length > 0) {
    config = { ...config, embeds };
  }

  let messageTemplate = `${message.text}\n Posted by: ${message.username}`;

  let res = await client.publishCast(SIGNER, messageTemplate, config);
  console.log('Cast to channel response:', res);
  return res;
};

export const process_message = (message: string) => {
  let result = message.replace(/@basedbuildersbot/g, '');
  result.replace('Description', '').trim();
  return result;
};
