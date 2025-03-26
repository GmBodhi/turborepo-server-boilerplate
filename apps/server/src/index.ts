import Routes from "./routes";
import Core, { express } from "@repo/core";

const core = new Core({ port: 3000, cors: { origin: "*" } });

core.app.use(express.static("../public"));

core.on("listen", (address) => {
  new Routes(core.app);
  console.log(`Server listening at ${address}`);
});
