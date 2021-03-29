"use strict";

var data = [{
  name: "Ahmad",
  "class": "adonis"
}, {
  name: "Regi",
  "class": "laravel"
}, {
  name: "Bondra",
  "class": "adonis"
}, {
  name: "Iqbal",
  "class": "vuejs"
}, {
  name: "Putri",
  "class": "Laravel"
}];

var dataFilter = function dataFilter(dataMhs, className) {
  var hasilFilter = dataMhs.filter(function (data) {
    return data["class"].toLowerCase() == className.toLowerCase();
  });
  console.log(hasilFilter);
};

dataFilter(data, process.argv[2]);