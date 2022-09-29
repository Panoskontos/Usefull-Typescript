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
// object
var user = {
    name: "Panos",
    state: "CT",
    age: 31,
    city: "ATH",
    job: "dev"
};
var welcome = function (user) {
    console.log("Welcome ".concat(user.name, " to the city of ").concat(user.city));
};
welcome(user);
// classes
var User = /** @class */ (function () {
    function User(name, state, age) {
        var _this = this;
        // Methods
        this.printStatus = function () {
            console.log("Hey ".concat(_this.name, " do you like ").concat(_this.state));
        };
        // when method is private it's accesible only inside class
        this.printName = function () {
            console.log(_this.name);
        };
        this.name = name;
        this.state = state;
        this.age = age;
        console.log("created new user " + this.name);
        this.printName();
    }
    return User;
}());
var user1 = new User("Marinos", "SKG", 24);
user1.printStatus();
var user2 = new User("Panos", "ATH", 26);
// if value is not private we can change it
user2.state = "NYC";
user2.printStatus();
