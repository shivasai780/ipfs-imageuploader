"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sample = require("./build/Contract.json");
console.log(sample.interface);

var instance = new _web2.default.eth.Contract(JSON.parse(sample.interface), "0x3547F8dcD346f531be6D69A19dA1dA8cDaD8912E");
console.log(instance);
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3NhbXBsZTEuanMiXSwibmFtZXMiOlsid2ViMyIsInNhbXBsZSIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiaW50ZXJmYWNlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7Ozs7QUFDQSxJQUFNLFNBQVMsUUFBUSxBQUFSLEFBQWY7QUFDQSxRQUFRLEFBQVIsSUFBWSxPQUFPLEFBQW5COztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVyxPQUFPLEFBQWxCLEFBRGUsWUFFZixBQUZlLEFBQWpCO0FBSUEsUUFBUSxBQUFSLElBQVksQUFBWixBQUNBO2tCQUFlLEFBQWYiLCJmaWxlIjoic2FtcGxlMS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YS9Eb2N1bWVudHMvZXRoLWlwZnMxIn0=