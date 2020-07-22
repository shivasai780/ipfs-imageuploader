const HDwalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./build/Contract.json");
const provider = new HDwalletProvider(
  "urge firm village vintage clap farm guilt category bracket chef thank machine",
  " https://rinkeby.infura.io/v3/51223dfaae564927b29e609d0705fa12"
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode })
    .send({ from: accounts[0], gas: 3000000 });
  console.log(result.options.address);
};
deploy();
//0x0f92B6D8e638F322324b5198D890b822Db593053
//0x3547F8dcD346f531be6D69A19dA1dA8cDaD8912E
