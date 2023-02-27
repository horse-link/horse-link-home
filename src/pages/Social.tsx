import { AxiosError } from "axios";
import React, { useState } from "react";
import api from "../api/api";
import { PageLayout, Button, Loader, Input } from "../components";
import utils from "../utils";
import { Horse } from "../assets";

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
      <div className="flex flex-col items-center mt-10 lg:mt-32 h-[80vh]">
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
        <div className="flex flex-col w-[20rem] lg:w-[30rem] pt-2">
          <form onSubmit={handleSubmit} className="mb-10">
            <label>
              Tweet Url
              <Input
                placeholder="https://twitter.com/yourusername/status/123456789"
                value={tweetUrl}
                onChange={changeTweetUrl}
              />
            </label>
            <label>
              Wallet address
              <Input
                placeholder="0x0000000..."
                value={walletAddress}
                onChange={changeWalletAddress}
              />
            </label>
            <Button
              type="submit"
              className="w-[20rem] lg:w-[30rem]"
              disabled={loading || !hasEnteredInfo}
            >
              {loading ? <Loader color="white" /> : "Sign Up"}
            </Button>
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
              Failed to process your, please make sure your address is correct
              and your URL is in the correct format
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Social;
