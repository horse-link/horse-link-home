import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Navbar: React.FC = () => (
  <div className="fixed top-0 flex w-full items-center justify-between bg-white p-6 shadow-xl">
    <Link className="mr-4 flex w-full items-center lg:mr-0" to="/">
      <img
        src={Logo}
        alt="Logo"
        className="-my-16 block w-[10rem] drop-shadow-xl"
      />
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
      {/* <a rel="noreferrer noopener" href="https://alpha.horse.link">
        <Button className="!whitespace-nowrap" onClick={() => {}}>
          Launch App
        </Button>
      </a> */}
      <a rel="noreferrer noopener" href="https://bit.ly/3tXLIHG">
        <Button className="!whitespace-nowrap" onClick={() => {}}>
          Connect
        </Button>
      </a>
    </div>
  </div>
);
