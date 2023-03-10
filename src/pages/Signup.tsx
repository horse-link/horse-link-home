import React, { useState } from "react";
import api from "../api/api";
import { Input, PageLayout, Button, Countdown } from "../components";
import utils from "../utils";
import { Horse } from "../assets";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { MyWalletAddressInput } from "../components/MyWalletAddressInput";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>();
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utils.validation.validateSignupData({ phoneNumber, walletAddress }))
      return setValidationError(true);

    setValidationError(false);
    setMsg(undefined);
    setError(false);
    setLoading(true);

    try {
      const res = await api.register(phoneNumber, walletAddress);
      setMsg(res);

      // navigate after 3 seconds
      setTimeout(() => navigate("/verify"), 3000);
    } catch (e) {
      console.error(e);
      // we know what the error will be, so we just have a flag here
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const changePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.currentTarget.value);

  const changeWalletAddress = (address: string) => setWalletAddress(address);

  const hasEnteredInfo = !!phoneNumber && !!walletAddress;

  return (
    <PageLayout>
      <Countdown />
      <div className="mt-10 flex h-[80vh] flex-col items-center lg:mt-20 lg:h-[68vh]">
        <img
          alt="Horse Link logo"
          src={Horse}
          className="mb-10 h-[5rem] w-[7rem]"
        />
        <h1 className="mb-3 text-center text-3xl font-bold lg:w-[50rem]">
          Register for the Horse Link Tournament for your chance to win 0.2
          BTC!!!
        </h1>
        <h2 className="mb-5 w-[20rem] text-center lg:w-[30rem]">
          For each friend you invite, receive a 10% larger starting balance to
          increase your chances of winning
        </h2>
        <div className="w-[20rem] lg:w-[40rem]">
          <div className="flex w-full flex-col pt-2">
            <form
              onSubmit={submit}
              className="mb-10 mt-2 flex w-full flex-col gap-y-4"
            >
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={changePhoneNumber}
              />
              <MyWalletAddressInput
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
            </form>
            {msg && (
              <div className="mb-10 select-none rounded-lg bg-indigo-600 p-4 text-center text-white">
                {msg}, redirecting...
              </div>
            )}
            {error && (
              <div className="mb-10 select-none rounded-lg bg-red-600 p-4 text-center text-white">
                You have already successfully registered for the competition
              </div>
            )}
            {validationError && (
              <div className="mb-10 select-none rounded-lg bg-red-600 p-4 text-center text-white">
                Failed to process signup data, please make sure your address is
                correct and your phone number has no special characters
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Signup;
