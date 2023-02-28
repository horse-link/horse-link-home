import { AxiosError } from "axios";
import React, { useState } from "react";
import api from "../api/api";
import { PageLayout, Button, Loader, Input } from "../components";
import utils from "../utils";
import { Horse } from "../assets";
import { Link } from "react-router-dom";
import constants from "../constants";

const Social: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [tweetUrl, setTweetUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>();
  const [error, setError] = useState<string>();
  const [validationError, setValidationError] = useState(false);

  const clearState = () => {
    setValidationError(false);
    setMsg(undefined);
    setError(undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utils.validation.validateSocialData({ tweetUrl, walletAddress }))
      return setValidationError(true);

    clearState();

    setLoading(true);
    try {
      const res = await api.registerTweet(tweetUrl, walletAddress);
      setMsg(res);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e?.response?.data?.details || e?.request || e?.message);
      } else if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const changeTweetUrl = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setTweetUrl(e.currentTarget.value);

  const changeWalletAddress = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setWalletAddress(e.currentTarget.value);

  const hasEnteredInfo = !!tweetUrl && !!walletAddress;

  return (
    <PageLayout>
      <div className="flex flex-col items-center mt-10">
        <img
          alt="Horse Link logo"
          src={Horse}
          className="mb-10 h-[5rem] w-[7rem]"
        />
        <h1 className="mb-3 text-center font-bold lg:w-[50rem] text-3xl">
          Tweet about us and get rewarded!
        </h1>
        <h2 className="mb-5 text-center w-[20rem] lg:w-[30rem]">
          Submit your tweet and address to receive{" "}
          <span className="font-bold">an additional 50 HorseLink tokens</span>{" "}
          to play in the tournament with
        </h2>
        <div className="w-[20rem] lg:w-[40rem]">
          <h3 className="font-bold text-xl">
            Step 1:{" "}
            <span className="font-normal">
              Share this post on Twitter to enter the tournament
            </span>
          </h3>
          <div className="my-4 w-full bg-white rounded-lg p-4">
            <div className="w-full flex justify-between">
              <div className="flex flex-col">
                <span className="block font-bold">Your Name</span>
                <span className="block font-semibold text-black/50">
                  @yourtag
                </span>
              </div>
              <span className="block font-semibold text-black/50">
                {new Date().toDateString()}
              </span>
            </div>
            <p className="w-full mt-2">
              Hey, I&apos;ve just enterred into this competition with Horse.Link
              where I can go in the draw to win 0.2 Bitcoin. Register here:{" "}
              <Link
                className="font-semibold text-blue-600 underline decoration-2 underline-offset-2"
                to="/"
              >
                https://horse.link
              </Link>{" "}
              to enter.
            </p>
            <div className="w-full flex flex-col items-center mt-4">
              <img src={Horse} className="w-[30rem]" />
            </div>
            <Button
              onClick={() =>
                navigator.clipboard.writeText(constants.text.TWEET)
              }
              className="mt-8"
            >
              Copy Text
            </Button>
          </div>
        </div>
        <div className="w-[20rem] lg:w-[40rem]">
          <h3 className="font-bold text-xl">
            Step 2:{" "}
            <span className="font-normal">
              Enter the URL of your Twitter post to claim your tokens
            </span>
          </h3>
          <div className="flex flex-col pt-2 w-full">
            <form
              onSubmit={handleSubmit}
              className="mb-10 w-full flex flex-col gap-y-4 mt-2"
            >
              <Input
                placeholder="Twitter Post URL"
                value={tweetUrl}
                onChange={changeTweetUrl}
              />
              <Input
                placeholder="ETH Address"
                value={walletAddress}
                onChange={changeWalletAddress}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={loading || !hasEnteredInfo}
              >
                {loading ? <Loader color="white" /> : "Sign Up"}
              </Button>
              <div className="w-full font-bold">
                Don&apos;t have Twitter?{" "}
                <Link
                  to="/signup"
                  className="underline decoration-2 underline-offset-2"
                >
                  Click Here
                </Link>
              </div>
            </form>
            {msg && (
              <div className="bg-indigo-600 rounded-lg p-4 text-center select-none text-white mb-10">
                {msg}
              </div>
            )}
            {error && (
              <div className="bg-red-600 text-white rounded-lg p-4 text-center select-none mb-10">
                {error}
              </div>
            )}
            {validationError && (
              <div className="bg-red-600 text-white rounded-lg p-4 text-center select-none mb-10">
                Failed to process your data, please make sure your address is
                correct and your URL is in the correct format
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Social;
