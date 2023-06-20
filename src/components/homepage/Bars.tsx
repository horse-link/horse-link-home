import React from "react";

type Props = {
  height: number;
};

export const Bars: React.FC<Props> = ({ height }) => (
  <div
    style={{
      height
    }}
    className="absolute top-0 z-40 hidden w-full divide-x-[1px] divide-hl-home-background-bars lg:flex"
  >
    <div className="h-full w-[6.25%] opacity-[30%]" />
    <div className="h-full w-[12.5%] opacity-[30%]" />
    <div className="h-full w-1/6 opacity-[30%]" />
    <div className="h-full w-1/4 opacity-[30%]" />
    <div className="h-full w-1/4 opacity-[30%]" />
    <div className="h-full w-1/6 opacity-[30%]" />
    <div className="h-full w-[12.5%] opacity-[30%]" />
    <div className="h-full w-[6.25%] opacity-[30%]" />
  </div>
);
