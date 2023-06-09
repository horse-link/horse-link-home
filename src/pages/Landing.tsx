import React from "react";
import { PageLayout, Button, InfoCard, Countdown } from "../components";
import { Bitcoin, Horse, Eth, Friend, Bank, Title } from "../assets";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Countdown large containerStyles="mt-12" />
      <div className="mt-10 flex w-full flex-col items-center gap-y-10">
        <img src={Horse} className="hidden h-[20rem] lg:block" />
        <h2 className="w-full text-center text-4xl font-bold lg:text-6xl">
          Win <span className="text-indigo-600">0.2 BTC</span>
          <img
            src={Bitcoin}
            alt="Bitcoin symbol"
            className="mb-1 ml-2 inline h-[1.8rem] lg:ml-4 lg:h-[5rem]"
          />{" "}
          with
          <img
            alt="Horse Link Title"
            className="mb-4 mt-2 inline h-[2.5rem] lg:ml-8 lg:mt-0 lg:h-[3.2rem]"
            src={Title}
          />
        </h2>
        <Button
          className="mt-2 !w-auto text-xl transition-all hover:scale-[1.05] lg:mt-0 lg:!px-8 lg:!py-4 lg:text-4xl"
          onClick={() => navigate("/tournament")}
        >
          Register for{" "}
          <span className="ml-3 underline underline-offset-4">Tournament</span>
        </Button>
      </div>
      <div className="mt-20 bg-white pt-10 pb-20">
        <h3 className="w-full text-center text-3xl font-semibold lg:text-6xl">
          Horse : Link <span className="text-emerald-500">benefits</span>
        </h3>
        <p className="w-full text-center font-semibold">
          HorseLink is a token-powered liquidity platform that connects lenders,
          bookkeepers, punters and speculators together.
        </p>
        <div className="flex w-full justify-center pt-12">
          <div className="flex w-3/4 flex-col gap-y-12 gap-x-32 lg:flex-row lg:justify-center">
            <InfoCard>
              <h2 className="w-full text-center text-2xl font-bold text-indigo-600">
                Exchange
              </h2>
              <p className="mt-4">Smart contract guaranteed settlement.</p>
              <img
                src={Eth}
                alt="Ethereum symbol"
                className="mt-10 mb-6 h-[4rem] lg:h-[8rem]"
              />
            </InfoCard>
            <InfoCard>
              <h2 className="w-full text-center text-2xl font-bold text-indigo-600">
                Share on Twitter
              </h2>
              <p className="mt-4">Share on Twitter and receive 100 HL.</p>
              <img
                src={Friend}
                alt="Friend symbol"
                className="mt-10 mb-6 h-[4rem] lg:h-[8rem]"
              />
            </InfoCard>
            <InfoCard>
              <h2 className="w-full text-center text-2xl font-bold text-indigo-600">
                ERC4626 Vaults
              </h2>
              <p className="mt-4">Earn yield by depositing liquidity.</p>
              <img
                src={Bank}
                alt="Vault symbol"
                className="mt-10 mb-6 h-[4rem] lg:h-[8rem]"
              />
            </InfoCard>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Landing;
