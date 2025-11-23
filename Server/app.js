import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.json());
app.use(express.static("public"));

app.use(cookieParser());

//rotues
import Userrouter from "./src/routes/users.routes.js";

app.use("/api/v1/users",Userrouter)

export { app };
