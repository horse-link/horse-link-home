import { AxiosError } from "axios";
import React, { useState } from "react";
import api from "../api/api";
import { PageLayout, Button, Loader, Input } from "../components";
import utils from "../utils";
import { Horse } from "../assets";
import { Link } from "react-router-dom";
import { Tweet } from "react-twitter-widgets";

const TWEET_ID = "1630443890624073730";

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
      <div className="mt-10 flex flex-col items-center">
        <img
          alt="Horse Link logo"
          src={Horse}
          className="mb-10 h-[5rem] w-[7rem]"
        />
        <h1 className="mb-3 text-center text-3xl font-bold lg:w-[50rem]">
          Tweet about us and get rewarded!
        </h1>
        <h2 className="mb-5 w-[20rem] text-center lg:w-[30rem]">
          Submit your tweet and address to receive{" "}
          <span className="font-bold">an additional 50 HorseLink tokens</span>{" "}
          to play in the tournament with
        </h2>
        <div className="w-[20rem] lg:w-[40rem]">
          <h3 className="text-xl font-bold">
            Step 1:{" "}
            <span className="font-normal">
              Share this post on Twitter to enter the tournament
            </span>
          </h3>
          <div className="relative left-10">
            <Tweet tweetId={TWEET_ID} />
          </div>
        </div>
        <div className="w-[20rem] lg:w-[40rem]">
          <h3 className="text-xl font-bold">
            Step 2:{" "}
            <span className="font-normal">
              Enter the URL of your Twitter post to claim your tokens
            </span>
          </h3>
          <div className="flex w-full flex-col pt-2">
            <form
              onSubmit={handleSubmit}
              className="mb-10 mt-2 flex w-full flex-col gap-y-4"
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
              <div className="mb-10 select-none rounded-lg bg-indigo-600 p-4 text-center text-white">
                {msg}
              </div>
            )}
            {error && (
              <div className="mb-10 select-none rounded-lg bg-red-600 p-4 text-center text-white">
                {error}
              </div>
            )}
            {validationError && (
              <div className="mb-10 select-none rounded-lg bg-red-600 p-4 text-center text-white">
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
