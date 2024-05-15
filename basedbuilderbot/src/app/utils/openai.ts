import {
  ChatCompletionMessage,
  ChatCompletionMessageParam,
} from 'openai/resources/index.mjs';
import { EXTRACT_KEYWORDS, EXTRACT_SKILLS } from './prompt';
import OpenAI from 'openai';

const openai = new OpenAI();
export async function getQueryDetails({ cast }: { cast: string }) {
  // console.log('oooooooooooooooooooooooooooooooo');
  //   console.log('8 cast', cast);
  // console.log('oooooooooooooooooooooooooooooooo');

  const aiMessages: ChatCompletionMessageParam[] = [
    { role: 'system', content: EXTRACT_KEYWORDS },
    { role: 'user', content: `Input Text:\n${cast}` },
  ];

  const completion = await openai.chat.completions.create({
    messages: aiMessages,
    temperature: 1,
    model: 'gpt-4-0125-preview',
  });

  const result =
    completion.choices[0].message.content ||
    '{"title": "NOT_AVAILABLE", "keywords": "NOT_AVAILABLE"}';
  // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
  // console.log(result);
  const jsonResponse = JSON.parse(result);
  // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
  // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log(jsonResponse);
  // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  return jsonResponse;
}

export async function getProfileDetails({ cast }: { cast: string }) {
  console.log('oooooooooooooooooooooooooooooooo');
  //   console.log('8 cast', cast);
  console.log('oooooooooooooooooooooooooooooooo');

  const aiMessages: ChatCompletionMessageParam[] = [
    { role: 'system', content: EXTRACT_SKILLS },
    { role: 'user', content: `Extract Keywords from:\n${cast}` },
  ];

  const completion = await openai.chat.completions.create({
    messages: aiMessages,
    temperature: 1,
    model: 'gpt-4-0125-preview',
  });

  const tldrMessage = completion.choices[0].message.content;
  console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
  console.log('tldrMessage 26', tldrMessage);
  console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
  return tldrMessage;
}
