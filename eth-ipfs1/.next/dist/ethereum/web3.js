"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== "undefined" && window.web3 !== "undefined") {
  //we are in the brower and metamask is running
  web3 = new _web2.default(window.ethereum);
  window.ethereum.enable();
} else {
  //we are on the server or the user is not running metamast
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/51223dfaae564927b29e609d0705fa12");
  web3 = new _web2.default(provider);
}
console.log(web3);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFJLFlBQUo7QUFDQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBckQsYUFBa0UsQUFDaEU7QUFDQTtTQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQWhCLEFBQVAsQUFDQTtTQUFPLEFBQVAsU0FBZ0IsQUFBaEIsQUFDRDtBQUpELE9BSU8sQUFDTDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2YsQUFEZSxBQUFqQixBQUdBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNEOztBQUNELFFBQVEsQUFBUixJQUFZLEFBQVosQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9ldGgtaXBmczEifQ==