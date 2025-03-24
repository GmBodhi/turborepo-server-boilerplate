import { Application, Request, Response, NextFunction, Router } from "express";
import { CorsOptions } from "cors";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

declare global {
  namespace Express {
    interface Request {
      isLoggedIn: boolean;
    }
  }
}

export { Application, Request, Response, NextFunction, Router };

export interface CustomRequest extends Request {
  isLoggedIn: boolean;
}

export interface CustomResponse extends Response {
  isLoggedIn: boolean;
}

export type RequestHandler<
  Params = ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs,
  Locals extends Record<string, unknown> = Record<string, unknown>,
> = (
  req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody>,
  next: NextFunction,
) => void | Promise<void>;

export type RequestMethod =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE";

export type ServerCoreEvents = {
  ping: [timestamp: number];
  listen: [url: string];
};

export interface ServerCoreOptions {
  port: number | string;
  cors: CorsOptions;
}

export interface RoutesHandlerOptionsRoute {
  handlerClass: Class;
  prefix: string;
}

export interface RoutesHandlerOptions {
  app: Application;
  routes: RoutesHandlerOptionsRoute[];
}

export type ResponseDTO = {
  code?: number;
  success?: boolean;
  message?: string;
  data?: unknown;
};
