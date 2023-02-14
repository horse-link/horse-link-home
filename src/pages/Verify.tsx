import React, { useState } from "react";
import api from "../api/api";
import { PageLayout } from "../components";
import { BaseButton } from "../components/Button";
import { Horse } from "../assets";
// import utils from "../utils";

const Verify: React.FC = () => {
  // const [loading, setLoading] = useState(false);
  // const [msg, setMsg] = useState<string>();
  const [code, setCode] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!utils.validation.validateCode(code)) return;

    // setLoading(true);
    // setMsg(undefined);

    try {
      const res = await api.verify(code);
      // setMsg(res);
      console.log(res);
    } catch (e) {
      console.error(e);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center mt-10">
        <img
          loading="lazy"
          alt="Horse"
          src={Horse}
          className="mb-10 h-[5rem] w-[7rem] justify-center"
        />
        <h1 className="text-md mb-5 break-all text-center font-bold lg:w-[40rem] lg:text-3xl">
          Enter code recieved via SMS
        </h1>
        <div className="flex w-[20rem] flex-col lg:w-[30rem]">
          <h1 className="my-4 font-bold">Earn $100 USDT (Goerli)</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              submit(e);
            }}
          >
            <input
              type="text"
              placeholder="SMS Verification Code"
              value={code}
              onChange={e => setCode(e.target.value)}
              className="mb-6 w-[20rem] rounded-md border-b-[0.12rem] border-black pl-1 pt-1 transition-colors duration-100 disabled:bg-white disabled:text-black/50 lg:w-[30rem]"
            />
            <BaseButton type="submit" className="w-[20rem] lg:w-[30rem]">
              Verify
            </BaseButton>
          </form>
          <h1 className="my-5 mb-10">
            Invite friends, claim more HL tokens, and win big with 0.2 BTC up
            for grabs for the top players.
          </h1>
        </div>
      </div>
    </PageLayout>
  );
};

export default Verify;
