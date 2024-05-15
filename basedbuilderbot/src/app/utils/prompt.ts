export const EXTRACT_KEYWORDS = `
Use the following technical text to 
1. identify and extract key terms that are crucial for understanding the main concepts and requirements. 
2. Create a one line title which summarises the text

Focus on technical terms, relevant technologies, programming languages, and any specific functional or non-functional requirements mentioned. The goal is to distill the text into a concise set of keywords that can be used for further analysis, categorization, or summarization of the content. 

Below is an an example of this summarisation for the text provided:

### Text:
Need a solidity smart contract developer for micro dApp & frame
DC me for detailed functionality and link to existing UI that needs the smart contract
Frame UX and website are designed, front-end UI is ready as starting point - solidity development exp. required
Amount 250 USDC + 250 DEGEN
Due 05/31/2024

### Response: 
**Title:**
Solidity smart contract developer for Micro Dapp and Frames

**Keywords:**
solidity, smart contract, developer, micro dApp, frame, UX, website, front-end, UI, development, USDC, DEGEN

TO EXTRACT THE KEYWORDS FOLLOW THE BELOW STEPS:
1. Understand the text and filter out the jokes and non-work related conversation.
2. Create groupings from the text such that different cluster of skills appear close together (frontend, javascript, reactjs | backend, nodejs). 
3. Try to keep the overall number of extract keywords to 8-10 only. List it separated by comma.
4. Do not give any analysis, commentary or conclusion. Only output the response in the format provided above.
5. Ensure there are no expletives or any offensive language in the summary. If there are, please remove them. Do not add any NSFW words, expletives or offensive language in the keywords.
`;

// ToDo: Update the text below to create profile of developers
export const EXTRACT_SKILLS = `You need to create a profile of a user based on the conversations that is happening in a farcaster warpcast channel of product builders. It is a mix of devs, designers and many more who are excited to build awesome stuff on web3 and earn profits with trading as well.

Use the following text to 
1. identify and extract key terms that are crucial for understanding the main concepts and requirements. 
2. Create a one line title which summarises the text

Focus on technical terms, relevant technologies, programming languages, and any specific functional or non-functional requirements mentioned. The goal is to distill the text into a concise set of keywords that can be used for further analysis, categorization, or summarization of the content. 

Below is an an example of this summarisation for the text provided:

### Input Text:
Need a solidity smart contract developer for micro dApp & frame
DC me for detailed functionality and link to existing UI that needs the smart contract
Frame UX and website are designed, front-end UI is ready as starting point - solidity development exp. required
Amount 250 USDC + 250 DEGEN
Due 05/31/2024

### Response: 
**Title:**
Solidity smart contract developer for Micro Dapp and Frames

**Keywords:**
solidity, smart contract, developer, micro dApp, frame, UX, website, front-end, UI, development, USDC, DEGEN

TO EXTRACT THE KEYWORDS FOLLOW THE BELOW STEPS:
1. Understand the text and filter out the jokes and non-work related conversation.
2. Create groupings from the text such that different cluster of skills appear close together (frontend, javascript, reactjs | backend, nodejs). 
3. Try to keep the overall number of extract keywords to 8-10 only. List it separated by comma.
4. Do not give any analysis, commentary or conclusion. Only output the response in the format provided above.
5. Ensure there are no expletives or any offensive language in the summary. If there are, please remove them. Do not add any NSFW words, expletives or offensive language in the keywords.`;
