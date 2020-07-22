const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");
const loc = path.resolve(__dirname, "build");
console.log(loc)
fs.removeSync(loc);
console.log(__dirname)
const sample = path.resolve(__dirname, "sample.sol");
const source = fs.readFileSync(sample, "utf-8");
const output = solc.compile(source, 1).contracts;
console.log(output)
fs.ensureDirSync(loc);
for (let contract in output) {
  const location = path.resolve(loc, contract.replace(":", "") + ".json");
  fs.outputJSONSync(location, output[contract]);
}