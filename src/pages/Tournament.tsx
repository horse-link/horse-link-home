import React from "react";
import { NewPageLayout } from "../components";
import { Link } from "react-router-dom";

const Tournament: React.FC = () => (
  <NewPageLayout>
    {/* image placed behind content */}
    <div className="absolute inset-0 z-30 flex h-screen w-full items-center justify-center overflow-hidden">
      <img src="/images/horse.webp" className="w-[60vw] opacity-40" />
    </div>

    {/* could move a lot of these styles to the page layout but depends on majority of page structure */}
    <div className="absolute inset-0 z-40 flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="w-full text-center">
        <h2 className="mb-12 text-6xl">WIN 0.2 BTC WITH</h2>
        <h1 className="font-basement text-9xl font-black tracking-tight">
          <span className="text-hl-secondary">HORSE</span>LINK
        </h1>
        <div className="mt-24 flex w-full justify-center">
          <Link
            to="/register"
            className="block w-fit rounded-lg bg-hl-primary py-8 px-24 text-2xl font-extrabold text-hl-background transition-all duration-100 hover:scale-[1.05]"
          >
            REGISTER FOR{" "}
            <span className="underline underline-offset-2">TOURNAMENT</span>
          </Link>
        </div>
      </div>
    </div>
  </NewPageLayout>
);

export default Tournament;
