import React, { useState } from "react";
import api from "../api/api";
import { PageLayout, Button, Loader, Input, Countdown } from "../components";
import { Horse } from "../assets";
import utils from "../utils";
import { useParams } from "react-router-dom";

const Verify: React.FC = () => {
  const { code: paramsCode } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState(paramsCode || "");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utils.validation.validateCode(code)) return;

    setVerified(false);
    setError(false);
    setLoading(true);

    try {
      // will throw if fails
      await api.verify(code);
      setVerified(true);

      // navigate after 3 seconds
      setTimeout(
        () => window.location.assign("https://alpha.horse.link"),
        3000
      );
    } catch (e) {
      console.error(e);
      // we know what the error will be, so we just have a flag here
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const changeCode = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCode(e.currentTarget.value);

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
          Verify your details
        </h1>
        <h2 className="mb-5 w-[20rem] text-center lg:w-[30rem]">
          Enter your code and receive 1000 Horse Link tokens to use for the
          tournament
        </h2>
        <div className="flex w-[20rem] flex-col pt-2 lg:w-[30rem]">
          <form onSubmit={submit} className="mb-10">
            <label>
              Verification code
              <Input placeholder="Code" value={code} onChange={changeCode} />
            </label>
            <Button
              type="submit"
              className="w-[20rem] lg:w-[30rem]"
              disabled={loading || !code}
            >
              {loading ? <Loader color="white" /> : "Verify"}
            </Button>
          </form>
          {verified && (
            <div className="mb-10 select-none rounded-lg bg-indigo-600 p-4 text-center text-white">
              Successfully verified, redirecting to Horse Link...
            </div>
          )}
          {error && (
            <div className="mb-10 select-none rounded-lg bg-red-600 p-4 text-center text-white">
              This user has already verified with Horse Link
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Verify;
