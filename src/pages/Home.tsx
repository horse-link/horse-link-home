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
      <BsMouseFill
        size={48}
        color="#ff431c" // color is hl-secondary in tailwind config
        className="mt-12 animate-bounce"
      />
      <p className="text-xs font-extrabold text-hl-home-text-gray">
        SCROLL TO EXPLORE
      </p>
    </section>

    {/* info cards section */}
    <section className="flex w-full flex-col items-center gap-y-48 py-48 text-center">
      <h2 className="font-basement text-6xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h2>
      <div className="flex gap-x-12 overflow-x-scroll py-4 scrollbar-thin scrollbar-track-hl-scrollbar-background scrollbar-thumb-hl-home-background-bars scrollbar-track-rounded-full scrollbar-thumb-rounded-full lg:max-w-[90rem]">
        <div className="w-[28rem] shrink-0 grow-0">
          <FunkyCard
            title="Lorem ipsum dolor sit amet"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <div className="w-[28rem] shrink-0 grow-0">
          <FunkyCard
            title="Lorem ipsum dolor sit amet"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <div className="w-[28rem] shrink-0 grow-0">
          <FunkyCard
            title="Lorem ipsum dolor sit amet"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <div className="w-[28rem] shrink-0 grow-0">
          <FunkyCard
            title="Lorem ipsum dolor sit amet"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <div className="w-[28rem] shrink-0 grow-0">
          <FunkyCard
            title="Lorem ipsum dolor sit amet"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <div className="w-[28rem] shrink-0 grow-0">
          <FunkyCard
            title="Lorem ipsum dolor sit amet"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
      </div>
    </section>

    {/* phone section */}
    <section className="flex w-full flex-col items-center gap-y-6 pt-32 text-center">
      <div className="grid grid-cols-2 grid-rows-2 lg:w-[90rem]">
        <div className="w-full text-left">
          <h2 className="font-basement text-6xl leading-[72px]">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mt-4 text-2xl text-hl-home-text-gray-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <ul className="mt-10 flex flex-col gap-y-4 text-xl">
            <li className="flex items-center gap-x-4">
              <img
                src="/images/Bullet.png"
                alt="An orange bullet point"
                width={32}
                height={32}
              />
              Lorem ipsum dolor sit amet, consectetur
            </li>
            <li className="flex items-center gap-x-4">
              <img
                src="/images/Bullet.png"
                alt="An orange bullet point"
                width={32}
                height={32}
              />
              Lorem ipsum dolor sit amet, consectetur
            </li>
            <li className="flex items-center gap-x-4">
              <img
                src="/images/Bullet.png"
                alt="An orange bullet point"
                width={32}
                height={32}
              />
              Lorem ipsum dolor sit amet, consectetur
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-end">
          {/* non-mobile */}
          <img
            src="/images/PhoneOne.png"
            alt="A screenshot of the Horse Link mobile site"
            width={387}
            height={722}
            className="hidden lg:block"
          />
        </div>
        {/* non-mobile */}
        <img
          src="/images/PhoneTwo.png"
          alt="A screenshot of the Horse Link app on mobile"
          width={386}
          height={722}
          className="hidden lg:block"
        />
        <div className="w-full text-left">text</div>
      </div>
    </section>
  </HomeComponents.GrayBackground>
);

export default Home;
