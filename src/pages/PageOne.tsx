import React from "react";
import { PageLayout } from "../components";
import horse from "../assets/horse.png";
import { Link } from "react-router-dom";
import { BaseButton } from "../components/Button";

const PageOne: React.FC = () => (
  <PageLayout>
    <h1 className="p-20">Page One</h1>
    <br />
    <Link to="/page-two">go to Page Two</Link>
    <div>
      <div className="flex flex-row text-center justify-center space-x-2 font-bold">
        <h1 className="text-6xl ">Win</h1>
        <h1 className="text-indigo-600 text-6xl">$5,000</h1>
        <h1 className="text-6xl">with</h1>
        <div className="flex flex-row">
          <h1 className="text-6xl font-sans font-normal break-words">Horse</h1>
          <h1 className="text-6xl font-sans font-normal text-white break-words">
            : Link
          </h1>
        </div>
        <BaseButton className="max-w-[10vw] max-h-[6vh] text-center">
          Get Started
        </BaseButton>
      </div>
      <div className="justify-center flex-end">
        <img alt="logo" className="m-8 h-11 md:h-15" src={horse} />
      </div>
    </div>
  </PageLayout>
);

export default PageOne;
