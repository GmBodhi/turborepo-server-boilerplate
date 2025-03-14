import type { Application } from "@repo/core/types";
import { RoutesHandler } from "@repo/core/handlers";
import Turtle from "./turtle.routes";

export default class Routes {
  constructor(app: Application) {
    new RoutesHandler({
      app,
      routes: [
        {
          prefix: "/v1/turtle",
          handlerClass: Turtle,
        },
      ],
    });
  }
}
