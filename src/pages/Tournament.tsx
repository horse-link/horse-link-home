import React from "react";
import { NewPageLayout } from "../components";
import { Link } from "react-router-dom";

const Tournament: React.FC = () => (
  <NewPageLayout>
    {/* image placed behind content */}
    <div className="absolute inset-0 z-30 flex h-screen w-full items-center justify-center overflow-hidden">
      <img
        src="/images/horse.webp"
        className="w-[90vw] opacity-40 lg:w-[60vw]"
      />
    </div>

    {/* could move a lot of these styles to the page layout but depends on majority of page structure */}
    <div className="absolute inset-0 z-40 flex h-screen w-full overflow-hidden pt-[44vh] lg:items-center lg:justify-center lg:pt-0">
      <div className="w-full text-center">
        <h2 className="mb-4 text-lg lg:mb-12 lg:text-6xl">WIN 0.2 BTC WITH</h2>
        <h1 className="font-basement text-5xl font-black tracking-tight lg:text-9xl">
          <span className="text-hl-secondary">HORSE</span>LINK
        </h1>
        <div className="mt-32 flex w-full justify-center lg:mt-24">
          <Link
            to="/register"
            className="block w-fit bg-hl-primary px-[9vw] py-6 text-xl font-bold text-hl-background transition-all duration-100 hover:scale-[1.05] lg:rounded-lg lg:py-8 lg:px-24 lg:text-2xl lg:font-extrabold"
          >
            REGISTER FOR{" "}
            <span className="underline-offset-2 lg:underline">TOURNAMENT</span>
          </Link>
        </div>
      </div>
    </div>
  </NewPageLayout>
);

export default Tournament;
