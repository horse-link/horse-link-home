import React, { useState } from "react";
import api from "../api/api";
import { PageLayout } from "../components";
import { BaseButton } from "../components/Button";
import utils from "../utils";
import { Horse } from "../assets";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utils.validation.validateSignupData({ phoneNumber, walletAddress }))
      return;

    setMsg(undefined);
    setLoading(true);

    try {
      const res = await api.register(phoneNumber, walletAddress);
      setMsg(res);
    } catch (e) {
      console.error(e);
    } finally {
      navigate("/verify", {
        replace: true
      });
      setLoading(false);
      console.log(msg);
    }
  };

  return (
    <PageLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center mt-10">
          <img
            loading="lazy"
            alt="Horse"
            src={Horse}
            className="mb-10 h-[5rem] w-[7rem] justify-center"
          />
          <h1 className="text-md mb-5 break-all text-center font-bold lg:w-[50rem] lg:text-3xl">
            Invite Friends, Claim More HL Token, and Win Big with 5k in Bitcoin
            up for Grabs for the Top Players
          </h1>
          <div className="flex w-[20rem] flex-col lg:w-[30rem]">
            <h1 className="my-4 font-bold">Final Step</h1>
            <h1 className="my-2">Phone</h1>
            <form onSubmit={submit}>
              <input
                type="number"
                placeholder="Mobile/ Cell"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                className="mb-6 w-[20rem] rounded-md border-b-[0.12rem] border-black pl-1 pt-1 transition-colors duration-100 disabled:bg-white disabled:text-black/50 lg:w-[30rem]"
              />
              <h1 className="my-2">Wallet Address</h1>
              <input
                type="text"
                placeholder="Your Wallet Address"
                value={walletAddress}
                onChange={e => setWalletAddress(e.target.value)}
                className="mb-6 w-[20rem] rounded-md border-b-[0.12rem] border-black pl-1 pt-1 transition-colors duration-100 disabled:bg-white disabled:text-black/50 lg:w-[30rem]"
              />

              <BaseButton type="submit" className="w-[20rem] lg:w-[30rem]">
                Signup
              </BaseButton>
            </form>
            <h1 className="my-5 mb-10">
              Invite friends, claim more HL tokens, and win big with 0.2 BTC up
              for grabs for the top players.
            </h1>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Signup;
