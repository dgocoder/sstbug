/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sstbug",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    const worker = new sst.cloudflare.Worker("MyWorker", {
      handler: "src/index.ts",
      url: true,
    });

    return {
      api: worker.url,
    };
  },
});
