type PollData = {
  untrustedData: {
    fid: number;
    url: string;
    messageHash: string;
    timestamp: number;
    network: number;
    buttonIndex: number;
    inputText: string | ""; // empty string if requested and no input, undefined if input not requested
    state: string; // URL-encoded JSON string
    transactionId: string;
    address: string;
    castId: {
      fid: number;
      hash: string;
    };
  };
  trustedData: {
    messageBytes: string;
  };
};

type Profile = {
  data: {
    _id: string;
    tags: string[];
    FID: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    raw_designation: string;
    raw_tags: string;
  };
  author?: {
    object: string;
    fid: number;
    custody_address: string;
    username: string;
    display_name: string;
    pfp_url: string;
    profile: {
      bio: {
        text: string;
      };
    };
    follower_count: number;
    following_count: number;
    verifications: any[];
    verified_addresses: {
      eth_addresses: any[];
      sol_addresses: any[];
    };
    active_status: string;
    power_badge: boolean;
    notes: {
      active_status: string;
    };
    viewer_context: {
      following: boolean;
      followed_by: boolean;
    };
  };
};

type Profiles = {
  profiles: Profile[];
};
