import React from "react";
import { FunkyLink } from "./FunkyLink";

export const Header: React.FC = () => (
  <header className="fixed top-0 z-[100] flex w-full items-center justify-between py-10 px-14">
    <h2 className="font-basement text-3xl">
      HORSE<span className="text-hl-secondary">LINK</span>
    </h2>
    <FunkyLink to="/" small>
      LAUNCH APP
    </FunkyLink>
  </header>
);
