import React from "react";

type Props = {
  title: string;
  image: string;
};

export const FunkyWideCard: React.FC<Props> = ({ title, image }) => (
  <div className="relative h-fit w-full text-left">
    <div className="funky-card-2 relative z-50 grid grid-cols-2 grid-rows-1 rounded-3xl bg-hl-home-card-background">
      <div className="h-fit w-fit">
        {/* non-mobile */}
        <img
          src={image}
          alt="A title image for a card"
          width={279}
          height={190}
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col gap-y-4 pt-6 pr-8">
        <span className="block w-fit rounded-full bg-hl-home-cta-background/5 px-4 py-2 text-xs font-extrabold text-hl-secondary">
          UPDATES
        </span>
        <h3 className="font-basement text-2xl">{title}</h3>
        <span className="block w-fit text-hl-home-text-gray">
          {new Date().toLocaleDateString()}
        </span>
      </div>
    </div>
    <div className="absolute top-0 left-2 z-40 h-full w-full scale-[0.94] rounded-[2rem] bg-hl-secondary shadow-lg" />
  </div>
);
