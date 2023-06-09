import React from "react";

type Props = {
  children: React.ReactNode;
};

export const GrayBackground: React.FC<Props> = ({ children }) => (
  <div className="relative h-full min-h-screen w-screen max-w-[100vw] bg-hl-home-background">
    {/* bars */}
    <div className="absolute inset-0 z-0 flex h-full w-full divide-x-[1px] divide-hl-home-background-bars">
      <div className="h-full w-[6.25%] opacity-[30%]" />
      <div className="h-full w-[12.5%] opacity-[30%]" />
      <div className="h-full w-1/6 opacity-[30%]" />
      <div className="h-full w-1/4 opacity-[30%]" />
      <div className="h-full w-1/4 opacity-[30%]" />
      <div className="h-full w-1/6 opacity-[30%]" />
      <div className="h-full w-[12.5%] opacity-[30%]" />
      <div className="h-full w-[6.25%] opacity-[30%]" />
    </div>

    {/* rest of page */}
    <div className="absolute inset-0 z-50 h-full w-full text-white selection:bg-hl-secondary">
      {children}
    </div>
  </div>
);
