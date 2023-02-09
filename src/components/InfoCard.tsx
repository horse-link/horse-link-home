import React from "react";

type Props = {
  children: React.ReactNode;
};

export const InfoCard: React.FC<Props> = ({ children }) => (
  <div className="bg-emerald-500 text-black flex flex-col items-center py-6 lg:py-10 px-4 lg:px-20 rounded-lg shadow-lg text-center">
    {children}
  </div>
);
