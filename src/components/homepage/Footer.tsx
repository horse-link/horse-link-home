import React from "react";
import { Link } from "react-router-dom";
import { BsDiscord } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

export const Footer: React.FC = () => (
  <footer className="relative flex w-[95vw] flex-col items-center pt-32 pb-10 lg:w-full lg:overflow-hidden lg:bg-hl-scrollbar-background lg:pb-32">
    {/* main footer content */}
    <div className="relative z-50 w-full lg:w-[90rem]">
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <h3 className="font-basement text-xl lg:text-3xl">
          HORSE<span className="text-hl-secondary">LINK</span>
        </h3>

        {/* non-desktop image */}
        <img
          src="/images/horse.webp"
          alt="Horse Link logo"
          className="my-4 block max-w-[69px] lg:hidden"
        />

        {/* <div className="mt-10 flex w-fit flex-col gap-10 text-lg font-extrabold lg:mt-0 lg:flex-row lg:text-base">
          <Link to="/community">Community</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div> */}
      </div>

      {/* desktop image */}
      <img
        src="/images/horse.webp"
        className="mt-10 hidden max-w-[101px] lg:block"
        alt="Horse Link logo"
      />

      <div className="mt-20 flex flex-col-reverse items-center justify-between gap-y-10 text-hl-home-text-gray lg:flex-row lg:gap-y-0">
        <span className="block text-sm lg:text-base">
          &copy; 2023 HorseLink. All rights reserved.
        </span>
        <div className="flex items-center gap-x-8 lg:gap-x-10">
          {/* <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <BsDiscord />
          </Link> */}

          <Link
            to="https://twitter.com/_HORSELINK_"
            target="_blank"
            rel="noreferrer noopener"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <SiTwitter />
          </Link>

          {/* <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <AiFillInstagram />
          </Link> */}
{/* 
          <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <FaTelegramPlane />
          </Link> */}

          {/* <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <RiFacebookFill />
          </Link> */}
        </div>
      </div>
    </div>
  </footer>
);
