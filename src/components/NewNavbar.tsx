import React from "react";
import { Link } from "react-router-dom";
import constants from "../constants";

export const NewNavbar: React.FC = () => (
  <div className="relative z-50 flex w-full items-center justify-between py-6 px-8">
    <Link to="/" className="font-basement text-3xl font-black tracking-widest">
      <span className="text-hl-secondary">H</span>L
    </Link>

    <div className="flex items-center gap-x-32 text-lg text-hl-tertiary">
      <Link to="/docs" className="underline-offset-4 hover:underline">
        DOCS
      </Link>
      <a
        href="twitter"
        rel="noopener noreferrer"
        target="_blank"
        className="underline-offset-4 hover:underline"
      >
        TWITTER
      </a>
      <a
        href={constants.env.APP_URL}
        rel="noopener noreferrer"
        target="_blank"
        className="border-2 border-hl-secondary py-2 px-8 text-hl-secondary transition-colors duration-100 hover:bg-hl-secondary hover:text-hl-background"
      >
        LAUNCH APP
      </a>
    </div>
  </div>
);
