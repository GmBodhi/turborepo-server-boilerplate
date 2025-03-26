import { handleAsync } from "@repo/core/handlers";

export default class Controller {
  test = handleAsync(async () => {
    return { data: { test: "message" } };
  });
}
