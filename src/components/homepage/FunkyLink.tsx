import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  to: string;
  small?: boolean;
};

export const FunkyLink: React.FC<Props> = ({ children, to, small = false }) => {
  const isExternal = to.startsWith("http");

  return isExternal ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="funky-clip block w-fit rounded-md bg-hl-secondary px-1 py-[3px] transition-all duration-100 hover:scale-[1.05]"
    >
      <span
        className={classNames(
          "funky-clip-2 block rounded-sm bg-hl-home-background font-extrabold",
          {
            "py-4 px-6 text-xl": !small,
            "py-2 px-4 text-sm": small
          }
        )}
      >
        {children}
      </span>
    </a>
  ) : (
    <Link
      to={to}
      className="funky-clip block w-fit rounded-md bg-hl-secondary px-1 py-[3px] transition-all duration-100 hover:scale-[1.05]"
    >
      <span
        className={classNames(
          "funky-clip-2 block rounded-sm bg-hl-home-background font-extrabold",
          {
            "py-4 px-6 text-xl": !small,
            "py-2 px-4 text-sm": small
          }
        )}
      >
        {children}
      </span>
    </Link>
  );
};
