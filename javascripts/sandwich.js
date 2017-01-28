"use strict";
console.log("hello sandwich");


var Sandwich = (function(){
	var prices = {
		"pb&j": 2.00,
		"cheese": 0.75
	};

	var sandwichName = ["apples", "meat", "potato"];

	return {
		getSandwichPrice: function(sandwhichname){
			return prices[sandwhichname];
		},
		getSandwichName: function(whichone){
			return sandwichName[whichone];
		}
	};


})();