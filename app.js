"use strict";
exports.__esModule = true;
var newLocal = "Pit";
var game;
game = "Basketball";
var a = 1;
var b = "Nik";
var c = true;
var e = {};
// void means it can be either undefined or null 
var g = undefined;
// anything
var h = "j";
// allow any type of array
var i = ["billy", 23];
var k = ["23"];
// arrow functions
var print = function (name, age, location) {
    console.log("".concat(name, " is a beast"));
};
var double = function (number) { return number * 2; };
print("panos", "28", "CT");
console.log(double(10));
// interfaces
var user = {
    name: "Panos",
    state: "CT",
    age: 31,
    city: "ATH"
};
var welcome = function (user) {
    console.log("Welcome ".concat(user.name, " to the city of ").concat(user.city));
};
welcome(user);
