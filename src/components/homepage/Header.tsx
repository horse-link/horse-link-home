import React from "react";
import { FunkyLink } from "./FunkyLink";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header className="fixed top-0 z-[100] flex w-full items-center justify-between py-10 px-14">
    <Link to="/" className="block font-basement text-3xl">
      HORSE<span className="text-hl-secondary">LINK</span>
    </Link>
    <FunkyLink to="https://alpha.horse.link" small>
      LAUNCH APP
    </FunkyLink>
  </header>
);
