import React, { useState } from "react";
import { FunkyLink } from "./FunkyLink";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { BsDiscord } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <React.Fragment>
      {/* header */}
      <header className="absolute top-0 z-[100] flex w-full items-center justify-between py-10 px-4 lg:fixed lg:px-14">
        <Link to="/" className="block font-basement text-lg lg:text-3xl">
          HORSE<span className="text-hl-secondary">LINK</span>
        </Link>
        <div className="flex items-center gap-x-4">
          <button
            className="rounded-md border-[3px] border-hl-secondary bg-hl-home-background py-[6px] px-4"
            onClick={toggleMenu}
          >
            {menuOpen ? "CLOSE" : "OPEN"}
          </button>
          <FunkyLink to="https://alpha.horse.link" small>
            LAUNCH APP
          </FunkyLink>
        </div>
      </header>

      {/* menu overlayed */}
      <div
        className={classNames(
          "fixed inset-0 z-[99] w-full items-center justify-center bg-hl-home-background-bars",
          {
            "flex flex-col": menuOpen,
            hidden: !menuOpen
          }
        )}
      >
        <div className="relative z-50 grid w-[90rem] grid-cols-2 grid-rows-1 font-basement text-6xl text-hl-home-text-gray-2">
          <div className="flex flex-col gap-y-20">
            <Link to="/" className="hover:text-hl-primary">
              Home
            </Link>
            <Link to="/community" className="hover:text-hl-primary">
              Community
            </Link>
            <Link to="/technology" className="hover:text-hl-primary">
              Technology
            </Link>
          </div>
          <div className="flex flex-col gap-y-20">
            <Link to="/about" className="hover:text-hl-primary">
              About Us
            </Link>
            <Link to="/blog" className="hover:text-hl-primary">
              Blog
            </Link>
          </div>
        </div>

        <div className="relative z-50 mt-[20rem] flex w-[90rem] items-center justify-between">
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

          <div className="w-fit">
            <h3 className="text-hl-home-text-gray-2">Email</h3>
            <p>support@horse.link</p>
          </div>
        </div>

        {/* graphic */}
        <div className="absolute inset-0 z-40 flex h-full w-full justify-end">
          <img
            src="/images/MenuGraphic.png"
            alt="A background graphic for the menu"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
