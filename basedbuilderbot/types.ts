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
