import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const FunkyButton: React.FC<Props> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="funky-clip rounded-md bg-hl-secondary px-1 py-[3px] transition-all duration-100 hover:scale-[1.1]"
  >
    <span className="funky-clip-2 block rounded-sm bg-hl-home-background py-4 px-6 text-xl font-extrabold">
      {children}
    </span>
  </button>
);
