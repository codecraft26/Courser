import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});
const app = express();

// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
   
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
import user from "./routes/userRoutes.js";

app.use("/api/v1",user)


export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Server is running</h1>`
  )
);

app.use(ErrorMiddleware);
