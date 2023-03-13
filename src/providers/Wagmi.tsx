import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli, localhost } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";
import constants from "../constants";

const { chains, provider, webSocketProvider } = configureChains(
  [goerli, localhost],
  [
    alchemyProvider({
      apiKey: constants.env.ALCHEMY_API_KEY
    }),
    publicProvider()
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true
      }
    })
  ],
  provider,
  webSocketProvider
});

export const WagmiProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
