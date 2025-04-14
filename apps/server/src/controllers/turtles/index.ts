import { wrapHandler } from "@repo/core/handlers";
import { createTurtle, deleteTurtle, getTurtles } from "@repo/db/services";
export default class Controller {
  index = wrapHandler(async () => {
    const turtles = await getTurtles();
    return { data: turtles, message: "Turtles successfully captured" };
  });
  create = wrapHandler(async (req) => {
    const turtle = await createTurtle({ name: req.query.name as string });
    return { data: turtle, message: "Turtle created successfully" };
  });
  delete = wrapHandler(async (req) => {
    await deleteTurtle(parseInt(req.query.id as string));
    return { message: "Turtle successfully deleted" };
  });
}
