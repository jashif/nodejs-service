/* eslint-disable no-unused-vars */
import { envConfig } from "./config/env";
import initHelmet from "./middlewares/helmetHelper";
import express, { Express } from "express";
import cors from "cors";

import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";

import errorHandler from "./middlewares/errorHandler";
import path from "path";
import yaml from "yamljs";
import { RegisterRoutes } from "./routes/apiRoutes";
const swaggerDocument = yaml.load(path.join(__dirname, "/public/swagger.yaml"));

const app: Express = express();

const { port = 8080 } = envConfig();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "20MB" }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

initHelmet(app);
RegisterRoutes(app);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`service ${port} is ruuning`);
});
