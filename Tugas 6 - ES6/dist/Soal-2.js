"use strict";

var convertToObj = function convertToObj(userData) {
  console.log(userData);
};

var nama = process.argv[2];
var domisili = process.argv[3];
var umur = process.argv[4];
var data = {
  nama: nama,
  domisili: domisili,
  umur: umur
};
convertToObj(data);