import { EnvVariable } from "../types/env";

const getEnvVariable = (name: EnvVariable) => {
  const variable = process.env[name];
  if (!variable) throw new Error(`${name} is not defined`);
  return variable;
};

export const API_URL = getEnvVariable("VITE_API_URL");
export const EVENT_TS = getEnvVariable("VITE_EVENT_TS");
export const ALCHEMY_API_KEY = getEnvVariable("VITE_ALCHEMY_API_KEY");
export const WALLET_CONNECT_PROJECT_ID = getEnvVariable(
  "VITE_WALLET_CONNECT_PROJECT_ID"
);
