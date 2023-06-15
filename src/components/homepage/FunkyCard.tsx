import React from "react";

type Props = {
  title: string;
  body: string;
};

export const FunkyCard: React.FC<Props> = ({ title, body }) => (
  <div className="relative h-fit w-full text-left">
    <div className="funky-card relative z-50 rounded-3xl bg-hl-home-card-background px-10 pt-44 pb-10 shadow-xl">
      <h3 className="font-basement text-3xl">{title}</h3>
      <p className="mt-4 text-lg leading-[36px] text-hl-home-card-body">
        {body}
      </p>
      <div className="mt-12 flex w-full justify-between">
        <p className="text-lg text-hl-secondary">Learn more</p>
        <img
          src="/images/HalfRightArrow.png"
          alt="A right arrow"
          width={40}
          height={20}
        />
      </div>
    </div>
    <div className="absolute inset-0 z-40 scale-[0.94] rounded-[2rem] bg-hl-secondary" />
  </div>
);
