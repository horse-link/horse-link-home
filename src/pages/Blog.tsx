import React from "react";
import { CTA, GrayBackground } from "../components/homepage";

const Blog: React.FC = () => (
  <GrayBackground>
    {/* blog title section */}
    <section className="flex w-full flex-col items-center pt-32 lg:pt-52">
      <div className="w-[95vw] text-left lg:w-[90rem] lg:text-center">
        <h2 className="text-lg text-hl-home-text-gray">BLOG ARTICLE ONE</h2>
        <h1 className="mt-4 text-left font-basement text-4xl leading-normal lg:text-6xl lg:leading-[72px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
      </div>
    </section>

    {/* article body */}
    <article className="flex w-full flex-col items-center pt-10 lg:py-32">
      <div className="flex w-[95vw] flex-col gap-y-12 leading-[27px] text-hl-home-text-gray-2 lg:w-[90rem] lg:text-2xl lg:leading-[36px] lg:text-hl-primary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </article>

    {/* CTA section */}
    <div className="flex w-full flex-col items-center bg-hl-home-background lg:block lg:py-10">
      <CTA />
    </div>
  </GrayBackground>
);

export default Blog;
