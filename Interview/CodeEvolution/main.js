// const http = require("node:http");
const https = require("node:https");
const MAX_CALLS = 12;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
