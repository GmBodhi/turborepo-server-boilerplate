import type { Router } from "@repo/core/types";
import { validate } from "@repo/core/middleware/validate";
import Controller from "../controllers/category";
import * as schema from "../utils/validation";

export default class Routes {
  controller = new Controller();
  constructor(router: Router) {
    router.get("/", validate(schema.example, "query"), this.controller.test);
  }
}
