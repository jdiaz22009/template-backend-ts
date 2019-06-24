import express from "express";
import morgan from "morgan";
import { urlencoded, json } from "body-parser";
import { routes } from "./routes/routes";
import cors from "cors";

//? initialize
const app = express();

//? middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

//? routes
app.use("/api", routes);

export default app;
