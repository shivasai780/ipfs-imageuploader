import React, { Component } from "react";
import web3 from "../ethereum/web3";
import Sample from "../ethereum/sample1";

import ipfs from "./ipfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: null,
      ipfshash: null,
    };
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentWillMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const ipfshash = await Sample.methods.getHash().call();
    this.setState({ ipfshash });
  }
  captureFile(event) {
    event.preventDefault();
    console.log("captureFile");
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log(reader.result);
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
  }
  onSubmit = async (event) => {
    event.preventDefault();

    console.log("Onsubmit");
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    ipfs.files.add(this.state.buffer, async (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("hii");
      await Sample.methods.sendHash(result[0].hash).send({
        from: accounts[0],
        gas: 1000000,
      });
      console.log("I am here");
      this.setState({ ipfshash: result[0].hash });
    });
  };
  render() {
    console.log(this.state.ipfshash);
    return (
      <div className="App">
        <h1>YOUR IMAGE</h1>
        <p>This image is stored on blockchain </p>
        <h2>Smart Contract Example</h2>
        <img
          src={`https://gateway.ipfs.io/ipfs/${this.state.ipfshash}`}
          alt=""
        ></img>
        <h2>Upload image</h2>
        <form onSubmit={this.onSubmit}>
          <input type="file" onChange={this.captureFile}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
export default App;
