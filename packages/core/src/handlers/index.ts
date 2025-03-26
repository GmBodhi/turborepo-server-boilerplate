import { Router, Request, Response } from "express";
import { RoutesHandlerOptions, ResponseDTO } from "@repo/core/types";
import { response, exceptionResponse } from "@repo/core/response";

export const handleAsync = <T extends ResponseDTO>(
  fn: (req: Request, res: Response) => Promise<T>,
) => {
  return async (req: Request, res: Response) => {
    try {
      const fnResponse = await fn(req, res);

      if (fnResponse.success === undefined) {
        fnResponse.success = true;
      }

      response(res, fnResponse);
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
