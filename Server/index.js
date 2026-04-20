const http = require("http");
const querystring = require("querystring");
const url = require("url");
const { Worker } = require("worker_threads");
const server = http.createServer( async(req, res) => {
  res.write("Your program is running");
  const query = url.parse(req.url).query;
  const n = Number(querystring.parse(query)["n"]);
  const sum = await findsum(n);
  res.end(`The sum is ${sum}`);
});
function findsum(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker/summation.js", { workerData: { n } });
    worker.on("message", (data) => {
      resolve(data);
    });
    worker.on("error", reject);
  });
}
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
