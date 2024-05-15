"use client";

import QueryCard from "@/components/queryCard/QueryCard";
import { error } from "console";
import { useEffect, useState } from "react";
import FaqCard from "@/components/Faq/Faq";
// either Static metadata

interface Cast {
  _id: string;
  username: string;
  message: string;
  display_name: string;
  pfp_url: string;
  castUrl: string;
  embed: Embed[];
  createdAt: string;
  updatedAt: string;
  genTitle: string;
  genTags: string[];
  __v: number;
}

interface Embed {
  cast_id: CastId;
}

interface CastId {
  fid: number;
  hash: string;
}

interface CastsData {
  casts: Cast[];
}

// This page hits - useEffect to fetch data from the server
// read api from mongodb
// Context/state management

let questions = [
  {
    question: "What is BasedBuilders?",
    answer:
      "BasedBuilders is the place for all the based builders to share what they're building and where they need help. You can post technical problems or project ideas to seek assistance and collaborate with developers. And for the builders, follow us, tell us about your skills and experience and contribute as a BasedBuilder!",
  },
  {
    question: "Who can post a query?",
    answer:
      "Anyone! If you have a Farcaster id, you are welcome to post your queries and ideas.",
  },
  {
    question:
      "What type of technical problems can I solve or seek help for on BasedBuilders?",
    answer:
      "You can ask or address any tech-related queries, from software development challenges to integrating new technologies into your projects.",
  },
  {
    question: "How do I post a query?",
    answer: "It is simple! Just cast your query and tag @basedbuilders.",
  },
  {
    question: "How do I become a BasedBuilder?",
    answer:
      "Follow us here: https://warpcast.com/~/channel/basedbuilders The pinned cast contains the frame for you to create your profile.",
  },
];

export default function HomePage() {
  return (
    <main className="flex w-[600px] max-[670px]:w-full min-h-screen flex-col items-center justify-between p-4 max-[900px]:p-0">
      <div className="flex flex-col gap-6 w-full">
        {questions.map((fq, idx) => {
          return (
            <FaqCard
              question={fq.question}
              answer={fq.answer}
              key={idx + "key"}
            />
          );
        })}
      </div>
    </main>
  );
}
