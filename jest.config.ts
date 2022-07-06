import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
  collectCoverageFrom: [
    "**/*.ts",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/dist/**"
  ],
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  testResultsProcessor: "jest-sonar-reporter"
};
export default config;
