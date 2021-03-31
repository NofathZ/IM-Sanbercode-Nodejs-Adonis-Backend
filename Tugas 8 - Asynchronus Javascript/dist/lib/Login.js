"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var Login = /*#__PURE__*/function () {
  function Login(userData) {
    _classCallCheck(this, Login);

    this.checkIsLogin(userData);
  }

  _createClass(Login, [{
    key: "checkIsLogin",
    value: function () {
      var _checkIsLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userData) {
        var isLogin, datas;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isLogin = false;
                _context.next = 3;
                return this.getDataUsers();

              case 3:
                datas = _context.sent;
                datas.forEach(function (data, index) {
                  if (data.name == userData[0] && data.password == userData[1]) {
                    datas[index].isLogin = true;
                  }
                });

                if (fs.existsSync(__dirname + '/../data.json')) {
                  fs.unlinkSync(__dirname + '/../data.json');
                }

                _context.next = 8;
                return fs.promises.writeFile('data.json', JSON.stringify(datas));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkIsLogin(_x) {
        return _checkIsLogin.apply(this, arguments);
      }

      return checkIsLogin;
    }()
  }, {
    key: "getDataUsers",
    value: function () {
      var _getDataUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var dataJSON, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fs.promises.readFile(__dirname + '/../data.json', 'utf8');

              case 2:
                dataJSON = _context2.sent;
                data = JSON.parse(dataJSON);
                return _context2.abrupt("return", data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getDataUsers() {
        return _getDataUsers.apply(this, arguments);
      }

      return getDataUsers;
    }()
  }]);

  return Login;
}();

function loginUser(_x2) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dataUser) {
    var login;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new Login(dataUser);

          case 2:
            login = _context3.sent;

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loginUser.apply(this, arguments);
}

module.exports = loginUser;