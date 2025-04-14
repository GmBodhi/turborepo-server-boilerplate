import express from "express";
import morgan from "morgan";
import * as http from "http";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Emitter } from "strict-event-emitter";
import { ServerCoreOptions, ServerCoreEvents } from "@repo/core/types";

class ServerCore extends Emitter<ServerCoreEvents> {
  app: ReturnType<typeof express> = express();
  server: http.Server;
  options: ServerCoreOptions;

  constructor(options: ServerCoreOptions) {
    super();
    this.server = http.createServer(this.app);
    this.options = options;

    if (process.env.NODE_ENV == "production") {
      this.app.set("trust proxy", 1);
    }

    this.app.use(morgan("dev"));
    this.app.use(cors(options.cors));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      session({
        secret: process.env.SESSION_SECRET! || "session_secret",
        resave: false,
        saveUninitialized: false,
      }),
    );

    this.app.listen(options.port, () => {
      this.emit("listen", `http://localhost:${options.port}`);
    });
  }
}

export default ServerCore;
export { ServerCore, express };
