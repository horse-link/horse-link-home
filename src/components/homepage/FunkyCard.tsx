import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  title: string;
  body: string;
};

export const FunkyCard: React.FC<Props> = ({ title, body }) => (
  <div className="relative h-fit w-full text-left">
    <div className="funky-card relative z-50 rounded-3xl bg-hl-home-card-background px-10 pt-44 pb-10">
      <h3 className="font-basement text-3xl">{title}</h3>
      <p className="mt-4 text-lg leading-[36px] text-hl-home-card-body">
        {body}
      </p>
      <div className="mt-12 flex w-full items-center justify-between">
        <p className="text-lg text-hl-secondary">Learn more</p>
        <FaLongArrowAltRight
          color="#5E6B7E" // color is hl-text-gray in tailwind config
          size={30}
        />
      </div>
    </div>
    <div className="absolute inset-0 z-40 scale-[0.94] rounded-[2rem] bg-hl-secondary shadow-xl" />
  </div>
);
