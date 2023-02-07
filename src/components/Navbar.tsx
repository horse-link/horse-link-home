import { BaseButton } from "./Button";
import horse from "../assets/horse.png";
export const Navbar: React.FC = () => {
  return (
    <div className="fixed shadow-2xl bg-white w-screen max-w-[100vw] max-h-[9vh] inline-flex items-center justify-center rounded-md">
      <div className="flex flex-row flex-1">
        <img alt="logo" className="m-8 h-11 md:h-15" src={horse} />
        <div className="-ml-10">
          <h1 className="text-center p-10 text-2xl">Horse : Link</h1>
        </div>
      </div>
      <div className=" flex flex-row gap-3 text-center">
        <h1 className="p-2">Docs</h1>
        <h1 className="p-2 mr-3">Twitter</h1>
      </div>
      <div className=" flex flex-row gap-3 text-center p-4">
        <BaseButton className="h-10">Sign Up</BaseButton>
        <BaseButton className="h-10">Connect</BaseButton>
      </div>
    </div>
  );
};
