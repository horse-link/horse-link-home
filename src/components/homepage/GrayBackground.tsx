import React, { useCallback, useState } from "react";
import { Bars } from "./Bars";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const GrayBackground: React.FC<Props> = ({ children }) => {
  const [contentContainerHeight, setContentContainerHeight] = useState(0);

  const contentContainerRef = useCallback((divNode: HTMLDivElement | null) => {
    setContentContainerHeight(divNode?.clientHeight || 0);
  }, []);

  return (
    <div className="bg-hl-home-background text-white selection:bg-hl-secondary selection:text-hl-primary">
      {/* header */}
      <Header />

      {/* content */}
      <div className="relative z-50 h-full" ref={contentContainerRef}>
        {children}

        {/* footer */}
        <Footer />
      </div>

      {/* background graphic */}
      <div className="absolute top-0 z-[49] w-full">
        <img
          src="/images/BackgroundGraphic.png"
          className="mt-14 w-full"
          alt="A complex background graphic"
        />
      </div>

      {/* bars */}
      <Bars height={contentContainerHeight} />
    </div>
  );
};
