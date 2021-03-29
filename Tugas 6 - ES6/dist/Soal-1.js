"use strict";

var sapa = function sapa(nama) {
  console.log("halo selamat pagi, ".concat(nama));
};

sapa(process.argv[2]);