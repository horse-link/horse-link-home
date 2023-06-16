import React from "react";
import { QuoteAuthor } from "../../types/general";

type Props = {
  body: string;
  author: QuoteAuthor;
};

export const Quote: React.FC<Props> = ({ body, author }) => {
  return (
    <div className="flex w-fit flex-col gap-y-4 text-left lg:w-[26rem]">
      <p className="font-basement text-2xl leading-[42px]">"{body}"</p>
      <div className="flex w-full items-center gap-x-4">
        <img src={author.img} alt="An author's avatar" width={64} height={64} />
      </div>
    </div>
  );
};
