import { Router, Request, Response } from "express";
import { RoutesHandlerOptions } from "../types";
import { response, exceptionResponse } from "../response";

export const handleAsync = (fn: Function) => {
  return async (req: Request, res: Response) => {
    try {
      const data = await fn(req, res);
      response(res, { success: true, data });
    } catch (err) {
      exceptionResponse(res, err);
    }
  };
};

export class RoutesHandler {
  options: RoutesHandlerOptions;
  constructor(options: RoutesHandlerOptions) {
    this.options = options;

    for (const route of options.routes) {
      const router = Router();
      this.options.app.use(route.prefix, router);

      new route.handlerClass(router);
    }
  }
}
