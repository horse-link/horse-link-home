import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="bg-emerald-500 bg-hero-houndstooth">
    <Navbar />
    <div className="pt-20">{children}</div>
    <Footer />
  </div>
);
