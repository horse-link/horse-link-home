import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to: string;
};

export const FunkyLink: React.FC<Props> = ({ children, to }) => (
  <Link
    to={to}
    className="funky-clip block rounded-md bg-hl-secondary px-1 py-[3px] transition-all duration-100 hover:scale-[1.05]"
  >
    <span className="funky-clip-2 block rounded-sm bg-hl-home-background py-4 px-6 text-xl font-extrabold">
      {children}
    </span>
  </Link>
);
