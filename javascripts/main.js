"use strict";

console.log("Sandwich", Sandwich);

var sandwichCost = Sandwich.getSandwichPrice("pb&j");
console.log("sandwichCost", sandwichCost);

var toppingCost = Sandwich.getToppingPrice("captaincrunch");


var output = document.getElementById("sandwich");

output.innerHTML = `<h2>Your sandwich cost: $ ${(sandwichCost + toppingCost).toFixed(2)}</h2>`;

// var obj = {mustard: .50};
// Sandwich.setTopping(obj);