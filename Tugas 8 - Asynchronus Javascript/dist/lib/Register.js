"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var Register = /*#__PURE__*/function () {
  function Register(dataUser) {
    _classCallCheck(this, Register);

    this.addDataUser(dataUser);
  }

  _createClass(Register, [{
    key: "addDataUser",
    value: function () {
      var _addDataUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dataUser) {
        var data, objectUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getDataUsers();

              case 2:
                data = _context.sent;
                objectUser = {
                  name: dataUser[0],
                  password: dataUser[1],
                  role: dataUser[2],
                  isLogin: false
                };
                data.push(objectUser);

                if (fs.existsSync(__dirname + '/../../data.json')) {
                  fs.unlinkSync(__dirname + '/../../data.json');
                }

                _context.next = 8;
                return fs.promises.writeFile('data.json', JSON.stringify(data));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addDataUser(_x) {
        return _addDataUser.apply(this, arguments);
      }

      return addDataUser;
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
                if (!fs.existsSync(__dirname + '/../data.json')) {
                  fs.promises.writeFile('data.json', JSON.stringify([]));
                }

                _context2.next = 3;
                return fs.promises.readFile(__dirname + '/../../data.json', 'utf8');

              case 3:
                dataJSON = _context2.sent;
                data = JSON.parse(dataJSON);
                return _context2.abrupt("return", data);

              case 6:
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

  return Register;
}();

function addUser(dataUser) {
  var addNew = new Register(dataUser);
}

module.exports = addUser;