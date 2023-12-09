import connectToDB from "./utils/database";
import config from "./configurations";
import express from "express";
import cors from "cors";
import { useAllAppRoutes } from "./utils/useAllAppRoutes";
import cookieParser from "cookie-parser";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import { authenticateSocketConnection } from "./middlewares/authentication";
import addSocketEventListeners from "./routes/socket-connection";

export const app = express();

app.use(cors(config.server.corsOptions));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cookieParser());

useAllAppRoutes(path.join(__dirname, "routes"));

connectToDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: config.server.corsOptions,
});
io.use(authenticateSocketConnection);
io.on("connection", addSocketEventListeners);

app.get("/", (_, res) => {
  res.send("Server Online!");
});

app.listen(config.server.port, async () => {
  console.log(`Server listening on port ${config.server.port}`);
});
