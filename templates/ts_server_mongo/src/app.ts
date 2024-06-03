import express, { Application } from "express";
import routes from "./controllers";
import db from "./config/connection";
import cors from "cors";
import cookieParser from 'cookie-parser';

const app: Application = express();

console.log("Server starting...");
db.on("error", (error: any) => console.error(error));
db.once("open", () => console.log("Connected to db"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.use(cookieParser());

app.use(routes);

export default app;