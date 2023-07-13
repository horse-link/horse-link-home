import React from "react";
import * as HomeComponents from "../components/homepage";
import { BsMouseFill } from "react-icons/bs";

const Home: React.FC = () => (
  <HomeComponents.GrayBackground>
    {/* introduction section */}
    <section className="flex w-[95vw] flex-col items-center gap-y-6 pt-32 text-center lg:w-full">
      <h1 className="font-extrabold text-hl-home-text-gray lg:text-lg">
        INTRODUCING HORSELINK
      </h1>
      <span className="block font-basement text-3xl font-extrabold leading-[45px] lg:text-7xl lg:leading-[1.2]">
        WHERE CRYPTO AND
        <br className="hidden lg:block" />
        RACING COME TOGETHER
      </span>
      <p className="leading-[28px] lg:text-lg lg:leading-[36px]">
        HorseLink is a decentralised finance platform that enables bookmakers to
        borrow against
        <br className="hidden lg:block" />
        their book of wagers from a pool of lender supplied capital. Lenders
        receive competitive
        <br className="hidden lg:block" />
        interest, and the platform charges a fee to facilitate the transaction.
      </p>

      {/* mobile image */}
      <img
        src="/images/Dashboard.png"
        alt="A screenshot of the Horse Link dashboard"
        width={329}
        height={174}
        className="block lg:hidden"
      />

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

      <BsMouseFill
        size={48}
        color="#ff431c" // color is hl-secondary in tailwind config
        className="mt-12 hidden animate-bounce lg:block"
      />
      <p className="hidden text-xs font-extrabold text-hl-home-text-gray lg:block">
        SCROLL TO EXPLORE
      </p>
    </section>

    {/* info cards section */}
    <section className="flex w-[95vw] flex-col items-center gap-y-10 py-20 text-center lg:w-full lg:gap-y-48 lg:py-48">
      <h2 className="font-basement text-2xl leading-[40px] lg:text-6xl lg:leading-normal">
        Market Opportunity
      </h2>
      <div className="flex w-full flex-col gap-10 py-4 scrollbar-thin scrollbar-track-hl-scrollbar-background scrollbar-thumb-hl-home-background-bars scrollbar-track-rounded-full scrollbar-thumb-rounded-full lg:max-w-[90rem] lg:flex-row lg:gap-12 lg:overflow-x-scroll">
        <div className="w-full shrink-0 grow-0 lg:w-[28rem]">
          <HomeComponents.FunkyCard
            title="Market Opportunity"
            body="Horse racing has an estimated global annual economic impact of around USD 300 billion."
          />
        </div>
        <div className="w-full shrink-0 grow-0 lg:w-[28rem]">
          <HomeComponents.FunkyCard
            title="Global"
            body="Europe and USA account for over two-thirds of this market; with a greater economic impact than the motion picture industry."
          />
        </div>
        <div className="w-full shrink-0 grow-0 lg:w-[28rem]">
          <HomeComponents.FunkyCard
            title="Market Size"
            body="Worldwide prize money for horse racing reaches USD 3.5 billion annually with global betting industry for horse racing generating over USD 116 billion in revenue every year."
          />
        </div>
      </div>
    </section>

    {/* phone section */}
    <section className="flex w-[95vw] flex-col items-center gap-y-6 text-center lg:w-full lg:pt-32">
      <div className="flex grid-cols-2 grid-rows-2 flex-col items-center lg:grid lg:w-[90rem]">
        <div className="w-full text-left lg:pt-20">
          <h2 className="font-basement text-3xl leading-[45px] lg:text-6xl lg:leading-[72px]">
            Mobile dApp
          </h2>
          <p className="mt-10 leading-[27px] text-hl-home-text-gray-2 lg:text-xl lg:leading-[36px]">
            With Horse Link&apos;s non custodial html wallet, theres no need to
            install metamask.
          </p>
          <ul className="mt-10 flex flex-col gap-y-8 text-sm lg:text-xl">
            <li className="flex items-center gap-x-4">
              <img
                src="/images/Bullet.png"
                alt="An orange bullet point"
                width={32}
                height={32}
              />
              Responsive mobile design
            </li>
            <li className="flex items-center gap-x-4">
              <img
                src="/images/Bullet.png"
                alt="An orange bullet point"
                width={32}
                height={32}
              />
              No download required
            </li>
            <li className="flex items-center gap-x-4">
              <img
                src="/images/Bullet.png"
                alt="An orange bullet point"
                width={32}
                height={32}
              />
              No third party wallets
            </li>
          </ul>
          <div className="mt-20 hidden w-full items-center gap-x-10 lg:flex">
            <HomeComponents.FunkyLink to="https://alpha.horse.link">
              LAUNCH APP
            </HomeComponents.FunkyLink>
            <p className="text-lg text-hl-secondary">
              <a href="https://github.com/horse-link/horse-link-splash-page/blob/main/HorseLink%20Deck%20v1.1.pdf">
                Read the docs
              </a>
            </p>
          </div>
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

        <div className="w-full pt-20 text-left">
          <h2 className="font-basement text-3xl leading-[45px] lg:text-6xl lg:leading-[72px]">
            How It Works
          </h2>
          <p className="mt-10 leading-[27px] text-hl-home-text-gray-2 lg:text-xl lg:leading-[36px]">
            Lenders loan stablecoins such as USDC to vaults in return for
            interest they receive in HL.
          </p>
          <p className="mt-10 leading-[27px] text-hl-home-text-gray-2 lg:text-xl lg:leading-[36px]">
            Bookmakers borrow from these vaults and pay interest in HL to do so.
          </p>
          <div className="mt-20 flex w-full items-center gap-x-10">
            <HomeComponents.FunkyLink to="https://alpha.horse.link">
              LAUNCH APP
            </HomeComponents.FunkyLink>
            <p className="text-lg text-hl-secondary">
              <a href="https://github.com/horse-link/horse-link-splash-page/blob/main/HorseLink%20Deck%20v1.1.pdf">
                Read the docs
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* stats section */}
    <section className="flex w-[95vw] flex-col items-center gap-y-6 pt-32 text-center lg:w-full">
      <div className="flex w-full flex-col items-center justify-evenly gap-y-10 rounded-3xl bg-hl-home-card-background py-20 lg:w-[90rem] lg:flex-row lg:py-10">
        <div className="text-center">
          <h2 className="font-basement text-3xl">$110M</h2>
          <p className="text-lg text-hl-home-text-gray">TVL</p>
        </div>
        <div className="text-center">
          <h2 className="font-basement text-3xl">1,000</h2>
          <p className="text-lg text-hl-home-text-gray">Avg. bets per hour</p>
        </div>
        <div className="text-center">
          <h2 className="font-basement text-3xl">7%</h2>
          <p className="text-lg text-hl-home-text-gray">Avg. yield</p>
        </div>
        <div className="text-center">
          <h2 className="font-basement text-3xl">$110M</h2>
          <p className="text-lg text-hl-home-text-gray">Avg. market size</p>
        </div>
      </div>
    </section>

    {/* more cards section */}
    <section className="flex w-[95vw] flex-col items-center gap-y-6 pt-32 text-center lg:w-full">
      <div className="w-full lg:w-[90rem]">
        <h2 className="font-basement text-3xl leading-[45px] lg:text-6xl lg:leading-normal">
          Problem
        </h2>
        <p className="mt-4 leading-[27px] text-hl-home-text-gray-2 lg:text-xl lg:leading-[36px]">
          Despite the size of the industry, advancements in the way sports
          betting
          <br className="hidden lg:block" />
          is handled has not evolved significantly for decades.
        </p>
        <div className="mt-20 flex grid-cols-3 grid-rows-1 flex-col items-center gap-14 lg:grid">
          <HomeComponents.FunkyCard
            title="High Fees"
            body="Options for online betting are limited to a few global players, with high fees and the need to transact in fiat."
          />
          <HomeComponents.FunkyCard
            title="DeFi"
            body="Furthermore, these advancements in the crypto sector has led to the explosive growth of an entirely new category called decentralised finance (DeFi)."
          />
          <HomeComponents.FunkyCard
            title="Global TVL"
            body="Currently there's nearly USD 51 billion in total value locked (TVL) in DeFi protocols."
          />
        </div>
      </div>
    </section>

    {/* features section */}
    <section className="hidden w-full flex-col items-center gap-y-6 pt-52 text-center lg:flex">
      <div className="grid grid-cols-2 grid-rows-1 lg:w-[90rem]">
        <div className="flex flex-col justify-between py-10">
          <div className="text-left">
            <h2 className="font-basement text-6xl">Features</h2>
            <p className="mt-10 leading-[27px] text-hl-home-text-gray-2 lg:text-xl lg:leading-[36px]">
              Allows markets to form for each bookmaker based on their
              individual risk profiles.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-6 px-12">
          <HomeComponents.FunkyWideCard
            title="Rating System"
            image="/images/GraphicOne.png"
          />
          <HomeComponents.FunkyWideCard
            title="Escrow Contracts"
            image="/images/GraphicTwo.png"
          />
          <HomeComponents.FunkyWideCard
            title="NFT Marketplace"
            image="/images/GraphicThree.png"
          />
        </div>
      </div>
    </section>
    <HomeComponents.CTA />
  </HomeComponents.GrayBackground>
);

export default Home;
