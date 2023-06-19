import React from "react";
import { Link } from "react-router-dom";
import { BsDiscord } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

export const Footer: React.FC = () => (
  <footer className="flex w-full flex-col items-center bg-hl-scrollbar-background pt-32 pb-10">
    <div className="w-[90rem]">
      <div className="flex items-center justify-between">
        <h3 className="font-basement text-3xl">
          HORSE<span className="text-hl-secondary">LINK</span>
        </h3>
        <div className="flex w-fit gap-x-10 font-extrabold">
          <Link to="/community">Community</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <img
        src="/images/horse.webp"
        className="mt-10 max-w-[101px]"
        alt="Horse Link logo"
      />
      <div className="mt-20 flex items-center justify-between text-hl-home-text-gray">
        <span className="block">
          &copy; 2023 HorseLink. All rights reserved.
        </span>
        <div className="flex items-center gap-x-10">
          <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <BsDiscord />
          </Link>

          <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <SiTwitter />
          </Link>

          <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <AiFillInstagram />
          </Link>

          <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <FaTelegramPlane />
          </Link>

          <Link
            to="/"
            className="block rounded-full bg-hl-home-card-background p-3"
          >
            <RiFacebookFill />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
