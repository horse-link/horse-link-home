import React from "react";
import { FunkyLink } from "./FunkyLink";

export const CTA: React.FC = () => (
  <React.Fragment>
    {/* CTA section non-mobile */}
    <section className="hidden w-full flex-col items-center gap-y-6 py-32 text-center lg:flex">
      <h2 className="font-basement text-5xl">Join the HorseLink community</h2>
      <p className="mb-20 text-xl text-hl-home-text-gray-2">
        Or learn all about{" "}
        <span className="text-hl-secondary">how to build on HorseLink</span>.
      </p>
      <FunkyLink to="/">JOIN THE COMMUNITY</FunkyLink>
    </section>

    {/* mobile */}
    <section className="relative mt-14 flex w-[95vw] flex-col items-center pt-4 text-center lg:hidden">
      <div className="relative z-50">
        <h2 className="font-basement text-2xl">Join the HorseLink community</h2>
        <p className="my-4 leading-[28px] text-hl-home-text-gray-2">
          Or learn all about{" "}
          <span className="text-hl-secondary">how to build on HorseLink</span>.
        </p>
        <FunkyLink to="/">JOIN THE COMMUNITY</FunkyLink>
      </div>

      {/* bg graphic */}
      <img
        src="/images/FooterGraphic.png"
        alt="A complex graphic"
        className="absolute top-0 z-[49] w-full"
      />
    </section>
  </React.Fragment>
);
