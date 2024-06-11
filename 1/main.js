"use strict";
// In this list, the two entries that sum to 2020 are 1721 and 299. 
// Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
exports.__esModule = true;
var input = require("./start.json");
var data = input.data;
var goal = 2020;
// part 1
for (var index = 0; index < data.length; index++) {
    var temp = data.filter(function (num, i, arr) {
        var difference = goal - num;
        var answer = arr.find(function (a) { return a === difference; });
        if (answer) {
            console.log(num, answer, num * answer);
        }
    });
}
// answer is 1002 * 1018 = 1020036
// part 2
// In your expense report, what is the product of the three entries that sum to 2020?
for (var inner = 0; inner < data.length; inner++) {
    for (var middle = inner + 1; middle < data.length; middle++) {
        for (var outer = middle + 1; outer < data.length; outer++) {
            var dut = [
                data[inner],
                data[middle],
                data[outer],
            ];
            var sum = dut.reduce(function (p, acc) { return p + acc; });
            if (sum === goal) {
                console.log(dut, dut.reduce(function (p, a) { return p * a; }));
            }
        }
    }
}
// answer: [ 522, 855, 643 ] 286977330
