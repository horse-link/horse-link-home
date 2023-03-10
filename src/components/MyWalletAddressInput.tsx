import React, { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { MetaMaskIcon, WalletConnectIcon } from "../icons";

type Props = {
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (address: string) => void;
};

export const MyWalletAddressInput: React.FC<Props> = ({
  type = "text",
  placeholder,
  value,
  onChange
}) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  useEffect(() => {
    if (!isConnected || !address) return;

    onChange(address);
  }, [address, isConnected]);
  return (
    <div className="flex divide-x rounded-md border-b-[0.12rem] border-black bg-white px-3 py-2 transition-colors duration-100 focus-within:border-white focus-within:outline focus-within:outline-[2px] focus-within:-outline-offset-[3px] disabled:text-black/50">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex-grow focus:outline-none "
      />
      <div className="flex items-center justify-evenly gap-3 pl-3">
        <div
          className="cursor-pointer"
          onClick={e => {
            e.preventDefault();
            connect({ connector: connectors[0] });
          }}
        >
          <MetaMaskIcon
            title="meta-mask-icon"
            className="h-6 w-6 opacity-100 transition-opacity duration-500 ease-out hover:opacity-40"
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={e => {
            e.preventDefault();
            connect({ connector: connectors[1] });
          }}
        >
          <WalletConnectIcon
            title="wallet-connect-icon"
            className="h-6 w-6 opacity-100 transition-opacity duration-500 ease-out hover:opacity-40"
          />
        </div>
      </div>
    </div>
  );
};
