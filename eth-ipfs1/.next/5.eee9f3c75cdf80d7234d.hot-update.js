webpackHotUpdate(5,{

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _web = __webpack_require__(587);

var _web2 = _interopRequireDefault(_web);

var _sample = __webpack_require__(964);

var _sample2 = _interopRequireDefault(_sample);

var _ipfs = __webpack_require__(966);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shiva/Documents/eth-ipfs1/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shiva/Documents/eth-ipfs1/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(385).Buffer, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lZWU5ZjNjNzVjZGY4MGQ3MjM0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDg1MWVkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IFNhbXBsZSBmcm9tIFwiLi4vZXRoZXJldW0vc2FtcGxlMVwiO1xuXG5pbXBvcnQgaXBmcyBmcm9tIFwiLi9pcGZzXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBidWZmZXI6IG51bGwsXG4gICAgICBpcGZzaGFzaDogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMuY2FwdHVyZUZpbGUgPSB0aGlzLmNhcHR1cmVGaWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICBjb25zdCBpcGZzaGFzaCA9IGF3YWl0IFNhbXBsZS5tZXRob2RzLmdldEhhc2goKS5jYWxsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlwZnNoYXNoIH0pO1xuICB9XG4gIGNhcHR1cmVGaWxlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImNhcHR1cmVGaWxlXCIpO1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBidWZmZXI6IEJ1ZmZlcihyZWFkZXIucmVzdWx0KSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVmZmVyXCIsIHRoaXMuc3RhdGUuYnVmZmVyKTtcbiAgICB9O1xuICB9XG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiT25zdWJtaXRcIik7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcbiAgICBpcGZzLmZpbGVzLmFkZCh0aGlzLnN0YXRlLmJ1ZmZlciwgYXN5bmMgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiaGlpXCIpO1xuICAgICAgYXdhaXQgU2FtcGxlLm1ldGhvZHMuc2VuZEhhc2gocmVzdWx0WzBdLmhhc2gpLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgZ2FzOiAxMDAwMDAwLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaGVyZVwiKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpcGZzaGFzaDogcmVzdWx0WzBdLmhhc2ggfSk7XG4gICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlwZnNoYXNoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGgxPllPVVIgSU1BR0U8L2gxPlxuICAgICAgICA8cD5UaGlzIGltYWdlIGlzIHN0b3JlZCBvbiBibG9ja2NoYWluIDwvcD5cbiAgICAgICAgPGgyPlNtYXJ0IENvbnRyYWN0IEV4YW1wbGU8L2gyPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly9nYXRld2F5LmlwZnMuaW8vaXBmcy8ke3RoaXMuc3RhdGUuaXBmc2hhc2h9YH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICA+PC9pbWc+XG4gICAgICAgIDxoMj5VcGxvYWQgaW1hZ2U8L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMuY2FwdHVyZUZpbGV9PjwvaW5wdXQ+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj48L2lucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQXlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTNCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBc0JBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==