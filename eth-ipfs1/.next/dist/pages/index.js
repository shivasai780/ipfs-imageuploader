"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _sample = require("../ethereum/sample1");

var _sample2 = _interopRequireDefault(_sample);

var _ipfs = require("./ipfs");

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shiva/Documents/eth-ipfs1/pages/index.js?entry";


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.onSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                console.log("Onsubmit");
                _context2.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context2.sent;

                console.log(accounts);
                _ipfs2.default.files.add(_this.state.buffer, function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, result) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!error) {
                              _context.next = 3;
                              break;
                            }

                            console.log(error);
                            return _context.abrupt("return");

                          case 3:
                            console.log("hii");
                            _context.next = 6;
                            return _sample2.default.methods.sendHash(result[0].hash).send({
                              from: accounts[0],
                              gas: 1000000
                            });

                          case 6:
                            console.log("I am here");
                            _this.setState({ ipfshash: result[0].hash });

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2);
                  }));

                  return function (_x2, _x3) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      buffer: null,
      ipfshash: null
    };
    _this.captureFile = _this.captureFile.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: "componentWillMount",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var accounts, ipfshash;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context3.sent;

                console.log(accounts);
                _context3.next = 6;
                return _sample2.default.methods.getHash().call();

              case 6:
                ipfshash = _context3.sent;

                this.setState({ ipfshash: ipfshash });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillMount() {
        return _ref3.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "captureFile",
    value: function captureFile(event) {
      var _this3 = this;

      event.preventDefault();
      console.log("captureFile");
      var file = event.target.files[0];
      var reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = function () {
        console.log(reader.result);
        _this3.setState({ buffer: Buffer(reader.result) });
        console.log("buffer", _this3.state.buffer);
      };
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.ipfshash);
      return _react2.default.createElement("div", { className: "App", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "YOUR IMAGE"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "This image is stored on blockchain "), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Smart Contract Example"), _react2.default.createElement("img", {
        src: "https://gateway.ipfs.io/ipfs/" + this.state.ipfshash,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Upload image"), _react2.default.createElement("form", { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("input", { type: "file", onChange: this.captureFile, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement("input", { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIlNhbXBsZSIsImlwZnMiLCJBcHAiLCJwcm9wcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZmlsZXMiLCJhZGQiLCJzdGF0ZSIsImJ1ZmZlciIsImVycm9yIiwicmVzdWx0IiwibWV0aG9kcyIsInNlbmRIYXNoIiwiaGFzaCIsInNlbmQiLCJmcm9tIiwiZ2FzIiwic2V0U3RhdGUiLCJpcGZzaGFzaCIsImNhcHR1cmVGaWxlIiwiYmluZCIsImdldEhhc2giLCJjYWxsIiwiZmlsZSIsInRhcmdldCIsInJlYWRlciIsIndpbmRvdyIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIm9ubG9hZGVuZCIsIkJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDsrQkFDSjs7ZUFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztnSUFBQSxBQUNYOztVQURXLEFBMkJuQix1QkEzQm1COzBGQTJCUixrQkFBQSxBQUFPLE9BQVA7WUFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRU47O3dCQUFBLEFBQVEsSUFIQyxBQUdULEFBQVk7aUNBSEg7dUJBSWMsY0FBQSxBQUFLLElBSm5CLEFBSWMsQUFBUzs7bUJBQTFCO0FBSkcscUNBS1Q7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7K0JBQUEsQUFBSyxNQUFMLEFBQVcsSUFBSSxNQUFBLEFBQUssTUFBcEIsQUFBMEIsb0JBQTFCO3VHQUFrQyxpQkFBQSxBQUFPLE9BQVAsQUFBYyxR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