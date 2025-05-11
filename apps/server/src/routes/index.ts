import type { Application } from "@xjectro/express/core/types";
import { RoutesHandler } from "@xjectro/express/core/handlers";
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
