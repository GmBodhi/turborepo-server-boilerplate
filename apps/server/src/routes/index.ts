import type { Application } from "@repo/core/types";
import { RoutesHandler } from "@repo/core/handlers";
import Test from "./test.routes";

export default class Routes {
  constructor(app: Application) {
    new RoutesHandler({
      app,
      routes: [
        {
          prefix: "/v1/test",
          handlerClass: Test,
        },
      ],
    });
  }
}
