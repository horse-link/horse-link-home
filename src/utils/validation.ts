import { ethers } from "ethers";

type SignupData = {
  phoneNumber: string;
  walletAddress: string;
};

export const validateSignupData = (data: SignupData) => {
  const { phoneNumber, walletAddress } = data;

  // phone number validation
  const phoneRegex = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );
  if (!phoneRegex.test(phoneNumber)) return false;

  // wallet address validation
  if (!ethers.utils.isAddress(walletAddress)) return false;

  return true;
};

export const validateCode = (code: string) => {
  // code validation
  const codeRegex = new RegExp(/^[a-zA-Z0-9]{4}$/);

  return codeRegex.test(code);
};
