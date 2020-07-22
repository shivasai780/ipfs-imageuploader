import web3 from "./web3";
const sample = require("./build/Contract.json");
console.log(sample.interface);

const instance = new web3.eth.Contract(
  JSON.parse(sample.interface),
  "0x3547F8dcD346f531be6D69A19dA1dA8cDaD8912E"
);
console.log(instance);
export default instance;
