import React from "react";

type Props = {
  children: React.ReactNode;
};

export const GrayBackground: React.FC<Props> = ({ children }) => (
  <div className="relative h-full min-h-screen w-screen max-w-[100vw] bg-hl-home-background text-white">
    <div className="absolute inset-0 z-0 flex h-full w-full divide-x-2 divide-hl-home-background-bars">
      <div className="h-full w-full" />
      <div className="h-full w-full" />
      <div className="h-full w-full" />
      <div className="h-full w-full" />
      <div className="h-full w-full" />
      <div className="h-full w-full" />
      <div className="h-full w-full" />
      <div className="h-full w-full" />
    </div>
    <div className="absolute inset-0 z-50 h-full w-full">{children}</div>
  </div>
);
