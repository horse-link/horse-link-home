import { Horse } from "../assets";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Navbar: React.FC = () => (
  <div className="fixed top-0 w-full bg-white flex items-center justify-between p-6 shadow-xl">
    <Link className="w-full flex items-center gap-x-3" to="/">
      <img
        src={Horse}
        alt="Horse Link logo"
        className="h-[2.4rem] hidden lg:block"
      />
      <h2 className="text-sm lg:text-xl">Horse : Link</h2>
    </Link>
    <div className="flex items-center gap-x-6 text-sm lg:text-base">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/horse-link"
      >
        Docs
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://twitter.com/HorseLinkETH"
      >
        Twitter
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://alpha.horse.link"
      >
        <Button className="!whitespace-nowrap" onClick={() => {}}>
          Launch App
        </Button>
      </a>
    </div>
  </div>
);
