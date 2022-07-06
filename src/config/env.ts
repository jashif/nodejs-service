import * as dotenv from "dotenv";
dotenv.config();

interface IEnvConfig {
  categoryExpiryTime: number;
  cia_id: string;
  rix_id: string;
  rix_base_url: string;
  port?: any;
}

export function envConfig() {
  const config: IEnvConfig = {
    cia_id: process.env.CIA_ID || "b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631",
    rix_id: process.env.RIX_CLIENT_ID || "758b071e-0de9-4f6d-9854-7248efad764c",
    rix_base_url:
      process.env.RIX_CLIENT_BASE_URL ||
      process.env.BASE_URL ||
      "https://api.ingka.ikea.com",
    port: process.env.PORT || 8080,
    categoryExpiryTime:
      parseInt(
        process.env.IKEA_ALL_CATEGORIES_CACHE_EXPIRY_TIME || "3600",
        10
      ) || 3600,
  };
  return config;
}
