import React from "react";

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="flex flex-col  gap-2 border-gray-700 border-b-[1px] w-full pb-4">
      <p className="max-[425px]:text-xs font-medium ">{question}</p>
      <p className="max-[425px]:text-xs text-gray-400 text-sm">{answer}</p>
    </div>
  );
}

export default FaqCard;
