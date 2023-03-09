import React from "react";
import Navigation from "./Navigation";
import { WagmiProvider } from "./providers/Wagmi";

const App: React.FC = () => (
  <WagmiProvider>
    <Navigation />
  </WagmiProvider>
);

export default App;
