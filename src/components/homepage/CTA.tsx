import React from "react";
import { FunkyLink } from "./FunkyLink";

export const CTA: React.FC = () => (
  <section className="relative mt-14 flex w-[95vw] flex-col items-center gap-y-6 pt-4 text-center lg:w-full lg:py-32">
    <div className="relative z-20">
      <h2 className="font-basement text-2xl lg:text-5xl">
        Join the HorseLink community
      </h2>
      <p className="my-4 leading-[28px] text-hl-home-text-gray-2 lg:my-0 lg:mb-20 lg:text-xl lg:leading-normal">
        Or learn all about{" "}
        <span className="text-hl-secondary">how to build on HorseLink</span>.
      </p>
      <div className="flex w-full justify-center">
        <FunkyLink to="https://bit.ly/3tXLIHG">CONNECT WITH US</FunkyLink>
      </div>
    </div>

    {/* background graphic */}
    <div className="absolute top-0 z-10 h-full w-full overflow-hidden">
      <img
        src="/images/FooterGraphic.png"
        alt="A complex background graphic for the footer"
        className="w-full"
      />
    </div>
  </section>
);
