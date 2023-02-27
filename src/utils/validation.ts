import { ethers } from "ethers";
import {
  PhoneNumberRegex,
  UrlWithHTTPRegex,
  UrlWithoutHTTPRegex
} from "../constants/regex";

type SignupData = {
  phoneNumber: string;
  walletAddress: string;
};

type SocialData = {
  tweetUrl: string;
  walletAddress: string;
};

export const validateSignupData = (data: SignupData) => {
  const { phoneNumber, walletAddress } = data;

  // phone number validation
  if (!PhoneNumberRegex.test(phoneNumber)) return false;

  // wallet address validation
  if (!ethers.utils.isAddress(walletAddress)) return false;

  return true;
};

export const validateCode = (code: string) => {
  // code validation
  const codeRegex = new RegExp(/^[a-zA-Z0-9]{4}$/);

  return codeRegex.test(code);
};

export const validateSocialData = (data: SocialData) => {
  const { tweetUrl, walletAddress } = data;

  // url validation
  if (!UrlWithHTTPRegex.test(tweetUrl) || !UrlWithoutHTTPRegex.test(tweetUrl))
    return false;

  // address validation
  if (!ethers.utils.isAddress(walletAddress)) return false;

  return true;
};
