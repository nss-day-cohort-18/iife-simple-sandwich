"use strict";

var Sandwich = (function(originalSandwich){

	var toppingPrices = {
		whippedCream: 0.50,
		mayo: 0.25,
		captaincrunch: 0.10,
		bacon: 1.00
	};

	originalSandwich.getToppingPrice = function(topping){
		return toppingPrices[topping];
	};

	//rework the following - not the best.
	originalSandwich.setTopping = function(obj){
		console.log("obj", obj);
		toppingPrices[Object.keys(obj)] =  Object.values(obj)[0];
		console.log("show me the toppings", toppingPrices);
	};

	return originalSandwich;


})(Sandwich);