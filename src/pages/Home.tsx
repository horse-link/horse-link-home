import React from "react";
import * as HomeComponents from "../components/homepage";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomeComponents.GrayBackground>
      {/* introduction section */}
      <section className="flex w-full flex-col items-center gap-y-6 pt-32 text-center">
        <h1 className="text-lg font-extrabold text-hl-home-text-gray">
          INTRODUCING HORSELINK
        </h1>
        <span className="block font-basement text-7xl font-extrabold">
          WHERE CRYPTO AND RACING COME TOGETHER
        </span>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="my-10">
          <HomeComponents.FunkyButton onClick={() => navigate("/register")}>
            REGISTER FOR TOURNAMENT
          </HomeComponents.FunkyButton>
        </div>
      </section>
    </HomeComponents.GrayBackground>
  );
};

export default Home;
