import { NeynarAPIClient, isApiErrorResponse } from '@neynar/nodejs-sdk';
import { AxiosError } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

// Instantiate the client
const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY as string); // Replace with your Neynar API Key.
const SIGNER = process.env.SIGNER as string;

client.publishCast(SIGNER, 'hello builders', { channelId: 'basedbuilders' });
