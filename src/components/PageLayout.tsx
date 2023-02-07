import React from "react";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="w-screen h-screen max-w-[100vw] max-h-[100vh] bg-[#1CB981]">
    <Navbar />
    {children}
  </div>
);
