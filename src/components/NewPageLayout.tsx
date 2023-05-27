import React from "react";
import { NewNavbar } from "./NewNavbar";

type Props = {
  children: React.ReactNode;
};

export const NewPageLayout: React.FC<Props> = ({ children }) => (
  <div className="min-h-screen bg-hl-background text-hl-primary">
    <NewNavbar />
    <div className="w-full">{children}</div>
  </div>
);
