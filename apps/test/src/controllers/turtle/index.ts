import { handleAsync } from "@repo/core/handlers";
import type { Request, Response } from "@repo/core/types";
import { createTurtle, deleteTurtle, getTurtles } from "@repo/db/services";

export default class Controller {
  create = handleAsync(async (req: Request) => {
    return await createTurtle(req.query.name as string);
  });
  delete = handleAsync(async (req: Request) => {
    return await deleteTurtle(req.params.id!);
  });
  all = handleAsync(async () => {
    return await getTurtles();
  });
}
