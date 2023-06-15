import React from "react";
import * as HomeComponents from "../components/homepage";
import { BsMouseFill } from "react-icons/bs";
import { FunkyCard } from "../components/homepage/FunkyCard";

const Home: React.FC = () => (
  <HomeComponents.GrayBackground>
    {/* introduction section */}
    <section className="flex w-full flex-col items-center gap-y-6 pt-32 text-center">
      <h1 className="text-lg font-extrabold text-hl-home-text-gray">
        INTRODUCING HORSELINK
      </h1>
      <span className="block font-basement text-7xl font-extrabold">
        WHERE CRYPTO AND RACING COME TOGETHER
      </span>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className="my-10">
        <HomeComponents.FunkyLink to="/register">
          REGISTER FOR TOURNAMENT
        </HomeComponents.FunkyLink>
      </div>

      {/* non-mobile image */}
      <img
        src="/images/Dashboard.png"
        alt="A screenshot of the Horse Link dashboard"
        width={1076}
        height={576}
        className="hidden lg:block"
      />

      {/* mobile image goes here */}
      {/* ... */}

      <BsMouseFill size={48} color="#ff431c" className="mt-12 animate-bounce" />
      <p className="text-xs font-extrabold text-hl-home-text-gray">
        SCROLL TO EXPLORE
      </p>
    </section>

    {/* info cards section */}
    <section className="flex w-full flex-col items-center gap-y-48 pt-48 text-center">
      <h2 className="font-basement text-6xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h2>
      <div className="flex gap-x-6">
        <div className="w-1/3">
          <FunkyCard
            title="Lorem ipsum dolor sit amet"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
      </div>
    </section>
  </HomeComponents.GrayBackground>
);

export default Home;
