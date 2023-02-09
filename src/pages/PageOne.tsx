import React from "react";
// import { PageLayout } from "../components";
import horse from "../assets/horse.png";
import { BaseButton } from "../components/Button";
import { Card } from "../components/card";
import eth from "../assets/eth.svg";
import bank from "../assets/bank.svg";
import bitcoin from "../assets/bitcoin.svg";
import friend from "../assets/friend.svg";
import { PageLayout } from "../components";

const PageOne: React.FC = () => (
  <>
    <PageLayout>
      {/* <h1 className="p-20">Page One</h1> */}
      {/* <br /> */}
      {/* <Link to="/page-two">go to Page Two</Link> */}
      <div className="flex flex-row-reverse justify-center pt-20">
        <div className="flex flex-row justify-center mt-10 pt-5">
          <img
            alt="logo"
            className="ml-5 max-h-[40vh] max-w-[40vw]"
            height={500}
            width={500}
            src={horse}
          />
        </div>
        <div className="flex flex-col text-center justify-center font-bold pt-10 ml-5">
          <div className="mt-10 gap-2 flex flex-row lg:pt-20 justify-center">
            <h1 className="lg:text-6xl">Win</h1>
            <h1 className="text-indigo-600 lg:text-7xl">$5,000</h1>
            <img
              className="lg:mt-5 lg:w-8 lg:h-8"
              height={10}
              width={10}
              alt="bitcoin"
              src={bitcoin}
            ></img>
            <h1 className="lg:text-6xl">with</h1>
          </div>
          <div className="flex flex-wrap lg:gap-6 gap-1 justify-center">
            <h1 className="lg:text-8xl font-sans font-normal break-all">
              Horse
            </h1>
            <h1 className="lg:text-8xl font-sans font-normal text-white">
              : Link
            </h1>
          </div>
          <div className="flex flex-row justify-center">
            <BaseButton
              onClick={_event =>
                (window.location.href = "https://alpha.horse.link/signup")
              }
              className="mt-5 lg:w-[200px] text-xs"
            >
              Get Started
            </BaseButton>
          </div>
        </div>
      </div>
    </PageLayout>
    <div className="flex flex-row gap-2 justify-center items-center mt-10 text-3xl">
      <h1 className="lg:text-5xl font-medium">Horse : Link</h1>
      <h1 className="lg:text-5xl text-[#1CB981] font-medium">benefits</h1>
    </div>
    <div className="mt-10 flex flex-row gap-20 h-80 justify-center w-full break-all mb-10 pb-5 flex-wrap">
      <Card
        title={"Exchange"}
        data={"Get return on a wager"}
        imageData={{ src: eth, alt: "dice", height: 100, width: 100 }}
      ></Card>

      <Card
        title={"Refer a friend"}
        data={"Refer a friend and get 100 HL"}
        imageData={{ src: friend, alt: "friend", height: 100, width: 100 }}
      ></Card>
      <Card
        title={"Vault"}
        data={"Earn when you deposit into the vault"}
        imageData={{ src: bank, alt: "bank", height: 100, width: 100 }}
      ></Card>
    </div>
  </>
);

export default PageOne;
