import React, { useState } from "react";
import { NewPageLayout } from "../components";
import constants from "../constants";

const Register: React.FC = () => {
  const [postUrl, setPostUrl] = useState("");
  const changePostUrl = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setPostUrl(e.currentTarget.value);

  const [ethAddress, setEthAddress] = useState("");
  const changeEthAddress = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setEthAddress(e.currentTarget.value);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(postUrl, ethAddress);
  };

  return (
    <NewPageLayout>
      {/* image placed behind content */}
      <div className="absolute inset-0 z-30 flex h-screen w-full items-center justify-center overflow-hidden">
        <img
          src="/images/horse.webp"
          className="w-[90vw] opacity-40 lg:w-[60vw]"
        />
      </div>

      <div className="relative z-40 flex w-full flex-col items-center gap-y-10 px-[28%]">
        <p className="w-full border-y-2 border-hl-primary py-4 text-center text-4xl">
          Tweet about us and get 100{" "}
          <span className="text-hl-secondary">H</span>L Tokens!
        </p>
        <div className="flex w-full flex-col items-center gap-y-8 rounded-xl border border-hl-primary bg-hl-background/50 py-10 px-12">
          <h2 className="font-basement text-5xl">STEP ONE:</h2>
          <p className="text-center text-xl font-semibold text-hl-tertiary">
            Share the below Tweet on Twitter to enter the tournament
          </p>
          <a
            className="block bg-hl-primary px-32 py-4 text-center font-bold text-hl-background transition-all duration-100 hover:scale-[1.05]"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              constants.text.TWEET
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GENERATE THE Tweet for Me!
          </a>
        </div>
        <div className="flex w-full flex-col items-center gap-y-8 rounded-xl border border-hl-primary bg-hl-background/50 py-10 px-12">
          <h2 className="font-basement text-5xl">STEP TWO:</h2>
          <p className="text-center text-xl font-semibold text-hl-tertiary">
            Enter the URL of your Twitter post to claim your tokens
          </p>
          <form
            onSubmit={submitForm}
            className="flex w-full flex-col items-center gap-y-4 px-[25%]"
          >
            <input
              className="w-full border border-hl-primary bg-hl-background p-4 !outline-none !ring-0"
              placeholder="Twitter Post URL"
              value={postUrl}
              onChange={changePostUrl}
            />
            <input
              className="w-full border border-hl-primary bg-hl-background p-4 !outline-none !ring-0"
              placeholder="ETH Address"
              value={ethAddress}
              onChange={changeEthAddress}
            />
            <button
              type="submit"
              className="w-full bg-hl-secondary py-4 font-bold text-hl-background"
            >
              LET THE TOURNAMENT BEGIN!
            </button>
          </form>
        </div>
      </div>
    </NewPageLayout>
  );
};

export default Register;
