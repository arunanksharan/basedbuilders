import {
  recast,
  castToChannel,
  process_message,
  fetch_parent_cast,
} from "@/app/utils/bot";
import Error from "next/error";
import { type NextRequest } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  console.log("Request received:");
  console.log(request);
  return new Response("GET /api/notify", { status: 200 });
}

export async function POST(request: Request) {
  try {
    const text = await request.text();
    const payload = JSON.parse(text);
    console.log("Webhook received:", payload);

    let rawMessage = "";
    let username = "";
    let castUrl = "";

    // Check for parent hash
    if (payload.data.parent_hash) {
      // Recast the parent cast
      const parent_cast = await fetch_parent_cast(payload.data.parent_hash);
      rawMessage = parent_cast.cast.text;
      username = parent_cast.cast.author.username;
      let hashid = payload.data.parent_hash.slice(0, 8);
      castUrl = `https://warpcast.com/${username}/${hashid}`;
    } else {
      rawMessage = payload.data.text;
      username = payload.data.author.username;
      let hashid = payload.data.hash.slice(0, 8);
      castUrl = `https://warpcast.com/${username}/${hashid}`;
    }
    const message = process_message(rawMessage); // rawMessage.replace(/@basedbuilders/g, '');
    console.log("Processed message:", message);

    let cast_res = await castToChannel(
      {
        //   display_name: payload.data.author.display_name,
        username: username,
        text: message,
      },
      castUrl,
      payload.data.embeds
    );
    console.log("Recast response:", cast_res);

    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    // console.log('Recasted Hash:', payload.data.hash);
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

    // Process the webhook payload
  } catch (error: any) {
    console.error("Webhook error:", error);
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success! Webhook received", { status: 200 });
}

// Sample Data
// Webhook received: {
//     created_at: 1714810457,
//     type: 'cast.created',
//     data: {
//       object: 'cast',
//       hash: '0x23e3390edbd2f50190a898874735c493a177f4cf',
//       thread_hash: '0x23e3390edbd2f50190a898874735c493a177f4cf',
//       parent_hash: null,
//       parent_url: null,
//       root_parent_url: null,
//       parent_author: { fid: null },
//       author: {
//         object: 'user',
//         fid: 224616,
//         custody_address: '0x86023df0d3e67eb808d3bda522d3daae2562a7d2',
//         username: 'arunank',
//         display_name: 'Arunank Sharan',
//         pfp_url: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2c7cd249-4668-4772-be20-f3369b494700/original',
//         profile: [Object],
//         follower_count: 63,
//         following_count: 107,
//         verifications: [Array],
//         verified_addresses: [Object],
//         active_status: 'inactive',
//         power_badge: false
//       },
//       text: 'Test @basedbuildersbot',
//       timestamp: '2024-05-04T08:14:14.000Z',
//       embeds: [],
//       reactions: { likes_count: 0, recasts_count: 0, likes: [], recasts: [] },
//       replies: { count: 0 },
//       mentioned_profiles: []
//     }
//   }
