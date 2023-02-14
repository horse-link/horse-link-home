import { Horse } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { BaseButton } from "./Button";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full bg-white flex items-center justify-between p-6 shadow-xl">
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
        <BaseButton
          className="!whitespace-nowrap"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </BaseButton>
      </div>
    </div>
  );
};
