import { SSTConfig } from "sst";
import { WebStack } from "./stacks/WebStack";

export default {
  config() {
    return {
      name: "chorobin.dev",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(WebStack);
  }
} satisfies SSTConfig;
