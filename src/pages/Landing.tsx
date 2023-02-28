import React from "react";
import { PageLayout, Button, InfoCard, Countdown } from "../components";
import { Bitcoin, Horse, Eth, Friend, Bank, Title } from "../assets";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Countdown large containerStyles="mt-12" />
      <div className="w-full flex flex-col gap-y-10 mt-10 items-center">
        <img src={Horse} className="h-[20rem] lg:block hidden" />
        <h2 className="text-4xl lg:text-6xl font-bold w-full text-center">
          Win <span className="text-indigo-600">0.2 BTC</span>
          <img
            src={Bitcoin}
            alt="Bitcoin symbol"
            className="h-[1.8rem] lg:h-[5rem] inline mb-1 ml-2 lg:ml-4"
          />{" "}
          with
          <img
            alt="Horse Link Title"
            className="inline lg:ml-8 mb-4 mt-2 lg:mt-0 h-[2.5rem] lg:h-[3.2rem]"
            src={Title}
          />
        </h2>
        <Button
          className="!w-auto lg:!px-8 lg:!py-4 mt-2 lg:mt-0 text-xl lg:text-4xl hover:scale-[1.05] transition-all"
          onClick={() => navigate("/signup")}
        >
          Register for{" "}
          <span className="underline underline-offset-4 ml-3">Tournament</span>
        </Button>
      </div>
      <div className="bg-white mt-20 pt-10 pb-20">
        <h3 className="w-full text-center font-semibold text-3xl lg:text-6xl">
          Horse : Link <span className="text-emerald-500">benefits</span>
        </h3>
        <p className="w-full text-center font-semibold">
          HorseLink is a token-powered liquidity platform that connects lenders,
          bookkeepers, punters and speculators together.
        </p>
        <div className="w-full flex justify-center pt-12">
          <div className="w-3/4 flex flex-col lg:flex-row lg:justify-center gap-y-12 gap-x-32">
            <InfoCard>
              <h2 className="w-full text-center text-2xl font-bold text-indigo-600">
                Exchange
              </h2>
              <p className="mt-4">Smart contract guaranteed settlement.</p>
              <img
                src={Eth}
                alt="Ethereum symbol"
                className="h-[4rem] lg:h-[8rem] mt-10 mb-6"
              />
            </InfoCard>
            <InfoCard>
              <h2 className="w-full text-center text-2xl font-bold text-indigo-600">
                Refer a friend
              </h2>
              <p className="mt-4">Refer a friend and receive 100 HL.</p>
              <img
                src={Friend}
                alt="Friend symbol"
                className="h-[4rem] lg:h-[8rem] mt-10 mb-6"
              />
            </InfoCard>
            <InfoCard>
              <h2 className="w-full text-center text-2xl font-bold text-indigo-600">
                ERC4626 Vaults
              </h2>
              <p className="mt-4">Earn yield by deposting liquidty.</p>
              <img
                src={Bank}
                alt="Vault symbol"
                className="h-[4rem] lg:h-[8rem] mt-10 mb-6"
              />
            </InfoCard>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Landing;
