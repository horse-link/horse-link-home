import React, { useEffect, useState } from "react";
import { NewPageLayout } from "../components";
import constants from "../constants";
import utils from "../utils";
import { AxiosError } from "axios";
import api from "../api/api";

const Register: React.FC = () => {
  const [postUrl, setPostUrl] = useState("");
  const changePostUrl = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setPostUrl(e.currentTarget.value);

  const [ethAddress, setEthAddress] = useState("");
  const changeEthAddress = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setEthAddress(e.currentTarget.value);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string>();

  const [errorMsg, setErrorMsg] = useState<string>();
  const handleError = (e: any) => {
    console.error(e);

    const isAxiosError = e instanceof AxiosError;
    const isGenericError = e instanceof Error;
    if (!isAxiosError && !isGenericError)
      return setErrorMsg("Something went wrong");
    if (!isAxiosError) return setErrorMsg(e.message);

    const expectedError = e?.response?.data?.details;
    if (!expectedError) return setErrorMsg(e?.request || e?.message);
    const mappedErrorMessage = constants.errors.ErrorMapping[expectedError];
    return setErrorMsg(mappedErrorMessage);
  };

  const [validationError, setValidationError] = useState(false);

  const clearState = () => {
    setValidationError(false);
    setSuccessMsg(undefined);
    setErrorMsg(undefined);
  };

  // redirect on successful message
  useEffect(() => {
    if (!successMsg) return;

    setTimeout(
      () => location.replace(constants.env.APP_URL),
      3 * constants.time.MILLIS_IN_S // 3 seconds
    );
  }, [successMsg]);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !utils.validation.validateSocialData({
        tweetUrl: postUrl,
        walletAddress: ethAddress
      })
    )
      return setValidationError(true);

    clearState();

    setLoading(true);
    try {
      const res = await api.registerTweet(postUrl, ethAddress);
      setSuccessMsg(res);
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
    }
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

      <div className="relative z-40 flex w-full flex-col items-center gap-y-10 px-6 pt-10 lg:px-[28%] lg:pt-0">
        <p className="w-full border-y-2 border-hl-primary py-4 text-center text-2xl lg:text-4xl">
          Tweet about us and get 100{" "}
          <span className="text-hl-secondary">H</span>L Tokens!
        </p>
        <div className="flex w-full flex-col items-center gap-y-8 rounded-xl border border-hl-primary bg-hl-background/50 py-10 px-4 lg:px-12">
          <h2 className="text-center font-basement text-4xl lg:text-5xl">
            STEP ONE:
          </h2>
          <p className="text-center font-semibold text-hl-tertiary lg:text-xl">
            Share the below Tweet on Twitter to enter the tournament
          </p>
          <a
            className="block bg-hl-primary px-8 py-4 text-center font-bold text-hl-background transition-all duration-100 hover:scale-[1.05] lg:px-32"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              constants.text.TWEET
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GENERATE THE Tweet for Me!
          </a>
        </div>
        <div className="flex w-full flex-col items-center gap-y-8 rounded-xl border border-hl-primary bg-hl-background/50 py-10 px-4 lg:px-12">
          <h2 className="text-center font-basement text-4xl lg:text-5xl">
            STEP TWO:
          </h2>
          <p className="text-center font-semibold text-hl-tertiary lg:text-xl">
            Enter the URL of your Twitter post to claim your tokens
          </p>
          <form
            onSubmit={submitForm}
            className="flex w-full flex-col items-center gap-y-4 lg:px-[25%]"
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
              disabled={!postUrl || !ethAddress || loading}
            >
              LET THE TOURNAMENT BEGIN!
            </button>
            {successMsg && (
              <div className="w-full bg-green-500 py-4 text-center">
                {successMsg}, redirecting you to Horse Link...
              </div>
            )}
            {errorMsg && (
              <div className="w-full bg-red-600 py-4 text-center">
                {errorMsg}
              </div>
            )}
            {validationError && (
              <div className="w-full bg-red-600 py-4 text-center">
                Failed to process your data, please make sure your address is
                correct and your URL is in the correct format
              </div>
            )}
          </form>
        </div>
      </div>
    </NewPageLayout>
  );
};

export default Register;
