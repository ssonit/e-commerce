import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routes from "./routes";
import { PORT } from "./utils/constants";
import connectdb from "./config/connectdb";

const app = express();

dotenv.config();

//init config
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cookieParser());

//Connect database
connectdb();

//Route
routes(app);

app
  .listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit();
  });
