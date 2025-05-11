import type { Router } from "@xjectro/express/core/types";
import { validate } from "@xjectro/express/core/middleware/validate";
import Controller from "../controllers/turtles";
import * as schema from "../utils/validation/turtles";

export default class Routes {
  controller = new Controller();
  constructor(router: Router) {
    router.get("/", this.controller.index);
    router.get(
      "/create",
      validate(schema.turtleCreate, "query"),
      this.controller.create,
    );
    router.get(
      "/delete",
      validate(schema.turtleDelete, "query"),
      this.controller.delete,
    );
  }
}
