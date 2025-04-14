import type { Application } from "@repo/core/types";
import { RoutesHandler } from "@repo/core/handlers";
import Turtles from "./turtles.routes";

export default class Routes {
  constructor(app: Application) {
    new RoutesHandler({
      app,
      routes: [
        {
          prefix: "/v1/turtles",
          handlerClass: Turtles,
        },
      ],
    });
  }
}
