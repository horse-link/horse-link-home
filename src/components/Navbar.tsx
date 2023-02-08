import { BaseButton } from "./Button";
import horse from "../assets/horse.png";
export const Navbar: React.FC = () => {
  return (
    <div className="fixed shadow-2xl bg-white w-screen max-w-[100vw] inline-flex items-center justify-center rounded-md ">
      <div className="flex flex-row flex-1">
        <img alt="logo" className="m-8 h-11 md:h-15" src={horse} />
        <div className="-ml-10">
          <h1 className="text-center p-10 text-2xl">Horse : Link</h1>
        </div>
      </div>
      <div className=" flex flex-row gap-3 text-center">
        <a
          className="p-2"
          href="https://github.com/horse-link/horse.link"
          target="_blank"
        >
          Docs
        </a>
        <a
          className="p-2 mr-3"
          href="https://twitter.com/HorseLinkETH?s=20&t=DJPYHgWrWrx88wT0Y7ITkw"
          target="_blank"
        >
          Twitter
        </a>
      </div>
      <div className="flex flex-row gap-3 text-center p-4">
        <BaseButton
          onClick={_event =>
            (window.location.href = "https://alpha.horse.link/signup")
          }
          className="h-10"
        >
          Sign Up
        </BaseButton>
      </div>
    </div>
  );
};
