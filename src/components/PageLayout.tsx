import React from "react";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="lg:w-screen lg:h-screen lg:max-w-[100vw] lg:max-h-[50vh] bg-[#1CB981] bg-hero-houndstooth pb-5">
    <Navbar />
    {children}
  </div>
);
