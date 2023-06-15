import React, { useCallback, useState } from "react";
import { Bars } from "./Bars";

type Props = {
  children: React.ReactNode;
};

export const GrayBackground: React.FC<Props> = ({ children }) => {
  const [contentContainerHeight, setContentContainerHeight] = useState(0);

  const contentContainerRef = useCallback((divNode: HTMLDivElement | null) => {
    setContentContainerHeight(divNode?.clientHeight || 0);
  }, []);

  return (
    <div className="bg-hl-home-background text-white selection:bg-hl-secondary">
      {/* content */}
      <div className="relative z-50 h-full" ref={contentContainerRef}>
        {children}
      </div>

      {/* bars */}
      <Bars height={contentContainerHeight} />
    </div>
  );
};
