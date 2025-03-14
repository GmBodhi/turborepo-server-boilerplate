import type { Router } from "@repo/core/types";
import { validate } from "@repo/core/middleware";
import Controller from "../controllers/turtle";
import * as schema from "../utils/validation/index";

export default class Routes {
  controller = new Controller();
  constructor(router: Router) {
    router.get("/all", this.controller.all);
    router.get(
      "/create",
      validate(schema.create, "query"),
      this.controller.create,
    );
    router.get("/delete/:id", this.controller.delete);
  }
}
