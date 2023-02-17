import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="bg-white h-screen flex flex-wrap">
    <Navbar />
    <div className="pt-20 w-full bg-emerald-500 bg-hero-houndstooth">
      {children}
    </div>
    <div className="self-end w-full">
      <Footer />
    </div>
  </div>
);
