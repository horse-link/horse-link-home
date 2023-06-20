import React from "react";
import { QuoteAuthor } from "../../types/general";

type Props = {
  body: string;
  author: QuoteAuthor;
};

export const Quote: React.FC<Props> = ({ body, author }) => (
  <div className="flex w-fit flex-col gap-y-8 text-left lg:w-[26rem] lg:gap-y-6">
    <p className="font-basement leading-[30px] tracking-wider lg:text-2xl lg:leading-[42px] lg:tracking-normal">
      "{body}"
    </p>
    <div className="flex w-full items-center gap-x-6">
      <img src={author.img} alt="An author's avatar" width={64} height={64} />
      <div className="flex w-full flex-col gap-y-1">
        <h3 className="font-extrabold">{author.name}</h3>
        <p className="text-hl-home-text-gray">{author.position}</p>
      </div>
    </div>
  </div>
);
