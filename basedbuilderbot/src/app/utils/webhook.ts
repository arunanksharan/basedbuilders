const webhook_body_from_neynar = {
  created_at: 1714840057,
  type: 'cast.created',
  data: {
    object: 'cast',
    hash: '0x8972fad5b9e4a362ebb2b3ce92765a9e31cfb106',
    thread_hash: '0x8972fad5b9e4a362ebb2b3ce92765a9e31cfb106',
    parent_hash: null,
    parent_url: null,
    root_parent_url: null,
    parent_author: { fid: null },
    author: {
      object: 'user',
      fid: 224616,
      custody_address: '0x86023df0d3e67eb808d3bda522d3daae2562a7d2',
      username: 'arunank',
      display_name: 'Arunank Sharan',
      pfp_url:
        'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2c7cd249-4668-4772-be20-f3369b494700/original',
      profile: [Object],
      follower_count: 62,
      following_count: 108,
      verifications: [Array],
      verified_addresses: [Object],
      active_status: 'inactive',
      power_badge: false,
    },
    text: 'test 4 for multiple posts @undefined',
    timestamp: '2024-05-04T16:27:34.000Z',
    embeds: [],
    reactions: { likes_count: 0, recasts_count: 0, likes: [], recasts: [] },
    replies: { count: 0 },
    mentioned_profiles: [[Object]],
  },
};

// Without user name

const uname_undefined = {
  created_at: 1714974342,
  type: 'cast.created',
  data: {
    object: 'cast',
    hash: '0x5f9606af7e5cf38c324d082ca3879613a2df31cc',
    thread_hash: '0x5f9606af7e5cf38c324d082ca3879613a2df31cc',
    parent_hash: null,
    parent_url: 'https://warpcast.com/~/channel/basedbuilders',
    root_parent_url: 'https://warpcast.com/~/channel/basedbuilders',
    parent_author: { fid: null },
    author: {
      object: 'user',
      fid: 500601,
      custody_address: '0x635999b9b78e24dd1e3606f52d036252872fe6da',
      username: 'john-swaroop',
      display_name: 'john swaroop',
      pfp_url:
        'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/ac5ae44f-ee9c-49a1-51b6-73857d9ad700/rectcrop3',
      profile: [Object],
      follower_count: 4,
      following_count: 74,
      verifications: [],
      verified_addresses: [Object],
      active_status: 'inactive',
      power_badge: false,
    },
    text:
      "I'm working on a React project and I'm trying to figure out the best way to manage state across multiple components. I've read about various approaches like Context API, Redux, and MobX, but I'm not sure which one is the most suitable for a mid-sized application.\n" +
      '\n' +
      '@undefined',
    timestamp: '2024-05-06T05:45:38.000Z',
    embeds: [],
    reactions: { likes_count: 0, recasts_count: 0, likes: [], recasts: [] },
    replies: { count: 0 },
    mentioned_profiles: [[Object]],
  },
};

const webhook_body_from_replies = {
  created_at: 1715028070,
  type: 'cast.created',
  data: {
    object: 'cast',
    hash: '0x593df31e69147cbc37615e018b0ed7dc11146fe9',
    thread_hash: '0x3945d83298b7fd98ccbc1e49e5e366a50ed4f626',
    parent_hash: '0x3945d83298b7fd98ccbc1e49e5e366a50ed4f626',
    parent_url: null,
    root_parent_url: null,
    parent_author: { fid: 224616 },
    author: {
      object: 'user',
      fid: 224616,
      custody_address: '0x86023df0d3e67eb808d3bda522d3daae2562a7d2',
      username: 'arunank',
      display_name: 'Arunank Sharan',
      pfp_url:
        'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2c7cd249-4668-4772-be20-f3369b494700/original',
      profile: [Object],
      follower_count: 62,
      following_count: 109,
      verifications: [Array],
      verified_addresses: [Object],
      active_status: 'inactive',
      power_badge: false,
    },
    text: 'Testing pickup by replies @undefined',
    timestamp: '2024-05-06T20:41:05.000Z',
    embeds: [],
    reactions: { likes_count: 0, recasts_count: 0, likes: [], recasts: [] },
    replies: { count: 0 },
    mentioned_profiles: [[Object]],
  },
};
