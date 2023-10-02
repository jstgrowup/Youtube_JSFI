// const http = require("http");
// const fs = require("fs/promises");
// const server = http.createServer(async (req, res) => {
//   const contentBuffer = await fs.readFile(__dirname);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end(contentBuffer.toString("utf-8"));
// });
// server.listen(8000, () => {
//   console.log(`server has started`);
// });
// setInterval((err,res) => {

// }, 100);
// const EventEmitter = require("events");
// console.log("EventEmitter:", EventEmitter);
// class Emitter extends EventEmitter {}
// const myE = new Emitter();
// myE.on("foo", () => {
//   console.log("An event occured");
// });
// myE.emit("foo");
// const fs=require("fs")
// const content =fs.readFileSync("./text.txt")
// console.log(content.toString("utf-8"));
// const prom = (time) =>
//   new Promise((resolved, rejected) => {
//     if (time < 1000) {
//       rejected();
//     } else {
//       setTimeout(() => {
//         resolved("resolved");
//       }, time);
//     }
//   });
// let result = prom();
// result.then((res) => console.log("resolved")).catch((err) => console.log(err));
// console.log("result:", result);
// async function syncall() {
//   try {
//     let res = await prom(2000);
//     console.log('res:', res)

//   } catch (error) {
//     console.log(error);
//   }
// }

// let syncall = async () => {
//   try {
//     let res = await prom(2000);
//     console.log("res:", res);
//   } catch (error) {
//     console.log(error);
//   }
// };
// syncall();
//

const fs = require("fs/promises");
const uplaod = async () => {
  try {
    const watcher = fs.watch("./text.txt");
    for await (const event of watcher) {
      console.log("event:", event);
    }
    // await fs.copyFile("text.txt", "copied-promise.txt");
  } catch (error) {
    console.log("error:", error);
  }
};
 uplaod();

