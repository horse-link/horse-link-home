import { BaseButton } from "./Button";
import { Horse } from "../assets";

export const Navbar: React.FC = () => (
  <div className="fixed w-full bg-white flex items-center justify-between p-6 shadow-xl">
    <div className="flex items-center gap-x-3">
      <img
        src={Horse}
        alt="Horse Link logo"
        className="h-[2.4rem] hidden lg:block"
      />
      <h2 className="text-sm lg:text-xl">Horse : Link</h2>
    </div>
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
        onClick={() =>
          window.open(
            "https://alpha.horse.link/login",
            "_blank",
            "noopener noreferrer"
          )
        }
      >
        Sign Up
      </BaseButton>
    </div>
  </div>
);
