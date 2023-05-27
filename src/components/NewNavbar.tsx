import React from "react";
import { Link } from "react-router-dom";
import constants from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "@headlessui/react";

export const NewNavbar: React.FC = () => (
  <div className="relative z-50 flex w-full items-center justify-between px-4 py-3 lg:px-8 lg:py-6">
    {/* non-mobile */}
    <Link
      to="/"
      className="hidden font-basement text-3xl font-black tracking-widest lg:block"
    >
      <span className="text-hl-secondary">H</span>L
    </Link>

    {/* mobile */}
    <Link
      to="/"
      className="block font-basement text-xl tracking-widest lg:hidden"
    >
      <span className="text-hl-secondary">HORSE</span>LINK
    </Link>

    {/* non-mobile */}
    <div className="hidden items-center gap-x-32 text-lg text-hl-tertiary lg:flex">
      <Link to="/docs" className="underline-offset-4 hover:underline">
        DOCS
      </Link>
      <a
        href="twitter"
        rel="noopener noreferrer"
        target="_blank"
        className="underline-offset-4 hover:underline"
      >
        TWITTER
      </a>
      <a
        href={constants.env.APP_URL}
        rel="noopener noreferrer"
        target="_blank"
        className="border-2 border-hl-secondary py-2 px-8 text-hl-secondary transition-colors duration-100 hover:bg-hl-secondary hover:text-hl-background"
      >
        LAUNCH APP
      </a>
    </div>

    {/* mobile */}
    <div className="block lg:hidden">
      <Menu as={React.Fragment}>
        <Menu.Button>
          <RxHamburgerMenu color="white" size={26} />
        </Menu.Button>

        <Menu.Items className="absolute right-0 mr-4 mt-4 flex flex-col gap-y-4 text-right font-basement text-lg font-black tracking-wider text-hl-primary">
          <Menu.Item>
            <a
              href={constants.env.APP_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Launch App
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="twitter"
              rel="noopener noreferrer"
              target="_blank"
              className="underline-offset-4 hover:underline"
            >
              Twitter
            </a>
          </Menu.Item>
          <Menu.Item>
            <Link to="/docs" className="underline-offset-4 hover:underline">
              Docs
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  </div>
);
