import { BaseButton } from "./Button";
import horse from "../assets/horse.png";
export const Navbar: React.FC = () => {
  return (
    <div className="fixed shadow-2xl bg-white w-screen max-w-[100vw] inline-flex items-center justify-center rounded-md ">
      <div className="flex flex-row flex-1">
        <img
          alt="logo"
          className="mr-2 m-10 max-h-[8vh] max-w-[10vw]"
          height={8}
          width={50}
          src={horse}
        />
        <div className="-ml-10">
          <h1 className="text-center mt-1 p-10 lg:text-2xl text-xs flex-nowrap">
            Horse : Link
          </h1>
        </div>
      </div>
      <div className=" flex flex-row gap-3 text-center">
        <a
          className="p-2 lg:text-xl text-xs"
          href="https://github.com/horse-link/horse.link"
          target="_blank"
        >
          Docs
        </a>
        <a
          className="p-2 lg:mr-3 lg:text-xl text-xs"
          href="https://twitter.com/HorseLinkETH?s=20&t=DJPYHgWrWrx88wT0Y7ITkw"
          target="_blank"
        >
          Twitter
        </a>
      </div>
      <div className="flex flex-row gap-3 text-center p-4 mr-5">
        <BaseButton
          onClick={_event =>
            (window.location.href = "https://alpha.horse.link/signup")
          }
          className="lg:h-10 lg:w-40 lg:text-base text-xs w-20 h-8"
        >
          Sign Up
        </BaseButton>
      </div>
    </div>
  );
};
