import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!axios)"],
};

export default config;