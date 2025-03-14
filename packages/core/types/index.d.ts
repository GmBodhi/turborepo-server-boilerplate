export {
  Request,
  Response,
  Application,
  NextFunction,
  Application,
  Router,
} from "express";
import { CorsOptions } from "cors";

export type RequestHandler<
  Params = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = ParsedQs,
  Locals = Record<string, any>,
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

export interface CustomRequest extends Request {}

export declare global {
  namespace Express {
    interface Request {}
  }
}

export type ServerCoreEvents = {
  ping: [number];
  listen: [string];
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
